import { produce } from 'immer'

import { ActionTypeProps, ActionTypes, ItemState } from './action'

export function lineItensReducer(state: ItemState, action: ActionTypeProps) {
  switch (action.type) {
    case ActionTypes.ADD_PRODUCT: {
      const newProductIndex = state.lineItens.findIndex(
        (product) => product.id === action.payload.product.id,
      )

      if (newProductIndex < 0) {
        return produce(state, (draft) => {
          draft.lineItens.push({ ...action.payload.product, qtd: 1 })
        })
      }

      return produce(state, (draft) => {
        draft.lineItens[newProductIndex].qtd =
          (draft.lineItens[newProductIndex].qtd || 1) + 1
      })
    }

    case ActionTypes.REMOVE_PRODUCT: {
      const currentProductIndex = state.lineItens.findIndex(
        (product) => product.id === action.payload.idProduct,
      )

      if (currentProductIndex > -1) {
        return produce(state, (draft) => {
          draft.lineItens.splice(currentProductIndex, 1)
        })
      }

      return state
    }

    case ActionTypes.LOAD_PRODUCTS: {
      const loadedProducts = action.payload.itemsState

      return loadedProducts
    }

    default:
      return state
  }
}
