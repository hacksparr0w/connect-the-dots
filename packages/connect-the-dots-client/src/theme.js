import { createMuiTheme } from "@material-ui/core";
import { lightBlue } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: lightBlue
  },
  overrides: {
    MuiTypography: {
      h1: {
        fontWeight: 600
      }
    },
    MuiButton: {
      root: {
        padding: "6px 36px",
        borderRadius: 100
      },
      containedPrimary: {
        color: "#fff"
      }
    }
  }
});

export default theme;
