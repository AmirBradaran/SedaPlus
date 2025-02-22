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
  ToggleButton,
  ToggleButtonGroup,
  Paper,
} from "@mui/material";
import { Favorite, AddShoppingCart } from "@mui/icons-material";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

const cacheRtl = createCache({ key: "muirtl", stylisPlugins: [rtlPlugin] });

const theme = createTheme({
  direction: "rtl",
  palette: { primary: { main: "#FF6B6B" }, secondary: { main: "#4ECDC4" } },
  typography: { fontFamily: "'Vazir', 'Samim', sans-serif" },
});

const FavoriteCardsPage = () => {
  const [filter, setFilter] = useState("all");
  const [cards, setCards] = useState([
    {
      id: 1,
      title: "هدفون بی سیم مدل X200",
      category: "headphone",
      price: 299.99,
      description: "هدفون بلوتوثی با کیفیت صدای بالا",
      image: "/B.jpeg",
      isFavorite: true,
    },
    {
      id: 2,
      title: "هندزفری سیمی مدل Y100",
      category: "headphone",
      price: 79.99,
      description: "هندزفری سیمی با کیفیت صدای استریو",
      image: "/B.jpeg",
      isFavorite: true,
    },
    {
      id: 7,
      title: "پد شارژ بی سیم مدل C500",
      category: "accessory",
      price: 89.99,
      description: "پد شارژ بی سیم مناسب هدفون‌ها",
      image: "/B.jpeg",
      isFavorite: true,
    },
    {
      id: 8,
      title: "کیف حمل هدفون مدل H100",
      category: "accessory",
      price: 49.99,
      description: "کیف مقاوم در برابر ضربه مخصوص هدفون",
      image: "/B.jpeg",
      isFavorite: true,
    },
  ]);

  const handleRemoveFavorite = (cardId) => {
    setCards(cards.filter((card) => card.id !== cardId));
  };

  const handleFilterChange = (event, newFilter) => {
    if (newFilter !== null) setFilter(newFilter);
  };

  const filteredCards =
    filter === "all" ? cards : cards.filter((card) => card.category === filter);

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <Container maxWidth="lg" sx={{ py: 4, borderRadius: 5, my: 2.5 }}>
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              mb: 4,
              color: "black",
              fontFamily:"IranYekan"
            }}
          >
            کارت های مورد علاقه من
          </Typography>

          <Paper
            elevation={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: 2,
              mb: 4,
              borderRadius: 3,
              background: "linear-gradient(145deg, #ffffff, #fff5f5)",
            }}
          >
            <ToggleButtonGroup
              value={filter}
              exclusive
              onChange={handleFilterChange}
              sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}
            >
              <ToggleButton
                value="all"
                sx={{ fontFamily:"IranYekan" , px: 3, py: 1, fontWeight: "bold", borderRadius: 20 }}
              >
                همه
              </ToggleButton>
              <ToggleButton
                value="headphone"
                sx={{ fontFamily:"IranYekan" , px: 3, py: 1, fontWeight: "bold", borderRadius: 20 }}
              >
                هدفون
              </ToggleButton>
              <ToggleButton
                value="accessory"
                sx={{ fontFamily:"IranYekan" , px: 3, py: 1, fontWeight: "bold", borderRadius: 20 }}
              >
                لوازم جانبی
              </ToggleButton>
            </ToggleButtonGroup>
          </Paper>

          <Grid container spacing={3} justifyContent="center">
            {filteredCards.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4} lg={3}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 4,
                    boxShadow: 8,
                    transition: "transform 0.3s",
                    "&:hover": { transform: "scale(1.05)" },
                  }}
                >
                  <CardMedia
                    component="img"
                    image={card.image}
                    alt={card.title}
                    sx={{
                      height: 240,
                      objectFit: "cover",
                      borderRadius: "4px 4px 0 0",
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1, textAlign: "center" }}>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "bold", color: "black" , fontFamily:"IranYekan" }}
                    >
                      {card.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: "gray", mb: 0.5 , fontFamily:"IranYekan" , mt:0.5 }}
                    >
                      {card.description}
                    </Typography>
                    <Box
                      sx={{
                        px: 2,
                        pt:1,
                        borderRadius: 2,
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{ color: "black", fontWeight: "bold" , fontFamily:"IranYekan" }}
                      >
                        {card.price.toLocaleString("fa-IR")} تومان
                      </Typography>
                    </Box>
                  </CardContent>
                  <CardActions
                    sx={{
                      justifyContent: "space-between",
                      px: 2,
                      pb: 2,
                    }}
                  >
                    <IconButton
                      aria-label="حذف از علاقه‌مندیها"
                      onClick={() => handleRemoveFavorite(card.id)}
                      sx={{
                        color: "error.main",
                        "&:hover": {
                          transform: "scale(1.1)",
                          transition: "transform 0.2s",
                        },
                      }}
                    >
                      <Favorite />
                    </IconButton>
                    <Button
                      variant="contained"
                      size="medium"
                      startIcon={<AddShoppingCart />}
                      sx={{
                        borderRadius: 25,
                        bgcolor: "var(--forth-color)",
                        color: "white",
                        "&:hover": { bgcolor: "var(--second-color)" },
                        fontFamily:"IranYekan"
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
