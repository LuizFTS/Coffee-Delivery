import { styled } from 'styled-components'

const CardContainer = styled.div`
  padding: 2.5rem;
  background: ${({ theme }) => theme['base-card']};
`

export const PaymentContainer = styled(CardContainer)`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  border-radius: 6px;
`

export const PaymentOptions = styled.div`
  font-family: ${({ theme }) => theme.font.buttonM.family};
  font-size: ${({ theme }) => theme.font.buttonM.size};
  font-weight: ${({ theme }) => theme.font.buttonM.weight};
  text-transform: uppercase;

  display: flex;
  justify-content: space-between;
  gap: 1.25rem;

  input {
    display: none;
    visibility: hidden;
  }
`

export const PaymentOption = styled.div`
  border-radius: 6px;
  border: 1px solid transparent;
  display: flex;
  gap: 0.75rem;
  padding: 1rem 1.25rem;
  background: ${({ theme }) => theme['base-button']};
  cursor: pointer;

  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme['base-text']};
  span {
    line-height: 0;
    color: ${({ theme }) => theme.purple};
  }

  &:hover {
    background: ${({ theme }) => theme['base-hover']};
  }

  &.active {
    background: ${({ theme }) => theme['purple-light']};
    border: 1px solid ${({ theme }) => theme.purple};
  }
`
