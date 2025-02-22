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
  Avatar,
  Chip,
  useMediaQuery,
  TextField
} from "@mui/material";
import { AddShoppingCart, FavoriteBorder, Share, Send } from "@mui/icons-material";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const products = [
  {
    id: 1,
    name: "هدفون Z150",
    price: "1700000",
    rating: 4.5,
    description: "هدفون حرفه ای با کیفیت صدای استثنایی و طراحی ارگونومیک",
    features: [
      "فناوری حذف نویز فعال",
      "پشتیبانی از صدای سه بعدی",
      "باتری با عمر 30 ساعت",
      "طراحی سبک و راحت",
    ],
    images: ["/B.jpeg", "/Space.png", "/S.jpg", "/Sl.jpg"],
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

const toPersianNumbers = (num) => {
  const persianDigits = '۰۱۲۳۴۵۶۷۸۹';
  return num.toString().replace(/\d/g, (d) => persianDigits[d]);
};

const ProductDetail = () => {
  const theme = useTheme();
  const { id } = useParams();
  const location = useLocation();
  const product = location.state?.product || products.find((p) => p.id === parseInt(id, 10));
  const [selectedSize, setSelectedSize] = useState("");
  const [mainImage, setMainImage] = useState(0);
  const [review, setReview] = useState({ rating: 0, comment: "", name: "" });
  const [reviews, setReviews] = useState(product?.reviews || []);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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

  const renderRating = (value) => (
    <Box sx={{ display: 'flex', alignItems: 'center', direction: 'ltr' }}>
      <Rating
        value={value}
        precision={0.5}
        readOnly
        sx={{ 
          '& .MuiRating-icon': { 
            color: theme.palette.warning.main,
            marginLeft: '2px'
          }
        }}
      />
      <Typography variant="body2" sx={{ mr: 1, fontFamily: 'IranYekan' }}>
        ({toPersianNumbers(value.toFixed(1))})
      </Typography>
    </Box>
  );

  if (!product) {
    return (
      <Container maxWidth="lg" sx={{ py: 4, textAlign: "center" }}>
        <Typography fontFamily="IranYekan" variant="h4">
          محصول یافت نشد
        </Typography>
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
        sx={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 2,
          "&:hover img": !isMobile ? {
            transform: "scale(1.1)",
          } : {}
        }}
      >
        {!isMobile ? (
          <Zoom wrapElement="div" zoomMargin={40}>
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
                cursor: "zoom-in",
                transformOrigin: "center center",
              }}
            />
          </Zoom>
        ) : (
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
              pointerEvents: 'none',
              userSelect: 'none',
              WebkitTouchCallout: 'none'
            }}
          />
        )}
      </Box>
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
        <Box
          key={index}
          onClick={() => setMainImage(index)}
          sx={{
            cursor: "pointer",
            border: mainImage === index 
              ? `2px solid ${theme.palette.primary.main}` 
              : "1px solid #e0e0e0",
            borderRadius: 1,
            overflow: "hidden",
            flexShrink: 0,
            transition: "all 0.3s",
            "&:hover": !isMobile ? { 
              borderColor: theme.palette.primary.main,
              transform: "scale(1.05)"
            } : {},
            pointerEvents: isMobile ? 'none' : 'auto'
          }}
        >
          {/* حذف کامپوننت Zoom از این بخش */}
          <img
            src={img}
            alt={`تصویر ${index + 1}`}
            style={{
              width: 100,
              height: 100,
              objectFit: "cover",
              pointerEvents: 'none',
              userSelect: 'none',
              WebkitTouchCallout: 'none'
            }}
          />
        </Box>
      ))}
    </Box>
  </Box>
</Grid>

          {/* بخش اطلاعات محصول */}
          <Grid item xs={12} md={6} sx={{ position: "relative" }}>
            <Box sx={{ 
              position: "sticky",
              top: 80,
              pb: 4,
              [theme.breakpoints.down('md')]: { position: 'static' }
            }}>
              <Typography
                fontFamily="IranYekan"
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

              {renderRating(product.rating)}

              <Typography
                fontFamily="IranYekan"
                variant="h5"
                sx={{ mb: 3, color: "primary.main", fontWeight: 600 }}
              >
                {toPersianNumbers(product.price.replace(/,/g, '').toLocaleString("fa-IR"))} تومان
              </Typography>

              <Divider sx={{ my: 3 }} />

              <Typography
                fontFamily="IranYekan"
                variant="body1"
                paragraph
                sx={{ mb: 3, lineHeight: 1.8 }}
              >
                {product.description}
              </Typography>

              <Box component="ul" sx={{ pr: 3, mb: 4 }}>
                {product.features.map((feature, index) => (
                  <li key={index}>
                    <Typography
                      fontFamily="IranYekan"
                      variant="body1"
                      color="text.secondary"
                      sx={{ lineHeight: 1.8 }}
                    >
                      {feature}
                    </Typography>
                  </li>
                ))}
              </Box>

              <Typography
                fontFamily="IranYekan"
                variant="h6"
                gutterBottom
                sx={{ fontWeight: 600 }}
              >
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
                      fontFamily: "IranYekan"
                    }}
                  >
                    {size}
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>

              <Box sx={{ 
                display: "flex", 
                gap: 2, 
                mb: 4, 
                flexDirection: { xs: "column", sm: "row" },
                position: 'sticky',
                bottom: 20,
                zIndex: 1,
                background: theme.palette.background.paper,
                py: 2,
                [theme.breakpoints.down('md')]: { position: 'static' }
              }}>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<AddShoppingCart />}
                  sx={{
                    flexGrow: 1,
                    py: 1.5,
                    fontWeight: 600,
                    boxShadow: 3,
                    background: 'linear-gradient(45deg, #1976d2 30%, #2196f3 90%)',
                    '&:hover': {
                      boxShadow: 6,
                      transform: 'translateY(-2px)'
                    },
                    transition: 'all 0.3s ease',
                    fontFamily: 'IranYekan'
                  }}
                >
                  افزودن به سبد خرید
                </Button>
                <Box sx={{ 
                  display: "flex", 
                  gap: 2, 
                  justifyContent: { xs: "center", sm: "flex-start" } 
                }}>
                  <IconButton 
                    color="primary"
                    sx={{ 
                      border: "1px solid", 
                      boxShadow: 3,
                      background: theme.palette.background.paper,
                      '&:hover': {
                        background: theme.palette.primary.light
                      }
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
                      '&:hover': {
                        background: theme.palette.primary.light
                      }
                    }}
                  >
                    <Share />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* بخش نظرات */}
          <Grid item xs={12}>
            <Box sx={{ 
              p: 3, 
              borderRadius: 4,
              boxShadow: 1,
              background: theme.palette.background.paper,
              border: `1px solid ${theme.palette.divider}`
            }}>
              <Typography
                fontFamily="IranYekan"
                variant="h5"
                gutterBottom
                sx={{ 
                  fontWeight: 700, 
                  mb: 4,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  color: theme.palette.text.primary
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
                      InputLabelProps={{ style: { fontFamily: 'IranYekan' } }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2,
                          background: theme.palette.background.default
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Box sx={{ 
                      display: "flex", 
                      alignItems: "center", 
                      gap: 2,
                      height: '100%',
                      background: theme.palette.background.default,
                      p: 2,
                      borderRadius: 2
                    }}>
                      <Typography fontFamily="IranYekan" variant="body1">امتیاز:</Typography>
                      <Rating
                        value={review.rating}
                        onChange={(e, newValue) => setReview({ ...review, rating: newValue })}
                        precision={0.5}
                        sx={{ 
                          direction: 'ltr',
                          '& .MuiRating-icon': { 
                            color: theme.palette.warning.main,
                            marginLeft: '2px'
                          }
                        }}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      multiline
                      rows={4}
                      label="متن نظر"
                      value={review.comment}
                      onChange={(e) => setReview({ ...review, comment: e.target.value })}
                      required
                      InputLabelProps={{ style: { fontFamily: 'IranYekan' } }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2,
                          background: theme.palette.background.default
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      endIcon={<Send />}
                      sx={{
                        px: 6,
                        py: 1.5,
                        fontWeight: 600,
                        borderRadius: 2,
                        background: 'linear-gradient(45deg, #4CAF50 30%, #66BB6A 90%)',
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          boxShadow: 4
                        },
                        transition: 'all 0.3s ease',
                        fontFamily: 'IranYekan'
                      }}
                    >
                      ارسال نظر
                    </Button>
                  </Grid>
                </Grid>
              </Box>

              <Divider sx={{ mb: 4 }} />
              <Typography
                fontFamily="IranYekan"
                variant="h5"
                gutterBottom
                sx={{ 
                  fontWeight: 700, 
                  mb: 4,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  color: theme.palette.text.primary
                }}
              >
                نظرات کاربران
                <Chip 
                  label={toPersianNumbers(reviews.length)} 
                  sx={{ 
                    background: theme.palette.primary.main, 
                    color: 'white',
                    fontWeight: 700,
                    fontFamily: 'IranYekan'
                  }} 
                />
              </Typography>

              {reviews.length > 0 ? (
                reviews.map((review) => (
                  <Box
                    key={review.id}
                    sx={{
                      mb: 3,
                      p: 3,
                      background: theme.palette.background.default,
                      borderRadius: 3,
                      boxShadow: 1,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateX(5px)',
                        boxShadow: 3
                      }
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                      <Avatar 
                        sx={{ 
                          bgcolor: theme.palette.primary.main, 
                          mr: 2,
                          width: 40,
                          height: 40,
                          fontSize: '1.2rem',
                          fontFamily: 'IranYekan'
                        }}
                      >
                        {toPersianNumbers(review.user[0])}
                      </Avatar>
                      <Box>
                        <Typography fontFamily="IranYekan" variant="subtitle1" sx={{ fontWeight: 700 }}>
                          {review.user}
                        </Typography>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                          <Rating 
                            value={review.rating} 
                            readOnly 
                            precision={0.5} 
                            size="small" 
                            sx={{ 
                              direction: 'ltr',
                              '& .MuiRating-icon': { 
                                color: theme.palette.warning.main,
                                marginLeft: '2px'
                              }
                            }}
                          />
                          <Typography fontFamily="IranYekan" variant="caption" color="text.secondary">
                            {toPersianNumbers(review.date)}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    <Typography 
                      fontFamily="IranYekan"
                      variant="body1" 
                      sx={{ 
                        lineHeight: 1.8,
                        color: theme.palette.text.secondary,
                        fontSize: '0.95rem'
                      }}
                    >
                      {review.comment}
                    </Typography>
                  </Box>
                ))
              ) : (
                <Box sx={{ 
                  textAlign: 'center', 
                  py: 6,
                  background: theme.palette.background.default,
                  borderRadius: 3
                }}>
                  <Typography fontFamily="IranYekan" variant="body1" color="text.secondary">
                    اولین نفری باشید که نظر می‌دهید!
                  </Typography>
                </Box>
              )}
            </Box>
          </Grid>
        </Grid>
      </Fade>
    </Container>
  );
};

export default ProductDetail;