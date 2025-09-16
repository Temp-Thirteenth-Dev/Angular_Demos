import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Exp2');
  currentCourse = "";
  courses = ["MongoDB", "Express","Angular",  "Node"];

  selectCourse(course : string) {
    this.currentCourse = course;
  }
}
