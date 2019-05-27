export declare function expectError(error?: string | RegExp | {
    new (): Error;
}): (target: any, key: string, descriptor: PropertyDescriptor) => {
    value(): Promise<void>;
};
