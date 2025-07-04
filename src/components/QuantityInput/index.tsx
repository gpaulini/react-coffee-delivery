import { Minus, Plus } from 'phosphor-react'
import { InputContainer, StyledInput } from './styles'
import { useState } from 'react'

export const QuantityInput = () => {
  const [quantity, setQuantity] = useState(1)

  return (
    <InputContainer>
      <Minus
        size={14}
        weight="fill"
        onClick={() => setQuantity(prev => prev - 1)}
      />
      <StyledInput
        type="number"
        name="quantity"
        value={quantity}
        min={1}
        max={99}
      />
      <Plus
        size={14}
        weight="fill"
        onClick={() => setQuantity(prev => prev + 1)}
      />
    </InputContainer>
  )
}
