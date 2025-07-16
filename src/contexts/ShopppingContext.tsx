import React, {
  createContext,
  useEffect,
  useReducer,
  useState,
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
  shoppingDispatch: Dispatch<TShoppingAction>,
  didCartLengthChanged: boolean
}

export const ShoppingContext = createContext({} as TShoppingContext)

export const ShoppingContextProvider = ({
  children,
}: TShoppingContextProviderProps) => {
  const localStorageKey = '@coffee-delivery:shopping:v1.0.0'

  const [didCartLengthChanged, setDidCartLengthChanged] = useState(false)

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

  useEffect(() => {
    if (shoppingState.cart.length) {
      setDidCartLengthChanged(true)
      setTimeout(() => {
        setDidCartLengthChanged(false)
      }, 1010)
    }
  }, [shoppingState.cart.length])

  return (
    <ShoppingContext.Provider value={{
      shoppingState,
      shoppingDispatch,
      didCartLengthChanged,
    }}
    >
      {children}
    </ShoppingContext.Provider>
  )
}
