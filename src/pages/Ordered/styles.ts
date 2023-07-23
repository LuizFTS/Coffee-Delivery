import { styled } from 'styled-components'

export const ScreenContainer = styled.div`
  display: flex;
  height: calc(100vh - 6.5rem);
  width: 100%;
  max-width: 20rem;
  padding-top: 1rem;
  justify-content: space-between;
  margin: 0 auto;
  margin-bottom: 10rem;
  flex-direction: column;

  h2 {
    font-family: ${({ theme }) => theme.baloo.family};
    font-size: ${({ theme }) => theme.baloo.size.md};
    line-height: 1.3;
    font-weight: 900;
    color: ${({ theme }) => theme['yellow-dark']};
  }

  p {
    font-family: ${({ theme }) => theme.roboto.family};
    font-size: ${({ theme }) => theme.roboto.size.sm};
    line-height: 1.3;
    font-weight: 400;
    color: ${({ theme }) => theme['base-subtitle']};

    margin-top: 0.25rem;
  }

  img {
    width: 20rem;
    height: auto;
  }

  @media (min-width: 640px) {
    max-width: 37.5rem;

    img {
      width: 37.5rem;
      height: auto;
    }

    h2 {
      font-size: ${({ theme }) => theme.baloo.size.lg};
    }

    p {
      font-size: ${({ theme }) => theme.roboto.size.lg};
    }
  }
  @media (min-width: 1280px) {
    max-width: 70rem;
    flex-direction: row;
    padding: 5rem 0;
  }
`
export const CofirmationContainer = styled.div`
  width: 100%;

  @media (min-width: 1280px) {
    width: 50%;
  }
`

export const DataCardWrap = styled.div`
  position: relative;
  overflow: hidden;
  margin-top: 2.5rem;

  border-top-left-radius: 6px;
  border-bottom-left-radius: 36px;
  border-top-right-radius: 36px;
  border-bottom-right-radius: 6px;
  background: linear-gradient(
    to right bottom,
    ${({ theme }) => theme.yellow},
    ${({ theme }) => theme.purple}
  );
  padding: 1px;
`

export const DataCard = styled.div`
  padding: 2rem;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 36px;
  border-top-right-radius: 36px;
  border-bottom-right-radius: 6px;
  background-color: ${({ theme }) => theme.background};

  display: flex;
  flex-direction: column;
  gap: 2rem;

  & > div {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 0.75rem;

    div {
      display: flex;
      flex-direction: column;
      align-items: start;
    }
  }
  p {
    display: inline;
  }
`

export const DataCardText = styled.p`
  font-family: ${({ theme }) => theme.roboto.family} !important;
  font-size: ${({ theme }) => theme.roboto.size.sm} !important;
  font-weight: 400;
  line-height: 1.3 !important;

  color: ${({ theme }) => theme['base-text']} !important;
  margin: 0 !important;

  @media (min-width: 640px) {
    font-size: ${({ theme }) => theme.roboto.size.md} !important;
  }
`

export const DataCardInputText = styled.span`
  font-family: ${({ theme }) => theme.roboto.family} !important;
  font-size: ${({ theme }) => theme.roboto.size.sm} !important;
  font-weight: 800 !important;
  line-height: 1.3 !important;
  text-transform: capitalize;

  color: ${({ theme }) => theme['base-text']} !important;
  margin: 0 !important;

  @media (min-width: 640px) {
    font-size: ${({ theme }) => theme.roboto.size.md} !important;
  }
`

export const DataCardCapitalized = styled.span`
  font-family: ${({ theme }) => theme.roboto.family} !important;
  font-size: ${({ theme }) => theme.roboto.size.sm} !important;
  font-weight: 400 !important;
  line-height: 1.3 !important;
  text-transform: capitalize;

  color: ${({ theme }) => theme['base-text']} !important;
  margin: 0 !important;
  text-transform: capitalize;

  @media (min-width: 640px) {
    font-size: ${({ theme }) => theme.roboto.size.md} !important;
  }
`
const IconColor = {
  purple: 'purple',
  'yellow-dark': 'yellow-dark',
  yellow: 'yellow',
}

interface IconColorProps {
  color: keyof typeof IconColor
}

export const DataCardIcon = styled.span<IconColorProps>`
  background-color: ${(props) => props.theme[IconColor[props.color]]};
  color: ${({ theme }) => theme.white};

  height: 2rem;
  width: 2rem;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
`
