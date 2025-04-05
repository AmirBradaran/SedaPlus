import { createTheme } from "@mui/material/styles";

export const purpleTheme = createTheme({
  direction: "rtl",
  palette: {
    primary: {
      main: "#6d1b7b",
    },
    secondary: {
      main: "#9c27b0",
    },
  },
  typography: {
    fontFamily: "IranYekan, Arial",
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "16px",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-4px)",
          },
        },
      },
    },
  },
});
