import { styled } from 'styled-components'

const CardContainer = styled.div`
  padding: 2.5rem;
  background: ${({ theme }) => theme['base-card']};
`

export const SelectedCoffees = styled(CardContainer)`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  border-top-right-radius: 44px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 44px;
`

export const CoffeeContainer = styled.div`
  display: flex;
  gap: 1.25rem;

  img {
    width: 64px;
    height: 64px;
  }

  div {
    h2 {
      text-transform: capitalize;
    }
    div {
      display: flex;
      gap: 0.5rem;
    }
  }

  & > p {
    flex: 1;
    text-align: right;
    font-size: ${({ theme }) => theme.baloo.size.md};
    font-weight: 800;
    line-height: 1.3;
    color: ${({ theme }) => theme['base-text']};
  }
`

export const AddQuantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme['base-title']};
  border-radius: 6px;

  font-family: ${({ theme }) => theme.roboto.family};
  font-size: ${({ theme }) => theme.roboto.size.md};
  line-height: 1.3;

  gap: 0.25rem;
  padding: 0.375rem 0.5rem;
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
`

export const RemoveCoffee = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme['base-text']};
  border-radius: 6px;

  font-family: ${({ theme }) => theme.font.buttonM.family};
  font-size: ${({ theme }) => theme.font.buttonM.size};
  line-height: 1.6;

  gap: 0.25rem;
  padding: 0.375rem 0.5rem;
  background: ${({ theme }) => theme['base-button']};
  cursor: pointer;

  button {
    color: ${({ theme }) => theme.purple};
    line-height: 0;
    border: none;
    outline: none;
    background: transparent;

    display: flex;
    align-items: start;
    transition: 0.2s;
  }

  &:hover {
    background: ${({ theme }) => theme['base-hover']};
  }
`

export const Separator = styled.span`
  background: ${({ theme }) => theme['base-button']};
  height: 1px;
  width: 100%;
`

export const ConfirmButton = styled.input`
  padding: 0.75rem 0;
  color: ${({ theme }) => theme.white};
  background: ${({ theme }) => theme.yellow};
  cursor: pointer;

  text-transform: uppercase;
  font-family: ${({ theme }) => theme.font.buttonG.family};
  font-size: ${({ theme }) => theme.font.buttonG.size};
  font-weight: ${({ theme }) => theme.font.buttonG.weight};
  line-height: ${({ theme }) => theme.font.buttonG.lineHeight};

  border: none;
  border-radius: 6px;

  &:hover {
    background: ${({ theme }) => theme['yellow-dark']};
  }

  &:active,
  &:focus {
    outline: none;
  }
`

export const Coffes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`
