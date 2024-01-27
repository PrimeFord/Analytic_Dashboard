import { Button, Flex, Image, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";
import ThemeSwitcher from "../ThemeSwitcher";

const MobileBar = () => {
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
export default MobileBar;
