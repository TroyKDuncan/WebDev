import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // template: `<p>Hello world!</p>`,
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // styles: [''],
})
export class AppComponent {
  name = 'nora'
}
