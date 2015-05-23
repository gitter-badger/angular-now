/// <reference path="node_modules/reflect-metadata/reflect-metadata.d.ts" />
require("reflect-metadata");
var angular;
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
var AngularNowModule = (function () {
    function AngularNowModule(name, dependencies) {
        this.name = name;
        this.dependencies = dependencies;
    }
    AngularNowModule.prototype.component = function (comp) {
        var component = new AngularNowComponent(comp);
        angular.module(this.name, this.dependencies).controller(component.name, component.bootstrap());
    };
    return AngularNowModule;
})();
var AngularNowComponent = (function () {
    function AngularNowComponent(component) {
        this.component = component;
        this.componentOptions = Reflect.getMetadata("Component", component.constructor);
        this.viewOptions = Reflect.getMetadata("View", component.constructor);
        this.name = component.constructor['name'];
    }
    AngularNowComponent.prototype.bootstrap = function () {
    };
    return AngularNowComponent;
})();
var angularNow;
(function (angularNow) {
    function module(name, dependencies) {
        return new AngularNowModule(name, dependencies);
    }
    angularNow.module = module;
})(angularNow = exports.angularNow || (exports.angularNow = {}));
