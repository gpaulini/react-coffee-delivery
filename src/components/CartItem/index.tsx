import { Trash } from 'phosphor-react'
import type { TCoffee } from '../../@types/coffee'
import { coffeeImages, coffeeVariantsDict } from '../../static/coffee'
import { QuantityInput } from '../QuantityInput'
import {
  CartItemContainer,
  CartItemMiddleInfo,
  CartItemPrice,
  RemoveButton,
} from './styles'
import helpers from '../../helpers'

export const CartItem = ({
  variant,
  price,
  quantity,
}: TCoffee) => {
  const imgSrc = coffeeImages.find(src => src.includes(variant))
  return (
    <CartItemContainer>
      <img src={imgSrc} alt="" />

      <CartItemMiddleInfo>
        <span className="name">{coffeeVariantsDict[variant]}</span>
        <QuantityInput value={quantity} />
        <RemoveButton type="button">
          <Trash size={22} weight="regular" />
          <span>Remover</span>
        </RemoveButton>
      </CartItemMiddleInfo>

      <CartItemPrice>
        R$ {helpers.toBRL(price * quantity)}
      </CartItemPrice>
    </CartItemContainer>
  )
}
