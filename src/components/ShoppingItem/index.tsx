import { ShoppingCartSimple } from 'phosphor-react'
import type { TCoffee } from '../../@types/coffee'
import {
  ProductAddToCartButton,
  ProductContainer,
  ProductForm,
  ProductLabel,
} from './styles'
import { QuantityInput } from '../QuantityInput'
import { coffeeImages, coffeeVariantsDict } from '../../static/coffee'
import helpers from '../../helpers'

export const ShoppingItem = ({
  variant,
  labels,
  description,
  price,
  quantity,
}: TCoffee) => {
  const imgSrc = coffeeImages.find(src => src.includes(variant))

  return (
    <ProductContainer>
      <img src={imgSrc} alt="" />

      <div className="labels">
        {
          labels?.length &&
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
          <strong>{helpers.toBRL(price * quantity)}</strong>
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
