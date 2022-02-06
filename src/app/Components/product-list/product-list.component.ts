import { Component, OnInit } from '@angular/core'
import { Product } from 'src/app/Models/product.model'
import { ProductsService } from 'src/app/Services/products.service'
import { StoreService } from 'src/app/Services/store.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent implements OnInit {
  products: Product[]
  shoppingCart: Product[]
  total: number

  constructor(
    private storeService: StoreService,
    private ProductsService: ProductsService
  ) {
    this.shoppingCart = this.storeService.getMyShoppingCart()
    this.total = 0
    this.products = []
  }

  ngOnInit(): void {
    this.ProductsService.getAllProducts().subscribe((lsProducts) => {
      this.products = lsProducts
    })
  }

  addProductToCart(product: Product) {
    this.shoppingCart = this.storeService.addProductToCart(product)
    this.total = this.storeService.getTotalShoppingCart()
  }
}
