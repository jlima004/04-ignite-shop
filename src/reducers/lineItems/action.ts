export interface Product {
  id: string
  imageUrl: string
  name: string
  price: string
  priceNumber: number
  defaultPriceId: string
  qtd?: number
}

export enum ActionTypes {
  ADD_PRODUCT = 'ADD_PRODUCT',
  REMOVE_PRODUCT = 'REMOVE_PRODUCT',
}

export type ActionTypeProps =
  | { type: ActionTypes.ADD_PRODUCT; payload: { product: Product } }
  | { type: ActionTypes.REMOVE_PRODUCT; payload: { idProduct: string } }
