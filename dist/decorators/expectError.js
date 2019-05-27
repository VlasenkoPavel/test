"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function expectError(error) {
    return function (target, key, descriptor) {
        return {
            async value() {
                const fail = async () => await descriptor.value();
                await expect(fail()).rejects.toThrowError(error);
            }
        };
    };
}
exports.expectError = expectError;
//# sourceMappingURL=expectError.js.map