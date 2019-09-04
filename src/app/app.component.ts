import { Component } from '@angular/core';

// this is component 'decorator' containt meta data
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'code evolution';
}
