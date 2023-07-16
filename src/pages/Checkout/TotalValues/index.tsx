import { useContext } from 'react'
import { TotalValueContainer, TotalValue } from './styles'
import { CartContext } from '../../../contexts/CartContext'

export const TotalValues = () => {
  const { coffee } = useContext(CartContext)

  const totalItens = coffee.reduce((acumulled, current) => {
    return acumulled + current.price * current.cartQuantity
  }, 0)

  const total = totalItens + 25.5

  return (
    <TotalValueContainer>
      <ul>
        <li>Total de itens</li>
        <li>Entrega</li>
        <li>Total</li>
      </ul>
      <TotalValue>
        <li>R$ {totalItens.toFixed(2).replace('.', ',')}</li>
        <li>R$ 25,50</li>
        <li>R$ {total.toFixed(2).replace('.', ',')}</li>
      </TotalValue>
    </TotalValueContainer>
  )
}
