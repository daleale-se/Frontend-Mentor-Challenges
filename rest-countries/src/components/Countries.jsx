import Card from "../components/Card";
import { useContext, useEffect } from "react"
import { CountriesContext } from "../context/CountriesContext";
import { ImSpinner2 } from "react-icons/im";
import { Icon, SimpleGrid } from "@chakra-ui/react";

const Countries = () => {

    const {getAllCountries, loadMoreCountries, allCountries, filteredCountries} = useContext(CountriesContext)

    useEffect(() => {
  
      getAllCountries()
      
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {

      const onscroll = () => {
        const scrolledTo = window.scrollY + window.innerHeight
        const threshold = 300
        const isReachBottom = document.body.scrollHeight - threshold <= scrolledTo
        console.log(isReachBottom)
        if (isReachBottom) loadMoreCountries()
      };
      
      window.addEventListener("scroll", onscroll);

      return () => {
        window.removeEventListener("scroll", onscroll);
      };
  
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
      <SimpleGrid columns={[1, 2, 3, 4]} gap="10" paddingY="5" paddingX="8" justifyContent="center">
          {filteredCountries && filteredCountries.length > 0
          ? filteredCountries.map(showCards)
          : (allCountries && allCountries.map(showCards))}
      </SimpleGrid>
    )
}

export default Countries