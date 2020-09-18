import { Compiler } from 'webpack';
export declare class FontStylesheetGatheringPlugin {
    compiler?: Compiler;
    gatheredStylesheets: Array<string>;
    private parserHandler;
    apply(compiler: Compiler): void;
}
