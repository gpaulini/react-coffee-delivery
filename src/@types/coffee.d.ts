export type TCoffeeVariant =
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

export type TCoffeeLabel =
  | 'tradicional'
  | 'gelado'
  | 'com leite'
  | 'especial'
  | 'alcoólico'

export type TProduct = {
  variant: TCoffeeVariant,
  labels: TCoffeeLabel[],
  description: string,
  price: number,
  quantity: number
}
