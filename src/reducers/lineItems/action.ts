export interface Product {
  id: string
  imageUrl: string
  name: string
  price: string
  priceNumber: number
  defaultPriceId: string
  qtd?: number
}

export interface ItemState {
  lineItens: Product[]
}

export enum ActionTypes {
  ADD_PRODUCT = 'ADD_PRODUCT',
  REMOVE_PRODUCT = 'REMOVE_PRODUCT',
  LOAD_PRODUCTS = 'LOAD_PRODUCTS',
}

export type ActionTypeProps =
  | { type: ActionTypes.ADD_PRODUCT; payload: { product: Product } }
  | { type: ActionTypes.REMOVE_PRODUCT; payload: { idProduct: string } }
  | { type: ActionTypes.LOAD_PRODUCTS; payload: { itemsState: ItemState } }
