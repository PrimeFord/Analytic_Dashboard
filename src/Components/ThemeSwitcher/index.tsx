import { Box, Image, Input, useColorMode } from "@chakra-ui/react";
import "./style.css";
const ThemeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  console.log(colorMode);
  return (
    <Box>
      {/* {colorMode} */}
      <Input
        type="checkbox"
        display={["none", "none"]}
        id="darkmode_toggle"
        onClick={toggleColorMode}
      />
      <label htmlFor="darkmode_toggle" className="labl">
        {/* <Box className="labl"> */}
        <Image
          className="sun"
          src="./Images/sun.svg"
          alt="sun"
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
        {/* </Box> */}
      </label>
    </Box>
  );
};

export default ThemeSwitcher;
