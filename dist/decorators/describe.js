"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const describeDecorator = (message) => {
    return function (target, key, descriptor) {
        return {
            value() {
                const name = lodash_1.toLower(lodash_1.startCase(Object.getPrototypeOf(this).constructor.name));
                describe(message || name, () => descriptor.value.apply(this));
            }
        };
    };
};
exports.describe = describeDecorator;
//# sourceMappingURL=describe.js.map