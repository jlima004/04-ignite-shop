import { ReactNode, createContext, useReducer } from 'react'

import { ActionTypes, Product } from '@/reducers/lineItems/action'
import { lineItensReducer } from '@/reducers/lineItems/reducer'

interface HandbagContextData {
  lineItens: Product[]
  addProduct: (product: Product) => void
}

export const HandbagContext = createContext({} as HandbagContextData)

interface HandbagContextProviderProps {
  children: ReactNode
}

export function HandbagContextProvider({
  children,
}: HandbagContextProviderProps) {
  const [itemsState, dispatch] = useReducer(
    lineItensReducer,
    { lineItens: [] },
    (initialState) => {
      return initialState
    },
  )

  const { lineItens } = itemsState

  function addProduct(product: Product) {
    dispatch({
      type: ActionTypes.ADD_PRODUCT,
      payload: { product },
    })
  }

  return (
    <HandbagContext.Provider value={{ lineItens, addProduct }}>
      {children}
    </HandbagContext.Provider>
  )
}
