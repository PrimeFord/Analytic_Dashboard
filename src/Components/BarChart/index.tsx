import { Box, Divider, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import BarLine from "./BarLine";

const BarChart = () => {
  return (
    <>
      <Flex h={"17.3rem"} justifyContent={"space-between"}>
        <Box w={"12%"} h={"85%"} textAlign={"center"} position={"relative"}>
          <Text
            color={"#525252"}
            fontSize={["0.75rem", "0.85rem"]}
            transform={["rotate(330deg)", "rotate(0)"]}
            fontWeight={600}
            opacity={0.5}
            textAlign={"center"}
            position={"absolute"}
            top={["-0.5rem", "-0.6rem"]}
            right={["5%", "18%"]}
          >
            50,000
          </Text>
          <Text
            color={"#525252"}
            textAlign={"center"}
            position={"absolute"}
            fontSize={["0.75rem", "0.85rem"]}
            transform={["rotate(330deg)", "rotate(0)"]}
            fontWeight={600}
            opacity={0.5}
            top={"1.8rem"}
            right={["5%", "18%"]}
          >
            40,000
          </Text>
          <Text
            color={"#525252"}
            textAlign={"center"}
            position={"absolute"}
            fontSize={["0.75rem", "0.85rem"]}
            transform={["rotate(330deg)", "rotate(0)"]}
            fontWeight={600}
            opacity={0.5}
            top={"4.4rem"}
            right={["5%", "18%"]}
          >
            30,000
          </Text>
          <Text
            color={"#525252"}
            textAlign={"center"}
            position={"absolute"}
            fontSize={["0.75rem", "0.85rem"]}
            transform={["rotate(330deg)", "rotate(0)"]}
            fontWeight={600}
            opacity={0.5}
            top={"7.1rem"}
            right={["5%", "18%"]}
          >
            20,000
          </Text>
          <Text
            color={"#525252"}
            textAlign={"center"}
            position={"absolute"}
            fontSize={["0.75rem", "0.85rem"]}
            transform={["rotate(330deg)", "rotate(0)"]}
            fontWeight={600}
            opacity={0.5}
            bottom={"4rem"}
            right={["5%", "18%"]}
          >
            10,000
          </Text>
          <Text
            color={"#525252"}
            textAlign={"center"}
            position={"absolute"}
            fontSize={["0.75rem", "0.85rem"]}
            transform={["rotate(330deg)", "rotate(0)"]}
            fontWeight={600}
            opacity={0.5}
            bottom={"1.5rem"}
            right={["5%", "18%"]}
          >
            5,000
          </Text>
          <Text
            color={"#525252"}
            textAlign={"center"}
            position={"absolute"}
            bottom={"-0.6rem"}
            fontSize={["0.75rem", "0.85rem"]}
            fontWeight={600}
            opacity={0.5}
            right={["25%", "40%"]}
            transform={["rotate(330deg)", "rotate(0)"]}
          >
            0
          </Text>
        </Box>
        <Box w={"87%"} h={"100%"}>
          <Grid
            h={"85%"}
            pos={"relative"}
            // bg={"yellow"}
            // templateColumns="repeat(1, 1fr)"
            templateRows="repeat(9, 1fr)"
            // borderBottom={"1px dashed #EAEAEA"}
            // borderTop={"1px dashed #EAEAEA"}
          >
            {Array(10)
              .fill("")
              .map(() => (
                <GridItem>
                  <Divider w={"100%"} variant={"dashed"} />
                </GridItem>
              ))}
            <BarLine height={"4rem"} left={"0"} label={"Jan"} amount={8.0} />
            <BarLine
              height={"7rem"}
              left={"8.6%"}
              label={"Feb"}
              amount={16.0}
            />
            <BarLine
              height={"2.4rem"}
              left={"17.2%"}
              label={"Mar"}
              amount={4.0}
            />
            <BarLine
              height={"9.5rem"}
              left={"25.8%"}
              label={"Apr"}
              amount={28.0}
            />
            <BarLine
              height={"4.75rem"}
              left={"34.4%"}
              label={"May"}
              amount={9.0}
            />
            <BarLine
              height={"13rem"}
              left={"43%"}
              label={"Jun"}
              amount={45.0}
            />
            <BarLine
              height={"4.8rem"}
              left={"51.6%"}
              label={"Jul"}
              amount={18.0}
            />
            <BarLine
              height={"8rem"}
              left={"60.2%"}
              label={"Aug"}
              amount={22.0}
            />
            <BarLine
              height={"11rem"}
              left={"68.8%"}
              label={"Sep"}
              amount={32.0}
            />
            <BarLine
              height={"3rem"}
              left={"77.4%"}
              label={"Oct"}
              amount={5.0}
            />
            <BarLine
              height={"10rem"}
              left={"86%"}
              label={"Nov"}
              amount={30.0}
            />
            <BarLine
              height={"9rem"}
              left={"94.6%"}
              label={"Dec"}
              amount={26.0}
            />
          </Grid>
          <Box h={"15%"}></Box>
        </Box>
      </Flex>
    </>
  );
};

export default BarChart;
