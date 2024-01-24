import { extendTheme } from "@chakra-ui/react";
import "@fontsource/plus-jakarta-sans";
import { colors } from "./Color";
import { ButtonStyles as button } from "./Button";

const components = {
  button,
};

export const customTheme = extendTheme({
  fonts: {
    heading: "Plus Jakarta Sans, sans-serif",
    body: "Plus Jakarta Sans, sans-serif",
  },
  components,
  colors,
});
