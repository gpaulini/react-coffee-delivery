import { Bank, CreditCard, Money } from 'phosphor-react'
import { PaymentFormContainer, PaymentOption } from './styles'
import { useFormContext } from 'react-hook-form'
import type { TCheckoutFormSchema } from '../../schema'
import type { TPayment } from '../../@types/shopping-item'
import type React from 'react'

type TPaymentOptionWrapperProps = {
  value: TPayment,
  children: React.ReactNode,
  onSelect: (value: TPayment) => void,
  selected: TPayment | undefined
}

const PaymentOptionWrapper = ({
  value,
  children,
  onSelect,
  selected,
}: TPaymentOptionWrapperProps) => {
  const isSelected = selected === value

  return (
    <PaymentOption
      type="button"
      onClick={() => onSelect(value)}
      className={isSelected ? 'active' : ''}
    >
      {children}
      <span>{value.toUpperCase()}</span>
    </PaymentOption>
  )
}

export const PaymentForm = () => {
  const { register, watch, setValue } = useFormContext<TCheckoutFormSchema>()

  const payment = watch('payment')

  const handleSelect = (value: TPayment) => {
    setValue('payment', value)
  }

  return (
    <PaymentFormContainer>
      <PaymentOptionWrapper
        value="credit"
        onSelect={handleSelect}
        selected={payment}
      >
        <CreditCard size={18} />
      </PaymentOptionWrapper>

      <PaymentOptionWrapper
        value="debit"
        onSelect={handleSelect}
        selected={payment}
      >
        <Bank size={18} />
      </PaymentOptionWrapper>

      <PaymentOptionWrapper
        value="cash"
        onSelect={handleSelect}
        selected={payment}
      >
        <Money size={18} />
      </PaymentOptionWrapper>

      <input type="hidden" {...register('payment')} />
    </PaymentFormContainer>
  )
}
