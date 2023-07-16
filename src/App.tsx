import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { GlobalStyle } from './styles/globalStyles'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default'
import { CartContextProvider } from './contexts/CartContext'

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <CartContextProvider>
          <Router />
        </CartContextProvider>
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  )
}
