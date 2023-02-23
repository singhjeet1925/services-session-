import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Product } from '../../products/product';
import { ProductsService } from '../../service/products.service';

@Component({
  selector:'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class Products2Component implements OnInit, OnChanges {

    products:Product[]=[];

    @Input() name="jeetu"
  
    constructor(private productService:ProductsService){
        console.log('constructor Called');
    }

    ngOnInit(){
        console.log('ngOnInit Called');
      }

      
    ngOnChanges(){
    console.log('ngOnChanges Called');
    }
    getProducts() {
     
        this.products=this.productService.getProducts();
      }
}