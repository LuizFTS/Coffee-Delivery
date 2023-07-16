import { styled } from 'styled-components'

export const ProductsListContainer = styled.div`
  margin-bottom: 9.8125rem;
  padding: 0 10rem;
  h2 {
    font-family: ${(props) => props.theme.baloo.family};
    font-size: ${(props) => props.theme.baloo.size.lg};
    color: ${(props) => props.theme['base-subtitle']};
    margin: 3.375rem 0;
  }
`
export const ProductCardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

  @media (min-width: 1440px) {
    justify-content: center;
  }
`
