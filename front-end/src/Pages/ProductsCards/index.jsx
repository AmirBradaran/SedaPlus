import React, { useState, useMemo, useCallback } from "react";
import {
  Box,
  TextField,
  Grid,
  useMediaQuery,
  IconButton,
  Container,
} from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import ProductCard from "./ProductCard";
import Filters from "./Filters";
import { purpleTheme } from "./theme";

const ProductListWithFilters = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState([0, 15000000]);
  const [availability, setAvailability] = useState("all");
  const isMobile = useMediaQuery(purpleTheme.breakpoints.down("md"));

  const products = [
    {
      id: 1,
      title: "هدفون بی‌سیم سونی مدل WH-1000XM5",
      price: 9500000,
      available: true,
      image: "/B.jpeg",
    },
    {
      id: 2,
      title: "هدفون هوشمند اپل ایرپادز مکس",
      price: 12000000,
      available: false,
      image: "/B.jpeg",
    },
    {
      id: 3,
      title: "هدست گیمینگ رزر کراکن V3 پرو",
      price: 4500000,
      available: true,
      image: "/B.jpeg",
    },
    {
      id: 4,
      title: "هدفون نویزکنسلینگ سامسونگ گلکسی بادز 2",
      price: 3200000,
      available: true,
      image: "/B.jpeg",
    },
    {
      id: 5,
      title: "هدفون حرفه ای ادیفایر مودل HD 660S",
      price: 8500000,
      available: true,
      image: "/B.jpeg",
    },
    {
      id: 6,
      title: "هدفون ورزشی جیبی‌ال اندیوران 2",
      price: 1800000,
      available: false,
      image: "/B.jpeg",
    },
    {
      id: 7,
      title: "هدست حرفه ای بایر داینامیک DT 770 PRO",
      price: 5500000,
      available: true,
      image: "/B.jpeg",
    },
    {
      id: 8,
      title: "هدفون بی‌سیم مارشال مایدن 4",
      price: 2900000,
      available: true,
      image: "/B.jpeg",
    },
    {
      id: 9,
      title: "هدفون گیمینگ استیل سریز آرسیس 7",
      price: 4800000,
      available: false,
      image: "/B.jpeg",
    },
    {
      id: 10,
      title: "هدفون بلوتوث شیائومی ردمی بادز 4 پرو",
      price: 1500000,
      available: true,
      image: "/B.jpeg",
    },
    {
      id: 11,
      title: "هدفون نویزکنسلینگ هواوی فری بادز 5i",
      price: 2600000,
      available: true,
      image: "/B.jpeg",
    },
    {
      id: 12,
      title: "هدفون استودیویی AKG K361",
      price: 3800000,
      available: true,
      image: "/B.jpeg",
    },
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesPrice =
        product.price >= priceRange[0] && product.price <= priceRange[1];
      const matchesAvailability =
        availability === "all" ||
        (availability === "available" && product.available) ||
        (availability === "unavailable" && !product.available);

      return matchesSearch && matchesPrice && matchesAvailability;
    });
  }, [products, searchQuery, priceRange, availability]);

  const handlePriceChange = useCallback((event, newValue) => {
    setPriceRange(newValue);
  }, []);

  const handleAvailabilityChange = useCallback((value) => {
    setAvailability(value);
  }, []);

  const handleFavoriteToggle = useCallback((productId) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === productId ? { ...p, isFavorite: !p.isFavorite } : p
      )
    );
  }, []);

  return (
    <Container maxWidth="xl" sx={{ py: 4, direction: "rtl" }}>
      <Box sx={{ mb: 4 }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="جستجو در محصولات..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          InputProps={{
            startAdornment: (
              <IconButton sx={{ padding: 0 }}>
                <SearchIcon color="primary" sx={{ mr: 2.5 }} />
              </IconButton>
            ),
            sx: {
              borderRadius: 3,
              height: 56,
              fontFamily: "IranYekan",
              bgcolor: "background.paper",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "var(--forth-color)",
              },
            },
          }}
          sx={{
            maxWidth: 600,
            mx: "auto",
            display: "block",
          }}
        />
      </Box>

      <Grid container spacing={4}>
        {!isMobile && (
          <Grid item xs={12} md={3}>
            <Filters
              priceRange={priceRange}
              availability={availability}
              onPriceChange={handlePriceChange}
              onAvailabilityChange={handleAvailabilityChange}
            />
          </Grid>
        )}

        <Grid item xs={12} md={9}>
          <Grid container spacing={4}>
            {filteredProducts.map((product) => (
              <Grid item key={product.id} xs={12} sm={6} lg={4}>
                <ProductCard
                  product={product}
                  isFavorite={product.isFavorite || false}
                  onFavoriteToggle={() => handleFavoriteToggle(product.id)}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      
    </Container>
  );
};

export default ProductListWithFilters;
