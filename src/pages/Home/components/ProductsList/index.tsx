import { useContext } from 'react'
import { ProductItem } from '../ProductItem'
import { ProductCardList, ProductsListContainer } from './styles'
import { CartContext } from '../../../../contexts/CartContext'

export const ProductsList = () => {
  const { coffee } = useContext(CartContext)

  return (
    <ProductsListContainer>
      <h2>Nossos cafés</h2>
      <ProductCardList>
        {coffee.map((coffee) => {
          return (
            <ProductItem
              key={coffee.id}
              id={coffee.id}
              name={coffee.name}
              price={coffee.price}
              tags={coffee.tags}
              text={coffee.text}
              img={coffee.img}
            />
          )
        })}
      </ProductCardList>
    </ProductsListContainer>
  )
}
