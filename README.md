# angular-now
----

[![Join the chat at https://gitter.im/SnareChops/angular-now](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/SnareChops/angular-now?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Angular Now is a migration strategy for writing Angular 2 applications now.

##Components

```
import {Component, View} from "angular-now";

// Add the new component to your existing (or new) angular 1 application
angularNow.module('myApp').component(

// Write Angular 2 code according to the Angular 2 docs on https://angular.io
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
});
```