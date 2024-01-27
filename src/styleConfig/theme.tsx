import { ThemeConfig, extendTheme } from "@chakra-ui/react";
import "@fontsource/plus-jakarta-sans";
import { colors } from "./Color";
import { ButtonStyles as button } from "./Button";

const components = {
  button,
};
const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

export const customTheme = extendTheme({
  config,
  fonts: {
    heading: "Plus Jakarta Sans, sans-serif",
    body: "Plus Jakarta Sans, sans-serif",
  },
  components,
  colors,
});
