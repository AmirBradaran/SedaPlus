import React, { useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Box,
  Button,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { Favorite, FavoriteBorder, AddShoppingCart } from "@mui/icons-material";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [rtlPlugin],
});
const theme = createTheme({
  direction: "rtl",
  palette: {
    primary: {
      main: "#ff4081",
    },
    secondary: {
      main: "#3f51b5",
    },
  },
});
const FavoriteCardsPage = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      title: "هدفون بی سیم مدل X200",
      price: 299.99,
      description: "هدفون بلوتوثی با کیفیت صدای بالا و عمر باتری طولانی",
      image: "/B.jpeg",
      isFavorite: true,
    },
    {
      id: 2,
      title: "هندزفری سیمی مدل Y100",
      price: 79.99,
      description: "هندزفری سیمی با کیفیت صدای استریو و میکروفون داخلی",
      image: "/B.jpeg",
      isFavorite: true,
    },
    {
      id: 3,
      title: "هدست گیمینگ مدل G500",
      price: 499.99,
      description: "هدست مخصوص بازی با میکروفون حذف نویز و صدای فراگیر",
      image: "/B.jpeg",
      isFavorite: true,
    },
    {
      id: 4,
      title: "هدفون اسپرت مدل S300",
      price: 199.99,
      description: "هدفون ورزشی مقاوم در برابر تعریق با بیس عمیق",
      image: "/B.jpeg",
      isFavorite: true,
    },
    {
      id: 5,
      title: "هدفون نویز کنسلینگ مدل NC700",
      price: 599.99,
      description: "هدفون حذف نویز با کیفیت صدای فوق العاده و طراحی لوکس",
      image: "/B.jpeg",
      isFavorite: true,
    },
    {
      id: 6,
      title: "هندزفری بلوتوث مدل B200",
      price: 129.99,
      description: "هندزفری بی‌سیم با قابلیت اتصال سریع و شارژ سریع",
      image: "/B.jpeg",
      isFavorite: true,
    },
    {
      id: 7,
      title: "پد شارژ بی سیم مدل C500",
      price: 89.99,
      description: "پد شارژ بی سیم مناسب برای هدفون‌های بلوتوثی",
      image: "/B.jpeg",
      isFavorite: true,
    },
    {
      id: 8,
      title: "کیف حمل هدفون مدل H100",
      price: 49.99,
      description: "کیف مقاوم در برابر ضربه و رطوبت مخصوص هدفون",
      image: "/B.jpeg",
      isFavorite: true,
    },
    {
      id: 9,
      title: "هدفون استودیویی مدل P900",
      price: 699.99,
      description: "هدفون حرفه‌ای مخصوص استودیو با کیفیت صدای دقیق",
      image: "/B.jpeg",
      isFavorite: true,
    },
    {
      id: 10,
      title: "کابل AUX مدل A300",
      price: 29.99,
      description: "کابل AUX با کیفیت صدای بالا و مقاوم در برابر گره خوردگی",
      image: "/B.jpeg",
      isFavorite: true,
    },
    {
      id: 11,
      title: "استند هدفون مدل ST100",
      price: 149.99,
      description: "استند آلومینیومی مقاوم مخصوص نگهداری هدفون",
      image: "/B.jpeg",
      isFavorite: true,
    },
    {
      id: 12,
      title: "بالشتک هدفون مدل C700",
      price: 59.99,
      description: "بالشتک نرم و راحت برای هدفون‌های بزرگ",
      image: "/B.jpeg",
      isFavorite: true,
    },
  ]);

  const handleRemoveFavorite = (cardId) => {
    setCards(cards.filter((card) => card.id !== cardId));
  };

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <Container
          maxWidth="lg"
          sx={{
            py: 4,
            background:
              "linear-gradient(135deg, var(--second-color) 50% , var(--third-color) 60%)",
            borderRadius: 5,
            boxShadow: 4,
            padding: 3,
            my: 2.5,
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: "bold",
              color: "white",
              textAlign: "center",
              mb: 4,
              letterSpacing: 2,
            }}
          >
            کارت های مورد علاقه من
          </Typography>

          <Grid container spacing={2.5}>
            {cards.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={3} sx={{height:"50vh"}}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 4,
                    boxShadow: 6,
                    transition: "transform 0.3s, box-shadow 0.3s",
                    "&:hover": {
                      transform: "scale(1.03)",
                      boxShadow: 10,
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    image={card.image}
                    alt={card.title}
                    sx={{
                      height: 240,
                      objectFit: "cover",
                      borderTopLeftRadius: 4,
                      borderTopRightRadius: 4,
                    }}
                  />

                  <CardContent
                    sx={{
                      flexGrow: 1,
                      textAlign: "right",
                      background: "#fff",
                      borderRadius: "0 0 4px 4px",
                    }}
                  >
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      color="var(--first-color)"
                      sx={{ fontSize: "1.5rem", fontWeight: "bolder" }}
                    >
                      {card.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="var(--second-color)"
                      sx={{ mb: 2, fontSize: "1.15rem", fontWeight: "bold" }}
                    >
                      {card.description}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        variant="h6"
                        color="var(--forth-color)"
                        sx={{ fontSize: "1.25rem", fontWeight: "bolder" }}
                      >
                        {card.price.toLocaleString("fa-IR")} تومان
                      </Typography>
                    </Box>
                  </CardContent>

                  <CardActions
                    sx={{ justifyContent: "space-between", px: 2, pb: 2 }}
                  >
                    <IconButton
                      aria-label="حذف از علاقه‌مندیها"
                      onClick={() => handleRemoveFavorite(card.id)}
                      color="error"
                    >
                      <Favorite />
                    </IconButton>
                    <Button
                      variant="contained"
                      size="medium"
                      startIcon={<AddShoppingCart />}
                      sx={{
                        borderRadius: 20,
                        backgroundColor: "var(--forth-color)",
                        "&:hover": { backgroundColor: "var(--first-color)" },
                      }}
                    >
                      افزودن به سبد خرید
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default FavoriteCardsPage;
