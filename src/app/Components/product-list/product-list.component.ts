import { Component, OnInit } from '@angular/core'
import {
  Product,
  CreateProductDTO,
  UpdateProductDTO
} from 'src/app/Models/product.model'
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
  showProductDetail = false
  productSelected: Product

  constructor(
    private storeService: StoreService,
    private ProductsService: ProductsService
  ) {
    this.shoppingCart = this.storeService.getMyShoppingCart()
    this.total = 0
    this.products = []
    this.productSelected = {
      id: '',
      title: '',
      price: 0,
      description: '',
      images: [],
      category: {
        id: 0,
        name: ''
      }
    }
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

  seeProductDetail(id: string) {
    this.ProductsService.getProductById(id).subscribe((product) => {
      this.productSelected = product
      this.toggleProductDetail()
    })
  }

  createProduct() {
    const newProduct: CreateProductDTO = {
      title: 'Nuevo Producto',
      description: 'Nuevo Producto',
      images: [''],
      price: 1100,
      categoryId: 2
    }

    this.ProductsService.create(newProduct).subscribe((product) => {
      this.products.unshift(product)
    })
  }

  updateProduct() {
    const changes: UpdateProductDTO = {
      title: 'This is a test about update products'
    }
    const id = this.productSelected.id

    this.ProductsService.update(id, changes).subscribe((data) => {
      const productIndex = this.products.findIndex(
        (product) => product.id === this.productSelected.id
      )

      this.products[productIndex] = data
    })
  }

  deleteProduct() {
    const id = this.productSelected.id
    this.ProductsService.delete(id).subscribe(() => {
      const productIndex = this.products.findIndex(
        (product) => product.id == this.productSelected.id
      )

      this.products.splice(productIndex, 1)
      this.showProductDetail = false
    })
  }
  toggleProductDetail() {
    this.showProductDetail = !this.showProductDetail
  }
}
