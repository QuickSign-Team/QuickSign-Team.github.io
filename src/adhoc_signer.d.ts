export interface AdhocSignerModule {
    _malloc(size: number): number;
    _free(pointer: number): void;
    _sign_macho_wasm_adhoc(inputPointer: number, inputLength: number, identifierPointer: number, outputLengthPointer: number): number;
    _sign_macho_wasm_cert(inputPointer: number, inputLength: number, identifierPointer: number, p12Pointer: number, p12Length: number, passwordPointer: number, teamIDPointer: number, entitlementsPointer: number, entitlementsLength: number, outputLengthPointer: number): number;
    readonly HEAPU8: Uint8Array;
    readonly HEAPU32: Uint32Array;
}

type AdhocSignerOptions = {
    locateFile?: (path: string, scriptDirectory: string) => string;
    print?: (message: string) => void;
    printErr?: (message: string) => void;
    onAbort?: (reason: unknown) => void;
};

declare function createSignerModule(options?: AdhocSignerOptions): Promise<AdhocSignerModule>;
export default createSignerModule;
