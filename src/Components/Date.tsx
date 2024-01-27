import { Image, Text, useColorModeValue } from "@chakra-ui/react";

const DateComponent = () => {
  const date: Date = new Date();
  const img = useColorModeValue("calendar", "calendar-dark");
  return (
    <>
      <Text display={"flex"} fontWeight={500} gap={2}>
        <Image src={`/Images/${img}.svg`} />
        {new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }).format(date)}
      </Text>
    </>
  );
};

export default DateComponent;
