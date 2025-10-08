import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  imports: [],
  templateUrl: './hello.html',
  styleUrl: './hello.css'
})
export class Hello {
  course = "Angular JS";
  change(){
    if (this.course==="Mongo DB") {
      this.course = "Angular JS"
    }
    else{
      this.course="Mongo DB";
    }
  }

}
