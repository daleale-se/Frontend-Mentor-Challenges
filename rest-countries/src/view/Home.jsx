import { Flex } from "@chakra-ui/react"
import Countries from "../components/Countries"
import Filter from "../components/Filter"
import SearchBar from "../components/SearchBar"

const Home = () => {

  return (
    <Flex flexDirection="column" alignItems="center" gap="5" backgroundColor="#fafafa">
      <Flex flexDirection="column" alignItems="center"gap="5" marginTop="6">
        <SearchBar/>
        <Filter/>
      </Flex>
      <div>
        <Countries/>
      </div>
    </Flex>
  )
}

export default Home