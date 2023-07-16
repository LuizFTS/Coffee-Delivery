import { Hero } from './components/Hero'
import { ProductsList } from './components/ProductsList'
import { HomeContainer } from './styles'

export const Home = () => {
  return (
    <HomeContainer>
      <Hero />
      <ProductsList />
    </HomeContainer>
  )
}
