import { Box, Flex, Image, Text, useColorModeValue } from "@chakra-ui/react";

const ExpensesCard = ({ img, stock, title, amount, trade }: any) => {
  const bg = useColorModeValue("white", "#212121");

  return (
    <Box
      width={"100%"}
      height={"100%"}
      bg={bg}
      display={"flex"}
      flexDir={"column"}
      justifyContent={"space-between"}
      rounded={"12px"}
      border={"1px solid #EDF2F7"}
      padding={3}
      gap={["0.4rem", ""]}
    >
      <Flex justifyContent={"space-between"} mb={2}>
        <Box h={"fit"} padding={2} rounded={"50%"} border={"1px solid #E5EAEF"}>
          <Image w={"1.2rem"} src={`/Images/${img}.png`} />
        </Box>
        <Image width={["5.5rem", "fit"]} src={`/Images/${stock}.svg`} />
      </Flex>
      <Text fontWeight="500" color="#898989">
        {title}
      </Text>
      <Text fontWeight="600" color="">
        {amount}
      </Text>
      <Flex
        justifyContent={"space-between"}
        flexDirection={["column", "row"]}
        mb={2}
      >
        <Image w={["4.5rem", "3.5rem"]} src={`/Images/${trade}.svg`} />
        <Text fontWeight="400" fontSize={"13px"} color="#737373">
          vs. previous month
        </Text>
      </Flex>
    </Box>
  );
};

export default ExpensesCard;
