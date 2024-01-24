import { Box, Image, Input } from "@chakra-ui/react";

const ThemeSwitcher = () => {
  return (
    <Box className="h-[2.5rem] pt-2 text-center relative items-center justify-center dark:text-[#FBFBFB] hidden">
      <Input type="checkbox" id="darkmode_toggle" onClick={() => {}} />
      <label htmlFor="darkmode_toggle">
        <Image
          className="sun"
          src="./Images/sun.svg"
          alt="sun"
          bg={"#34CAA5"}
          height={19.2}
          width={19.2}
        />
        <Image
          className="moon"
          src="./Images/moon.svg"
          alt="moon"
          height={19.2}
          width={19.2}
        />
      </label>
    </Box>
  );
};

export default ThemeSwitcher;
