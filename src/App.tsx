import {
  Box,
  Flex,
  Grid,
  GridItem,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import "./App.css";
import MainWrapper from "./Layouts/MainWrapper";
import OrderTable from "./Components/OrderTable";
import ExpensesCard from "./Components/ExpensesCard";
import Platform from "./Components/Platform";

function App() {
  const bg = useColorModeValue("white", "#212121");
  const expenseData: {
    img: string;
    stock: string;
    title: string;
    amount: number | string;
    trade: string;
  }[] = [
    {
      img: "box-tick",
      stock: "long",
      title: "Total Order",
      amount: 350,
      trade: "Up",
    },
    {
      img: "3d-rotate",
      stock: "short",
      title: "Total Refund",
      amount: 270,
      trade: "down",
    },
    {
      img: "shopping-cart",
      stock: "short",
      title: "Average Sales",
      amount: 1567,
      trade: "down",
    },
    {
      img: "coin",
      stock: "long",
      title: "Total Income",
      amount: "$350.000",
      trade: "Up",
    },
  ];
  const platform: {
    title: string;
    prog: string;
    color: string;
    amount: string;
    perc: string;
  }[] = [
    {
      title: " Book Bazaar",
      prog: "50%",
      color: "#6160DC",
      amount: "2,500,000",
      perc: "15%",
    },
    {
      title: " Artisan Aisle",
      prog: "40%",
      color: "#54C5EB",
      amount: "1,800,000",
      perc: "10%",
    },
    {
      title: " Toy Troop",
      prog: "25%",
      color: "#FFB74A",
      amount: "1,200,000",
      perc: "8%",
    },
    {
      title: " XStore",
      prog: "23%",
      color: "#6160DC",
      amount: "1,000,000",
      perc: "7%",
    },
  ];
  return (
    <>
      <MainWrapper>
        {/* <Text h={"200vh"}>Click on the Vite and React logos to learn more</Text> */}
        <Flex
          height={"100%"}
          flexDir={["column", "row"]}
          justifyContent={"space-between"}
          gap={["1rem", ""]}
        >
          <Flex
            height={"100%"}
            width={["100%", "66%"]}
            gap={"1rem"}
            flexDir={"column"}
            justifyContent={"space-between"}
          >
            <Box
              width={"100%"}
              height={"48%"}
              bg={bg}
              rounded={"14px"}
              border={"1px solid #EDF2F7"}
              padding={3}
            >
              <Text>BAr Chart</Text>
            </Box>
            <Box
              bg={bg}
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
            width={["100%", "33%"]}
            gap={"1rem"}
            flexDir={"column"}
            justifyContent={"space-between"}
          >
            <Grid
              width={"100%"}
              height={"48%"}
              templateColumns="repeat(2, 1fr)"
              gap={2}
              // padding={4}
            >
              {expenseData.map((e, id) => (
                <GridItem key={id}>
                  <ExpensesCard
                    img={e.img}
                    stock={e.stock}
                    title={e.title}
                    amount={e.amount}
                    trade={e.trade}
                  />
                </GridItem>
              ))}
            </Grid>
            <Box
              bg={bg}
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
              {platform.map((e, id) => (
                <Platform
                  key={id}
                  title={e.title}
                  prog={e.prog}
                  color={e.color}
                  amount={e.amount}
                  perc={e.perc}
                />
              ))}
            </Box>
          </Flex>
        </Flex>
      </MainWrapper>
    </>
  );
}

export default App;
