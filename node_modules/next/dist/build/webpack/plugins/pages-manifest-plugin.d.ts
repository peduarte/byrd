import { Compiler, Plugin } from 'webpack';
export declare type PagesManifest = {
    [page: string]: string;
};
export default class PagesManifestPlugin implements Plugin {
    serverless: boolean;
    constructor(serverless: boolean);
    apply(compiler: Compiler): void;
}
