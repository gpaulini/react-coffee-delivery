export type TShoppingItemVariant =
  | 'arabe'
  | 'cafe-com-leite'
  | 'capuccino'
  | 'chocolate-quente'
  | 'cubano'
  | 'expresso-americano'
  | 'expresso-cremoso'
  | 'expresso-gelado'
  | 'expresso-tradicional'
  | 'havaiano'
  | 'irlandes'
  | 'latte'
  | 'macchiato'
  | 'mocaccino'

export type TShoppingItemLabel =
  | 'tradicional'
  | 'gelado'
  | 'com leite'
  | 'especial'
  | 'alcoólico'

export type TShoppingItem = {
  variant: TShoppingItemVariant,
  labels?: TShoppingItemLabel[],
  description?: string,
  price: number,
  quantity: number
}

export type TDeliveryAddress = {
  zipcode?: string,
  street: string,
  number: string,
  extra?: string,
  district: string,
  city: string,
  state: string
}

export type TPayment = 'credit' | 'debit' | 'cash'

export type TShoppingData = {
  cart: TShoppingItem[],
  address: TDeliveryAddress,
  payment: TPayment
}
