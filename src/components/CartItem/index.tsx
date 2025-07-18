import { Trash } from 'phosphor-react'
import type {
  TShoppingItem,
  TShoppingItemVariant,
} from '../../@types/shopping-item'
import { coffeeImages, coffeeVariantsDict } from '../../@static/coffee'
import { QuantityInput } from '../QuantityInput'
import {
  CartItemContainer,
  CartItemMiddleInfo,
  CartItemPrice,
  RemoveButton,
} from './styles'
import helpers from '../../helpers'
import { useContext, useState } from 'react'
import { ShoppingContext } from '../../contexts/ShopppingContext'

type TCartItemProps = {
  item: TShoppingItem,
  onRemove: (variant: TShoppingItemVariant) => void
}

export const CartItem = ({
  item,
  onRemove,
}: TCartItemProps) => {
  const { shoppingDispatch } = useContext(ShoppingContext)

  const { price, quantity, variant } = item
  const [totalPrice, setTotalPrice] = useState(price * quantity)

  const handleChangeItemQuantity = (newQuantity: number) => {
    setTotalPrice(price * newQuantity)
    shoppingDispatch({
      type: 'UPDATE_CART_ITEM_QUANTITY',
      payload: {
        variant,
        newQuantity,
      },
    })
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
        <RemoveButton
          type="button"
          onClick={() => {
            onRemove(variant)
          }}
        >
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
