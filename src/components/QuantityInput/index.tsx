import { Minus, Plus } from 'phosphor-react'
import { InputContainer, StyledInput } from './styles'
import { useState, type ChangeEvent } from 'react'
import { MAX_QUANTITY_ALLOWED, MIN_QUANTITY_ALLOWED } from '../../App'

type TQuantityInputProps = {
  onChange: (value: number) => void
  value?: number,
  isDisabled?: boolean,
}

export const QuantityInput = ({
  onChange,
  value,
  isDisabled,
}: TQuantityInputProps) => {
  const [quantity, setQuantity] = useState(value || MIN_QUANTITY_ALLOWED)

  const updateQuantity = (newQuantity: number) => {
    setQuantity(newQuantity)
    onChange(newQuantity)
  }

  return (
    <InputContainer className={isDisabled ? 'disabled' : ''}>
      <Minus
        size={14}
        weight="bold"
        onClick={() => {
          if (isDisabled) return
          if (quantity > MIN_QUANTITY_ALLOWED) {
            updateQuantity(
              Number.isNaN(quantity)
                ? 0
                : quantity - 1,
            )
          }
        }}
      />
      <StyledInput
        type={isDisabled ? 'text' : 'number'}
        value={isDisabled ? 'MAX' : quantity}
        name="quantity"
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          let updated = e.currentTarget.valueAsNumber
          if (updated > MAX_QUANTITY_ALLOWED) updated = MAX_QUANTITY_ALLOWED
          if (Number.isNaN(updated)) updated = MIN_QUANTITY_ALLOWED
          setQuantity(updated)
          onChange(updated)
        }}
        disabled={isDisabled}
      />
      <Plus
        size={14}
        weight="bold"
        onClick={() => {
          if (isDisabled) return
          if (quantity < MAX_QUANTITY_ALLOWED) {
            updateQuantity(
              Number.isNaN(quantity)
                ? 1
                : quantity + 1,
            )
          }
        }}
      />
    </InputContainer>
  )
}
