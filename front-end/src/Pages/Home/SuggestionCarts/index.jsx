import React from "react";
import {
  Card,
  Grid,
  Typography,
  Box,
  useTheme,
  Button,
  Stack,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FavoriteBorder, Shuffle } from "@mui/icons-material";
const ProductList = () => {
  const theme = useTheme();
  const products = [
    {
      id: 1,
      img: "/B.jpeg",
      title: "هدفون",
      model: "MACHINES XIII HERD",
      price: "۱,۷۰۰,۰۰۰ تومان",
    },
    {
      id: 2,
      img: "/B.jpeg",
      title: "هدست",
      model: "معدلي كيميك كوهرستر",
      price: "۲,۵۰۰,۰۰۰ تومان",
    },
    {
      id: 3,
      img: "/B.jpeg",
      title: "شارژر آیپد",
      model: "GAINING Radoon BX 2800",
      price: "۳,۲۰۰,۰۰۰ تومان",
    },
    {
      id: 4,
      img: "/B.jpeg",
      title: "هندزفری",
      model: "كوضى ايل مدل",
      price: "۴,۰۰۰,۰۰۰ تومان",
    },
    {
      id: 5,
      img: "/B.jpeg",
      title: "هندزفری",
      model: "كوضى ايل مدل",
      price: "۴,۰۰۰,۰۰۰ تومان",
    },
    {
      id: 6,
      img: "/B.jpeg",
      title: "هندزفری",
      model: "كوضى ايل مدل",
      price: "۴,۰۰۰,۰۰۰ تومان",
    },
    {
      id: 7,
      img: "/B.jpeg",
      title: "هندزفری",
      model: "كوضى ايل مدل",
      price: "۴,۰۰۰,۰۰۰ تومان",
    },
    {
      id: 8,
      img: "/B.jpeg",
      title: "هندزفری",
      model: "كوضى ايل مدل",
      price: "۴,۰۰۰,۰۰۰ تومان",
    },
    {
      id: 9,
      img: "/B.jpeg",
      title: "هندزفری",
      model: "كوضى ايل مدل",
      price: "۴,۰۰۰,۰۰۰ تومان",
    },
    {
      id: 10,
      img: "/B.jpeg",
      title: "هندزفری",
      model: "كوضى ايل مدل",
      price: "۴,۰۰۰,۰۰۰ تومان",
    },
    {
      id: 11,
      img: "/B.jpeg",
      title: "هندزفری",
      model: "كوضى ايل مدل",
      price: "۴,۰۰۰,۰۰۰ تومان",
    },
    {
      id: 12,
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
        background: "var(--second-color)",
        boxShadow: "2px 4px 10px 2px rgba(0,0,0,0.2)",
        borderRadius: 4,
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        flexDirection: { xs: "column", sm: "row" },
        flexWrap: "wrap",
        justifyContent: "center",
        gap: theme.spacing(2),
      }}
    >
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          padding: theme.spacing(3),
          background: "var(--seven-color)",
          borderRadius: 2,
          backdropFilter: "blur(5px)",
          mb: { xs: 2, sm: 0 },
          width: { xs: "100%", sm: "auto" },
          order: { xs: 0, sm: 0 },
          alignSelf: "center",
        }}
      >
        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{
            color: "var(--third-color)",
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
            textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
            fontFamily: "IranYekan",
          }}
        >
          پیشنهادات ویژه
        </Typography>
      </Box>
      <Box sx={{ flexGrow: 1, width: "100%" }}>
        <Swiper
          modules={[Pagination]}
          slidesPerView={4.5}
          spaceBetween={10}
          pagination={{ el: ".custom-pagination", clickable: true }}
          breakpoints={{
            200: { slidesPerView: 1 },
            600: { slidesPerView: 1.5 },
            1020: { slidesPerView: 3.5 },
            1350: { slidesPerView: 4.5 },
            1600: { slidesPerView: 5.5 },
          }}
          style={{ width: "100%", padding: "1% 0" }}
        >
          {products.map((product, index) => (
            <SwiperSlide key={index} style={{ background: "none" }}>
              <Grid
                item
                sx={{
                  flex: "0 0 auto",
                  display: "flex",
                  justifyContent: "center",
                  background: "transparent",
                  alignItems: "center",
                }}
              >
                <Link
                  to={`/product-detail/${product.id}`}
                  style={{
                    textDecoration: "none",
                    display: "block",
                    background: "transparent",
                  }}
                >
                  <Card
                    sx={{
                      width: { xs: "90%", sm: 250 },
                      minHeight: 350,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: 1.5,
                      borderRadius: 2.5,
                      transition: "all 0.3s",
                      background: "var(--third-color)",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                        background: "rgb(255, 255, 255)",
                        borderRadius: 5,
                      },
                    }}
                  >
                    <Stack
                      sx={{
                        width: "100%",
                        height: { xs: 120, sm: 150 },
                        borderRadius: 2,
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
                          borderRadius: 10,
                        }}
                      />
                    </Stack>

                    <Stack
                      sx={{
                        textAlign: "center",
                        flexGrow: 1,
                        justifyContent: "space-around",
                      }}
                    >
                      <Typography
                        variant="h5"
                        fontWeight="bold"
                        sx={{
                          color: "var(--primary-color)",
                          fontFamily: "IranYekan",
                        }}
                      >
                        {product.title}
                      </Typography>

                      <Typography
                        variant="body1"
                        sx={{
                          color: "text.secondary",
                          fontFamily: "IranYekan",
                        }}
                      >
                        {product.model}
                      </Typography>

                      <Typography
                        variant="h6"
                        fontWeight="bold"
                        sx={{
                          color: "var(--secondary-color)",
                          fontFamily: "IranYekan",
                        }}
                      >
                        {product.price}
                      </Typography>
                    </Stack>
                    <Stack direction={"row-reverse"} width={"100%"}>
                      <IconButton color="error" LinkComponent={"/favorite"}>
                        <FavoriteBorder sx={{ fontSize: "25px" }} />
                      </IconButton>
                      <Button
                        variant="contained"
                        LinkComponent={"/"}
                        sx={{
                          width: "100%",
                          fontFamily: "IranYekan",
                          background: "#4765F4",
                          ":hover": { background: "#1B2E8B" },
                          borderRadius: 5,
                        }}
                      >
                        مشاهده
                      </Button>
                      <IconButton color="primary" LinkComponent={"/shuffle"}>
                        <Shuffle sx={{ fontSize: "25px" }} />
                      </IconButton>
                    </Stack>
                  </Card>
                </Link>
              </Grid>
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          className="custom-pagination"
          style={{ textAlign: "center", marginTop: "0px" }}
        ></div>
      </Box>
    </Box>
  );
};

export default ProductList;
