import { Minus, Plus } from 'phosphor-react'
import { InputContainer, StyledInput } from './styles'
import { useState, type FormEvent } from 'react'

type QuantityInputProps = {
  value?: number
}

export const QuantityInput = ({
  value,
}: QuantityInputProps) => {
  const [quantity, setQuantity] = useState(value || 1)

  return (
    <InputContainer>
      <Minus
        size={14}
        weight="bold"
        onClick={() => setQuantity(prev => prev - 1)}
      />
      <StyledInput
        type="number"
        name="quantity"
        value={quantity}
        onChange={
          (e: FormEvent<HTMLInputElement>) => {
            setQuantity(parseInt(e.currentTarget.value))
          }
        }
        min={1}
        max={99}
      />
      <Plus
        size={14}
        weight="bold"
        onClick={() => setQuantity(prev => prev + 1)}
      />
    </InputContainer>
  )
}
