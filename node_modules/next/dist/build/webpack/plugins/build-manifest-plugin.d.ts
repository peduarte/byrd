import { Compiler } from 'webpack';
export default class BuildManifestPlugin {
    private buildId;
    private modern;
    constructor(options: {
        buildId: string;
        modern: boolean;
    });
    apply(compiler: Compiler): void;
}
