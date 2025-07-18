import type {
  TShoppingItem,
  TShoppingData,
  TShoppingItemVariant,
  TDeliveryAddress,
  TPayment,
} from '../../@types/shopping-item'

export type TShoppingState = TShoppingData & {
  isOrderFinished: boolean
}

export type TShoppingAction =
  | {
    type: 'ADD_TO_CART',
    payload: {
      item: TShoppingItem
    }
  }
  | {
    type: 'REMOVE_FROM_CART',
    payload: {
      variant: TShoppingItemVariant
    }
  }
  | {
    type: 'UPDATE_CART_ITEM_QUANTITY',
    payload: {
      variant: TShoppingItemVariant,
      newQuantity: number
    }
  }
  | {
    type: 'SAVE_ADDRESS',
    payload: {
      address: TDeliveryAddress
    }
  }
  | {
    type: 'SET_PAYMENT',
    payload: {
      payment: TPayment
    }
  }
  | {
    type: 'SET_IS_ORDER_FINISHED',
    payload: {
      isOrderFinished: boolean
    }
  }
  | {
    type: 'FINISH_ORDER',
  }
