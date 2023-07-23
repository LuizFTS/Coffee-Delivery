import { styled } from 'styled-components'

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
    grid-column: 1 / span 1;
  }

  &:nth-child(3) {
    grid-column: 1 / span 1;
  }

  &:nth-child(4) {
    grid-column: 1 / span 1;
  }
  &:nth-child(5) {
    grid-column: 1 / span 1;
  }
  &:nth-child(6) {
    grid-column: 1 / span 1;
  }
  &:nth-child(7) {
    grid-column: 1 / span 1;
  }

  @media (min-width: 640px) {
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
    &:nth-child(5) {
      grid-column: 1 / span 1;
    }
    &:nth-child(6) {
      grid-column: 2 / span 1;
    }
    &:nth-child(7) {
      grid-column: 3 / span 1;
    }
  }
`
