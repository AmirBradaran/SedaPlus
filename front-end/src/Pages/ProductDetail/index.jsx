import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  Rating,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  useTheme,
  Fade,
  Grow,
  Zoom,
  TextField,
  Avatar,
  Chip,
  useMediaQuery,
} from "@mui/material";
import { AddShoppingCart, FavoriteBorder, Share, Send } from "@mui/icons-material";

const products = [
  {
    id: 1,
    name: "هدفون Z150",
    price: "۱,۷۰۰,۰۰۰",
    rating: 4.5,
    description: "هدفون حرفه ای با کیفیت صدای استثنایی و طراحی ارگونومیک",
    features: [
      "فناوری حذف نویز فعال",
      "پشتیبانی از صدای سه بعدی",
      "باتری با عمر 30 ساعت",
      "طراحی سبک و راحت",
    ],
    images: ["/B.jpeg", "/B.jpeg", "/B.jpeg", "/B.jpeg"],
    sizes: ["قرمز", "آبی", "زرد", "مشکی", "سفید"],
    sizeColors: {
      قرمز: "#D32F2F",
      آبی: "#1976D2",
      زرد: "#FBC02D",
      مشکی: "#000000",
      سفید: "#FFFFFF",
    },
    reviews: [
      {
        id: 1,
        user: "کاربر نمونه",
        rating: 4,
        comment: "کیفیت ساخت عالی، صدای بسیار خوبی داره",
        date: "۱۴۰۲/۰۳/۱۵",
      },
    ],
  },
];

const ProductDetail = () => {
  const theme = useTheme();
  const { id } = useParams();
  const location = useLocation();
  const product = location.state?.product || products.find((p) => p.id === parseInt(id, 10));
  const [selectedSize, setSelectedSize] = useState("");
  const [mainImage, setMainImage] = useState(0);
  const [review, setReview] = useState({ rating: 0, comment: "", name: "" });
  const [reviews, setReviews] = useState(product?.reviews || []);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleSizeChange = (event, newSize) => {
    setSelectedSize(newSize);
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (review.rating > 0 && review.comment) {
      const newReview = {
        id: Date.now(),
        user: review.name || "ناشناس",
        rating: review.rating,
        comment: review.comment,
        date: new Date().toLocaleDateString("fa-IR"),
      };
      setReviews([...reviews, newReview]);
      setReview({ rating: 0, comment: "", name: "" });
    }
  };

  if (!product) {
    return (
      <Container maxWidth="lg" sx={{ py: 4, textAlign: "center" }}>
        <Typography fontFamily="IranYekan" variant="h4">محصول یافت نشد</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4, direction: "rtl" }}>
      <Fade in timeout={500}>
        <Grid container spacing={4}>
          {/* بخش تصاویر محصول */}
          <Grid item xs={12} md={6}>
            <Box sx={{ position: "relative" }}>
              <Grow in timeout={800}>
                <Box
                  component="img"
                  src={product.images[mainImage]}
                  alt={product.name}
                  sx={{
                    width: "100%",
                    height: "auto",
                    borderRadius: 2,
                    mb: 2,
                    boxShadow: 3,
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": { transform: "scale(1.02)" },
                  }}
                />
              </Grow>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  overflowX: "auto",
                  py: 2,
                  "&::-webkit-scrollbar": { height: 6 },
                  "&::-webkit-scrollbar-thumb": {
                    backgroundColor: theme.palette.divider,
                    borderRadius: 2,
                  },
                }}
              >
                {product.images.map((img, index) => (
                  <Zoom in timeout={(index + 1) * 300} key={index}>
                    <Box
                      onClick={() => setMainImage(index)}
                      sx={{
                        cursor: "pointer",
                        border: mainImage === index ? `2px solid ${theme.palette.primary.main}` : "1px solid #e0e0e0",
                        borderRadius: 1,
                        overflow: "hidden",
                        flexShrink: 0,
                        transition: "border-color 0.3s",
                        "&:hover": { borderColor: theme.palette.primary.main },
                      }}
                    >
                      <img
                        src={img}
                        alt={`تصویر ${index + 1}`}
                        style={{ width: 100, height: 100, objectFit: "cover" }}
                      />
                    </Box>
                  </Zoom>
                ))}
              </Box>
            </Box>
          </Grid>

          {/* بخش اطلاعات محصول */}
          <Grid item xs={12} md={6} sx={{ position: "relative" }}>
            <Box
              sx={{
                position: "sticky",
                top: 80,
                pb: 4,
                [theme.breakpoints.down("md")]: { position: "static" },
              }}
            >
              <Typography fontFamily="IranYekan"
                variant="h4"
                component="h1"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  fontSize: isMobile ? "1.8rem" : "2.125rem",
                  color: theme.palette.text.primary,
                }}
              >
                {product.name}
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Rating value={product.rating} precision={0.5} readOnly />
                <Typography fontFamily="IranYekan" variant="body2" sx={{ ml: 1, color: "text.secondary" }}>
                  ({reviews.length} نظر)
                </Typography>
              </Box>

              <Typography fontFamily="IranYekan" variant="h5" sx={{ mb: 3, color: "primary.main", fontWeight: 600 }}>
                {product.price} تومان
              </Typography>

              <Divider sx={{ my: 3 }} />

              <Typography fontFamily="IranYekan" variant="body1" paragraph sx={{ mb: 3, lineHeight: 1.8 }}>
                {product.description}
              </Typography>

              <Box component="ul" sx={{ pr: 3, mb: 4 }}>
                {product.features.map((feature, index) => (
                  <li key={index}>
                    <Typography fontFamily="IranYekan" variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                      {feature}
                    </Typography>
                  </li>
                ))}
              </Box>

              <Typography fontFamily="IranYekan" variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                انتخاب رنگ
              </Typography>
              <ToggleButtonGroup
                value={selectedSize}
                exclusive
                onChange={handleSizeChange}
                sx={{
                  mb: 3,
                  flexWrap: "wrap",
                  gap: 1,
                  justifyContent: "center",
                }}
              >
                {product.sizes.map((size) => (
                  <ToggleButton
                    key={size}
                    value={size}
                    sx={{
                      width: isMobile ? 80 : 100,
                      height: isMobile ? 40 : 48,
                      backgroundColor: "white",
                      color: product.sizeColors[size] ? "#000" : "inherit",
                      "&.Mui-selected": {
                        backgroundColor: product.sizeColors[size] || theme.palette.primary.main,
                        color: theme.palette.primary.contrastText,
                      },
                    }}
                  >
                    {size}
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>

              {/* دکمه‌های خرید و اشتراک‌گذاری */}
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  mb: 4,
                  flexDirection: { xs: "column", sm: "row" },
                  position: "sticky",
                  bottom: 20,
                  zIndex: 1,
                  background: theme.palette.background.paper,
                  py: 2,
                  [theme.breakpoints.down("md")]: { position: "static" },
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<AddShoppingCart />}
                  sx={{
                    flexGrow: 1,
                    py: 1.5,
                    fontWeight: 600,
                    boxShadow: 3,
                    background: "linear-gradient(45deg, #1976d2 30%, #2196f3 90%)",
                    "&:hover": {
                      boxShadow: 6,
                      transform: "translateY(-2px)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  افزودن به سبد خرید
                </Button>
                <Box sx={{ display: "flex", gap: 2, justifyContent: { xs: "center", sm: "flex-start" } }}>
                  <IconButton
                    color="primary"
                    sx={{
                      border: "1px solid",
                      boxShadow: 3,
                      background: theme.palette.background.paper,
                      "&:hover": {
                        background: theme.palette.primary.light,
                      },
                    }}
                  >
                    <FavoriteBorder />
                  </IconButton>
                  <IconButton
                    color="primary"
                    sx={{
                      border: "1px solid",
                      boxShadow: 3,
                      background: theme.palette.background.paper,
                      "&:hover": {
                        background: theme.palette.primary.light,
                      },
                    }}
                  >
                    <Share />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* بخش نظرات - کل عرض */}
          <Grid item xs={12}>
            <Box
              sx={{
                p: 3,
                borderRadius: 4,
                boxShadow: 1,
                background: theme.palette.background.paper,
                border: `1px solid ${theme.palette.divider}`,
              }}
            >
              {/* فرم ارسال نظر */}
              <Typography fontFamily="IranYekan"
                variant="h5"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  mb: 4,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  color: theme.palette.text.primary,
                }}
              >
                <Send sx={{ color: theme.palette.primary.main }} />
                ثبت نظر جدید
              </Typography>

              <Box component="form" onSubmit={handleReviewSubmit} sx={{ mb: 6 }}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={4}>
                    <TextField
                      fullWidth
                      label="نام شما"
                      value={review.name}
                      onChange={(e) => setReview({ ...review, name: e.target.value })}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 4,
                        },
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} md={3}>
                    <Rating
                      value={review.rating}
                      onChange={(e, newRating) => setReview({ ...review, rating: newRating })}
                      sx={{ mb: 2 }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      multiline
                      rows={4}
                      label="نظر شما"
                      value={review.comment}
                      onChange={(e) => setReview({ ...review, comment: e.target.value })}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 4,
                        },
                      }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      sx={{
                        py: 1.5,
                        fontWeight: 600,
                        backgroundColor: theme.palette.primary.main,
                        "&:hover": {
                          backgroundColor: theme.palette.primary.dark,
                        },
                      }}
                    >
                      ارسال نظر
                    </Button>
                  </Grid>
                </Grid>
              </Box>

              {/* نمایش نظرات کاربران */}
              {reviews.length > 0 ? (
                reviews.map((review) => (
                  <Box
                    key={review.id}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                      p: 2,
                      borderBottom: "1px solid #ddd",
                    }}
                  >
                    <Typography fontFamily="IranYekan" variant="subtitle1" sx={{ fontWeight: 600 }}>
                      {review.user}
                    </Typography>
                    <Rating value={review.rating} readOnly precision={0.5} sx={{ mb: 1 }} />
                    <Typography fontFamily="IranYekan" variant="body2" sx={{ color: theme.palette.text.secondary }}>
                      {review.comment}
                    </Typography>
                    <Typography fontFamily="IranYekan" variant="body2" sx={{ fontSize: "0.875rem", color: theme.palette.text.secondary }}>
                      {review.date}
                    </Typography>
                  </Box>
                ))
              ) : (
                <Typography fontFamily="IranYekan" variant="body1" color="text.secondary">
                  هیچ نظری برای این محصول ثبت نشده است.
                </Typography>
              )}
            </Box>
          </Grid>
        </Grid>
      </Fade>
    </Container>
  );
};

export default ProductDetail;
