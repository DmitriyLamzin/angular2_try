import { Component } from '@angular/core';

@Component({
  selector: 'no-content',
  template: `
    <div>
      <h1>404: page missing</h1>
      <a data-toggle="pill" [routerLink]=" ['/users', 1] " >
        CLICK
      </a>
    </div>
  `
})
export class NoContentComponent {

}
