import { ReactNode, createContext, useReducer } from 'react'

interface Product {
  id: string
  imageUrl: string
  name: string
  defaultPriceId: string
  qtd?: number
}

interface HandbagContextData {
  lineItens: Product[]
  addProduct: (product: Product) => void
}

interface ItemState {
  lineItens: Product[]
}

export const HandbagContext = createContext({} as HandbagContextData)

interface HandbagContextProviderProps {
  children: ReactNode
}

export function HandbagContextProvider({
  children,
}: HandbagContextProviderProps) {
  const [itemsState, dispatch] = useReducer(
    (state: ItemState, action: any) => {
      switch (action.type) {
        case 'ADD_PRODUCT': {
          const newState: ItemState = {
            lineItens: [...state.lineItens, action.payload],
          }
          return newState
        }

        default:
          return state
      }
    },
    { lineItens: [] },
    (initialState) => {
      return initialState
    },
  )

  const { lineItens } = itemsState

  function addProduct(product: Product) {
    dispatch({
      type: 'ADD_PRODUCT',
      payload: product,
    })
  }

  return (
    <HandbagContext.Provider value={{ lineItens, addProduct }}>
      {children}
    </HandbagContext.Provider>
  )
}
