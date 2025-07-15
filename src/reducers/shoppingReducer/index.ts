import type React from 'react'
import type { TShoppingAction, TShoppingState } from './types'

export const shoppingReducer: React.Reducer<TShoppingState, TShoppingAction> =
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

      case 'UPDATE_CART_ITEM_QUANTITY': {
        const itemToUpdate = action.payload.variant
        const newQuantity = action.payload.newQuantity
        return {
          ...state,
          cart: state.cart.map(item => {
            if (item.variant === itemToUpdate) {
              return {
                ...item,
                quantity: newQuantity,
              }
            }
            return item
          }),
        }
      }

      case 'SAVE_ADDRESS': {
        return {
          ...state,
          address: action.payload.address,
        }
      }

      case 'SET_PAYMENT': {
        return {
          ...state,
          payment: action.payload.payment,
        }
      }

      default:
        return state
    }
  }
