import { Box, BoxProps, Flex } from "@chakra-ui/react";
import SideBar from "../../Components/SideBar";
import { ReactNode } from "react";

interface IMainWrapper extends BoxProps {
  children: ReactNode;
}
const MainWrapper = ({ children }: IMainWrapper) => {
  return (
    <>
      <Flex height={"100vh"} position={"fixed"} w={"100%"}>
        <SideBar />
        <Box
          bg={"mainBgColor"}
          w={"100%"}
          overflowY={"auto"}
          height={"100vh"}
          p={"1.5rem"}
        >
          {children}
        </Box>
      </Flex>
    </>
  );
};

export default MainWrapper;
