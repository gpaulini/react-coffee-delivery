import React, {
  createContext,
  useEffect,
  useReducer,
  type Dispatch,
} from 'react'
import { shoppingReducer } from '../reducers/shoppingReducer'
import type {
  TShoppingAction,
  TShoppingState,
} from '../reducers/shoppingReducer/types'

type TShoppingContextProviderProps = {
  children: React.ReactNode
}

type TShoppingContext = {
  shoppingState: TShoppingState,
  shoppingDispatch: Dispatch<TShoppingAction>
}

export const ShoppingContext = createContext({} as TShoppingContext)

export const ShoppingContextProvider = ({
  children,
}: TShoppingContextProviderProps) => {
  const localStorageKey = '@coffee-delivery:shopping:v1.0.0'

  const [shoppingState, shoppingDispatch] =
    useReducer(
      shoppingReducer,
      {
        cart: [],
        address: null,
        payment: null,
      },
      (initialState) => {
        const stored = localStorage.getItem(localStorageKey)
        return stored ? JSON.parse(stored) : initialState
      },
    )

  useEffect(() => {
    localStorage.setItem(
      localStorageKey,
      JSON.stringify(shoppingState),
    )
  }, [shoppingState])

  return (
    <ShoppingContext.Provider value={{ shoppingState, shoppingDispatch }}>
      {children}
    </ShoppingContext.Provider>
  )
}
