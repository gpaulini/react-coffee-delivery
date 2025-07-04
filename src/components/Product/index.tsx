import { ShoppingCartSimple } from 'phosphor-react'
import type { TCoffeeVariant, TProduct } from '../../@types/coffee'
import {
  ProductAddToCartButton,
  ProductContainer,
  ProductForm,
  ProductLabel,
} from './styles'
import { QuantityInput } from '../QuantityInput'

const coffeeImages: string[] = Object.values<Record<string, string>>(
  import.meta.glob(
    '../../assets/coffees/*.png',
    { eager: true },
  ),
).map(src => src.default)

const coffeeVariantsDict: Record<TCoffeeVariant, string> = {
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

export const Product = ({
  variant,
  labels,
  description,
  price,
  quantity,
}: TProduct) => {
  const imgSrc = coffeeImages.find(src => src.includes(variant))

  return (
    <ProductContainer>
      <img src={imgSrc} alt="" />

      <div className="labels">
        {
          labels.length &&
          labels.map((lab, idx) => {
            return <ProductLabel key={idx}>{lab}</ProductLabel>
          })
        }
      </div>

      <h2 className="name">
        {coffeeVariantsDict[variant]}
      </h2>

      <p className="description">
        {description}
      </p>

      <ProductForm>
        <div className="totalPrice">
          <span>R$</span>
          <strong>{(price * quantity).toFixed(2)}</strong>
        </div>

        <div className="actions">
          <QuantityInput />
          <ProductAddToCartButton>
            <ShoppingCartSimple size={20} weight="fill" />
          </ProductAddToCartButton>
        </div>
      </ProductForm>
    </ProductContainer>
  )
}
