import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ImgComponent } from './Components/img/img.component'
import { ProductComponent } from './Components/product/product.component'
import { ProductListComponent } from './Components/product-list/product-list.component'
import { HeaderComponent } from './Components/header/header.component'
import { HttpClientModule } from '@angular/common/http'
import { HighligthDirective } from './Directives/highligth.directive'

@NgModule({
  declarations: [
    AppComponent,
    ImgComponent,
    ProductComponent,
    ProductListComponent,
    HeaderComponent,
    HighligthDirective
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
