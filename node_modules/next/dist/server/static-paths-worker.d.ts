import '../next-server/server/node-polyfill-fetch';
export declare function loadStaticPaths(distDir: string, pathname: string, serverless: boolean): Promise<{
    paths: string[];
    fallback: boolean;
}>;
