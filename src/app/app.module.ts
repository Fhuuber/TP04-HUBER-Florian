import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccountComponent } from './account/account.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { CartComponent } from './cart/cart.component';
import { ErrorComponent } from './error/error.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { CartState } from 'src/store/states/cart.state';
  
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ErrorComponent,
    HomeComponent,
    AccountComponent,
    ProductsComponent,
    ProductDetailComponent,
    CartComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxsModule.forRoot([CartState])
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
