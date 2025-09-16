import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Repeat } from '../repeat';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Repeat],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Exp2');
  count = 3;
  set_val(value : number){
    this.count = value;
  }
}
