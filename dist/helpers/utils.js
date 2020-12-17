"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilImpl = void 0;
require("reflect-metadata");
var inversify_1 = require("inversify");
require("reflect-metadata");
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
    UtilImpl = __decorate([
        inversify_1.injectable()
    ], UtilImpl);
    return UtilImpl;
}());
exports.UtilImpl = UtilImpl;
//# sourceMappingURL=utils.js.map