import { Component, OnInit } from '@angular/core';
import { CartservService } from '../services/cartserv.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartlist: Array<any>;

  remove(cartitem) {
    this.cartserv.remove(cartitem);
  }
  constructor(public cartserv: CartservService) {
    this.cartlist = this.cartserv.view();
   }

  ngOnInit() {
  }

}
