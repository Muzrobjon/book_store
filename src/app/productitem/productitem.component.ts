import { Component, OnInit } from '@angular/core';
import { ProductservService } from '../services/productserv.service';
import { CartservService } from '../services/cartserv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productitem',
  templateUrl: './productitem.component.html',
  styleUrls: ['./productitem.component.css']
})
export class ProductitemComponent implements OnInit {

  book: Array<any>;

  sotibol(book) {
    this.cartserv.add(book);
    this.router.navigate(['cart']);
  }

  remove(book) {
    this.prodserv.removeProduct(book).subscribe((res) => {
    this.router.navigateByUrl('productslist');
    });
  }
  constructor(public prodserv: ProductservService, public cartserv: CartservService, public router: Router) {
    this.book = this.prodserv.selectedProduct;
   }

  ngOnInit() {
    console.log(this.book);
  }

}
