import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Product1Component } from './component/product1/product1.component';
import { Products2Component } from './component/product2/products.component';
import { ChildComponent } from './component/child/child.component';




@NgModule({
  declarations: [
    AppComponent,
    Product1Component,
    Products2Component,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [
   

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
