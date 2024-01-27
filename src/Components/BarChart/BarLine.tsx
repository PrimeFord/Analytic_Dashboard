import { Box, Text } from "@chakra-ui/react";

const BarLine = ({ height, left, label, amount }: any) => {
  return (
    <Box
      // display={"flex"}
      textAlign={"center"}
      cursor={"pointer"}
      position={"absolute"}
      bottom={"-2rem"}
      left={left}
    >
      <Box
        position={"absolute"}
        top={"-2.4rem"}
        right={"-70%"}
        textAlign={"center"}
        px={2}
        py={1}
        display={"none"}
        fontSize={"0.8rem"}
        bg={"#090C2C"}
        color={"#fff"}
        _after={{
          content: '""',
          position: "absolute",
          height: "0",
          width: "0",
          bottom: "-0.7rem",
          left: "1.8rem",
          borderTop: "12px solid #090C2C",
          borderRight: "6px solid transparent",
          borderLeft: "6px solid transparent",
        }}
        _hover={{ display: "block" }}
      >
        ${amount}
      </Box>
      <Box></Box>
      <Box
        height={height}
        width={["0.8rem", "2rem"]}
        bg={"#34CAA5"}
        opacity={0.1}
        roundedTop={"2rem"}
        _hover={{
          bg: "transparent",
          opacity: 1,
          bgGradient: "linear(to-t, transparent, #34CAA5)",
        }}
        bgGradient="linear(to-t, transparent, #34CAA5)"
      ></Box>
      <Text
        color={"#525252"}
        fontWeight={600}
        opacity={0.5}
        mt={3}
        fontSize={"0.85rem"}
        transform={["rotate(290deg)", "rotate(0deg)"]}
      >
        {label}
      </Text>
    </Box>
  );
};

export default BarLine;
