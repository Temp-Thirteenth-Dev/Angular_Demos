import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-course-list',
  imports: [],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList {
    @Input() course_name!:string;
    @Output() registered_course_emitter=new EventEmitter<string>();
    course_details=[
        {"id":"TOC","name":"Thoery of Computation",'branch':'CS'},
        {"id":"CD","name":"course-2",'Compiler Design':'CS'},
        {"id":"FMPMC","name":"FMPMC",'branch':'EC'},
        {"id":"DM","name":"Discrete Mathemtics",'branch':'HBS'}
    ]
    send_registration(){
        this.registered_course_emitter.emit(this.course_name);
    }
}