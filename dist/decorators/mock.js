"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mock() {
    return (constructor) => {
        const data = new Map();
        constructor.prototype.get = async function (id) {
            return data.get(id);
        };
        constructor.prototype.save = async function (entity) {
            data.set(entity.id, entity);
        };
        constructor.prototype.delete = async function (id) {
            data.delete(id);
        };
    };
}
exports.mock = mock;
//# sourceMappingURL=mock.js.map