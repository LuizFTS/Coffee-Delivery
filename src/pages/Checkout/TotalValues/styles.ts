import { styled } from 'styled-components'

export const TotalValueContainer = styled.div`
  display: flex;
  justify-content: space-between;

  ul {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    list-style: none;
    font-family: ${({ theme }) => theme.roboto.family};
    font-size: ${({ theme }) => theme.roboto.size.sm};
    line-height: 1.3;
    color: ${({ theme }) => theme['base-text']};
    li {
      &:nth-child(3) {
        font-size: ${({ theme }) => theme.roboto.size.lg};
        color: ${({ theme }) => theme['base-subtitle']};
      }
    }
  }
`

export const TotalValue = styled.ul`
  text-align: right;
`
