import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseList } from './course-list/course-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , CourseList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Exp2');
  showVar = false;
    show() {
    if(this.showVar==false){
      this.showVar=true;
    }
    else{
      this.showVar=false;
    }
  }
}
