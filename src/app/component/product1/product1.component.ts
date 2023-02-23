import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Product } from '../../products/product';
import { ProductsService } from '../../service/products.service';

@Component({
  selector: 'app-product1',
  templateUrl: './product1.component.html',
  styleUrls: ['./product1.component.scss']
})
export class Product1Component implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  products:Product[]=[];

  constructor(private productService:ProductsService){
    console.log('constructor called');
  }

  ngOnInit(): void {
    console.log('ngOnInit called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called'); 
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterContentChecked called');
  }
  
  getProducts() {

    this.products=this.productService.getProducts();
  }
}
