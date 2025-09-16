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
  validLogin = false;
  InvalidLogin = false;
  name ="User 1";
  private pass = "Pass1";

  validate(Uname:string , UPass:string){
    if (this.name == Uname && this.pass == UPass ){
      this.validLogin = true;
      this.InvalidLogin = false;
    }
    else{
      this.validLogin = false;
      this.InvalidLogin = true;
    }
  }
}
