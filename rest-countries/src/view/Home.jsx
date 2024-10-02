import Filter from "../components/Filter"
import SearchBar from "../components/SearchBar"
import countriesData from "../../data.json"
import Card from "../components/Card";

const Home = () => {
  return (
    <div>
        <div>
            <SearchBar/>
            <Filter/>
        </div>
        <div>
            {countriesData.map(country => {
                const { flag, name, population, region, capital, numericCode } = country
                const countryData = {flag, name, population, region, capital}
                return <Card key={numericCode} data={countryData}/>
            })}
        </div>
    </div>
  )
}

export default Home