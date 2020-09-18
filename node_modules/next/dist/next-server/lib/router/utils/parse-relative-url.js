"use strict";exports.__esModule=true;exports.parseRelativeUrl=parseRelativeUrl;const DUMMY_BASE=new URL('http://n');/**
 * Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
 * (e.g. `./hello`) then at least base must be.
 * Absolute urls are rejected.
 */function parseRelativeUrl(url,base){const resolvedBase=base?new URL(base,DUMMY_BASE):DUMMY_BASE;const{pathname,searchParams,search,hash,href,origin}=new URL(url,resolvedBase);if(origin!==DUMMY_BASE.origin){throw new Error('invariant: invalid relative URL');}return{pathname,searchParams,search,hash,href:href.slice(DUMMY_BASE.origin.length)};}
//# sourceMappingURL=parse-relative-url.js.map