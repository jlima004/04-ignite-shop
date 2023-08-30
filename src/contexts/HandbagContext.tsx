import {
  ReactNode,
  createContext,
  useEffect,
  useReducer,
  useState,
} from 'react'

import { ActionTypes, Product } from '@/reducers/lineItems/action'
import { lineItensReducer } from '@/reducers/lineItems/reducer'

interface HandbagContextData {
  lineItens: Product[]
  total: number
  addProduct: (product: Product) => void
  removeProduct: (idProduct: string) => void
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

  const [total, setTotal] = useState(0)

  const { lineItens } = itemsState

  useEffect(() => {
    const itemsTotal: number = lineItens.reduce(
      (acum, { priceNumber, qtd = 1 }) => {
        return acum + priceNumber * qtd
      },
      0,
    )

    setTotal(itemsTotal)
  }, [lineItens])

  function addProduct(product: Product) {
    dispatch({
      type: ActionTypes.ADD_PRODUCT,
      payload: { product },
    })
  }

  function removeProduct(idProduct: string) {
    dispatch({
      type: ActionTypes.REMOVE_PRODUCT,
      payload: { idProduct },
    })
  }

  return (
    <HandbagContext.Provider
      value={{ lineItens, total, addProduct, removeProduct }}
    >
      {children}
    </HandbagContext.Provider>
  )
}
