import {
  Box,
  Button,
  Flex,
  Image,
  // Slide,
  Text,
  useColorModeValue,
  // useDisclosure,
} from "@chakra-ui/react";
import SearchComponent from "../SearchComponent";
import DateComponent from "../Date";
import { useState } from "react";
import MobileBar from "../SideBar/MobileBar";
// import MobileBar from "../SideBar/MobileBar";

const NavBar = () => {
  const [show, setShow] = useState(false);
  // const { isOpen, onToggle } = useDisclosure();
  const bg = useColorModeValue("mainBgColor", "secBgColor");
  const img = useColorModeValue("notification", "notification-dark");
  const hover = useColorModeValue("#F5F5F5", "#B2ABAB");

  return (
    <Box position={"fixed"} w={["100%", "95%"]} zIndex={8} bg={bg}>
      <nav>
        <Flex
          w={"100%"}
          h={"4.5rem"}
          // gap={"1.5rem"}
          alignItems={"center"}
          justifyContent={"space-between"}
          p={["1rem", "1.5rem"]}
          position={"relative"}
          borderBottom={"1px solid #E5EAEF"}
        >
          <Box
            position={"absolute"}
            top={"4.5rem"}
            // height={"50vh"}
            // height={"91.5vh"}
            transition={"ease-in-out"}
            transitionDuration={"0.7s"}
            left={show ? "0" : "-6rem"}
          >
            <MobileBar />
          </Box>
          <Box display={["flex", "none"]}>
            <Button
              bg={"none"}
              zIndex={10}
              h={"fit"}
              padding={0}
              mr={2}
              onClick={() => {
                setShow(!show);
              }}
            >
              <Image height={"2.5rem"} src="./Images/vector.svg" />
            </Button>
          </Box>

          <Text w={"25rem"} fontWeight={600}>
            Dashboard
          </Text>
          <Box w={"25%"} display={["none", "block"]}>
            <SearchComponent />
          </Box>
          <Box display={["none", "block"]}>
            <DateComponent />
          </Box>
          <Box
            h={"fit"}
            padding={2}
            mr={[2, 0]}
            rounded={"50%"}
            border={"1px solid #E5EAEF"}
            _hover={{ bg: hover }}
            cursor={"pointer"}
          >
            <Image w={["2.4rem", "1.2rem"]} src={`/Images/${img}.svg`} />
          </Box>
          <Box
            h={"fit"}
            w={["8rem", "14rem"]}
            px={2}
            py={1}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            rounded={"2.4rem"}
            border={"1px solid #E5EAEF"}
            cursor={"pointer"}
          >
            <Image w={["1.8rem", "2.4rem"]} src="/Images/profile.png" />
            <Box display={["none", "block"]}>
              <Text fontSize={"1rem"} fontWeight={400}>
                Justin Bergson
              </Text>
              <Text fontSize={"0.9rem"} fontWeight={400} color={"#787486"}>
                Justin@gmail.com
              </Text>
            </Box>
            <Image
              mr={["", 2]}
              _hover={{ bg: "#F5F5F5" }}
              w={"1.2rem"}
              src="/Images/arrow.svg"
            />
          </Box>
        </Flex>
      </nav>
    </Box>
  );
};
export default NavBar;
