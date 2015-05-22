/// <reference path="node_modules/reflect-metadata/reflect-metadata.d.ts" />
require("reflect-metadata");
function Component(options) {
    return function (target) {
        Reflect.defineMetadata("Component", options, target);
    };
}
exports.Component = Component;
function View(options) {
    return function (target) {
        Reflect.defineMetadata("View", options, target);
    };
}
exports.View = View;
var angularNow;
(function (angularNow) {
    function module(name, dependencies) {
    }
    angularNow.module = module;
})(angularNow = exports.angularNow || (exports.angularNow = {}));
