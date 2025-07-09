import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine, Money,
} from 'phosphor-react'
import {
  CheckoutForm,
  CheckoutFormSection,
  AddressInputGroup,
  InputGroupLabel,
  AddressFormContainer,
  AddressInputContainer,
  AddressInput,
  PaymentInputGroup,
  PaymentFormContainer,
  PaymentOption,
  OrderReviewContainer,
  OrderReviewInfo,
  SubmitOrderButton,
  ZipcodeSearchingLabel,
  OptionalInputTag,
} from './styles'
import { CartItem } from '../../components/CartItem'
import { data as cartData } from '../../static/cart'
import { useState, type FormEvent } from 'react'
import helpers from '../../helpers'
import { useNavigate } from 'react-router-dom'

export const Checkout = () => {
  const navigate = useNavigate()

  const [isSearchingZipCode, setIsSearchingZipCode] = useState(false)

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    alert('pedido concluído!')
    navigate('/order-confirmation', { replace: true })
  }

  const productsPrice = cartData?.reduce((prev, cur) => {
    return prev + (cur.price * cur.quantity)
  }, 0)
  const deliveryFee = 4.5
  const totalPrice = productsPrice + deliveryFee

  const handleZipCodeKeyDown = (e: FormEvent<HTMLInputElement>) => {
    const input = e.currentTarget
    const isEighthDigit = input.value.length + 1 === 8
    if (isEighthDigit) {
      e.preventDefault()
      setIsSearchingZipCode(true)
    }
  }

  return (
    <CheckoutForm
      onSubmit={onSubmitHandler}
      action=""
    >
      <CheckoutFormSection className="deliver-input">
        <h2>Complete seu pedido</h2>

        <AddressInputGroup>
          <InputGroupLabel>
            <MapPinLine size={28} />
            <div>
              <h3>Endereço de Entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </InputGroupLabel>

          <AddressFormContainer>
            <AddressInputContainer>
              <AddressInput
                type="text"
                name="zipcode"
                placeholder="CEP"
                onKeyDown={handleZipCodeKeyDown}
              />

              {
                isSearchingZipCode &&
                  <ZipcodeSearchingLabel>
                    Buscando endereço...
                  </ZipcodeSearchingLabel>
              }
            </AddressInputContainer>

            <AddressInputContainer>
              <AddressInput
                type="text"
                name="street"
                placeholder="Rua"
              />
            </AddressInputContainer>

            <AddressInputContainer>
              <AddressInput
                type="text"
                name="number"
                placeholder="Número"
              />
            </AddressInputContainer>

            <AddressInputContainer>
              <AddressInput
                type="text"
                name="extra"
                placeholder="Complemento"
              />
              <OptionalInputTag>
                Opcional
              </OptionalInputTag>
            </AddressInputContainer>

            <AddressInputContainer>
              <AddressInput
                type="text"
                name="district"
                placeholder="Bairro"
              />
            </AddressInputContainer>

            <AddressInputContainer>
              <AddressInput
                type="text"
                name="city"
                placeholder="Cidade"
              />
            </AddressInputContainer>

            <AddressInputContainer>
              <AddressInput
                type="text"
                name="state"
                placeholder="UF"
              />
            </AddressInputContainer>
          </AddressFormContainer>
        </AddressInputGroup>

        <PaymentInputGroup>
          <InputGroupLabel>
            <CurrencyDollar size={28} />
            <div>
              <h3>Pagamento</h3>
              <p>
                O pagamento é feito na entrega.
                Escolha a forma que deseja pagar
              </p>
            </div>
          </InputGroupLabel>

          <PaymentFormContainer>
            <PaymentOption>
              <CreditCard size={18} />
              <span>cartão de crédito</span>
            </PaymentOption>

            <PaymentOption>
              <Bank size={18} />
              <span>cartão de débito</span>
            </PaymentOption>

            <PaymentOption>
              <Money size={18} />
              <span>dinheiro</span>
            </PaymentOption>
          </PaymentFormContainer>
        </PaymentInputGroup>
      </CheckoutFormSection>

      <CheckoutFormSection className="order-review">
        <h2>Cafés selecionados</h2>

        <OrderReviewContainer>
          <ul>
            {
              cartData.length &&
                cartData.map(data => {
                  return (
                    <li key={btoa(data.variant)}>
                      <CartItem {...data} />
                    </li>
                  )
                })
            }
          </ul>

          <OrderReviewInfo>
            <div>
              <span>Total de itens</span>
              <span>
                R$ {helpers.toBRL(productsPrice)}
              </span>
            </div>
            <div>
              <span>Entrega</span>
              <span>R$ {helpers.toBRL(deliveryFee)}</span>
            </div>
            <div>
              <span>Total</span>
              <span>R$ {helpers.toBRL(totalPrice)}</span>
            </div>
          </OrderReviewInfo>

          <SubmitOrderButton type="submit">
            confirmar pedido
          </SubmitOrderButton>
        </OrderReviewContainer>

      </CheckoutFormSection>
    </CheckoutForm>
  )
}
