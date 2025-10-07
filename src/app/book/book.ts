import { Component, inject } from '@angular/core';
import { BookServ } from '../book-serv';
import { interval } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { AsyncPipe } from '@angular/common';


@Component({
  selector: 'app-book',
  imports: [],
  templateUrl: './book.html',
  styleUrl: './book.css'
})
export class Book {
  private book_serv = inject(BookServ);

  my_books = this.book_serv.fetch_books();
 
  counterObservable=interval(1000);
  counter=toSignal(this.counterObservable, {initialValue:0});

}
