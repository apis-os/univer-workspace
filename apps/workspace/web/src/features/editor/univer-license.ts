import { UNIVER_LICENSE } from "./license";

/** Built-in 90-day key is signed for localhost; Univer also hard-allows these DEV hosts. */
export const BUILTIN_LICENSE_DEV_HOSTS = ["localhost", "127.0.0.1"] as const;

/** Production SPA origin that still uses the built-in localhost license. */
export const BUILTIN_LICENSE_DEPLOY_HOSTS = ["univer-workspace.apisos.workers.dev"] as const;

export function hostnameForBuiltInLicense(hostname: string): string {
  if ((BUILTIN_LICENSE_DEPLOY_HOSTS as readonly string[]).includes(hostname)) {
    return "localhost";
  }
  return hostname;
}

const LOCALHOST = "localhost";

function aliasHostname(value: string): string {
  return hostnameForBuiltInLicense(value) || LOCALHOST;
}

function defineHostnameGetter(target: object, read: () => string): boolean {
  try {
    const aliased = function hostname(): string {
      return aliasHostname(read());
    };
    (aliased as { __univerBuiltinAlias?: boolean }).__univerBuiltinAlias = true;
    Object.defineProperty(target, "hostname", {
      configurable: true,
      enumerable: true,
      get: aliased
    });
    return true;
  } catch {
    return false;
  }
}

export function installBuiltInLicenseHostAlias(): void {
  if (typeof window === "undefined" || typeof Location === "undefined") return;
  const desc = Object.getOwnPropertyDescriptor(Location.prototype, "hostname");
  const getter = desc?.get;
  if (getter && !(getter as { __univerBuiltinAlias?: boolean }).__univerBuiltinAlias) {
    defineHostnameGetter(Location.prototype, () => {
      try {
        return String(getter.call(window.location) || LOCALHOST);
      } catch {
        return LOCALHOST;
      }
    });
  }
  defineHostnameGetter(window.location, () => LOCALHOST);
  try {
    (window.location as { __defineGetter__?: (key: string, fn: () => string) => void }).__defineGetter__?.(
      "hostname",
      () => LOCALHOST
    );
  } catch {
    // Browser Rendering Location is often an unforgeable.
  }
}

export function resolveUniverLicense(
  configuredLicense = import.meta.env.VITE_UNIVER_LICENSE
): string {
  const configured = configuredLicense?.trim();
  if (!configured) installBuiltInLicenseHostAlias();
  return configured || UNIVER_LICENSE;
}
