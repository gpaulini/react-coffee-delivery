import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { HashRouter } from 'react-router-dom'
import { Router } from './Router'
import { ShoppingContextProvider } from './contexts/ShopppingContext'

export const MIN_QUANTITY_ALLOWED = 1
export const MAX_QUANTITY_ALLOWED = 12

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <HashRouter>
        <ShoppingContextProvider>
          <Router />
        </ShoppingContextProvider>
      </HashRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}
