import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    
    background-color: ${({ theme }) => theme.background};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
`
// Tag Tipografy properties
export const TagTipografy = css`
  font-family: ${({ theme }) => theme.font.tag.family};
  font-size: ${({ theme }) => theme.font.tag.size};
  font-weight: ${({ theme }) => theme.font.tag.weight};
  line-height: ${({ theme }) => theme.font.tag.lineHeight};
`

// Button G Typografy properties
export const ButtonG = css`
  font-family: ${({ theme }) => theme.font.buttonG.family};
  font-size: ${({ theme }) => theme.font.buttonG.size};
  font-weight: ${({ theme }) => theme.font.buttonG.weight};
  line-height: ${({ theme }) => theme.font.buttonG.lineHeight};
`

// Button M Typografy properties
export const ButtonM = css`
  font-family: ${({ theme }) => theme.font.buttonM.family};
  font-size: ${({ theme }) => theme.font.buttonM.size};
  font-weight: ${({ theme }) => theme.font.buttonM.weight};
  line-height: ${({ theme }) => theme.font.buttonM.lineHeight};
`
