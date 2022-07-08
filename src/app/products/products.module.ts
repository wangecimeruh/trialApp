import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductRoutingModule } from './product-routing.module';
import { TestComponent } from './components/test/test.component';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule,
    MaterialModule

  ],
  declarations: [
   ProductListComponent,
   TestComponent
]
})
export class ProductsModule { }
