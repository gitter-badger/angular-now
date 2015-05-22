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
