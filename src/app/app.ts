import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ShowMessage } from './show-message';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet ,ShowMessage, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Exp2');

  myMessage = 'Hello, I am from attribute directive';
}
