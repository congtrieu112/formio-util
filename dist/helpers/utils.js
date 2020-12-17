"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilImpl = void 0;
var UtilImpl = /** @class */ (function () {
    function UtilImpl() {
    }
    UtilImpl.prototype.formatString = function (value, variables) {
        if (!value) {
            return '';
        }
        return value.replace(/(\{\w+\})|(:\w+)/g, function (match) {
            return variables[match.replace(/\{|\}|:/g, '')] || '';
        });
    };
    return UtilImpl;
}());
exports.UtilImpl = UtilImpl;
//# sourceMappingURL=utils.js.map