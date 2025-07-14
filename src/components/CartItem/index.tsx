import { Trash } from 'phosphor-react'
import type { TShoppingItem } from '../../@types/shopping-item'
import { coffeeImages, coffeeVariantsDict } from '../../@static/coffee'
import { QuantityInput } from '../QuantityInput'
import {
  CartItemContainer,
  CartItemMiddleInfo,
  CartItemPrice,
  RemoveButton,
} from './styles'
import helpers from '../../helpers'
import { useState } from 'react'

export const CartItem = ({
  variant,
  price,
  quantity,
}: TShoppingItem) => {
  const [totalPrice, setTotalPrice] = useState(price * quantity)

  const handleChangeItemQuantity = (newQuantity: number) => {
    setTotalPrice(price * newQuantity)
  }

  const imgSrc = coffeeImages.find(src => src.includes(variant))

  return (
    <CartItemContainer>
      <img src={imgSrc} alt="" />

      <CartItemMiddleInfo>
        <span className="name">{coffeeVariantsDict[variant]}</span>
        <QuantityInput
          onChange={handleChangeItemQuantity}
          value={quantity}
        />
        <RemoveButton type="button">
          <Trash size={22} weight="regular" />
          <span>Remover</span>
        </RemoveButton>
      </CartItemMiddleInfo>

      <CartItemPrice>
        R$ {helpers.toBRL(totalPrice)}
      </CartItemPrice>
    </CartItemContainer>
  )
}
