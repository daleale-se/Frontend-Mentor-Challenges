import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { useRouteError } from "react-router-dom";

const DetailsError = () => {

    const error = useRouteError();

    return (
        <Flex flexDirection="column" justifyContent="center" alignItems="center" style={{width: "100vw", height: "100vh"}}>
            <Box>
                <Heading>Error: {error.statusText || "Something went wrong"}</Heading>
                <Text>{error.message || "We couldn't find that country."}</Text>
            </Box>
        </Flex>
    )

}

export default DetailsError