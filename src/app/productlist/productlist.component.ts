import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductservService } from '../services/productserv.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductItem } from '../productlist/product.model';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit, OnDestroy {

  booklist: Observable<ProductItem[]>;

  batafsil(item) {
    this.productserv.selectedProduct = item;
    this.router.navigateByUrl('productitem');
  }
  constructor(public productserv: ProductservService, public router: Router) { }

  ngOnInit() {
    this.booklist = this.productserv.getProducts();
  }
  ngOnDestroy(): void {

  }
}
