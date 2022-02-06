import { Injectable } from '@angular/core'
import { Product } from '../Models/product.model'

//Here we can use Reactivity into our components to
//share information between componentes
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private shoppingCart: Product[]
  private total: number
  /*
    We use an observable and a subject
  */
  private myCart = new BehaviorSubject<Product[]>([])
  myCart$ = this.myCart.asObservable()

  constructor() {
    this.shoppingCart = []
    this.total = 0
  }

  getMyShoppingCart(): Product[] {
    return this.shoppingCart
  }

  addProductToCart(product: Product): Product[] {
    this.shoppingCart.push(product)
    //Here we notify the changes in our subject
    //And the observer notify the changes to their subscribers
    this.myCart.next(this.shoppingCart)
    return this.shoppingCart
  }

  getTotalShoppingCart(): number {
    return (this.total = this.shoppingCart.reduce((sum, item) => {
      return sum + item.price
    }, 0))
  }
}
