import { Component, inject } from '@angular/core';
import { BookServ } from '../book-serv';

@Component({
  selector: 'app-book',
  imports: [],
  templateUrl: './book.html',
  styleUrl: './book.css'
})
export class Book {
  private book_serv = inject(BookServ);

  my_books = this.book_serv.fetch_books();

  fetchedBook: any = null;

  fetchBook(id:string) {
      this.fetchedBook = this.my_books?.find(book => book.id == Number(id)) ?? null;
      // console.log('fetchedBook:', this.fetchedBook);
    }

}
