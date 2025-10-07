import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmailValidator } from '../email-validator';

@Component({
  selector: 'app-course-registration-form',
  imports: [FormsModule, EmailValidator],
  templateUrl: './course-registration-form.html',
  styleUrl: './course-registration-form.css'
})
export class CourseRegistrationForm {
  submitted = false;

  stud ={
    id : '',
    name : '',
    email : ''
  }

  onSubmit(){
    this.submitted = true;
  }
  

}
