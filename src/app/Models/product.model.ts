export interface Product {
  id: string
  title: string
  price: number
  description: string
  images: string[]
  category: Category
}

export interface Category {
  id: number
  name: string
}

export interface CreateProductDTO extends Omit<Product, 'id' | 'category'> {
  categoryId: number
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UpdateProductDTO extends Partial<CreateProductDTO> {}
