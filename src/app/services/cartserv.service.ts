import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartservService {

  cartbooks: Array<any> = [];

  add(book) {
    this.cartbooks.push(book);
  }

  remove(book) {
    let indx = this.cartbooks.findIndex(a => a.title === book.title);
    this.cartbooks.splice(indx, 1);
  }

  view() {
    return this.cartbooks;
  }
  constructor() { }
}
