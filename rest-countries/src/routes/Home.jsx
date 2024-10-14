import { Box, Flex, useColorMode, useMediaQuery } from "@chakra-ui/react"
import Countries from "../components/Countries"
import Filter from "../components/Filter"
import SearchBar from "../components/SearchBar"
import Header from "../components/Header"

const Home = () => {

  const { colorMode } = useColorMode()
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)')

  return (
    <Box background={colorMode === "dark" ? "#202D36" : "#fafafa"} >
      <Header/>
      <Flex flexDirection="column" alignItems="center" gap="5" paddingY="4">
        <Flex flexDirection={isLargerThan768 ? "row" : "column"} alignItems="center" width={isLargerThan768 ? "full" : ""} justifyContent={isLargerThan768 ? "space-between" : ""} gap="10" paddingTop="8" paddingBottom="8" paddingX={isLargerThan768 ? "20" : ""}>
          <SearchBar/>
          <Filter/>
        </Flex>
        <Countries/>
      </Flex>
    </Box>
  )
}

export default Home