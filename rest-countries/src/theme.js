import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
  styles: {
    global: {
        // "body": {
        //     padding: "0",
        //     margin: "0",
        //     "box-sizing": "border-box",
        //     "font-family": "Nunito Sans",       
        // }
    }
  }
}

const theme = extendTheme({ config })

export default theme
