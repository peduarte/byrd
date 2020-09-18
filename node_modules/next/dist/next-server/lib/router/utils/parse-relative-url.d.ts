/**
 * Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
 * (e.g. `./hello`) then at least base must be.
 * Absolute urls are rejected.
 */
export declare function parseRelativeUrl(url: string, base?: string): {
    pathname: string;
    searchParams: URLSearchParams;
    search: string;
    hash: string;
    href: string;
};
