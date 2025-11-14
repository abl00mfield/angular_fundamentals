import { Component } from '@angular/core';
import { PostsComponent } from './posts/posts.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PostsComponent],
  template: `
    <section class="container">
      <h1>Deferrable Views Example</h1>
      <button #loadPost>Load Posts</button>
      @defer(on interaction(loadPost)){
      <app-posts />
      }
    </section>
  `,
})
export class AppComponent {}
