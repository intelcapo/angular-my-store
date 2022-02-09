import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import {
  Product,
  CreateProductDTO,
  UpdateProductDTO
} from '../Models/product.model'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  urlApi = 'https://young-sands-07814.herokuapp.com/api/products'
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.urlApi)
  }

  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.urlApi}/${id}`)
  }

  create(product: CreateProductDTO) {
    return this.http.post<Product>(this.urlApi, product)
  }

  update(id: string, product: UpdateProductDTO) {
    return this.http.put<Product>(`${this.urlApi}/${id}`, product)
  }

  delete(id: string) {
    return this.http.delete<boolean>(`${this.urlApi}/${id}`)
  }
}
