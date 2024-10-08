import { useContext, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { CountriesContext } from "../context/CountriesContext";
import { Box, Flex, Icon, Input, Text } from "@chakra-ui/react";

const SearchBar = () => {

  const {filterByName, clearFilter, countryFoundMessage} = useContext(CountriesContext)
  const [search, setSearch] = useState("")

  const handleSearchClick = (e) => {
    e.preventDefault()
    filterByName(search)
  }

  const handleSearchInputChange = (e) => {
    const searchValue = e.target.value
    setSearch(searchValue)
    if (searchValue === "") {
      clearFilter()
    }
  }

  return (
    <Box>
      <Flex alignItems="center" paddingLeft="7" paddingRight="20" backgroundColor="white" height="12" boxShadow="base" rounded="md">
          <Box as="button" type="submit" onClick={handleSearchClick} width="10"><Icon as={IoMdSearch} verticalAlign="middle" color="#b2b2b2" fontSize="xl"/></Box>
          <Input type="search" name="search" value={search} id="input-search" placeholder="Search for a country..." onChange={handleSearchInputChange} border="none" fontSize="xs"/>
      </Flex>
      { countryFoundMessage !== "" && <Text>{countryFoundMessage}</Text> }
    </Box>
  )
}

export default SearchBar