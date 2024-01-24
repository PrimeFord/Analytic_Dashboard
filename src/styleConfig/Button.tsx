export const ButtonStyles = {
  // style object for base or default style
  baseStyle: {
    outline: "none",
    _focus: { boxShadow: "none" },
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    primary: (props: any) => ({
      bg: "mainBgColor",
      fontSize: "16px",
      fontWeight: "400",
      lineHeight: "24px",
      borderRadius: "10px",
      color: "textColor",
      //   width: "164px",
      _hover: {
        bg: "#F5F5F5",
        // color: "#FDFDFD",
      },
      _disabled: {
        bg: "#D8D5E8",
        // color: "#9E97C4",
      },
      "@media (max-width:480px)": {},
    }),
  },
  // default values for `size` and `variant`
  defaultProps: {
    variant: "primary",
  },
};
