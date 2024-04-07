import 'zone.js';
import {Component} from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    @for (item of list; track item; let idx = $index) {
          {{ this.idx }} {{ item }}
      }
  `,
})
export class App {
  public list = ["hello"];
  public idx = "this should be idx";
}

bootstrapApplication(App);
