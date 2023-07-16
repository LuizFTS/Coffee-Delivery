import {
  CartContainer,
  HeaderContainer,
  LocationContainer,
  LocationText,
  QuantityContainer,
} from './styles'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import Logo from '../../assets/Logo.svg'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export const Header = () => {
  const { coffee } = useContext(CartContext)

  const isInTheCart = coffee.filter((item) => item.cartQuantity > 0)

  const coffeeQuantity = isInTheCart.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.cartQuantity
  }, 0)

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={Logo} alt="logo" />
      </NavLink>
      <nav>
        <LocationContainer>
          <span>
            <MapPin size={22} weight="fill" />
          </span>
          <LocationText>Vitória, ES</LocationText>
        </LocationContainer>
        {coffeeQuantity > 0 ? (
          <NavLink to="/checkout">
            <CartContainer>
              <ShoppingCart size={22} weight="fill" />
              {coffeeQuantity > 0 && (
                <QuantityContainer>{coffeeQuantity}</QuantityContainer>
              )}
            </CartContainer>
          </NavLink>
        ) : (
          <CartContainer>
            <ShoppingCart size={22} weight="fill" />
          </CartContainer>
        )}
      </nav>
    </HeaderContainer>
  )
}
