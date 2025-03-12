import { Component, signal } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  // template: "<h1>Hello World</h1>",
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [PostComponent],
  // styles: ["h1 { color: red; }"]
})
export class AppComponent {
  name = signal('Nikola Tesla');
  imageURL = signal('https://picsum.photos/id/237/200/300');

  changeImage(e: KeyboardEvent) {
    this.imageURL.set((e.target as HTMLInputElement).value);
  }
  getName() {
    return this.name();
  }
}
