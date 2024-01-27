import { Box, Flex, Text } from "@chakra-ui/react";

const Platform = ({ title, prog, color, amount, perc }: any) => {
  return (
    <Box display={"flex"} flexDir={"column"} gap={2}>
      <Text fontWeight="600" color="">
        {title}
      </Text>
      <Box h={"0.6rem"} w={"100%"} bg={"#F5F5F5"} rounded={"1rem"}>
        <Box h={"0.6rem"} w={prog} bg={color} rounded={"1rem"}></Box>
      </Box>
      <Flex justifyContent={"space-between"}>
        <Text fontWeight="400" fontSize={"13px"} color="#737373">
          ${amount}{" "}
        </Text>{" "}
        <Text fontWeight="400" fontSize={"13px"} color="#737373">
          +{perc}{" "}
        </Text>
      </Flex>
    </Box>
  );
};

export default Platform;
