import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TestComponent } from "./components/test/test.component";
import { ToolbarComponent } from "../toolbar/toolbar.component";
import { ProductListComponent } from "./components/product-list/product-list.component";

const routes: Routes = [

  {
    path: '',
    component: ToolbarComponent,
    children: [
      { path: 'test', component: TestComponent },
      { path: 'productlist', component: ProductListComponent }

    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})




export class ProductRoutingModule {
}
