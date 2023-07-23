import { styled } from 'styled-components'

export const ProductsListContainer = styled.div`
  width: 100%;
  padding: 0;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 10rem;

  h2 {
    font-family: ${(props) => props.theme.baloo.family};
    font-size: ${(props) => props.theme.baloo.size.lg};
    color: ${(props) => props.theme['base-subtitle']};
    margin: 2rem auto;
    width: 100%;
    padding: 0 1.5rem;
  }

  @media (min-width: 640px) {
    max-width: 39rem;
    text-align: left;
  }
  @media (min-width: 1024px) {
    max-width: 56rem;
  }
  @media (min-width: 1440px) {
    max-width: 73rem;
  }
`
export const ProductCardList = styled.div`
  width: 100%;
  padding: 0 1.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;

  @media (min-width: 640px) {
    justify-content: start;
  }
`
