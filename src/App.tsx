import { Box, Flex, Link, Text } from "@chakra-ui/react";
import "./App.css";
import MainWrapper from "./Layouts/MainWrapper";
import OrderTable from "./Components/OrderTable";

function App() {
  return (
    <>
      <MainWrapper>
        {/* <Text h={"200vh"}>Click on the Vite and React logos to learn more</Text> */}
        <Flex height={"100%"} justifyContent={"space-between"}>
          <Flex
            height={"100%"}
            width={"65%"}
            flexDir={"column"}
            justifyContent={"space-between"}
          >
            <Box
              width={"100%"}
              height={"48%"}
              bg={"white"}
              rounded={"14px"}
              border={"1px solid #EDF2F7"}
              padding={3}
            >
              <Text>BAr Chart</Text>
            </Box>
            <Box
              bg={"white"}
              rounded={"14px"}
              border={"1px solid #EDF2F7"}
              width={"100%"}
              height={"48%"}
              padding={4}
            >
              <Flex
                fontSize={"1rem"}
                justifyContent={"space-between"}
                mb={"0.85rem"}
              >
                <Text fontWeight={500}>Last Orders</Text>
                <Link color={"pryColor"}>See All</Link>
              </Flex>
              <OrderTable />
            </Box>
          </Flex>
          <Flex
            height={"100%"}
            width={"33%"}
            flexDir={"column"}
            justifyContent={"space-between"}
          >
            <Box
              bg={"white"}
              rounded={"14px"}
              border={"1px solid #EDF2F7"}
              width={"100%"}
              height={"48%"}
              padding={4}
            >
              <Flex
                fontSize={"1rem"}
                justifyContent={"space-between"}
                mb={"0.85rem"}
              >
                <Text fontWeight={500}>Top Platform</Text>
                <Link color={"pryColor"}>See All</Link>
              </Flex>
            </Box>
          </Flex>
        </Flex>
      </MainWrapper>
    </>
  );
}

export default App;
