import { Flex, Heading, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react"
import { Link } from "react-router-dom"

// eslint-disable-next-line react/prop-types
const Card = ({data}) => {

    // eslint-disable-next-line react/prop-types
    const {flag, name, population, region, capital} = data

  return (
    <Link to={`country/${name}`}>
      <VStack boxShadow="md" rounded="md">
          <Image src={flag} alt="flag" roundedTop="md"/>
          <Stack alignSelf="start" padding="6">
            <Heading size="md" marginBottom="2">{name}</Heading>
            <Flex gap="1" flexDirection="column">
              <HStack>
                <Text fontWeight="bold">Population:</Text>
                <Text>{population.toLocaleString()}</Text>
              </HStack>
              <HStack>
                <Text fontWeight="bold">Region:</Text>
                <Text>{region}</Text>
              </HStack>
              <HStack>
                <Text fontWeight="bold">Capital:</Text>
                <Text>{capital}</Text>
              </HStack>
            </Flex>
          </Stack>
      </VStack>
    </Link>
  )
}

export default Card