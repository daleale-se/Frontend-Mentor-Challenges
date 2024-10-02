import { useContext, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { CountriesContext } from "../context/CountriesContext";

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
    <div>
      <form>
          <input type="search" name="search" value={search} onChange={handleSearchInputChange}/>
          <button type="submit" onClick={handleSearchClick}><IoMdSearch /></button>
      </form>
      { countryFoundMessage !== "" && <p>{countryFoundMessage}</p> }
    </div>
  )
}

export default SearchBar