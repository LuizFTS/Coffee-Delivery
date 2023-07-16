import { styled } from 'styled-components'
export const HeroSectionContainer = styled.section`
  padding: 6.5rem 10rem;

  display: flex;
  justify-content: space-between;
  align-items: start;

  background-image: url('HeroBG.svg');
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    justify-content: center;
  }
`

export const HeroSectionTitleContainer = styled.div`
  max-width: 36.75rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-family: ${(props) => props.theme.baloo.family};
    font-size: ${(props) => props.theme.baloo.size.xl};
    font-weight: 900;
  }

  p {
    font-family: ${(props) => props.theme.roboto.family};
    font-size: ${(props) => props.theme.roboto.size.lg};
    font-weight: 400;
  }
`

export const HeroSectionTitleAndItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.125rem;
`

export const HeroSectionItemsList = styled.ul`
  list-style: none;
  columns: 2;
  column-rule: 1.25rem solid transparent;

  li {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1.25rem;
  }
`

const ITEM_COLORS = {
  yellow_dark: 'yellow-dark',
  yellow: 'yellow',
  gray: 'base-text',
  purple: 'purple',
}

interface ItemIconProps {
  color: keyof typeof ITEM_COLORS
}

export const ItemIcon = styled.div<ItemIconProps>`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  background: ${(props) => props.theme[ITEM_COLORS[props.color]]};
  color: ${(props) => props.theme.white};

  display: flex;
  justify-content: center;
  align-items: center;
`
