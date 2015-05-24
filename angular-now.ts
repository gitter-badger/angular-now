/// <reference path="node_modules/reflect-metadata/reflect-metadata.d.ts" />

//import "node_modules/reflect-metadata/Reflect";
import "bower_components/angular/angular";

//var angular: any = angular || {};
declare var angular;
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
		console.log(component);
		console.log(this.name);
		console.log(this.dependencies);
		console.log(angular);
		angular.module(this.name, this.dependencies).directive(component.name, component.bootstrap())
	}
}

class AngularNowComponent {
	public name: string;
	public componentOptions: IComponentOptions;
	public viewOptions: IViewOptions;
	constructor(private component: Function){
		this.componentOptions = Reflect.getMetadata("Component", component);
		this.viewOptions = Reflect.getMetadata("View", component);
		this.name = (''+component).split('function ')[1].split('(')[0];
	}
	
	public bootstrap(){
		
	}
}

export module angularNow {
	export function module(name:string, dependencies?: string[]){
		return new AngularNowModule(name, dependencies);
	}
}