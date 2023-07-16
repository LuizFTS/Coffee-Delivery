import { ReactNode, createContext, useReducer } from 'react'
import { Coffee, Order, coffeeDispatch } from '../reducers/coffees/reducer'

import {
  Tradicional,
  Americano,
  Cremoso,
  Gelado,
  ComLeite,
  Latte,
  Capuccino,
  Macchiato,
  Mochaccino,
  Chocolate,
  Cubano,
  Havaiano,
  Arabe,
  Irlandes,
} from '../assets/Coffee'
import {
  addToCartAction,
  confirmOrderAction,
  decreaseQuantityAction,
  increaseQuantityAction,
  removeItemFromTheCartAction,
} from '../reducers/coffees/actions'

interface CartContextProps {
  children: ReactNode
}

interface CartContextType {
  coffee: Coffee[]
  orderData: Order
  confirmOrder: (order: Order) => void
  increaseQuantity: (item: Coffee) => void
  decreaseQuantity: (item: Coffee) => void
  addToCart: () => void
  increaseCartQuantity: (item: Coffee) => void
  decreaseCartQuantity: (item: Coffee) => void
  removeItemFromTheCart: (item: Coffee) => void
}

export const CartContext = createContext({} as CartContextType)

const initialState = {
  coffee: [
    {
      id: 1,
      name: 'expresso tradicional',
      text: 'O tradicional café feito com água quente e grãos moídos',
      tags: ['tradicional'],
      price: 9.9,
      img: Tradicional,
      quantity: 0,
      cartQuantity: 0,
      cart: false,
    },
    {
      id: 2,
      name: 'expresso americano',
      text: 'Expresso diluído, menos intenso que o tradicional',
      tags: ['tradicional'],
      price: 9.9,
      img: Americano,
      quantity: 0,
      cartQuantity: 0,
      cart: false,
    },
    {
      id: 3,
      name: 'expresso cremoso',
      text: 'Café expresso tradicional com espuma cremosa',
      tags: ['tradicional'],
      price: 9.9,
      img: Cremoso,
      quantity: 0,
      cartQuantity: 0,
      cart: false,
    },
    {
      id: 4,
      name: 'expresso gelado',
      text: 'Bebida preparada com café expresso e cubos de gelo',
      tags: ['tradicional', 'gelado'],
      price: 9.9,
      img: Gelado,
      quantity: 0,
      cartQuantity: 0,
      cart: false,
    },
    {
      id: 5,
      name: 'café com leite',
      text: 'Meio a meio de expresso tradicional com leite vaporizado',
      tags: ['tradicional', 'com leite'],
      price: 9.9,
      img: ComLeite,
      quantity: 0,
      cartQuantity: 0,
      cart: false,
    },
    {
      id: 6,
      name: 'Latte',
      text: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      tags: ['tradicional', 'com leite'],
      price: 9.9,
      img: Latte,
      quantity: 0,
      cartQuantity: 0,
      cart: false,
    },
    {
      id: 7,
      name: 'Capuccino',
      text: 'Bebida com canela feita de doses iguais de café, leite e espuma',
      tags: ['tradicional', 'com leite'],
      price: 9.9,
      img: Capuccino,
      quantity: 0,
      cartQuantity: 0,
      cart: false,
    },
    {
      id: 8,
      name: 'Macchiato',
      text: 'Café expresso misturado com um pouco de leite quente e espuma',
      tags: ['tradicional', 'com leite'],
      price: 9.9,
      img: Macchiato,
      quantity: 0,
      cartQuantity: 0,
      cart: false,
    },
    {
      id: 9,
      name: 'Mocaccino',
      text: 'Café expresso com calda de chocolate, pouco leite e espuma',
      tags: ['tradicional', 'com leite'],
      price: 9.9,
      img: Mochaccino,
      quantity: 0,
      cartQuantity: 0,
      cart: false,
    },
    {
      id: 10,
      name: 'Chocolate quente',
      text: 'Bebida feita com chocolate dissolvido no leite quente e café',
      tags: ['especial', 'com leite'],
      price: 9.9,
      img: Chocolate,
      quantity: 0,
      cartQuantity: 0,
      cart: false,
    },
    {
      id: 11,
      name: 'Cubano',
      text: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
      tags: ['especial', 'alcoólico', 'gelado'],
      price: 9.9,
      img: Cubano,
      quantity: 0,
      cartQuantity: 0,
      cart: false,
    },
    {
      id: 12,
      name: 'havaiano',
      text: 'Bebida adocicada preparada com café e leite de coco',
      tags: ['especial'],
      price: 9.9,
      img: Havaiano,
      quantity: 0,
      cartQuantity: 0,
      cart: false,
    },
    {
      id: 13,
      name: 'árabe',
      text: 'Bebida preparada com grãos de café árabe e especiarias',
      tags: ['especial'],
      price: 9.9,
      img: Arabe,
      quantity: 0,
      cartQuantity: 0,
      cart: false,
    },
    {
      id: 14,
      name: 'Irlandês',
      text: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      tags: ['especial', 'alcoólico'],
      price: 9.9,
      img: Irlandes,
      quantity: 0,
      cartQuantity: 0,
      cart: false,
    },
  ],
  orderData: {
    cep: '',
    rua: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    uf: '',
    payment: 0,
  },
}

export const CartContextProvider = ({ children }: CartContextProps) => {
  const [coffeesState, dispatch] = useReducer(coffeeDispatch, initialState)

  const { coffee, orderData } = coffeesState

  function increaseQuantity(item: Coffee) {
    dispatch(increaseQuantityAction(item))
  }

  function decreaseQuantity(item: Coffee) {
    dispatch(decreaseQuantityAction(item))
  }

  function addToCart() {
    dispatch(addToCartAction())
  }

  function increaseCartQuantity(item: Coffee) {
    dispatch(increaseCartQuantity(item))
  }

  function decreaseCartQuantity(item: Coffee) {
    dispatch(decreaseCartQuantity(item))
  }

  function removeItemFromTheCart(item: Coffee) {
    dispatch(removeItemFromTheCartAction(item))
  }

  function confirmOrder(order: Order) {
    dispatch(confirmOrderAction(order))
  }

  return (
    <CartContext.Provider
      value={{
        orderData,
        coffee,
        confirmOrder,
        increaseQuantity,
        decreaseQuantity,
        addToCart,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeItemFromTheCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
