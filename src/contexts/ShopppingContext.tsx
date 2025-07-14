import React, {
  createContext,
  useEffect,
  useReducer,
  type Dispatch,
} from 'react'
import { userReducer } from '../reducers/shoppingReducer'
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
  const [shoppingState, shoppingDispatch] = useReducer(userReducer, {
    cart: [],
    address: null,
    payment: null,
  })

  useEffect(() => {

  }, [])

  return (
    <ShoppingContext.Provider value={{ shoppingState, shoppingDispatch }}>
      {children}
    </ShoppingContext.Provider>
  )
}
