import { test } from "node:test";
import assert from "node:assert/strict";
import { recordCellOverlap } from "../src/integrations/cell-overlap.ts";

test("same-cell D3 writes from Avery and Jordan conflict", () => {
  const store = { writes: new Map() };
  const avery = recordCellOverlap(store, {
    unitId: "unit_welcome_sheet",
    userID: "user_admin",
    a1s: ["D3"],
    now: 1_000
  });
  assert.equal(avery.conflict, false);
  const jordan = recordCellOverlap(store, {
    unitId: "unit_welcome_sheet",
    userID: "user_jordan",
    a1s: ["D3"],
    now: 1_400
  });
  assert.equal(jordan.conflict, true);
  assert.deepEqual(jordan.peers, ["user_admin"]);
});

test("D4 after name box advances still conflicts on remembered D3", () => {
  const store = { writes: new Map() };
  recordCellOverlap(store, {
    unitId: "unit_welcome_sheet",
    userID: "user_admin",
    a1s: ["D3", "D4"],
    now: 1_000
  });
  const jordan = recordCellOverlap(store, {
    unitId: "unit_welcome_sheet",
    userID: "user_jordan",
    a1s: ["D3"],
    now: 1_800
  });
  assert.equal(jordan.conflict, true);
});

test("POST /universer-api/cell-overlap reports Avery/Jordan D3 overlap", async () => {
  const { handleUniverserHttp } = await import("../src/integrations/univer-collab-http.ts");
  const averyHost = {
    identity: { userID: "user_admin", name: "Avery Chen", avatar: "" }
  };
  const jordanHost = {
    identity: { userID: "user_jordan", name: "Jordan Lee", avatar: "" }
  };
  const post = (host: typeof averyHost, a1s: string[]) =>
    handleUniverserHttp(
      new Request("https://univer-workspace.apisos.workers.dev/universer-api/cell-overlap", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ unitId: "unit_overlap_identity", a1s })
      }),
      host
    );
  const first = await (await post(averyHost, ["D3"]))!.json();
  assert.equal(first.conflict, false);
  const second = await (await post(jordanHost, ["D3"]))!.json();
  assert.equal(second.conflict, true);
  assert.deepEqual(second.peers, ["user_admin"]);
});

test("POST /universer-api/cell-overlap uses body userID when both sessions look like admin", async () => {
  const { handleUniverserHttp } = await import("../src/integrations/univer-collab-http.ts");
  const defaultHost = {
    identity: { userID: "user_admin", name: "Administrator", avatar: "" }
  };
  const post = (userID: string, a1s: string[]) =>
    handleUniverserHttp(
      new Request("https://univer-workspace.apisos.workers.dev/universer-api/cell-overlap", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ unitId: "unit_overlap_body_userid", a1s, userID })
      }),
      defaultHost
    );
  const first = await (await post("user_admin", ["D3"]))!.json();
  assert.equal(first.conflict, false);
  const second = await (await post("user_jordan", ["D3"]))!.json();
  assert.equal(second.conflict, true);
  assert.deepEqual(second.peers, ["user_admin"]);
});
