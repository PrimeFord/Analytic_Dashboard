import { Box, Flex, Text, keyframes } from "@chakra-ui/react";

const animation = keyframes`
0%{
  width:0%
}
`;
const Platform = ({ title, prog, color, amount, perc }: any) => {
  const progress = `${animation} linear 2s backwards`;

  return (
    <Box display={"flex"} flexDir={"column"} gap={2}>
      <Text fontWeight="600" color="">
        {title}
      </Text>
      <Box h={"0.6rem"} w={"100%"} bg={"#F5F5F5"} rounded={"1rem"}>
        <Box
          h={"0.6rem"}
          w={prog}
          bg={color}
          rounded={"1rem"}
          animation={progress}
          cursor={"pointer"}
        ></Box>
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
