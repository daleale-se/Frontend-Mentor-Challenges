import Card from "../components/Card";
import { useContext, useEffect } from "react"
import { CountriesContext } from "../context/CountriesContext";
import { ImSpinner2 } from "react-icons/im";
import { Grid, Icon } from "@chakra-ui/react";

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
      return <Icon as={ImSpinner2} fontSize="48" margin="auto"/>;
    }
  
  return (
    <Grid templateColumns="75%" gap="10" paddingY="5" justifyContent="center">
        {filteredCountries && filteredCountries.length > 0
        ? filteredCountries.map(showCards)
        : (allCountries && allCountries.map(showCards))}
    </Grid>
  )
}

export default Countries