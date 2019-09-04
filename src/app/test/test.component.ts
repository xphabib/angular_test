import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  // template: '<div>Hi this is template</div>',
  template: `<h2>Welcome {{name}}</h2>
  <h2>{{2+2}}</h2>
  <h2>{{'hello' + 'world'}}</h2>
  <h2>{{ name.length }}</h2>
  <h2>{{ name.toUpperCase() }}</h2>
  <h2>{{ greetUser() }}</h2>
  `,
  // styleUrls: ['./test.component.scss']
  styles: [`
    div{
      color: red;
    }
  `]
})
export class TestComponent implements OnInit {

  public name = 'Habib';
  constructor() { }

  ngOnInit() {
  }

  greetUser() {
    return 'Hello ' + this.name;
  }

}
