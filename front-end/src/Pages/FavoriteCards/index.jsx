import React, { useState } from "react";
import {
  Container,
  Grid,
  Card,
  Typography,
  IconButton,
  Button,
  ThemeProvider,
  createTheme,
  ToggleButton,
  ToggleButtonGroup,
  Paper,
  Stack,
} from "@mui/material";
import { Shuffle, FavoriteBorder, Favorite } from "@mui/icons-material";
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
      price: "299.99 تومان",
      description: "هدفون بلوتوثی با کیفیت صدای بالا",
      img: "/B.jpeg",
      isFavorite: true,
    },
    {
      id: 2,
      title: "هندزفری سیمی مدل Y100",
      category: "headphone",
      price: "79.99 تومان",
      description: "هندزفری سیمی با کیفیت صدای استریو",
      img: "/B.jpeg",
      isFavorite: true,
    },
    {
      id: 7,
      title: "پد شارژ بی سیم مدل C500",
      category: "accessory",
      price: "89.99 تومان",
      description: "پد شارژ بی سیم مناسب هدفون‌ها",
      img: "/B.jpeg",
      isFavorite: true,
    },
    {
      id: 8,
      title: "کیف حمل هدفون مدل H100",
      category: "accessory",
      price: "49.99 تومان",
      description: "کیف مقاوم در برابر ضربه مخصوص هدفون",
      img: "/B.jpeg",
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
            fontFamily={"IranYekan"}
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              mb: 4,
              color: "black",
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
              <ToggleButton value="all" sx={{fontFamily:"IranYekan" , fontWeight:"bold" }}>همه</ToggleButton>
              <ToggleButton value="headphone" sx={{fontFamily:"IranYekan" , fontWeight:"bold"}}>هدفون</ToggleButton>
              <ToggleButton value="accessory" sx={{fontFamily:"IranYekan" , fontWeight:"bold"}}>لوازم جانبی</ToggleButton>
            </ToggleButtonGroup>
          </Paper>

          <Grid container spacing={3} justifyContent="center">
            {filteredCards.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4} lg={3}>
                <Card
                  sx={{
                    width: "100%",
                    height: 400,
                    p: 2,
                    borderRadius: 2.5,
                    transition: "all 0.3s",
                    "&:hover": { transform: "translateY(-5px)" },
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"space-around"
                  }}
                >
                  <Stack>
                    <img
                      src={card.img}
                      alt={card.title}
                      style={{
                        width: "100%",
                        height: 150,
                        objectFit: "contain",
                      }}
                    />
                  </Stack>

                  <Stack
                    direction={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    gap={2.5}
                  >
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      fontFamily={"IranYekan"}
                      textAlign={"center"}
                    >
                      {card.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      fontFamily={"IranYekan"}
                    >
                      {card.description}
                    </Typography>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      fontFamily={"IranYekan"}
                    >
                      {card.price}
                    </Typography>
                  </Stack>

                  <Stack direction="row" spacing={1} justifyContent="center">
                    <IconButton
                      color="error"
                      onClick={() => handleRemoveFavorite(card.id)}
                    >
                      <Favorite />
                    </IconButton>
                    <Button
                      variant="contained"
                      color="info"
                      sx={{ fontFamily: "IranYekan", fontWeight: "bold" }}
                    >
                      مشاهده
                    </Button>
                    <IconButton color="info">
                      <Shuffle />
                    </IconButton>
                  </Stack>
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
