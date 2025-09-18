import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LowerCasePipe, UpperCasePipe ,DatePipe, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,LowerCasePipe,UpperCasePipe , DatePipe , CurrencyPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('pipes');
  showVar=false;
  code='Prd_Code_1234';
  name='The Product';
  price = 3500;
  mfg_date = '2025-04-25';
  show() {
    if(this.showVar==false){
      this.showVar=true;
    }
    else{
      this.showVar=false;
    }
  }
}