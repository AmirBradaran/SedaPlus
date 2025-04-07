import {
  Box,
  Typography,
  Container,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import OrderCard from "./OrderCard";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";

const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "IranYekan, sans-serif",
  },
});

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [rtlPlugin],
});

const orders = [
  {
    status: "در حال ارسال",
    title: "هدفون z5",
    price: 1250000,
    time: "15:20",
    image: "/S.jpg",
  },
  {
    status: "ارسال شده (منتظر تایید)",
    title: "هدفون z5",
    price: 1250000,
    time: "15:20",
    image: "/S.jpg",
  },
  {
    status: "در حال بررسی",
    title: "هدفون z5",
    price: 1250000,
    time: "15:20",
    image: "/S.jpg",
  },
];

const OrdersPage = () => {
  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down("sm"));

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <Box
          dir="rtl"
          sx={{
            direction: "rtl",
            minHeight: "100vh",
            background: "#00000080",
            py: 5,
            width: "100%",
            borderRadius: 5,
          }}
        >
          <Container maxWidth="md">
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: "space-between",
                alignItems: { xs: "center", sm: "flex-start" },
                mb: 4,
                gap: 2,
              }}
            >
              <Typography
                variant="h6"
                fontWeight={"bold"}
                color="white"
                textAlign={{ xs: "center", sm: "right" }}
              >
                تاریخچه سفارشات
              </Typography>
              <Typography
                variant="h6"
                color="white"
                fontWeight={"bold"}
                borderBottom={"5px solid white"}
                textAlign="center"
                sx={{
                  borderRadius: "0 0 10px 10px",
                  width: { xs: "100%", sm: "50%" },
                }}
              >
                سفارشات در حال ارسال
              </Typography>
            </Box>
            {orders.map((order, index) => (
              <OrderCard key={index} {...order} />
            ))}
          </Container>
        </Box>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default OrdersPage;
