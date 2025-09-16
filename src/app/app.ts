import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RepeatDirective } from './repeat.directive';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RepeatDirective],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Exp2');
  count = 3;
  set_val(value:number){
    this.count = value;

  }
}
