import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { createHashRouter, RouterProvider } from "react-router-dom";
import theme from './theme.js'
import Home from './routes/Home.jsx'
import Details from './routes/Details.jsx'
import { CountriesProvider } from './context/CountriesContext.jsx'
import { CountryDetailsProvider } from './context/CountryDetailsContext.jsx'
import { detailsLoader } from "./detailsLoader.js"
import DetailsError from './routes/DetailsError.jsx';

const router = createHashRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/country/:name",
    element: <Details/>,
    loader: detailsLoader,
    errorElement: <DetailsError/>
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CountryDetailsProvider>
      <CountriesProvider>
        <ChakraProvider theme={theme}>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <RouterProvider router={router}/>  
        </ChakraProvider>
      </CountriesProvider>
    </CountryDetailsProvider>
  </StrictMode>,
)
