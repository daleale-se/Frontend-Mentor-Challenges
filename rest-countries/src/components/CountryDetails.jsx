import { useContext, useEffect } from "react"
import { useParams } from "react-router-dom";
import { CountryDetailsContext } from "../context/CountryDetailsContext";
import { Flex, Heading, HStack, Icon, Img, Stack, Text } from "@chakra-ui/react";
import { ImSpinner2 } from "react-icons/im";

const CountryDetails = () => {

    const { name } = useParams();
    const { details, getDetails } = useContext(CountryDetailsContext)

    useEffect(() => {

      getDetails(name)      

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (!details) {
      return <Icon as={ImSpinner2} fontSize="48" margin="auto" />;
    }  

  return (
    <Flex flexDirection="column" gap="6" fontFamily="Nunito Sans">
        <Img src={details.flag} alt="flag" height="56"/>
        <Heading size="md" marginTop="4" fontFamily="Nunito Sans">{details.name}</Heading>
        <Flex flexDirection="column" gap="10">

            <Stack justifyContent="start">
              <HStack>
                <Text fontWeight="bold">Native Name: </Text>
                <Text>{details.nativeName}</Text>
              </HStack>
              <HStack>
                <Text fontWeight="bold">Population: </Text>
                <Text>{details.population}</Text>
              </HStack>
              <HStack>
                <Text fontWeight="bold">Region: </Text>
                <Text>{details.region}</Text>
              </HStack>
              <HStack>
                <Text fontWeight="bold">Sub Region: </Text>
                <Text>{details.subRegion}</Text>
              </HStack>
              <HStack>
                <Text fontWeight="bold">Capital: </Text>
                <Text>{details.capital}</Text>
              </HStack>
            </Stack>

            <Stack>
              <HStack>
                <Text fontWeight="bold">Top Level Domain: </Text>
                <Text>{details.tld}</Text>
              </HStack>
              <HStack>
                <Text fontWeight="bold">Currencies: </Text>
                <Text>{details.currencies}</Text>
              </HStack>
              <HStack>
                <Text fontWeight="bold">Languages: </Text>
                <Text>{details.languages.map((language, i) => `${language}${details.languages.length - 1 === i ? "" : ","} `)}</Text>
              </HStack>
              <Stack spacing="5" marginTop="10">
                <Text fontWeight="bold">Border Countries: </Text>
                <Flex gap="3" wrap="wrap" justifyContent="center">
                  {details.borderCountries.map(country => <Text key={country} boxShadow="md" paddingX="5" paddingY="1">{country}</Text>)}
                </Flex>
              </Stack>
            </Stack>

        </Flex>
    </Flex>
  )
}

export default CountryDetails