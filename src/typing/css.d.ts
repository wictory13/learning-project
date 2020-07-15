declare module "*.less" {
    export declare const styles: { [className: string]: string } & ((
        ...args: Array<string, string[], { [name: string]: boolean }>
    ) => string);
}
