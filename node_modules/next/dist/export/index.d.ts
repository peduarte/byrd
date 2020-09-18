interface ExportOptions {
    outdir: string;
    silent?: boolean;
    threads?: number;
    pages?: string[];
    buildExport?: boolean;
}
export default function exportApp(dir: string, options: ExportOptions, configuration?: any): Promise<void>;
export {};
