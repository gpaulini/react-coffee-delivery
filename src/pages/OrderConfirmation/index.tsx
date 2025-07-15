import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { FlexContainer, OrderDetailsList, OrderDetailsListItem } from './styles'
import deliveryImage from '../../assets/delivery.png'
import { useContext } from 'react'
import { ShoppingContext } from '../../contexts/ShopppingContext'
import { coffeeVariantsDict } from '../../@static/coffee'
import helpers from '../../helpers'

export const OrderConfirmation = () => {
  const { shoppingState } = useContext(ShoppingContext)
  const { cart, address, payment } = shoppingState

  const totalPrice = cart.reduce((prev, cur) => {
    return prev + (cur.price * cur.quantity)
  }, 0)

  return (
    <FlexContainer>
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você.</p>

        <OrderDetailsList>
          <OrderDetailsListItem className="location">
            <div className="iconWrapper">
              <MapPin size={18} weight="fill" />
            </div>
            <p>
              Entrega em <br />
              <b>
                {address.street}, {address.number}
                {address.extra ? '/' + address.extra : ''}
              </b>
              <br />
              {address.district} - {address.city}, {address.state}
            </p>
          </OrderDetailsListItem>

          <OrderDetailsListItem className="time-to-deliver">
            <div className="iconWrapper">
              <Timer size={18} weight="fill" />
            </div>
            <p>
              Previsão de Entrega <br />
              <b>20 min - 30 min</b>
            </p>
          </OrderDetailsListItem>

          <OrderDetailsListItem className="payment">
            <div className="iconWrapper">
              <CurrencyDollar size={18} weight="bold" />
            </div>
            <p>
              Pagamento na entrega <br />
              <b>{payment.toUpperCase()}</b>
            </p>
          </OrderDetailsListItem>

          <div>
            {
              cart.length &&
              cart.map((item) => {
                return (
                  <p key={btoa(item.variant)}>
                    <b>{item.quantity}x</b> {coffeeVariantsDict[item.variant]}
                  </p>
                )
              })
            }
          </div>
          <div>
            <span>Total</span>
            <span>R$ {helpers.toBRL(totalPrice)}</span>
          </div>
        </OrderDetailsList>
      </div>
      <img src={deliveryImage} alt="" />
    </FlexContainer>
  )
}
