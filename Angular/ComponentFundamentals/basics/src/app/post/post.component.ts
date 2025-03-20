import { Component, input, output } from '@angular/core';

@Component({
    selector: 'app-post',
    standalone: true,
    imports: [],
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css']
})
export class PostComponent {
  postImage = input.required<string>(); 
  // required inputs don't need to be initialized because they are requiring a value to be passed in
  postName = input('');
  imageSelected = output<string>();
}
