import {
  CartButton,
  HeaderActionsContainer,
  HeaderContainer,
  LocationButton,
} from './styles'
import logo from '../../assets/logo.png'
import { MapPin, ShoppingCartSimple } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logo} alt="" />
      </NavLink>
      <HeaderActionsContainer>
        <LocationButton title="Change Location">
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </LocationButton>

        <NavLink to="/checkout">
          <CartButton $addedItems={3}>
            <ShoppingCartSimple size={22} weight="fill" />
          </CartButton>
        </NavLink>
      </HeaderActionsContainer>
    </HeaderContainer>
  )
}
