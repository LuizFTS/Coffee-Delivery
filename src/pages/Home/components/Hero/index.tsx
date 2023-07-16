import {
  HeroSectionContainer,
  HeroSectionItemsList,
  HeroSectionTitleAndItemsContainer,
  HeroSectionTitleContainer,
  ItemIcon,
} from './styles'
import HeroImage from '../../../../assets/HeroImage.png'
import { ShoppingCart, Timer, Package, Coffee } from '@phosphor-icons/react'

export const Hero = () => {
  return (
    <HeroSectionContainer>
      <HeroSectionTitleAndItemsContainer>
        <HeroSectionTitleContainer>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </HeroSectionTitleContainer>
        <HeroSectionItemsList>
          <li>
            <ItemIcon color="yellow_dark">
              <ShoppingCart weight="fill" />
            </ItemIcon>
            Compra simples e segura
          </li>
          <li>
            <ItemIcon color="yellow">
              <Timer weight="fill" />
            </ItemIcon>
            Entrega rápida e rastreada
          </li>
          <li>
            <ItemIcon color="gray">
              <Package weight="fill" />
            </ItemIcon>
            Embalagem mantém o café intacto
          </li>
          <li>
            <ItemIcon color="purple">
              <Coffee weight="fill" />
            </ItemIcon>
            O café chega fresquinho até você
          </li>
        </HeroSectionItemsList>
      </HeroSectionTitleAndItemsContainer>
      <img src={HeroImage} alt="Delivery Coffee Image" />
    </HeroSectionContainer>
  )
}
