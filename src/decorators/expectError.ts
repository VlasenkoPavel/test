export function expectError(error?: string | RegExp | { new (): Error }) {
    return function (target: any, key: string, descriptor: PropertyDescriptor) {
        return {
            async value () {
                const fail = async () => await descriptor.value();
                await expect(fail()).rejects.toThrowError(error);
            }
        };
    };
}
