import React from "react";
import { Card, Grid, Typography, Box, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const ProductList = () => {
  const theme = useTheme();
  const products = [
    {
      id:1,
      img: "/B.jpeg",
      title: "هدفون",
      model: "MACHINES XIII HERD",
      price: "۱,۷۰۰,۰۰۰ تومان",
    },
    {
      id:2,
      img: "/B.jpeg",
      title: "هدست",
      model: "معدلي كيميك كوهرستر",
      price: "۲,۵۰۰,۰۰۰ تومان",
    },
    {
      id:3,
      img: "/B.jpeg",
      title: "شارژر آیپد",
      model: "GAINING Radoon BX 2800",
      price: "۳,۲۰۰,۰۰۰ تومان",
    },
    {
      id:4,
      img: "/B.jpeg",
      title: "هندزفری",
      model: "كوضى ايل مدل",
      price: "۴,۰۰۰,۰۰۰ تومان",
    },
    {
      id:5,
      img: "/B.jpeg",
      title: "هندزفری",
      model: "كوضى ايل مدل",
      price: "۴,۰۰۰,۰۰۰ تومان",
    },
    {
      id:6,
      img: "/B.jpeg",
      title: "هندزفری",
      model: "كوضى ايل مدل",
      price: "۴,۰۰۰,۰۰۰ تومان",
    },
    {
      id:7,
      img: "/B.jpeg",
      title: "هندزفری",
      model: "كوضى ايل مدل",
      price: "۴,۰۰۰,۰۰۰ تومان",
    },
    {
      id:8,
      img: "/B.jpeg",
      title: "هندزفری",
      model: "كوضى ايل مدل",
      price: "۴,۰۰۰,۰۰۰ تومان",
    },
    {
      id:9,
      img: "/B.jpeg",
      title: "هندزفری",
      model: "كوضى ايل مدل",
      price: "۴,۰۰۰,۰۰۰ تومان",
    },
    {
      id:10,
      img: "/B.jpeg",
      title: "هندزفری",
      model: "كوضى ايل مدل",
      price: "۴,۰۰۰,۰۰۰ تومان",
    },
    {
      id:11,
      img: "/B.jpeg",
      title: "هندزفری",
      model: "كوضى ايل مدل",
      price: "۴,۰۰۰,۰۰۰ تومان",
    },
    {
      id:12,
      img: "/B.jpeg",
      title: "هندزفری",
      model: "كوضى ايل مدل",
      price: "۴,۰۰۰,۰۰۰ تومان",
    },
  ];

  return (
    <Box
      sx={{
        padding: theme.spacing(2),
        direction: "rtl",
        width: "90%",
        margin: theme.spacing(4, "auto"),
        background:
          "linear-gradient(to right, var(--forth-color), var(--six-color))",
        boxShadow: "2px 4px 10px 2px rgba(0,0,0,0.2)",
        borderRadius: 4,
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        borderRadius: 5,
      }}
    >
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          padding: theme.spacing(3),
          background: "rgba(255,255,255,0.1)",
          borderRadius: 2,
          backdropFilter: "blur(5px)",
          mb: 2,
        }}
      >
        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{
            color: "var(--second-color)",
            fontSize: { xs: "1.8rem", sm: "2.4rem", md: "3rem" },
            textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
          }}
        >
          پیشنهادات ویژه
        </Typography>
      </Box>

      {/* Swiper Wrapper for Cards */}
      <Swiper
        modules={[Navigation]}
        slidesPerView={3}
        spaceBetween={20}
        navigation
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 5 },
        }}
        style={{ width: "85%", padding:"1% 0" }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <Grid
              item
              sx={{
                flex: "0 0 auto",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Link to="#" style={{ textDecoration: "none", display: "block" }}>
                <Card
                  sx={{
                    width: 250,
                    minHeight: 350,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: theme.spacing(3),
                    borderRadius: 4,
                    transition: "all 0.3s ease",
                    background: "rgba(255,255,255,0.9)",
                    "&:hover": {
                      transform: "translateY(-10px)",
                      boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                      background: "rgba(255,255,255,1)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      height: 150,
                      borderRadius: 2,
                      mb: 3,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={product.img}
                      alt={product.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </Box>

                  <Box sx={{ textAlign: "center", flexGrow: 1 }}>
                    <Typography
                      variant="h5"
                      fontWeight="bold"
                      sx={{
                        color: "var(--primary-color)",
                        fontSize: { xs: "1.2rem", md: "1.4rem" },
                        mb: 2,
                      }}
                    >
                      {product.title}
                    </Typography>

                    <Typography
                      variant="body1"
                      sx={{
                        color: "text.secondary",
                        lineHeight: 1.6,
                        minHeight: 60,
                        fontSize: { xs: "0.9rem", md: "1rem" },
                      }}
                    >
                      {product.model}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      textAlign: "center",
                      mt: 3,
                      pt: 2,
                      borderTop: `1px solid ${theme.palette.divider}`,
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        color: "var(--third-color)",
                        fontWeight: "bold",
                        fontSize: { xs: "1.1rem", md: "1.3rem" },
                        letterSpacing: "0.5px",
                      }}
                    >
                      {product.price}
                    </Typography>
                  </Box>
                </Card>
              </Link>
            </Grid>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default ProductList;
