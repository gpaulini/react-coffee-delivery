import type {
  TShoppingItem,
  TShoppingData,
  TShoppingItemVariant,
} from '../../@types/shopping-item'

export type TShoppingState = TShoppingData & {}

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
