import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Product } from 'src/app/Models/product.model'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {
  @Input() product: Product
  @Output() onAddCart = new EventEmitter<Product>()
  @Output() onSeeDetail = new EventEmitter<string>()

  constructor() {
    this.product = {
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
    //TODO: put some code here
  }

  addProductToCart() {
    this.onAddCart.emit(this.product)
  }

  seeDetail(id: string) {
    this.onSeeDetail.emit(id)
  }
}
