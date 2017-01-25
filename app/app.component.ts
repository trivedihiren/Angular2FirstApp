import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: '<h1>Hello {{name}} </h1>' + '<p> {{Email}}</p> <p> {{Address}} </p>',
})

export class AppComponent  { 
  name = 'Hiren'; 
  Email = 'hiren.trivedi@internal.mail'; 
  Address = 'Bopal' 
}
