import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <h1>If you are reading this...{{ userName}}</h1>
    <p>Things have worked out well! 🎉</p>
    <h2>Favorite Songs</h2>
    <ol>
      <li>Fireflies</li>
      <li>Vanilla Twilight</li>
      <li>The Saltwater room</li>

    </ol>
  `,
  styles: `
    h1 {
      color: red
    }
    ol {
      list-style-type: upper-roman
    }
    `,
})
export class AppComponent {
  userName = 'coding champ'
}
