import { MdOutlineDarkMode, MdDarkMode } from "react-icons/md";
import { useColorMode, Icon, Flex, Heading, Text, useMediaQuery } from "@chakra-ui/react";

const Header = () => {
  
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)")
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Flex position="sticky" justifyContent={isLargerThan768 ? "space-between" : "space-around"} alignItems="center" paddingY="6" paddingX={isLargerThan768 ? "20" : ""} boxShadow="base">
        <Heading fontFamily="Nunito Sans" size="sm" >Where in the world?</Heading>
        <Flex as="button" onClick={toggleColorMode} alignItems="center">
          <Icon as={colorMode === "light" ? MdOutlineDarkMode : MdDarkMode} fontSize="sm" />
          <Text fontFamily="Nunito Sans" fontWeight="600" paddingLeft="2" fontSize="sm">Dark Mode</Text>
        </Flex>
    </Flex>
  )
}

export default Header