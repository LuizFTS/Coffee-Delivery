import { styled } from 'styled-components'

export const CheckoutContainer = styled.div`
  padding: 2.5rem 10rem;
  display: flex;
  gap: 2rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 2.5rem 2rem;
  }
`

export const OrderFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 50%;
  h2 {
    font-family: ${({ theme }) => theme.baloo.family};
    font-size: ${({ theme }) => theme.baloo.size.xs};
    color: ${({ theme }) => theme['base-subtitle']};
    line-height: 1.3;
    margin-bottom: 0.25rem;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`
export const AddressFormContainer = styled.form`
  padding: 2.5rem;
  background: ${({ theme }) => theme['base-card']};

  display: flex;
  flex-direction: column;
  gap: 2rem;
`
const ICON_COLORS = {
  yellow: 'yellow-dark',
  purple: 'purple',
} as const

interface TitleContainerIconColor {
  color: keyof typeof ICON_COLORS
}

export const TitleContainer = styled.div<TitleContainerIconColor>`
  display: flex;
  color: ${({ theme }) => theme['base-subtitle']};
  gap: 0.5rem;
  border-radius: 6px;

  span {
    color: ${(props) => props.theme[ICON_COLORS[props.color]]};
  }

  div {
    h3 {
      font-size: ${({ theme }) => theme.roboto.size.md};
    }

    p {
      color: ${({ theme }) => theme['base-text']};
      font-size: ${({ theme }) => theme.roboto.size.sm};
    }
  }
`
export const AddressForm = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 12.5rem auto 4rem;

  @media (max-width: 1024px) {
    grid-template-columns: 6rem 5rem 3rem;
    grid-gap: 0.5rem;
  }
`

export const ErrorsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
`

export const ErrorSpan = styled.span`
  display: flex;
  align-items: center;

  background: ${({ theme }) => theme['danger-bg']};
  color: ${({ theme }) => theme['danger-font']};
  padding: 0.5rem 1rem;
  border-radius: 6px;

  font-family: ${({ theme }) => theme.font.tag.family};
  font-size: ${({ theme }) => theme.font.tag.size};
  font-weight: ${({ theme }) => theme.font.tag.weight};
  line-height: ${({ theme }) => theme.font.tag.lineHeight};
`
