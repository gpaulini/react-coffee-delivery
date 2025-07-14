import type React from 'react'
import type { TShoppingAction, TShoppingState } from './types'

export const userReducer: React.Reducer<TShoppingState, TShoppingAction> =
  (state, action) => {
    switch (action.type) {
      case 'ADD_TO_CART': {
        const newItem = action.payload.item
        const isItemAlreadyAdded =
          state.cart.findIndex(item => item.variant === newItem.variant) >= 0
        const cartItems =
          isItemAlreadyAdded
            ? state.cart.map(item => {
                if (item.variant === newItem.variant) {
                  return {
                    ...item,
                    quantity: (item.quantity + newItem.quantity),
                  }
                }
                return item
              })
            : [...state.cart, newItem]

        return {
          ...state,
          cart: cartItems,
        }
      }

      case 'REMOVE_FROM_CART': {
        const itemToRemove = action.payload.variant
        return {
          ...state,
          cart: state.cart.filter(item => {
            return item.variant !== itemToRemove
          }),
        }
      }

      default:
        return state
    }
  }
