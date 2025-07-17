import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import {
  CheckoutForm,
  CheckoutFormSection,
  AddressInputGroup,
  InputGroupLabel,
  PaymentInputGroup,
  OrderReviewContainer,
  OrderReviewInfo,
  SubmitOrderButton,
  OrderReviewList,
  FormErrorsList,
  FormError,
} from './styles'
import { CartItem } from '../../components/CartItem'
import {
  useContext,
  useEffect,
} from 'react'
import helpers from '../../helpers'
import { Navigate, useNavigate } from 'react-router-dom'
import { ShoppingContext } from '../../contexts/ShopppingContext'
import type {
  TDeliveryAddress,
  TShoppingItemVariant,
} from '../../@types/shopping-item'
import { AddressForm } from '../../components/AddressForm'
import { FormProvider, useForm, type FieldErrors } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  checkoutFormValidationSchema,
  type TCheckoutFormSchema,
} from '../../schema'
import { PaymentForm } from '../../components/PaymentForm'

export const Checkout = () => {
  const { shoppingState, shoppingDispatch } = useContext(ShoppingContext)

  const useFormMethods = useForm<TCheckoutFormSchema>({
    resolver: zodResolver(checkoutFormValidationSchema),
  })

  const { handleSubmit, formState: { errors: formErrors } } = useFormMethods

  const navigate = useNavigate()

  const onValidSubmit = (data: TCheckoutFormSchema) => {
    const { payment, ...address } = data
    shoppingDispatch({
      type: 'SAVE_ADDRESS',
      payload: {
        address: { ...address },
      },
    })

    shoppingDispatch({
      type: 'SET_PAYMENT',
      payload: { payment },
    })

    navigate('/order-confirmation', { replace: true })
  }

  const handleRemoveCartItem = (variant: TShoppingItemVariant) => {
    shoppingDispatch({
      type: 'REMOVE_FROM_CART',
      payload: {
        variant,
      },
    })
  }

  const productsPrice = shoppingState.cart.reduce((prev, cur) => {
    return prev + (cur.price * cur.quantity)
  }, 0)
  const deliveryFee = 4.5
  const totalPrice = productsPrice + deliveryFee

  const addressFields: Record<keyof TDeliveryAddress, true> = {
    zipcode: true,
    street: true,
    number: true,
    extra: true,
    district: true,
    city: true,
    state: true,
  }

  const addressFormErrors =
    ((errors: FieldErrors<TCheckoutFormSchema>) => {
      return (
        Object.entries(errors)
          .map(([key, error]) => {
            if (!(key in addressFields)) return ''
            return error.message ?? ''
          })
          .filter(item => item)
      )
    })(formErrors)

  useEffect(() => {
    if (shoppingState.isOrderFinished) {
      shoppingDispatch({
        type: 'FINISH_ORDER',
      })

      shoppingDispatch({
        type: 'SET_IS_ORDER_FINISHED',
        payload: {
          isOrderFinished: false,
        },
      })
    }
  }, [shoppingState, shoppingDispatch])

  if (shoppingState.isOrderFinished) {
    return <Navigate to="/" replace />
  }

  return (
    <CheckoutForm
      onSubmit={handleSubmit(onValidSubmit)}
      action=""
      autoComplete="off"
    >
      <CheckoutFormSection className="deliver-input">
        <h2>Complete seu pedido</h2>

        <FormProvider {...useFormMethods}>
          <AddressInputGroup>
            <InputGroupLabel>
              <MapPinLine size={28} />
              <div>
                <h3>Endereço de Entrega</h3>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </InputGroupLabel>

            <AddressForm />

            {
              addressFormErrors.length > 0 &&
                <FormErrorsList>
                  {
                    addressFormErrors
                      .map((message, idx) => {
                        return (
                          <li key={btoa(message + idx)}>
                            <small>{message}</small>
                          </li>
                        )
                      })
                  }
                </FormErrorsList>
            }
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

            <PaymentForm />

            {
              formErrors.payment &&
                <FormError>{formErrors.payment.message}</FormError>
            }
          </PaymentInputGroup>
        </FormProvider>
      </CheckoutFormSection>

      <CheckoutFormSection className="order-review">
        <h2>Cafés selecionados</h2>

        <OrderReviewContainer>
          <OrderReviewList>
            {
              shoppingState.cart.map(data => {
                return (
                  <li key={btoa(data.variant)}>
                    <CartItem
                      item={{ ...data }}
                      onRemove={handleRemoveCartItem}
                    />
                  </li>
                )
              })
            }
          </OrderReviewList>

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
