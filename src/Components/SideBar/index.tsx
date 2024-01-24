import { Box, Button, Flex, Image } from "@chakra-ui/react";
import ThemeSwitcher from "../ThemeSwitcher";

const SideBar = () => {
  return (
    <Flex
      w={"5%"}
      flexDir={"column"}
      alignItems={"center"}
      textAlign={"center"}
      py={2}
      bg={"#F7F8FA"}
      gap={"1rem"}
      h={"100%"}
    >
      <Box>
        <Button bg={"none"} h={"fit"} padding={2} _hover={{ bg: "none" }}>
          <Image height={"2.5rem"} src="./Images/vector.svg" />
        </Button>
      </Box>
      <Flex flexDir={"column"} alignItems={"center"} flexGrow={1} gap={2}>
        <Button bg={"none"} h={"fit"} padding={2}>
          <Image height={"1.5rem"} src="./Images/category.png" alt="category" />
        </Button>
        <Button bg={"none"} h={"fit"} padding={2}>
          <Image height={"1.5rem"} src="./Images/trend-up.png" alt="trend" />
        </Button>
        <Button bg={"none"} h={"fit"} padding={2}>
          <Image height={"1.5rem"} src="./Images/box.png" alt="" />
        </Button>
        <Button bg={"none"} h={"fit"} padding={2}>
          <Image
            height={"1.5rem"}
            src="./Images/discount-shape.png"
            alt="discount"
          />
        </Button>
        <Button bg={"none"} h={"fit"} padding={2}>
          <Image height={"1.5rem"} src="./Images/info-circle.png" alt="info" />
        </Button>
        <ThemeSwitcher />
      </Flex>
      <Flex flexDir={"column"} alignItems={"center"} mb={3} gap={2}>
        <Button bg={"none"} h={"fit"} padding={2}>
          <Image height={"1.5rem"} src="./Images/arrow-right.png" />
        </Button>
        <Button bg={"none"} h={"fit"} padding={2}>
          <Image height={"1.5rem"} src="./Images/setting.png" alt="settings" />
        </Button>
        <Button bg={"none"} h={"fit"} padding={2}>
          <Image height={"1.5rem"} src="./Images/logout.png" alt="logout" />
        </Button>
      </Flex>
    </Flex>
  );
};

export default SideBar;
