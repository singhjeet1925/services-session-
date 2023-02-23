import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Product1Component } from './component/product1/product1.component';
import { Products2Component } from './component/product2/products.component'

const routes: Routes = [
  { path:'product', component:Product1Component},
  { path:'product2', component:Products2Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
