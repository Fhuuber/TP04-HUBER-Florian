import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ProductsComponent
  },
  {
    path: ':id/detail',
    loadChildren: () => import('../product-detail/product-detail.module').then(mod => mod.ProductDetailModule)
  }];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
  ],
  exports: [RouterModule]
})
export class ProductsModule { }
