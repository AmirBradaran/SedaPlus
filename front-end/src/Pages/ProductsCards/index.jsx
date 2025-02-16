import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  IconButton,
  Chip,
  TextField,
  Slider,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  useMediaQuery,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

const theme = createTheme({
  direction: "rtl",
  palette: {
    primary: purple,
  },
  typography: {
    fontFamily: "Vazir, Arial, sans-serif",
  },
});

import {
  Search as SearchIcon,
  FavoriteBorder,
  Favorite,
  ShoppingCart,
  FilterList,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Card
      sx={{
        maxWidth: isMobile ? "100%" : 350,
        minHeight: 450,
        borderRadius: 4,
        boxShadow: "0px 8px 24px rgba(149, 157, 165, 0.2)",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0px 12px 32px rgba(149, 157, 165, 0.3)",
        },
      }}
    >
      <Link to={`/products/${product.id}`} style={{ textDecoration: "none" }}>
        <CardMedia
          component="img"
          height="50%"
          image={product.image}
          alt={product.title}
          sx={{
            objectFit: "cover",
            p: 2,
            borderBottom: `1px solid ${purple[100]}`,
          }}
        />
        <Chip
          label={product.available ? "موجود در انبار" : "ناموجود"}
          color={product.available ? "success" : "error"}
          size="small"
          sx={{
            boxShadow: 1,
            fontWeight: 700,
            fontFamily: "inherit",
          }}
        />
      </Link>

      <CardContent sx={{ px: 2.5, pt: 2, pb: 0 }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 1000,
            height: 64,
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            color: "var(--second-color)",
            fontSize: isMobile ? "1rem" : "1.175rem",
            fontFamily: "inherit",
          }}
        >
          {product.title}
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
          <Typography
            variant="h5"
            sx={{
              color: "var(--second-color)",
              fontWeight: 900,
              flexGrow: 1,
              fontSize: isMobile ? "1.2rem" : "1.3rem",
              fontFamily: "inherit",
            }}
          >
            {(product.price || 0).toLocaleString("fa-IR")} تومان
          </Typography>
          <IconButton
            onClick={() => setIsFavorite((prev) => !prev)}
            sx={{ color: "red" }}
          >
            {isFavorite ? (
              <Favorite sx={{ color: "red" }} />
            ) : (
              <FavoriteBorder />
            )}
          </IconButton>
        </Box>
      </CardContent>

      <CardActions sx={{ px: 2.5, pb: 2.5 }}>
        <Button
          fullWidth
          variant="contained"
          startIcon={<ShoppingCart />}
          sx={{
            bgcolor: "var(--forth-color)",
            "&:hover": { bgcolor: "var(--first-color)" },
            borderRadius: 3,
            py: 1,
            fontWeight: 700,
            fontSize: "0.95rem",
            fontFamily: "inherit",
          }}
        >
          افزودن به سبد خرید
        </Button>
      </CardActions>
    </Card>
  );
};

const ProductListWithFilters = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState([5, 10000000]);
  const [availability, setAvailability] = useState("all");
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    setTimeout(() => {
      setProducts([
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
      ]);
    },25);
  }, []);

  const filteredProducts = products.filter((product) => {
    return (
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      product.price >= priceRange[0] &&
      product.price <= priceRange[1] &&
      (availability === "all" ||
        (availability === "available" && product.available) ||
        (availability === "unavailable" && !product.available))
    );
  });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isTablet ? "column" : "row",
        p: 3,
        gap: 3,
        direction: "rtl",
      }}
    >
      {/* بخش فیلترها */}
      {!isMobile && (
        <Box
          sx={{
            width: 300,
            display: isTablet ? "none" : "block",
            position: "sticky",
            top: 80,
            alignSelf: "flex-start",
          }}
        >
          <Card sx={{ borderRadius: 4, boxShadow: 3, p: 3 }}>
            <Typography
              variant="h6"
              sx={{
                mb: 3,
                fontWeight: 800,
                color: "var(--first-color)",
                fontFamily: "inherit",
              }}
            >
              <FilterList sx={{ ml: 1, verticalAlign: "middle" }} />
              فیلتر محصولات
            </Typography>

            <Box sx={{ mb: 4 }}>
              <Typography
                variant="subtitle1"
                sx={{
                  mb: 2,
                  fontWeight: 700,
                  fontFamily: "inherit",
                  fontSize: "1.15rem",
                }}
              >
                محدوده قیمت (تومان)
              </Typography>
              <Slider
                value={priceRange}
                onChange={(e, newValue) => setPriceRange(newValue)}
                valueLabelDisplay="auto"
                min={5}
                max={10000000}
                valueLabelFormat={(value) => value.toLocaleString("fa-IR")}
                sx={{
                  color: "var(--forth-color)",
                  "& .MuiSlider-valueLabel": {
                    backgroundColor: "var(--first-color)",
                    borderRadius: 2,
                    fontFamily: "inherit",
                  },
                }}
              />
            </Box>

            <Box>
              <Typography
                variant="subtitle1"
                sx={{
                  mb: 2,
                  fontWeight: "700",
                  fontFamily: "inherit",
                  fontSize: "1.15rem",
                }}
              >
                وضعیت موجودی
              </Typography>
              <RadioGroup
                value={availability}
                onChange={(e) => setAvailability(e.target.value)}
                sx={{ gap: 1 }}
              >
                <FormControlLabel
                  value="all"
                  control={<Radio sx={{ color: "var(--first-color)" }} />}
                  label="همه محصولات"
                  sx={{
                    "& .MuiFormControlLabel-label": {
                      fontWeight: 700,
                      fontFamily: "inherit",
                    },
                  }}
                />
                <FormControlLabel
                  value="available"
                  control={<Radio sx={{ color: "var(--first-color)" }} />}
                  label="فقط موجود‌ها"
                  sx={{
                    "& .MuiFormControlLabel-label": {
                      fontWeight: 700,
                      fontFamily: "inherit",
                    },
                  }}
                />
                <FormControlLabel
                  value="unavailable"
                  control={<Radio sx={{ color: "var(--first-color)" }} />}
                  label="فقط ناموجود‌ها"
                  sx={{
                    "& .MuiFormControlLabel-label": {
                      fontWeight: 700,
                      fontFamily: "inherit",
                    },
                  }}
                />
              </RadioGroup>
            </Box>
          </Card>
        </Box>
      )}

      {/* بخش اصلی محصولات */}
      <Box sx={{ flexGrow: 1 }}>
        <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="جستجو در محصولات..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
              startAdornment: (
                <SearchIcon
                  sx={{ color: "var(--forth-color)", ml: 1.5, mr: 2 }}
                />
              ),
              sx: {
                borderRadius: 3,
                height: 56,
                bgcolor: "background.paper",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "var(--forth-color)",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "var(--forth-color)",
                },
                fontFamily: "inherit",
              },
            }}
            sx={{ maxWidth: 500 }}
          />
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              lg: "repeat(4, 1fr)",
            },
            gap: 4,
          }}
        >
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <Box
              sx={{
                height: "50vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gridColumn: "1 / -1",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: "var(--second-color)",
                  fontWeight: 500,
                  fontFamily: "inherit",
                }}
              >
                هیچ محصولی با این فیلترها یافت نشد
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ProductListWithFilters;
