export interface Product {
  id: string
  imageUrl: string
  name: string
  price: string
  defaultPriceId: string
  qtd?: number
}

export enum ActionTypes {
  ADD_PRODUCT = 'ADD_PRODUCT',
}

export type ActionTypeProps = {
  type: ActionTypes.ADD_PRODUCT
  payload: { product: Product }
}
