import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <article>
      <h1>Blog Post</h1>
      <form
        name="blogForm"
        [formGroup]="blogform"
        (ngSubmit)="handleFormSubmit()"
      >
        <section>
          <label for="title">Post Title</label>
          <input type="text" id="title" formControlName="title" />

          <label for="body">Post Body</label>
          <textarea
            name=""
            id="body"
            cols="30"
            rows="10"
            formControlName="body"
          ></textarea>
        </section>
        <button type="submit">Submit Post</button>
      </form>
    </article>
  `,
  styles: [],
})
export class AppComponent {
  handleFormSubmit() {
    this.postBlog(this.blogform.value.title, this.blogform.value.body);
  }

  postBlog(title: string | null | undefined, body: string | null | undefined) {
    console.log(`Posting blog titles ${title}, with the contents ${body}.`);
  }

  blogform = new FormGroup({
    title: new FormControl(''),
    body: new FormControl(''),
  });
}
