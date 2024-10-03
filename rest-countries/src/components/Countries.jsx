import Card from "../components/Card";
import { useContext, useEffect } from "react"
import { CountriesContext } from "../context/CountriesContext";
import { ImSpinner2 } from "react-icons/im";
import { Icon } from "@chakra-ui/react";

const Countries = () => {

    const {getAllCountries, allCountries, filteredCountries} = useContext(CountriesContext)

    useEffect(() => {
  
      getAllCountries()
      
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  
    const showCards = ({ flags, name, population, region, capital }) => {
      const countryData = {
        flag: flags.svg,
        name: name.common, 
        population, 
        region, 
        capital: capital ? capital[0] : "Unknow"
      }
      return <Card key={name.common} data={countryData}/>
  }
  
    if (!allCountries && !filteredCountries) {
      return <p><Icon as={ImSpinner2}/></p>;
    }
  
  return (
    <div>
        {filteredCountries && filteredCountries.length > 0
        ? filteredCountries.map(showCards)
        : (allCountries && allCountries.map(showCards))}
    </div>
  )
}

export default Countries