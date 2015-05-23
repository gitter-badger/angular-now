/// <reference path="node_modules/reflect-metadata/reflect-metadata.d.ts" />

import "reflect-metadata";

var angular: any;
interface IComponentOptions {
	selector:string;
}
export function Component(options:IComponentOptions){
	return function(target: Function){
		Reflect.defineMetadata("Component", options, target);
	}
}

interface IViewOptions {
	template?: string;
	templateUrl?: string;
}
export function View(options:IViewOptions){
	return function(target: Function){
		Reflect.defineMetadata("View", options, target);
	}
}

class AngularNowModule {
	constructor(private name: string, private dependencies: string[]){}
	
	public component(comp: Function){
		var component = new AngularNowComponent(comp);
		angular.module(this.name, this.dependencies).controller(component.name, component.bootstrap())
	}
}

class AngularNowComponent {
	public name: string;
	public componentOptions: IComponentOptions;
	public viewOptions: IViewOptions;
	constructor(private component: Function){
		this.componentOptions = Reflect.getMetadata("Component", component.constructor);
		this.viewOptions = Reflect.getMetadata("View", component.constructor);
		this.name = component.constructor['name'];
	}
	
	public bootstrap(){
		
	}
}

export module angularNow {
	export function module(name:string, dependencies: string[]){
		return new AngularNowModule(name, dependencies);
	}
}