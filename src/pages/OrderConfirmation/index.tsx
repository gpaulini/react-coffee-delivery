import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { FlexContainer, OrderDetailsList, OrderDetailsListItem } from './styles'
import deliveryImage from '../../assets/delivery.png'

export const OrderConfirmation = () => {
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
              Entrega em <b>Rua Santo Antônio, 357</b><br />
              Bom Fim - Porto Alegre, RS
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
              <CurrencyDollar size={18} weight="fill" />
            </div>
            <p>
              Pagamento na entrega <br />
              <b>Cartão de crédito</b>
            </p>
          </OrderDetailsListItem>
        </OrderDetailsList>
      </div>
      <img src={deliveryImage} alt="" />
    </FlexContainer>
  )
}
