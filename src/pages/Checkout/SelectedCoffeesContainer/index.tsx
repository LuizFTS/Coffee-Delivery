import { Minus, Plus, Trash } from '@phosphor-icons/react'
import {
  AddQuantity,
  CoffeeContainer,
  Coffes,
  ConfirmButton,
  RemoveCoffee,
  SelectedCoffees,
  Separator,
} from './styles'

import { useContext } from 'react'
import { CartContext } from '../../../contexts/CartContext'
import { TotalValues } from '../TotalValues'

export const SelectedCoffeesContainer = () => {
  const {
    coffee,
    decreaseCartQuantity,
    increaseCartQuantity,
    removeItemFromTheCart,
  } = useContext(CartContext)

  const coffeeInTheCart = coffee.filter((item) => item.cartQuantity > 0)

  function handleDecreaseCartQuantity(id: number) {
    const selectedCoffee = coffee.filter((item) => item.id === id)[0]
    decreaseCartQuantity(selectedCoffee)
  }

  function handleIncreaseCartQuantity(id: number) {
    const selectedCoffee = coffee.filter((item) => item.id === id)[0]
    increaseCartQuantity(selectedCoffee)
  }

  function handleRemoveCartItem(id: number) {
    const selectedCoffee = coffee.filter((item) => item.id === id)[0]
    removeItemFromTheCart(selectedCoffee)
  }

  return (
    <SelectedCoffees>
      {coffeeInTheCart &&
        coffeeInTheCart.map((item) => {
          return (
            <Coffes key={item.name}>
              <CoffeeContainer>
                <img src={item.img} alt="Café" />
                <div>
                  <h2>{item.name}</h2>
                  <div>
                    <AddQuantity>
                      <button
                        onClick={() => handleDecreaseCartQuantity(item.id)}
                      >
                        <Minus weight="bold" size={14} />
                      </button>
                      <p>{item.cartQuantity}</p>
                      <button
                        onClick={() => handleIncreaseCartQuantity(item.id)}
                      >
                        <Plus weight="bold" size={14} />
                      </button>
                    </AddQuantity>
                    <RemoveCoffee onClick={() => handleRemoveCartItem(item.id)}>
                      <button>
                        <Trash size={16} />
                      </button>
                      <p>Remover</p>
                    </RemoveCoffee>
                  </div>
                </div>
                <p>R${item.price.toFixed(2).replace('.', ',')}</p>
              </CoffeeContainer>
              <Separator key={`${item.name}-${item.quantity}`} />
            </Coffes>
          )
        })}

      {coffee.length > 0 && <TotalValues />}
      <ConfirmButton
        form="addressform"
        type="submit"
        value="Confirmar pedido"
      />
    </SelectedCoffees>
  )
}
