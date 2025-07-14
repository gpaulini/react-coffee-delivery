import type { TShoppingItemVariant } from '../@types/shopping-item'

export const coffeeImages: string[] = Object.values<Record<string, string>>(
  import.meta.glob(
    '../assets/coffees/*.png',
    { eager: true },
  ),
).map(src => src.default)

export const coffeeVariantsDict: Record<TShoppingItemVariant, string> = {
  arabe: 'Árabe',
  'cafe-com-leite': 'Café com leite',
  capuccino: 'Capuccino',
  'chocolate-quente': 'Chocolate quente',
  cubano: 'Cubano',
  'expresso-americano': 'Expresso Americano',
  'expresso-cremoso': 'Expresso Cremoso',
  'expresso-gelado': 'Expresso Gelado',
  'expresso-tradicional': 'Expresso Tradicional',
  havaiano: 'Havaiano',
  irlandes: 'Irlandês',
  latte: 'Latte',
  macchiato: 'Macchiato',
  mocaccino: 'Mocaccino',
} as const
