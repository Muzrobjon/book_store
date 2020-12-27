import { Component, OnInit } from '@angular/core';
import { ProductservService } from '../services/productserv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productadd',
  templateUrl: './productadd.component.html',
  styleUrls: ['./productadd.component.css']
})
export class ProductaddComponent implements OnInit {
  img: string;
  title: string;
  desc: string;
  textmeassage: string;

  constructor(public productserv: ProductservService, public router: Router) { }

  add() {
    let prod = {
      img: this.img,
      title: this.title,
      desc: this.desc
    }

    this.productserv.addProduct(prod).subscribe(() =>{
      this.textmeassage = "Succesfully added!";
      console.log('hello');
      this.router.navigateByUrl('productslist');
    });
  }

  ngOnInit() {

  }

}
