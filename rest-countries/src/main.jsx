import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import theme from './theme.js'
import Home from './routes/Home.jsx'
import Details from './routes/Details.jsx'
import { CountriesProvider } from './context/CountriesContext.jsx'
import { CountryDetailsProvider } from './context/CountryDetailsContext.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/country/:name",
    element: <Details/>
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CountryDetailsProvider>
      <CountriesProvider>
        <ChakraProvider theme={theme}>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <RouterProvider router={router} />  
        </ChakraProvider>
      </CountriesProvider>
    </CountryDetailsProvider>
  </StrictMode>,
)
