import { Box, BoxProps, Flex, useColorModeValue } from "@chakra-ui/react";
import SideBar from "../../Components/SideBar";
import { ReactNode } from "react";
import NavBar from "../../Components/NavBar";

interface IMainWrapper extends BoxProps {
  children: ReactNode;
}
const MainWrapper = ({ children }: IMainWrapper) => {
  const bg = useColorModeValue("mainBgColor", "secBgColor");
  const color = useColorModeValue("#26282C", "#FDFDFD");
  return (
    <>
      <Flex height={"100vh"} color={color} position={"fixed"} w={"100%"}>
        <SideBar />
        <Box bg={bg} w={"100%"} overflowY={"auto"}>
          <NavBar />
          <Box p={"1rem"} height={"fit"} pt={"6rem"}>
            {children}
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default MainWrapper;
