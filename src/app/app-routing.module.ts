import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ErrorComponent } from './error/error.component';

const appRoutes: Routes = [
  { 
    path: '',
    loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule),
  },
  { 
    path: 'home', 
    loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule),
  },
  { 
    path: 'account',
    canActivate: [AuthGuard],
    loadChildren: () => import('./account/account.module').then(mod => mod.AccountModule),
  },
  { 
    path: 'products',
    loadChildren: () => import('./products/products.module').then(mod => mod.ProductsModule),
  },
  { 
    path: 'cart',
    canActivate: [AuthGuard],
    loadChildren: () => import('./cart/cart.module').then(mod => mod.CartModule) 
  },
  { 
    path: 'not-found', 
    component: ErrorComponent
  },{
    path: '**',
    redirectTo: 'not-found'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
