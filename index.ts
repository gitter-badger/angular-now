/// <reference path="angular-now.ts" />

import {Component, View} from "angular-now";

@Component({
  selector: 'my-app'
})
@View({
  template: '<h1>Hello {{ name }}</h1>'
})
class MyAppComponent {
  name: string;
  
  constructor() {
    this.name = 'Alice';
  }
}