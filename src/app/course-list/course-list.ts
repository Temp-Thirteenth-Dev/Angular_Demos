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
        {"id":"TOC","name":"Theory of Computation",'branch':'CS'},
        {"id":"CD","name":'Compiler Design','branch':'CS'},
        {"id":"FMPMC","name":"FMPMC",'branch':'EC'},
        {"id":"DM","name":"Discrete Mathemtics",'branch':'HBS'}
    ]
    register(id: string){
        this.registered_course_emitter.emit(id);
    }
}