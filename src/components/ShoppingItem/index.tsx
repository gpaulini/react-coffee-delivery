import { ShoppingCartSimple } from 'phosphor-react'
import type { TShoppingItem } from '../../@types/shopping-item'
import {
  ProductAddToCartButton,
  ProductContainer,
  ProductForm,
  ProductLabel,
} from './styles'
import { QuantityInput } from '../QuantityInput'
import { coffeeImages, coffeeVariantsDict } from '../../@static/coffee'
import helpers from '../../helpers'
import { useContext, useState, type FormEvent } from 'react'
import { ShoppingContext } from '../../contexts/ShopppingContext'
import { MAX_QUANTITY_ALLOWED } from '../../App'

type TShoppingItemProps = {
  item: TShoppingItem,
}

export const ShoppingItem = ({
  item,
}: TShoppingItemProps) => {
  const {
    variant,
    description,
    price,
    quantity,
    labels,
  } = item

  const [totalPrice, setTotalPrice] = useState(quantity * price)

  const { shoppingState, shoppingDispatch } = useContext(ShoppingContext)

  const [canAddToCart, setCanAddToCart] = useState(true)

  const imgSrc = coffeeImages.find(src => src.includes(variant))

  const handleAddToCart = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!canAddToCart) return
    const formData = new FormData(e.currentTarget)
    const inputDataQuantity = Number(formData.get('quantity'))
    let quantityLimitForAddedItem = Infinity
    if (!inputDataQuantity) return
    if (inputDataQuantity === MAX_QUANTITY_ALLOWED) setCanAddToCart(false)

    const addedItem = shoppingState.cart.find(item => item.variant === variant)
    if (addedItem) {
      quantityLimitForAddedItem = MAX_QUANTITY_ALLOWED - addedItem.quantity

      if (inputDataQuantity >= quantityLimitForAddedItem) {
        setCanAddToCart(false)
      }
    }

    const finalQuantityToBeAdded =
      inputDataQuantity <= quantityLimitForAddedItem
        ? inputDataQuantity
        : quantityLimitForAddedItem

    shoppingDispatch({
      type: 'ADD_TO_CART',
      payload: {
        item: {
          ...item,
          quantity: finalQuantityToBeAdded,
        },
      },
    })

    alert(finalQuantityToBeAdded + 'x itens adicionados')
  }

  const handleOnChangeQuantity = (newQuantity: number) => {
    setTotalPrice((price * newQuantity) || 0)
  }

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

      <ProductForm
        onSubmit={handleAddToCart}
      >
        {
          canAddToCart &&
            <div className="totalPrice">
              <span>R$</span>
              <strong>{helpers.toBRL(totalPrice)}</strong>
            </div>
        }

        <div className="actions">
          <QuantityInput
            onChange={handleOnChangeQuantity}
            isDisabled={!canAddToCart}
          />
          <ProductAddToCartButton
            type="submit"
            disabled={!canAddToCart}
          >
            <ShoppingCartSimple size={20} weight="fill" />
          </ProductAddToCartButton>
        </div>
      </ProductForm>
    </ProductContainer>
  )
}
