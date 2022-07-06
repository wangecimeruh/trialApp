import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TestComponent } from "./components/test/test.component";
import { ToolbarComponent } from "../toolbar/toolbar.component";

const routes: Routes = [

  {
    path: '',
    component: ToolbarComponent,
    children: [
      { path: '', component: TestComponent }

    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})




export class ProductRoutingModule {
}
