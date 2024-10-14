import { Box, Flex, Icon, Link as ChakraLink} from "@chakra-ui/react"
import Header from "../components/Header"
import CountryDetails from "../components/CountryDetails"
import { Link } from "react-router-dom"
import { FaArrowLeftLong } from "react-icons/fa6";

const Details = () => {
  return (
    <div>
        <Header/>
        <Flex flexDirection="column" padding="8" gap="16">
            <ChakraLink as={Link} to="/" alignSelf="start" rounded="md" boxShadow="md" paddingX="6" paddingY="2">
                <Box as="button"><Icon as={FaArrowLeftLong} marginRight="2" verticalAlign="middle"/>Back</Box>
            </ChakraLink>
            <CountryDetails/>
        </Flex>
    </div>
  )
}

export default Details