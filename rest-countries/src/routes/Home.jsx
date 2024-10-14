import { Flex, useMediaQuery } from "@chakra-ui/react"
import Countries from "../components/Countries"
import Filter from "../components/Filter"
import SearchBar from "../components/SearchBar"
import Header from "../components/Header"

const Home = () => {

  const [isLargerThan768] = useMediaQuery('(min-width: 768px)')

  return (
    <div>
      <Header/>
      <Flex flexDirection="column" alignItems="center" gap="5" backgroundColor="#fafafa" paddingY="6">
        <Flex flexDirection={isLargerThan768 ? "row" : "column"} alignItems="center" width={isLargerThan768 ? "full" : ""} justifyContent={isLargerThan768 ? "space-between" : ""} gap="10" paddingY="8" paddingX="8">
          <SearchBar/>
          <Filter/>
        </Flex>
        <Countries/>
      </Flex>
    </div>
  )
}

export default Home