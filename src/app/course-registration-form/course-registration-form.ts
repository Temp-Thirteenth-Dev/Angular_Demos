import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Student } from '../student.model';

@Component({
  selector: 'app-course-registration-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './course-registration-form.html'
})
export class CourseRegistrationForm {
  model = new Student();
  courses = ['Math', 'Physics', 'Chemistry', 'Biology'];
  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

    onCourseChange(event: any, course: string) {
    if (event.target.checked) {
        // only add if not already selected
        if (!this.model.courses.includes(course)) {
        this.model.courses.push(course);
        }
    } else {
        // remove if unchecked
        this.model.courses = this.model.courses.filter(c => c !== course);
    }
    }

    isSelected(course: string): boolean {
        return this.model.courses.includes(course);
    }
  resetForm(form: any) {
    form.resetForm();
    this.model = new Student();
    this.submitted = false;
  }
}
