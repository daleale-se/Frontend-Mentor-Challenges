import { useContext, useState } from "react"
import { CountriesContext } from "../context/CountriesContext"

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
    <select name="region" value={filterRegion} onChange={handleSelectChange}>
        <option value="">Filter by Region</option>
        {regions.map(region => {
            return <option key={region} value={region}>{region}</option>
        })}
    </select>
  )
}

export default Filter