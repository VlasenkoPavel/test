"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const testDecorator = (message) => function (target, key) {
    if (!target['tests']) {
        target['tests'] = new Map();
    }
    const description = message || lodash_1.toLower(lodash_1.startCase(key));
    target['tests'].set(key, description);
};
exports.test = testDecorator;
//# sourceMappingURL=testDecorator.js.map