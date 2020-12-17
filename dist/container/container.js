"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var helpers_1 = require("../helpers");
var container = new inversify_1.Container();
container.bind('util').to(helpers_1.UtilImpl);
exports.default = container;
//# sourceMappingURL=container.js.map