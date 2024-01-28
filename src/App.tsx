import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Link,
  Select,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import "./App.css";
import MainWrapper from "./Layouts/MainWrapper";
import OrderTable from "./Components/OrderTable";
import ExpensesCard from "./Components/ExpensesCard";
import Platform from "./Components/Platform";
import SearchComponent from "./Components/SearchComponent";
import BarChart from "./Components/BarChart";

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
      color: "#FF4A55",
      amount: "1,000,000",
      perc: "7%",
    },
  ];
  return (
    <>
      <MainWrapper>
        <Flex
          height={"100%"}
          flexDir={["column", "row"]}
          justifyContent={"space-between"}
          gap={["1rem", ""]}
        >
          <Box display={["flex", "none"]}>
            <SearchComponent />
          </Box>
          <Flex
            height={"100%"}
            width={["100%", "66%"]}
            gap={"1rem"}
            flexDir={"column"}
            justifyContent={"space-between"}
          >
            <Box
              width={"100%"}
              display={"flex"}
              flexDir={"column"}
              height={"48%"}
              gap={2}
              bg={bg}
              rounded={"14px"}
              border={"1px solid #EDF2F7"}
              padding={3}
            >
              <Flex justifyContent={"space-between"} h={"1.8rem"}>
                <Text fontWeight={600}>Sales Trends</Text>
                <Flex alignItems={"center"}>
                  <Text
                    // w={"6rem"}
                    mr={3}
                    fontWeight={400}
                    fontSize={"0.9rem"}
                  >
                    Short by:
                  </Text>

                  <Button
                    bg={"none"}
                    fontSize={"0.9rem"}
                    rounded={"16px"}
                    fontWeight={300}
                    _active={{ bg: "none" }}
                    p={3}
                    border={"1px solid #E1DFDF"}
                    height={"2rem"}
                  >
                    <Select
                      placeholder="Weekly"
                      variant={"unstyled"}
                      size={"sm"}
                    >
                      <option value="monthly">Monthly</option>
                      <option value="yearly">Yearly</option>
                    </Select>
                  </Button>
                </Flex>
              </Flex>
              <BarChart />
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
                <Text fontWeight={600}>Last Orders</Text>
                <Link color={"pryColor"}>See All</Link>
              </Flex>
              <OrderTable />
            </Box>
          </Flex>
          <Flex
            height={["fit-content", "100%"]}
            width={["100%", "33%"]}
            gap={"1rem"}
            flexDir={"column"}
            justifyContent={"space-between"}
          >
            <Grid
              width={"100%"}
              height={["fit-content", "48%"]}
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
              height={"49%"}
              padding={4}
            >
              <Flex
                fontSize={"1rem"}
                justifyContent={"space-between"}
                mb={"0.85rem"}
              >
                <Text fontWeight={600}>Top Platform</Text>
                <Link color={"pryColor"}>See All</Link>
              </Flex>
              <Flex flexDirection={"column"} gap={3}>
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
              </Flex>
            </Box>
          </Flex>
        </Flex>
      </MainWrapper>
    </>
  );
}

export default App;
