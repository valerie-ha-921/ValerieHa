/**
 * Prefixes a root-relative path with the site's base path (import.meta.env.BASE_URL),
 * so links and asset references keep working when the site is deployed under a
 * subpath, e.g. https://valerie-ha-921.github.io/ValerieHa/.
 *
 * Usage: withBase("/about") -> "/ValerieHa/about"
 */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL ?? "/";
  const cleanBase = base.endsWith("/") ? base.slice(0, -1) : base;
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${cleanBase}${cleanPath}`;
}
