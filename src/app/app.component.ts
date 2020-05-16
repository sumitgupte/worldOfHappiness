import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `
   
  <app-home-page></app-home-page>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'worldOfHappiness';
}
