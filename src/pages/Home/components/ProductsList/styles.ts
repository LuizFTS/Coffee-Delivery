import { styled } from 'styled-components'

export const ProductsListContainer = styled.div`
  width: 100%;
  padding: 0;

  h2 {
    font-family: ${(props) => props.theme.baloo.family};
    font-size: ${(props) => props.theme.baloo.size.lg};
    color: ${(props) => props.theme['base-subtitle']};
    margin: 2rem auto;
    width: 100%;
    max-width: 73rem;
    padding: 0 1.5rem;
  }
`
export const ProductCardList = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 73rem;
  padding: 0 1.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`
