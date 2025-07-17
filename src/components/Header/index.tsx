import {
  CartButton,
  HeaderActionsContainer,
  HeaderContainer,
  LocationButton,
} from './styles'
import logo from '../../assets/logo.png'
import { MapPin, ShoppingCartSimple } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { ShoppingContext } from '../../contexts/ShopppingContext'

export const Header = () => {
  const { shoppingState, didCartLengthChanged } = useContext(ShoppingContext)
  const { address } = shoppingState

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logo} alt="" />
      </NavLink>
      <HeaderActionsContainer>
        {
          address &&
            <LocationButton title="Change Location">
              <MapPin size={22} weight="fill" />
              <span>{address.city}, {address.state}</span>
            </LocationButton>
        }

        <NavLink to="/checkout">
          <CartButton
            $addedItems={shoppingState.cart.length}
            disabled={shoppingState.cart.length === 0}
            className={didCartLengthChanged ? 'shaking' : ''}
          >
            <ShoppingCartSimple size={22} weight="fill" />
          </CartButton>
        </NavLink>
      </HeaderActionsContainer>
    </HeaderContainer>
  )
}
