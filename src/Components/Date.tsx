import { Image, Text } from "@chakra-ui/react";

const DateComponent = () => {
  const date: Date = new Date();

  return (
    <>
      <Text display={"flex"} fontWeight={500} gap={2}>
        <Image src="/Images/calendar.svg" />
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
