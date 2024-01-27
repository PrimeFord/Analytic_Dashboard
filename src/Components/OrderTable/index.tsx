import {
  Flex,
  Image,
  Link,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";

const OrderTable = () => {
  const img = useColorModeValue("file", "file-dark");

  const tableHeaders = ["Name", "Date", "Amount", "Status", "Invoice"];
  const tableData = [
    {
      img: "avatar1",
      name: "Marcus Bergson",
      date: "Nov 15, 2023",
      amount: "80,000",
      status: "Paid",
    },
    {
      img: "avatar2",
      name: "Jaydon Vaccaro",
      date: "Nov 15, 2023",
      amount: "159,000",
      status: "Refund",
    },
    {
      img: "avatar3",
      name: "Corey Schleifer",
      date: "Nov 14, 2023",
      amount: "87,000",
      status: "Paid",
    },
    {
      img: "avatar4",
      name: "Cooper Press",
      date: "Nov 14, 2023",
      amount: "100,000",
      status: "Refund",
    },
    {
      img: "avatar5",
      name: "Cooper Press",
      date: "Nov 13, 2023",
      amount: "78,000",
      status: "Paid",
    },
  ];
  return (
    <>
      <TableContainer w={"100%"}>
        <Table border="none" size={"sm"} variant={"simple"}>
          <Thead h="18px">
            <Tr w={"100%"}>
              {tableHeaders.map((item, idx) => (
                <Th
                  textTransform={"inherit"}
                  fontSize={["14px"]}
                  fontWeight="500"
                  color="#9CA4AB"
                  key={idx}
                >
                  {item}
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {tableData.map((item, idx) => (
              <Tr
                cursor="pointer"
                key={idx}
                // _hover={{ backgroundColor: "#f6f6f6" }}
              >
                <Td fontWeight="400" fontSize={"13px"}>
                  <Flex alignItems={"center"} gap={"1rem"}>
                    <Image
                      h={"1.5rem"}
                      w={"1.5rem"}
                      src={`./Images/${item.img}.png`}
                      alt="avatar"
                    />
                    {item.name}
                  </Flex>
                </Td>
                <Td fontWeight="400" color="#737373" fontSize={"13px"}>
                  {item.date}
                </Td>
                <Td fontSize={"13px"} fontWeight="400">
                  ${item.amount}
                </Td>
                <Td
                  fontSize={"13px"}
                  color={item.status === "Paid" ? "#34CAA5" : "#ED544E"}
                  fontWeight="400"
                >
                  {item.status}
                </Td>
                <Td h={"100%"} fontSize={"13px"}>
                  <Link>
                    <Flex gap={1} alignItems={"center"}>
                      <Image
                        h={".85rem"}
                        w={".85rem"}
                        src={`/Images/${img}.svg`}
                        alt="view"
                      />
                      view
                    </Flex>
                  </Link>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default OrderTable;
