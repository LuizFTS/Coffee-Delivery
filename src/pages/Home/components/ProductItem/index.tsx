import { useContext } from 'react'
import {
  AddQuantity,
  CartShoppingButton,
  Price,
  ProductContainer,
  ProductFooter,
  ProductHeader,
  ProductText,
  Tag,
} from './styles'

import { Plus, Minus, ShoppingCart } from '@phosphor-icons/react'
import { CartContext } from '../../../../contexts/CartContext'
import { useNavigate } from 'react-router-dom'

interface ProductItemProps {
  id: number
  name: string
  price: number
  tags: string[]
  text: string
  img: string
}

export const ProductItem = ({
  id,
  name,
  price,
  tags,
  text,
  img,
}: ProductItemProps) => {
  const navigate = useNavigate()
  const { decreaseQuantity, increaseQuantity, addToCart, coffee } =
    useContext(CartContext)

  // const [coffeeQuantity, setCoffeeQuantity] = useState<number>(0)

  function handleAddCoffee() {
    increaseQuantity({
      id,
      quantity: 1,
      cartQuantity: 0,
      img,
      name,
      price,
      cart: false,
      tags,
      text,
    })
  }

  function handleSubtractCoffee() {
    decreaseQuantity({
      id,
      quantity: 1,
      cartQuantity: 0,
      img,
      name,
      price,
      cart: false,
      tags,
      text,
    })
  }

  function handleAddCoffeeToCart() {
    const currentCoffee = coffee.filter((item) => item.id === id)[0].quantity
    if (currentCoffee === 0) {
      return
    }

    addToCart()
    const coffeesInTheCart = coffee.filter((item) => item.cartQuantity > 0)

    if (coffeesInTheCart.length < 0) {
      return
    }
    navigate('/checkout')
  }

  const coffeeQuantity = coffee.find((item) => item.id === id)?.quantity

  return (
    <ProductContainer>
      <ProductHeader>
        <img src={img} alt={name} />
        <div>
          {tags.map((item) => {
            return <Tag key={item}>{item}</Tag>
          })}
        </div>
      </ProductHeader>
      <ProductText>
        <h3>{name}</h3>
        <p>{text}</p>
      </ProductText>
      <ProductFooter>
        <Price>
          <span>R$</span>
          <p>{price.toFixed(2).replace('.', ',')}</p>
        </Price>
        <AddQuantity>
          <button onClick={handleSubtractCoffee}>
            <Minus weight="bold" size={14} />
          </button>
          <p>{coffeeQuantity}</p>
          <button onClick={handleAddCoffee}>
            <Plus weight="bold" size={14} />
          </button>
        </AddQuantity>
        <CartShoppingButton onClick={handleAddCoffeeToCart}>
          <ShoppingCart weight="fill" size={22} />
        </CartShoppingButton>
      </ProductFooter>
    </ProductContainer>
  )
}
