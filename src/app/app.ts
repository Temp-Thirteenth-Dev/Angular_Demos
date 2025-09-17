import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LowerCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,LowerCasePipe,UpperCasePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('pipes');
  showVar=false;
  code='Prd_Code_1234';
  name='The Product';
  show() {
    if(this.showVar==false){
      this.showVar=true;
    }
    else{
      this.showVar=false;
    }
  }
}