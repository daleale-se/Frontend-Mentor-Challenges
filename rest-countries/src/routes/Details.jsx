import { Box, Flex, Icon, Link as ChakraLink, useColorMode, useMediaQuery} from "@chakra-ui/react"
import Header from "../components/Header"
import CountryDetails from "../components/CountryDetails"
import { Link } from "react-router-dom"
import { FaArrowLeftLong } from "react-icons/fa6";

const Details = () => {

  const { colorMode } = useColorMode()
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)')

  return (
    <Box background={colorMode === "dark" ? "#202D36" : "#fafafa"} style={{height: isLargerThan768 ? "100vh" : "unset"}}>
        <Header/>
        <Flex flexDirection="column" padding="8" gap="16">
            <ChakraLink as={Link} to="/" backgroundColor={colorMode === "dark" ? "#2B3743" : "white"} alignSelf="start" rounded="md" boxShadow="md" paddingX="6" paddingY="2" style={{marginLeft: "7.5%"}}>
                <Box as="button" ><Icon as={FaArrowLeftLong} marginRight="2" verticalAlign="middle"/>Back</Box>
            </ChakraLink>
            <CountryDetails/>
        </Flex>
    </Box>
  )
}

export default Details