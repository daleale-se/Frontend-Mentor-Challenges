import { Flex } from "@chakra-ui/react"
import Countries from "../components/Countries"
import Filter from "../components/Filter"
import SearchBar from "../components/SearchBar"

const Home = () => {

  return (
    <Flex flexDirection="column" alignItems="center" gap="5" backgroundColor="#fafafa" paddingY="6">
      <Flex flexDirection="column" alignItems="center" gap="10">
        <SearchBar/>
        <Filter/>
      </Flex>
      <Countries/>
    </Flex>
  )
}

export default Home