import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    Modal: {
      variants: {
        bottom: {
          dialog: {
            minHeight: "initial",
            bottom: "0",
            borderRadius: "10px 10px 0 0",
          },
        },
      },
    },
  },
});

export default theme;
