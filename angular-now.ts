/// <reference path="node_modules/reflect-metadata/reflect-metadata.d.ts" />

import "reflect-metadata";

export function Component(options:any){
	return function(target: Function){
		Reflect.defineMetadata("Component", options, target);
	}
}

export function View(options:any){
	return function(target: Function){
		Reflect.defineMetadata("View", options, target);
	}
}