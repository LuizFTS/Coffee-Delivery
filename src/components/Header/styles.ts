import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 2rem 1.5rem;
  z-index: 10;
  width: 100%;
  margin: 0 auto;

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.375rem;
    gap: 0.75rem;

    div {
      span {
        height: 1.375rem;
      }
    }
  }

  @media (min-width: 640px) {
    max-width: 39rem;
  }
  @media (min-width: 1024px) {
    max-width: 56rem;
  }
  @media (min-width: 1440px) {
    max-width: 73rem;
  }
`

export const LocationContainer = styled.div`
  background: ${(props) => props.theme['purple-light']};
  border-radius: 6px;
  padding: 0.5rem 0.75rem;
  color: ${(props) => props.theme.purple};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
`

export const LocationText = styled.p`
  font-family: ${(props) => props.theme.roboto.family};
  font-size: ${(props) => props.theme.roboto.size.sm};
  line-height: 130%;
  color: ${(props) => props.theme['purple-dark']};
`
export const CartContainer = styled.div`
  position: relative;
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;
`

export const QuantityContainer = styled.span`
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme['yellow-dark']};
  font-weight: bold;
  font-size: ${(props) => props.theme.roboto.size.sm};
  position: absolute;
  top: -0.625rem;
  right: -0.625rem;

  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
`
