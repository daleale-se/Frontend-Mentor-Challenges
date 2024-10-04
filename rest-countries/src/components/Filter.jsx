import { useContext, useState } from "react"
import { CountriesContext } from "../context/CountriesContext"
import { Select } from "@chakra-ui/react"

const regions = ["africa", "america", "asia", "europe", "oceania"]

const Filter = () => {

  const { filterByRegion, clearFilter } = useContext(CountriesContext)
  const [ filterRegion, setFilterRegion ] = useState("")

  const handleSelectChange = (e) => {
    const region = e.target.value
    setFilterRegion(region)
    if (region === "") {
      clearFilter()
    } else {
      filterByRegion(region)
    }
  }

  return (
    <Select variant="" placeholder='Filter by Region' name="region" value={filterRegion} onChange={handleSelectChange} textTransform="capitalize" fontSize="sm" alignSelf="start" w="52" backgroundColor="white" size="lg" boxShadow="base">
      {regions.map(region => {
          return <option key={region} value={region} style={{textTransform:"capitalize", paddingLeft:"2rem" }}>{region}</option>
      })}
    </Select>
  )
}

export default Filter