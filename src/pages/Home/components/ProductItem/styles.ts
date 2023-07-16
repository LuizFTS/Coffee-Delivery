import { styled } from 'styled-components'
import { TagTipografy } from '../../../../styles/globalStyles'

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  padding: 0 1.5rem 1.25rem;
  width: 16rem;

  background: ${({ theme }) => theme['base-card']};

  border-top-right-radius: 36px;
  border-top-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 36px;
`

export const ProductHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -1.25rem;
  gap: 0.75rem;

  div {
    display: flex;
    gap: 0.25rem;
  }
`
export const Tag = styled.div`
  padding: 0.25rem 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;

  background: ${({ theme }) => theme['yellow-light']};
  color: ${({ theme }) => theme['yellow-dark']};
  border-radius: 100px;

  ${TagTipografy}
`

export const ProductText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: center;

  h3 {
    font-family: ${({ theme }) => theme.baloo.family};
    font-size: ${({ theme }) => theme.baloo.size.sm};
    color: ${({ theme }) => theme['base-subtitle']};
    font-weight: 800;
    line-height: 1.3;
    text-transform: capitalize;
  }

  p {
    font-family: ${({ theme }) => theme.roboto.family};
    font-size: ${({ theme }) => theme.roboto.size.sm};
    color: ${({ theme }) => theme['base-label']};
    line-height: 1.3;
  }
`

export const ProductFooter = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: space-between;
  margin-top: 1rem;
  width: 100%;
`

export const Price = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: ${({ theme }) => theme.baloo.family};
  font-size: ${({ theme }) => theme.baloo.size.sm};
  font-weight: 800;
  color: ${({ theme }) => theme['base-text']};

  span {
    font-family: ${({ theme }) => theme.roboto.family};
    font-size: ${({ theme }) => theme.roboto.size.xs};
    color: ${({ theme }) => theme['base-text']};
    font-weight: 400;
  }
`

export const AddQuantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme['base-title']};
  border-radius: 6px;
  margin-left: 1.4375rem;

  font-family: ${({ theme }) => theme.roboto.family};
  font-size: ${({ theme }) => theme.roboto.size.md};
  line-height: 1.3;

  gap: 0.25rem;
  padding: 0.5rem;
  background: ${({ theme }) => theme['base-button']};

  button {
    color: ${({ theme }) => theme.purple};
    line-height: 0;
    border: none;
    outline: none;
    background: transparent;

    display: flex;
    align-items: start;
    transition: 0.2s;
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme['purple-dark']};
    }
  }

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20px;
    width: 20px;
  }
`

export const CartShoppingButton = styled.button`
  line-height: 0;
  outline: none;
  border: none;
  border-radius: 6px;
  padding: 0.625rem 0.625rem;
  color: ${({ theme }) => theme.white};
  cursor: pointer;
  background: ${({ theme }) => theme.purple};

  &:hover {
    background: ${({ theme }) => theme['purple-dark']};
  }
`
