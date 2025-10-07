import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmpRegForm } from './emp-reg-form/emp-reg-form';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EmpRegForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Exp2');
}
