import { styled } from 'styled-components'
export const HeroSectionContainer = styled.section`
  width: 100%;

  background-image: url('HeroBG.svg');
  background-repeat: no-repeat;
  background-size: cover;
`

export const HeroSectionContent = styled.div`
  padding: 94px 1.5rem;
  width: 100%;
  max-width: 73rem;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: start;

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    justify-content: center;
    padding: 2rem 1.5rem;
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

    @media (max-width: 640px) {
      font-size: ${({ theme }) => theme.baloo.size.md};
    }
  }

  p {
    font-family: ${(props) => props.theme.roboto.family};
    font-size: ${(props) => props.theme.roboto.size.lg};
    font-weight: 400;

    @media (max-width: 640px) {
      font-size: ${({ theme }) => theme.roboto.size.md};
    }
  }
`

export const HeroSectionTitleAndItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.125rem;

  @media (max-width: 1024px) {
    width: 100%;
    align-items: center;
  }
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

  @media (max-width: 640px) {
    columns: 1;
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

export const HeroImageContainer = styled.div`
  display: flex;
  img {
    width: 476px;

    @media (max-width: 640px) {
      width: 337px;
    }
  }

  @media (max-width: 1024px) {
    width: 100%;
    justify-content: center;
  }
`
