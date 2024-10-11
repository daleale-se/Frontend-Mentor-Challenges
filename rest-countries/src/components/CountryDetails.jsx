import { useContext, useEffect } from "react"
import { useParams } from "react-router-dom";
import { CountryDetailsContext } from "../context/CountryDetailsContext";
import { Flex, Heading, HStack, Icon, Img, Stack, Text } from "@chakra-ui/react";
import { ImSpinner2 } from "react-icons/im";
import { useMediaQuery } from '@chakra-ui/react'

const CountryDetails = () => {

    const [isLargerThan578] = useMediaQuery('(min-width: 578px)')
    const [isLargerThan768] = useMediaQuery('(min-width: 768px)')

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
    <Flex flexDirection={isLargerThan768 ? "row" : "column"} gap="16" fontFamily="Nunito Sans" justifyContent={isLargerThan768 ? "center" : ""} width="full">
        
        <Img src={details.flag} alt="flag" alignSelf="center" style={{width: isLargerThan578 ? "45%" : "", minWidth: isLargerThan578 ? "25rem" : "", maxWidth: "28rem"}}/>
        
        <Stack spacing="6" style={{maxWidth: "36rem"}}>
          <Heading size={isLargerThan578 ? "lg" : "md"} marginTop="4" fontFamily="Nunito Sans" textAlign={isLargerThan578 && !isLargerThan768 ? "center" : "left"}>{details.name}</Heading>
          <Flex flexDirection={isLargerThan578 ? "row" : "column"} justifyContent={isLargerThan578 ? "center" : ""} gap="10">

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
              </Stack>

          </Flex>

          <Stack spacing="5" marginX={isLargerThan578 && !isLargerThan768 ? "auto" : ""} marginTop="6">
            <Text fontWeight="bold">Border Countries: </Text>
            { typeof details.borders === 'string'  
            ? <Text justifySelf="flex-start">{details.borders}</Text>
            : <Flex gap="3" wrap="wrap" justifyContent="center">
                {details.borders.map(country => <Text key={country} boxShadow="md" paddingX="5" paddingY="1">{country}</Text>)}
              </Flex>}
          </Stack>

        </Stack>

    </Flex>
  )
}

export default CountryDetails