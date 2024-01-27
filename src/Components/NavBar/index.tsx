import {
  Box,
  Button,
  Flex,
  Image,
  Slide,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import SearchComponent from "../SearchComponent";
import DateComponent from "../Date";
// import SideBar from "../SideBar";
import { useState } from "react";
import ThemeSwitcher from "../ThemeSwitcher";

const NavBar = () => {
  // const [show, setShow] = useState(false);
  const { isOpen, onToggle } = useDisclosure();
  const bg = useColorModeValue("mainBgColor", "secBgColor");
  const img = useColorModeValue("notification", "notification-dark");

  return (
    <Box position={"fixed"} w={["100%", "95%"]} bg={bg}>
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
          <Box display={["flex", "none"]}>
            <Button bg={"none"} h={"fit"} padding={0} mr={2} onClick={onToggle}>
              <Image height={"2.5rem"} src="./Images/vector.svg" />
            </Button>
          </Box>
          <Slide direction="left" in={isOpen} style={{ zIndex: 10 }}>
            <Box
              position={"absolute"}
              top={"4.5rem"}
              // left={show ? "0" : "-6rem"}
            >
              <SideBar />
            </Box>
          </Slide>
          <Text w={"20rem"} fontWeight={600}>
            Dashboard
          </Text>
          <Box display={["none", "block"]}>
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
            _hover={{ bg: "#F5F5F5" }}
            cursor={"pointer"}
          >
            <Image w={["1.8rem", "1.2rem"]} src={`/Images/${img}.svg`} />
          </Box>
          <Box
            h={"fit"}
            w={["6rem", "14rem"]}
            px={2}
            py={1}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            rounded={"2.4rem"}
            border={"1px solid #E5EAEF"}
            cursor={"pointer"}
          >
            <Image w={["2rem", "2.4rem"]} src="/Images/profile.png" />
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

const SideBar = () => {
  const [active, setActive] = useState(0);
  interface ISidebar {
    light: string;
    dark: string;
  }
  const sideIcon: ISidebar[] = [
    { light: "category", dark: "category-dark" },
    { light: "trend-up", dark: "trend-up-dark" },
    { light: "profile-user", dark: "profile-user-dark" },
    { light: "box", dark: "box-dark" },
    { light: "discount-shape", dark: "discount-shape-dark" },
    { light: "info-circle", dark: "info-circle-dark" },
  ];
  const bg = useColorModeValue("#F7F8FA", "#3A3F51");

  return (
    <Flex
      w={"5rem"}
      display={["flex", "none"]}
      flexDir={"column"}
      alignItems={"center"}
      textAlign={"center"}
      py={2}
      bg={bg}
      gap={"1rem"}
      h={"100%"}
      borderRight={"1px solid #E5EAEF"}
    >
      <Flex flexDir={"column"} alignItems={"center"} flexGrow={1} gap={2}>
        {sideIcon.map((icon, id) => (
          <Button
            key={id}
            bg={"none"}
            // _hover={{ bg: "none" }}
            position={"relative"}
            _after={
              active !== id
                ? { display: "hidden" }
                : {
                    bg: "#0D062D",
                    content: '""',
                    position: "absolute",
                    bottom: "22%",
                    right: "-0.7rem",
                    height: "1.3rem",
                    width: "4px",
                    borderLeftRadius: "20rem",
                  }
            }
            h={"fit"}
            padding={2}
            onClick={() => setActive(id)}
          >
            <Image
              textColor={"#0D062D"}
              height={"1.4rem"}
              src={`./Images/${active !== id ? icon.light : icon.dark}.svg`}
              alt={icon.light}
            />
          </Button>
        ))}

        <ThemeSwitcher />
      </Flex>
      <Flex flexDir={"column"} alignItems={"center"} mb={3} gap={2}>
        <Button bg={"none"} h={"fit"} padding={2}>
          <Image height={"1.2rem"} src="./Images/arrow-right.svg" />
        </Button>
        <Button bg={"none"} h={"fit"} padding={2}>
          <Image height={"1.2rem"} src="./Images/setting.svg" alt="settings" />
        </Button>
        <Button bg={"none"} h={"fit"} padding={2}>
          <Image height={"1.2rem"} src="./Images/logout.svg" alt="logout" />
        </Button>
      </Flex>
    </Flex>
  );
};
// export default SideBar;
