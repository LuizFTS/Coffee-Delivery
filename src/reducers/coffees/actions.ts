import { Coffee, Order } from './reducer'

export enum ActionTypes {
  INCREASE_COFFEE = 'INCREASE_COFFEE',
  DECREASE_COFFEE = 'DECREASE_COFFEE',
  ADD_TO_CART = 'ADD_TO_CART',
  INCREASE_CART_COFFEE = 'INCREASE_CART_COFFEE',
  DECREASE_CART_COFFEE = 'DECREASE_CART_COFFEE',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
  CONFIRM_ORDER = 'CONFIRM_ORDER',
  RESET_STATE = 'RESET_STATE',
}

export function increaseQuantityAction(item: Coffee) {
  return {
    type: ActionTypes.INCREASE_COFFEE,
    payload: item,
  }
}

export function decreaseQuantityAction(item: Coffee) {
  return {
    type: ActionTypes.DECREASE_COFFEE,
    payload: item,
  }
}

export function addToCartAction() {
  return {
    type: ActionTypes.ADD_TO_CART,
  }
}

export function increaseCartQuantityAction(item: Coffee) {
  return {
    type: ActionTypes.INCREASE_CART_COFFEE,
    payload: item,
  }
}

export function decreaseCartQuantityAction(item: Coffee) {
  return {
    type: ActionTypes.DECREASE_CART_COFFEE,
    payload: item,
  }
}

export function removeItemFromTheCartAction(item: Coffee) {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload: item,
  }
}

export function resetStateAction() {
  return { type: ActionTypes.RESET_STATE }
}

export function confirmOrderAction(order: Order) {
  return {
    type: ActionTypes.CONFIRM_ORDER,
    payload: order,
  }
}
