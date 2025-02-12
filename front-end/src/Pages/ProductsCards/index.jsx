import {
  Box,
  Typography,
  MenuItem,
  Select,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Slider,
} from "@mui/material";
import {
  FavoriteBorder,
  ShoppingCart,
  CompareArrows,
} from "@mui/icons-material";
import { purple } from "@mui/material/colors";
import { useState } from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    image: "https://via.placeholder.com/200",
    title: "رم دسکتاپ D60G مدل SPECTRIX ظرفیت 8 گیگابایت DDR4 RGB",
    price: "۱,۲۰۰,۰۰۰ تومان",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/200",
    title: "صندلی گیمینگ کولرمستر مدل CALIBER R3 Purple",
    price: "۱,۹۹۹,۰۰۰ تومان",
    oldPrice: "۲,۲۹۹,۰۰۰ تومان",
    discount: "۱۳٪-",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/200",
    title: "رم دسکتاپ جی اسکیل دو کاناله مدل ۳۶۰۰ مگاهرتز ظرفیت 16 گیگابایت",
    price: "۱,۷۰۰,۰۰۰ تومان",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/200",
    title: "رم دسکتاپ جی اسکیل دو کاناله مدل ۳۶۰۰ مگاهرتز ظرفیت 16 گیگابایت",
    price: "۱,۷۰۰,۰۰۰ تومان",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/200",
    title: "رم دسکتاپ جی اسکیل دو کاناله مدل ۳۶۰۰ مگاهرتز ظرفیت 16 گیگابایت",
    price: "۱,۷۰۰,۰۰۰ تومان",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/200",
    title: "رم دسکتاپ جی اسکیل دو کاناله مدل ۳۶۰۰ مگاهرتز ظرفیت 16 گیگابایت",
    price: "۱,۷۰۰,۰۰۰ تومان",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/200",
    title: "رم دسکتاپ جی اسکیل دو کاناله مدل ۳۶۰۰ مگاهرتز ظرفیت 16 گیگابایت",
    price: "۱,۷۰۰,۰۰۰ تومان",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/200",
    title: "رم دسکتاپ جی اسکیل دو کاناله مدل ۳۶۰۰ مگاهرتز ظرفیت 16 گیگابایت",
    price: "۱,۷۰۰,۰۰۰ تومان",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/200",
    title: "رم دسکتاپ جی اسکیل دو کاناله مدل ۳۶۰۰ مگاهرتز ظرفیت 16 گیگابایت",
    price: "۱,۷۰۰,۰۰۰ تومان",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/200",
    title: "رم دسکتاپ جی اسکیل دو کاناله مدل ۳۶۰۰ مگاهرتز ظرفیت 16 گیگابایت",
    price: "۱,۷۰۰,۰۰۰ تومان",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/200",
    title: "رم دسکتاپ جی اسکیل دو کاناله مدل ۳۶۰۰ مگاهرتز ظرفیت 16 گیگابایت",
    price: "۱,۷۰۰,۰۰۰ تومان",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/200",
    title: "رم دسکتاپ جی اسکیل دو کاناله مدل ۳۶۰۰ مگاهرتز ظرفیت 16 گیگابایت",
    price: "۱,۷۰۰,۰۰۰ تومان",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/200",
    title: "رم دسکتاپ جی اسکیل دو کاناله مدل ۳۶۰۰ مگاهرتز ظرفیت 16 گیگابایت",
    price: "۱,۷۰۰,۰۰۰ تومان",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/200",
    title: "رم دسکتاپ جی اسکیل دو کاناله مدل ۳۶۰۰ مگاهرتز ظرفیت 16 گیگابایت",
    price: "۱,۷۰۰,۰۰۰ تومان",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/200",
    title: "رم دسکتاپ جی اسکیل دو کاناله مدل ۳۶۰۰ مگاهرتز ظرفیت 16 گیگابایت",
    price: "۱,۷۰۰,۰۰۰ تومان",
  },
  // More products...
];

const ProductListWithFilters = () => {
  const [priceRange, setPriceRange] = useState([1200000, 1700000]);
  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: 3,
        flexDirection: { xs: "column", md: "row" },
        width: "100%",
        direction: "rtl",
        p: 3,
      }}
    >
      {/* Filters Section */}
      <Box
        sx={{
          backgroundColor: "white",
          borderRadius: 3,
          padding: 4,
          boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
          width: { xs: "100%", sm: 350 },
          display: "flex",
          flexDirection: "column",
          gap: 4,
          mb: { xs: 4, md: 0 },
        }}
      >
        {/* Status Filter */}
        <Box
          sx={{
            backgroundColor: "white",
            borderRadius: 2,
            padding: 3,
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            gap={1}
            justifyContent="space-between"
          >
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ color: purple[600] }}
            >
              وضعیت موجودی
            </Typography>
            <FiberManualRecordIcon sx={{ color: purple[400] }} />
          </Box>
          <FormControl component="fieldset" sx={{ width: "100%" }}>
            <RadioGroup name="availability" defaultValue="specialSale">
              <FormControlLabel
                sx={{ justifyContent: "flex-start" }}
                value="specialSale"
                control={<Radio size="small" />}
                label="فروش ویژه"
              />
              <FormControlLabel
                sx={{ justifyContent: "flex-start" }}
                value="available"
                control={<Radio size="small" />}
                label="موجود"
              />
            </RadioGroup>
          </FormControl>
        </Box>

        {/* Price Range Filter */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <Box
            display="flex"
            alignItems="center"
            gap={1}
            justifyContent="space-between"
          >
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ color: purple[600] }}
            >
              فیلتر بر اساس قیمت:
            </Typography>
            <FiberManualRecordIcon sx={{ color: purple[400] }} />
          </Box>
          <Slider
            value={priceRange}
            onChange={handlePriceChange}
            min={500000}
            max={5000000}
            step={10000}
            sx={{
              color: purple[500],
              mt: 2,
            }}
          />
          <Typography
            variant="body1"
            sx={{ mt: 1, fontSize: "16px", color: purple[600] }}
          >
            قیمت: {priceRange[1].toLocaleString()} تومان —{" "}
            {priceRange[0].toLocaleString()} تومان
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: purple[600],
              color: "white",
              mt: 2,
              borderRadius: 2,
              padding: "10px 25px",
              fontWeight: "bold",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              "&:hover": {
                backgroundColor: purple[700],
                boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            فیلتر
          </Button>
        </Box>
      </Box>

      {/* Product List Section */}
      <Box
        sx={{
          display: "flex",
          gap: 3,
          flexWrap: "wrap",
          width: "100%",
          justifyContent: "center",
          padding: { xs: "2%", sm: "2% 15px", md: "2% 15px" },
          boxSizing: "border-box",
        }}
      >
        {products.map((product) => (
          <Card
            key={product.id}
            sx={{
              width: { xs: "100%", sm: 250, md: 230 },
              borderRadius: 3,
              boxShadow: 3,
              position: "relative",
              overflow: "hidden",
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.05)",
              },
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
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                }}
              >
                {product.discount}
              </Box>
            )}

            {/* Clickable Card */}
            <Link
              to={`/product/${product.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <CardMedia
                component="img"
                height="180"
                image={product.image}
                alt={product.title}
                sx={{ objectFit: "contain", borderBottom: "1px solid #ddd" }}
              />

              <CardContent sx={{ textAlign: "center", padding: 2 }}>
                <Typography
                  variant="body2"
                  fontWeight="bold"
                  sx={{ color: purple[800], fontSize: "14px", mb: 1 }}
                >
                  {product.title}
                </Typography>

                {product.oldPrice && (
                  <Typography
                    variant="body2"
                    sx={{
                      textDecoration: "line-through",
                      color: "gray",
                      fontSize: "12px",
                    }}
                  >
                    {product.oldPrice}
                  </Typography>
                )}

                <Typography
                  variant="h6"
                  fontWeight="bold"
                  color="black"
                  sx={{ mt: 1 }}
                >
                  {product.price}
                </Typography>
              </CardContent>
            </Link>

            {/* Action Buttons */}
            <Box
              sx={{ display: "flex", justifyContent: "center", gap: 2, pb: 2 }}
            >
              <Link to={""}>
              <IconButton
                sx={{
                  backgroundColor: "whitesmoke",
                  borderRadius: "50%",
                  p: 1,
                  "&:hover": { backgroundColor: purple[50] },
                }}
              >
                <CompareArrows sx={{ color: purple[600] }} />
              </IconButton>
              </Link>
              <Link to={"/favorite"}>
                <IconButton
                  sx={{
                    backgroundColor: "whitesmoke",
                    borderRadius: "50%",
                    p: 1,
                    "&:hover": { backgroundColor: purple[50] },
                  }}
                >
                  <FavoriteBorder sx={{ color: "red" }} />
                </IconButton>
              </Link>
              <Link to={"/cart"}>
                <IconButton
                  sx={{
                    backgroundColor: "whitesmoke",
                    borderRadius: "50%",
                    p: 1,
                    "&:hover": { backgroundColor: purple[50] },
                  }}
                >
                  <ShoppingCart sx={{ color: purple[600] }} />
                </IconButton>
              </Link>
            </Box>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default ProductListWithFilters;
