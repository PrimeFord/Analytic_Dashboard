import { Box, Image, Input, useColorMode } from "@chakra-ui/react";
import "./style.css";
const ThemeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box className="h-[2.5rem] pt-2 text-center relative items-center justify-center dark:text-[#FBFBFB] hidden">
      {/* {colorMode} */}
      <Input
        type="checkbox"
        display={"none"}
        id="darkmode_toggle"
        onClick={toggleColorMode}
      />
      <label htmlFor="darkmode_toggle" className="labl">
        <Image
          className="sun"
          src="./Images/sun.svg"
          alt="sun"
          // bg={"#34CAA5"}
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
