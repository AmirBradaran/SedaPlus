import React, { useState } from "react";
import {
  Box,
  Typography,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Slider,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  TextField,
  Collapse,
  InputAdornment,
} from "@mui/material";
import {
  FavoriteBorder,
  ShoppingCart,
  CompareArrows,
  Menu as MenuIcon,
  Search as SearchIcon,
} from "@mui/icons-material";
import { purple } from "@mui/material/colors";
import { Link } from "react-router-dom";
const products = [
  {
    id: 1,
    image: "/B.jpeg",
    title: "رم دسکتاپ D60G مدل SPECTRIX ظرفیت 8 گیگابایت DDR4 RGB",
    price: 1250000,
    available: true,
  },
  {
    id: 2,
    image: "/B.jpeg",
    title: "صندلی گیمینگ کولرمستر مدل CALIBER R3 Purple",
    price: 2350000,
    oldPrice: 2700000,
    discount: "13٪-",
    available: false,
  },
  {
    id: 3,
    image: "/B.jpeg",
    title: "رم دسکتاپ جی اسکیل 16 گیگابایت ۳۶۰۰ مگاهرتز",
    price: 1750000,
    available: true,
  },
  {
    id: 4,
    image: "/B.jpeg",
    title: "کیبورد مکانیکی HyperX Alloy",
    price: 980000,
    available: true,
  },
  {
    id: 5,
    image: "/B.jpeg",
    title: "مانیتور گیمینگ سامسونگ Odyssey G5",
    price: 4600000,
    available: true,
  },
  {
    id: 6,
    image: "/B.jpeg",
    title: "مانیتور گیمینگ سامسونگ Odyssey G5",
    price: 4600000,
    available: true,
  },
  {
    id: 7,
    image: "/B.jpeg",
    title: "مانیتور گیمینگ سامسونگ Odyssey G5",
    price: 2100000,
    available: true,
  },
  {
    id: 8,
    image: "/B.jpeg",
    title: "مانیتور گیمینگ سامسونگ Odyssey G5",
    price: 2300000,
    available: true,
  },
  {
    id: 9,
    image: "/B.jpeg",
    title: "مانیتور گیمینگ سامسونگ Odyssey G5",
    price: 6500000,
    available: true,
  },
  {
    id: 10,
    image: "/B.jpeg",
    title: "مانیتور گیمینگ سامسونگ Odyssey G5",
    price: 6000000,
    available: true,
  },
  {
    id: 11,
    image: "/B.jpeg",
    title: "مانیتور گیمینگ سامسونگ Odyssey G5",
    price: 5600000,
    available: true,
  },
  {
    id: 12,
    image: "/B.jpeg",
    title: "مانیتور گیمینگ سامسونگ Odyssey G5",
    price: 100000,
    available: true,
  },
  {
    id: 13,
    image: "/B.jpeg",
    title: "مانیتور گیمینگ سامسونگ Odyssey G5",
    price: 1000000,
    available: true,
  },
  {
    id: 14,
    image: "/B.jpeg",
    title: "مانیتور گیمینگ سامسونگ Odyssey G5",
    price: 2000000,
    available: true,
  },
  {
    id: 15,
    image: "/B.jpeg",
    title: "مانیتور گیمینگ سامسونگ Odyssey G5",
    price: 5000000,
    available: true,
  },
  {
    id: 16,
    image: "/B.jpeg",
    title: "مانیتور گیمینگ سامسونگ Odyssey G5",
    price: 7000000,
    available: true,
  },
  {
    id: 17,
    image: "/B.jpeg",
    title: "مانیتور گیمینگ سامسونگ Odyssey G5",
    price: 8000000,
    available: true,
  }
];

const ProductListWithFilters = () => {
  const [priceRange, setPriceRange] = useState([500000, 10000000]);
  const [availability, setAvailability] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);

  const handlePriceChange = (event, newValue) => setPriceRange(newValue);
  const handleAvailabilityChange = (event) => setAvailability(event.target.value);
  const handleSearchChange = (event) => setSearchQuery(event.target.value);
  const toggleFilter = () => setFilterOpen(!filterOpen);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    return (
      product.price >= priceRange[0] &&
      product.price <= priceRange[1] &&
      (availability === "all" ||
        (availability === "available" && product.available) ||
        (availability === "specialSale" && !product.available)) &&
      matchesSearch
    );
  });

  return (
    <Box sx={{ p: 3, display: "flex", flexDirection: "column", direction: "rtl" }}>
      {/* Search Bar under the Navbar */}
      <TextField
        label="جستجو محصول"
        variant="outlined"
        fullWidth
        value={searchQuery}
        onChange={handleSearchChange}
        sx={{
          mb: 3,
          maxWidth: 500,
          margin: "auto",
          backgroundColor: "white",
          borderRadius: "30px",
          boxShadow: 2,
          "& .MuiOutlinedInput-root": {
            padding: "12px 16px",
            borderRadius: "30px",
            "& fieldset": {
              borderColor: purple[500],
            },
            "&:hover fieldset": {
              borderColor: purple[700],
            },
            "&.Mui-focused fieldset": {
              borderColor: purple[800],
            },
          },
          "& .MuiInputLabel-root": {
            color: purple[500],
          },
          "& .MuiInputAdornment-root .MuiSvgIcon-root": {
            color: purple[500],
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: purple[500] }} />
            </InputAdornment>
          ),
        }}
      />

      {/* Filter Toggle Button */}
      <IconButton
        sx={{ alignSelf: "flex-start", mb: 2 }}
        onClick={toggleFilter}
        color="primary"
      >
        <MenuIcon />
      </IconButton>

      {/* Collapsible Filters Section */}
      <Collapse in={filterOpen}>
        <Box
          sx={{
            backgroundColor: "white",
            borderRadius: 3,
            p: 4,
            boxShadow: 3,
            width: { xs: "100%", sm: 350 },
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          <Typography variant="h6" fontWeight="bold" sx={{ color: purple[600] }}>
            فیلتر بر اساس قیمت:
          </Typography>
          <Slider
            value={priceRange}
            onChange={handlePriceChange}
            min={500000}
            max={5000000}
            sx={{ color: purple[500] }}
          />
          <Typography variant="body1">
            {priceRange[1].toLocaleString()} تومان —{" "}
            {priceRange[0].toLocaleString()} تومان
          </Typography>

          <Typography variant="h6" fontWeight="bold" sx={{ color: purple[600] }}>
            وضعیت موجودی
          </Typography>
          <FormControl>
            <RadioGroup
              name="availability"
              value={availability}
              onChange={handleAvailabilityChange}
            >
              <FormControlLabel value="all" control={<Radio />} label="همه" />
              <FormControlLabel value="available" control={<Radio />} label="موجود" />
              <FormControlLabel value="specialSale" control={<Radio />} label="فروش ویژه" />
            </RadioGroup>
          </FormControl>
        </Box>
      </Collapse>

      {/* Product List Section */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
          },
          gap: 3,
          width: { 600: "100%", 900: "calc(100% - 350px)" , lg:"70%" },
          margin:"0 auto"
        }}
      >
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Card
              key={product.id}
              sx={{
                width: "100%",
                borderRadius: 3,
                boxShadow: 3,
                position: "relative",
                overflow: "hidden",
                transition: "0.3s",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              {product.discount && (
                <Box
                  sx={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    backgroundColor: purple[600],
                    color: "white",
                    px: 1.5,
                    py: 0.5,
                    borderRadius: "10px",
                    fontSize: "12px",
                  }}
                >
                  {product.discount}
                </Box>
              )}
              <Link
                to={`/product/${product.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <CardMedia
                  component="img"
                  height="180"
                  image={product.image}
                  alt={product.title}
                  sx={{
                    objectFit: "contain",
                    borderBottom: "1px solid #ddd",
                    maxHeight: "200px",
                  }}
                />
                <CardContent sx={{ textAlign: "center", padding: 2 }}>
                  <Typography
                    variant="body2"
                    fontWeight="bold"
                    sx={{ color: purple[800], fontSize: "14px" }}
                  >
                    {product.title}
                  </Typography>
                  <Typography variant="h6" fontWeight="bold" color="black" sx={{ mt: 1 }}>
                    {product.price.toLocaleString()} تومان
                  </Typography>
                </CardContent>
              </Link>
              <Box sx={{ display: "flex", justifyContent: "center", gap: 1, pb: 2 }}>
                <IconButton component={Link} to={`/favorites/${product.id}`} sx={{ color: "red" }}>
                  <FavoriteBorder />
                </IconButton>
                <IconButton component={Link} to={`/compare/${product.id}`} sx={{ color: "blue" }}>
                  <CompareArrows />
                </IconButton>
                <IconButton component={Link} to={`/cart/${product.id}`} sx={{ color: "purple" }}>
                  <ShoppingCart />
                </IconButton>
              </Box>
            </Card>
          ))
        ) : (
          <Typography variant="h6" sx={{ textAlign: "center", width: "100%", mt: 3 }}>
            محصولی یافت نشد
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default ProductListWithFilters;
