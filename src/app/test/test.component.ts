import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  // template: '<div>Hi this is template</div>',
  template: `<h2>Welcome {{name}}</h2>
  <h2 class="text-success">My Smart Code</h2>
  <h2 [class]="danger">Test My Smart Code</h2>
  <h2 [class.text-danger]="hasError">Another Test My Smart Code</h2>
  <!--<h2>{{2+2}}</h2>-->
  <!--<h2>{{'hello' + 'world'}}</h2>-->
  <!--<h2>{{ name.length }}</h2>-->
  <!--<h2>{{ name.toUpperCase() }}</h2>-->
  <!--<h2>{{ greetUser() }}</h2>-->
  <!--<h2>{{ siteUrl }}</h2>-->
    <input [id]="myId" type="text" value="Habib">
    <input [disabled]="isDisabled" [id]="myId" type="text" value="Habib">
  `,
  // styleUrls: ['./test.component.scss']
  styles: [`
    div{
      color: red;
    }
    .text-success {
      color: green;
    }
    .text-danger {
      color: red;
    }
    .text-special {
      font-style: italic;
    }
  `]
})
export class TestComponent implements OnInit {

  public name = 'Habib';
  public myId = 'testId';
  public isDisabled = true;
  public siteUrl = window.location.href;
  public danger = 'text-danger'
  public hasError = false;
  public isSpecial = true;
  public messageClasses = {
   "text-success": !this.hasError,
   "text-danger": this.hasError,
   "text-special": this.isSpecial
  }

  //Angular 8 Tutorial - 7 - Class Binding


  constructor() { }

  ngOnInit() {
  }

  greetUser() {
    return 'Hello ' + this.name;
  }

}
