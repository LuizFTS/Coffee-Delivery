import { styled } from 'styled-components'

export const AddressForm = styled.form`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 12.5rem auto 4rem;
`
export const TextInput = styled.input`
  border-radius: 6px;
  background: ${({ theme }) => theme['base-input']};
  border: 1px solid ${({ theme }) => theme['base-button']};
  padding: 0.75rem;

  font-size: ${({ theme }) => theme.roboto.size.sm};
  color: ${({ theme }) => theme['base-text']};

  &::placeholder {
    color: ${({ theme }) => theme['base-label']};
  }

  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme['yellow-dark']};
  }

  &:nth-child(1) {
    grid-column: 1 / span 1;
  }
  &:nth-child(2) {
    grid-column: 1 / span 3;
  }

  &:nth-child(3) {
    grid-column: 1 / span 1;
  }

  &:nth-child(4) {
    grid-column: 2 / span 2;
  }
`
