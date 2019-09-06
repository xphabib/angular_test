import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  // template: '<div>Hi this is template</div>',
  template: `
    <h2>
      Welcome {{name}}
    </h2>
    <button (click)="onClick($event)">Greet</button>
    {{greeting}}
    <input #myInput type="text">
    <button (click)="logMessage(myInput.value)">Log</button>
    <input [(ngModel)]="testText" type="text">
    {{testText}}
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

  public testText = '';
  public name = 'Habib';
  public myId = 'testId';
  public isDisabled = true;
  public siteUrl = window.location.href;
  public danger = 'text-danger'
  public hasError = false;
  public isSpecial = true;
  public highlightColor = 'blue';
  public greeting = "";
  public titleStyles = {
    color: "blue",
    fontStyle: "italic"
  }
  public messageClasses = {
   "text-success": !this.hasError,
   "text-danger": this.hasError,
   "text-special": this.isSpecial
  }


  constructor() { }

  ngOnInit() {
  }

  greetUser() {
    return 'Hello ' + this.name;
  }

  onClick(event) {
    this.greeting = event.type;
    console.log(event);
  }

  logMessage(value) {
    console.log(value);
  }
  // Angular 8 Tutorial - 12 - ngIf Directive
}
