import { produce } from 'immer'
import { ActionTypes } from './actions'

export interface Coffee {
  id: number
  name: string
  text: string
  tags: string[]
  quantity: number
  cartQuantity: number
  price: number
  img: string
  cart: boolean
}

export interface Order {
  cep: string
  rua: string
  numero: string
  complemento?: string
  bairro: string
  cidade: string
  uf: string
  payment: number
}

export interface CoffeeState {
  coffee: Coffee[]
  orderData: Order
}

export const coffeeDispatch = (state: CoffeeState, action: any) => {
  switch (action.type) {
    case ActionTypes.INCREASE_COFFEE: {
      const { coffee } = state

      const currentCoffee = coffee.findIndex(
        (item) => item.id === action.payload.id,
      )

      const quantityAdded = coffee[currentCoffee].quantity + 1

      return produce(state, (draft) => {
        draft.coffee[currentCoffee].quantity = quantityAdded
      })
    }
    case ActionTypes.DECREASE_COFFEE: {
      const { coffee } = state

      const currentCoffee = coffee.findIndex(
        (item) => item.id === action.payload.id,
      )
      if (coffee[currentCoffee].quantity === 0) {
        return state
      }

      const quantitySubtracted = coffee[currentCoffee].quantity - 1

      return produce(state, (draft) => {
        draft.coffee[currentCoffee].quantity = quantitySubtracted
      })
    }

    case ActionTypes.ADD_TO_CART: {
      const { coffee } = state
      const totalCoffee = coffee.filter((item) => item.quantity > 0)

      if (totalCoffee.length === 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.coffee.filter((item) => item.quantity > 0)
        draft.coffee.map((item) => (item.cart = true))
        draft.coffee.map(
          (item) => (item.cartQuantity = item.cartQuantity + item.quantity),
        )
        draft.coffee.map((item) => (item.quantity = 0))
      })
    }

    case ActionTypes.INCREASE_CART_COFFEE: {
      const { coffee } = state

      const currentCoffee = coffee.findIndex(
        (item) => item.id === action.payload.id,
      )

      const quantityAdded = coffee[currentCoffee].cartQuantity + 1

      return produce(state, (draft) => {
        draft.coffee[currentCoffee].cartQuantity = quantityAdded
      })
    }
    case ActionTypes.DECREASE_CART_COFFEE: {
      const { coffee } = state

      const currentCoffee = coffee.findIndex(
        (item) => item.id === action.payload.id,
      )
      if (coffee[currentCoffee].cartQuantity === 0) {
        return state
      }

      const quantitySubtracted = coffee[currentCoffee].cartQuantity - 1

      return produce(state, (draft) => {
        draft.coffee[currentCoffee].cartQuantity = quantitySubtracted
      })
    }

    case ActionTypes.REMOVE_FROM_CART: {
      const { coffee } = state

      const currentCoffee = coffee.findIndex(
        (item) => item.id === action.payload.id,
      )

      return produce(state, (draft) => {
        draft.coffee[currentCoffee].cartQuantity = 0
        draft.coffee[currentCoffee].cart = false
      })
    }

    case ActionTypes.CONFIRM_ORDER: {
      return produce(state, (draft) => {
        const { orderData } = draft
        console.log(action.payload)
        orderData.cep = action.payload.cep
        orderData.bairro = action.payload.bairro
        orderData.cidade = action.payload.cidade
        orderData.complemento = action.payload.complemento
        orderData.numero = action.payload.numero
        orderData.rua = action.payload.rua
        orderData.uf = action.payload.uf
        orderData.payment = action.payload.payment
      })
    }

    case ActionTypes.RESET_STATE: {
      return produce(state, (draft) => {
        draft.coffee.map((item) => {
          return (item.cart = false)
        })
        draft.coffee.map((item) => {
          return (item.cartQuantity = 0)
        })
      })
    }
    default:
      return state
  }
}
