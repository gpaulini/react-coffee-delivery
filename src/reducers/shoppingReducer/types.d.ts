import type {
  TShoppingItem,
  TShoppingData,
} from '../../@types/shopping-item'

export type TShoppingState = TShoppingData & {}

export type TShoppingAction =
  | {
    type: 'ADD_TO_CART',
    payload: {
      item: TShoppingItem
    }
  }
