import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Plus } from "lucide-react";
import { useId, useMemo, useState } from "react";
import { api } from "../../shared/api/client";
import { apiError } from "../../shared/api/errors";
import { createIdempotencyKey } from "../../shared/idempotency-key";
import { useI18n } from "../../shared/i18n";
import {
  Button,
  Dialog,
  DialogClose,
  Field,
  Input,
  Select,
  toast,
} from "../../shared/ui";
import { ownedByMeQueryOptions } from "../views";
import { worktreesQueryKey } from "./worktrees.queries";

export interface CreatedWorktreeSelection {
  readonly worktreeId: string;
  readonly unitId?: string;
}

export function CreateWorktreeControl({
  mode,
  worktreeId,
  disabled,
  onCreated,
}: {
  readonly mode: "create" | "addUnit";
  readonly worktreeId?: string;
  readonly disabled?: boolean;
  readonly onCreated?: (selection: CreatedWorktreeSelection) => void;
}) {
  const { t } = useI18n();
  const queryClient = useQueryClient();
  const nameInputId = useId();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [resourceId, setResourceId] = useState("");
  const [error, setError] = useState<string>();
  const owned = useQuery(ownedByMeQueryOptions);
  const documents = useMemo(
    () =>
      (owned.data?.items ?? []).flatMap((item) =>
        item.resource.kind === "univer"
          ? [
              {
                id: item.resource.id,
                name: item.node.name,
              },
            ]
          : []
      ),
    [owned.data?.items]
  );

  const submit = useMutation({
    mutationFn: async () => {
      const trimmed = name.trim();
      if (mode === "create" && !trimmed) {
        throw new Error(t("enterTaskName"));
      }
      const targetWorktreeId =
        mode === "addUnit"
          ? worktreeId
          : await createDraftWorktree(trimmed);
      if (!targetWorktreeId) {
        throw new Error(t("taskCreationFailed"));
      }
      if (!resourceId) {
        return { worktreeId: targetWorktreeId };
      }
      const added = await addTrunkUnit(targetWorktreeId, resourceId);
      return {
        worktreeId: targetWorktreeId,
        ...(added.unitId === undefined ? {} : { unitId: added.unitId }),
      };
    },
    onSuccess: async (selection) => {
      setOpen(false);
      setName("");
      setResourceId("");
      toast.success(
        mode === "create" ? t("taskCreated") : t("documentAddedToTask")
      );
      onCreated?.(selection);
      await queryClient.invalidateQueries({ queryKey: worktreesQueryKey });
    },
    onError: (mutationError) => {
      const message =
        mutationError instanceof Error
          ? mutationError.message
          : t("taskCreationFailed");
      setError(message);
      toast.error(message);
    },
  });

  const documentOptions = [
    { value: "", label: t("selectDocument") },
    ...documents.map((document) => ({
      value: document.id,
      label: document.name,
    })),
  ];

  return (
    <>
      <Button
        size="sm"
        variant={mode === "create" ? "primary" : "secondary"}
        disabled={disabled}
        onClick={() => {
          setError(undefined);
          setName(mode === "create" ? t("createTask") : "");
          setResourceId(documents[0]?.id ?? "");
          setOpen(true);
        }}
      >
        <Plus />
        {mode === "create" ? t("createTask") : t("addDocument")}
      </Button>
      <Dialog
        open={open}
        onOpenChange={(next) => {
          if (!next) setOpen(false);
        }}
        title={mode === "create" ? t("createTask") : t("addDocument")}
        description={
          mode === "create"
            ? t("createTaskDescription")
            : t("addDocumentDescription")
        }
        footer={
          <>
            <DialogClose
              render={<Button variant="secondary">{t("cancel")}</Button>}
            />
            <Button
              onClick={() => submit.mutate()}
              disabled={submit.isPending}
            >
              {mode === "create" ? t("create") : t("addDocument")}
            </Button>
          </>
        }
      >
        <form
          className="grid gap-4"
          onSubmit={(event) => {
            event.preventDefault();
            submit.mutate();
          }}
        >
          {mode === "create" ? (
            <Field label={t("taskName")} htmlFor={nameInputId} error={error}>
              <Input
                id={nameInputId}
                autoFocus
                maxLength={255}
                value={name}
                invalid={Boolean(error)}
                onChange={(event) => {
                  setError(undefined);
                  setName(event.target.value);
                }}
              />
            </Field>
          ) : null}
          <Field
            label={t("cloneDocument")}
            hint={
              documents.length === 0 ? t("noDocumentsToClone") : undefined
            }
          >
            <Select
              aria-label={t("cloneDocument")}
              value={resourceId}
              onValueChange={setResourceId}
              options={documentOptions}
              disabled={documents.length === 0}
            />
          </Field>
        </form>
      </Dialog>
    </>
  );
}

async function createDraftWorktree(name: string): Promise<string> {
  const { data, error } = await api.POST("/api/worktrees", {
    params: {
      header: {
        "Idempotency-Key": createIdempotencyKey(),
      },
    },
    body: {
      kind: "user",
      name,
      summary: null,
    },
  });
  if (error) throw apiError(error);
  if (!data || !("id" in data) || typeof data.id !== "string") {
    throw apiError({ error: { message: "Worktree response is missing id." } });
  }
  return data.id;
}

async function addTrunkUnit(
  worktreeId: string,
  resourceId: string
): Promise<{ unitId?: string }> {
  const { data, error } = await api.POST(
    "/api/worktrees/{worktreeId}/units",
    {
      params: {
        path: { worktreeId },
        header: {
          "Idempotency-Key": createIdempotencyKey(),
        },
      },
      body: {
        source: "trunk",
        resourceId,
      },
    }
  );
  if (error) throw apiError(error);
  if (data && "unit" in data && data.unit && typeof data.unit.unitId === "string") {
    return { unitId: data.unit.unitId };
  }
  return {};
}
