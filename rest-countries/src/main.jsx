import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CountriesProvider } from './context/CountriesContext.jsx'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from './theme.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CountriesProvider>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </ChakraProvider>
    </CountriesProvider>
  </StrictMode>,
)
