import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseList } from './course-list/course-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CourseList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('components');

  message = '';
  registered_courses: string[] = [];
  
  courseReg(courseName: string) {
    this.message = `Your registration for ${courseName} is successful`;
        if (!this.registered_courses.includes(courseName)) {
        this.registered_courses.push(courseName);
    }
  }  

}
