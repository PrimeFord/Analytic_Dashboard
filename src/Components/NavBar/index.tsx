import { Box, Flex, Image, Text } from "@chakra-ui/react";
import SearchComponent from "../SearchComponent";
import DateComponent from "../Date";

const NavBar = () => {
  return (
    <>
      <nav>
        <Flex
          h={"4.5rem"}
          gap={"1.5rem"}
          alignItems={"center"}
          justifyContent={"space-between"}
          p={"1.5rem"}
          borderBottom={"1px solid #E5EAEF"}
        >
          <Text w={"20rem"} fontWeight={600}>
            Dashboard
          </Text>
          <SearchComponent />
          <DateComponent />
          <Box
            h={"fit"}
            padding={2}
            rounded={"50%"}
            border={"1px solid #E5EAEF"}
            _hover={{ bg: "#F5F5F5" }}
            cursor={"pointer"}
          >
            <Image w={"1.2rem"} src="/Images/notification.svg" />
          </Box>
          <Box
            h={"fit"}
            w={"14rem"}
            px={2}
            py={1}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            rounded={"2.4rem"}
            border={"1px solid #E5EAEF"}
            cursor={"pointer"}
          >
            <Image w={"2.4rem"} src="/Images/profile.png" />
            <Box>
              <Text fontSize={"1rem"} fontWeight={400}>
                Justin Bergson
              </Text>
              <Text fontSize={"0.9rem"} fontWeight={400} color={"#787486"}>
                Justin@gmail.com
              </Text>
            </Box>
            <Image
              mr={2}
              _hover={{ bg: "#F5F5F5" }}
              w={"1.2rem"}
              src="/Images/arrow.svg"
            />
          </Box>
        </Flex>
      </nav>
    </>
  );
};

export default NavBar;
