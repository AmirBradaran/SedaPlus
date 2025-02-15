import { Box, Typography, useTheme, IconButton, useMediaQuery, Card, CardContent, CardMedia } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight, FavoriteBorder, Star } from "@mui/icons-material";
import { Link } from "react-router-dom"; // For linking the cards
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef, useEffect, useState } from "react";

const products = [
  { img: "/B.jpeg", title: "هدفون", price: "1,700,000", rating: 4, link: "/product/1" },
  { img: "/B.jpeg", title: "هدفون", price: "2,000,000", rating: 5, link: "/product/2" },
  { img: "/B.jpeg", title: "هدفون", price: "1,000,000", rating: 3, link: "/product/3" },
  { img: "/B.jpeg", title: "هدفون", price: "3,000,000", rating: 4, link: "/product/4" },
  { img: "/B.jpeg", title: "هدفون", price: "2,000,000", rating: 2, link: "/product/5" },
  { img: "/B.jpeg", title: "هدفون", price: "9,000,000", rating: 5, link: "/product/6" },
  { img: "/B.jpeg", title: "هدفون", price: "2,000,000", rating: 2, link: "/product/7" },
  { img: "/B.jpeg", title: "هدفون", price: "9,000,000", rating: 5, link: "/product/8" },
  { img: "/B.jpeg", title: "هدفون", price: "2,000,000", rating: 2, link: "/product/9" },
  { img: "/B.jpeg", title: "هدفون", price: "9,000,000", rating: 5, link: "/product/10" },
];

const BestSells = () => {
  const theme = useTheme();
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <Box sx={{ direction: "rtl", padding: { xs: 2, sm: 4 }, position: "relative" }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{
          color: "var(--primary-color)",
          borderBottom: "3px solid var(--first-color)",
          paddingBottom: "5px",
          display: "inline-block",
        }}
      >
        بهترین ها
      </Typography>
      <Swiper
        style={{ padding: "1% 0" }}
        modules={[Navigation]}
        spaceBetween={15}
        slidesPerView={isMobile ? 2 : 4}
        breakpoints={{
          100: { slidesPerView: 1.5 },
          470: { slidesPerView: 2.5 },
          717: { slidesPerView: 3.5 },
          936: { slidesPerView: 4.5 },
          1345: { slidesPerView: 6.5 },
        }}
        onSwiper={setSwiperInstance}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <Link to={product.link} style={{ textDecoration: "none" }}>
              <Card
                sx={{
                  borderRadius: 2,
                  padding: 2,
                  textAlign: "center",
                  height: "auto",
                  width: "180px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                  backgroundColor: theme.palette.background.paper,
                  boxShadow: "2px 4px 10px rgba(0, 0, 0, 0.2)",
                  position: "relative",
                  overflow: "hidden",
                  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.25)",
                  },
                }}
              >
                <IconButton
                  sx={{
                    position: "absolute",
                    top: 5,
                    right: 5,
                    color: "red",
                    zIndex: 1,
                  }}
                >
                  <FavoriteBorder />
                </IconButton>
                <CardMedia
                  component="img"
                  height="120"
                  image={product.img}
                  alt={product.title}
                  sx={{
                    objectFit: "cover",
                    borderRadius: 2,
                    mb: 2,
                  }}
                />
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                    {product.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontWeight: "bolder", fontSize:"1.15rem" }}>
                    {product.price}تومان
                  </Typography>
                  <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} sx={{ color: i < product.rating ? "gold" : "gray" }} />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Left Navigation Button */}
      <IconButton
        ref={nextRef}
        sx={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          left: "5px",
          zIndex: 10,
          color: theme.palette.primary.main,
          backgroundColor: "rgba(255, 255, 255, 0.75)",
          boxShadow: theme.shadows[2],
          "&:hover": { backgroundColor: "rgba(255,255,255,1)" },
        }}
      >
        <ChevronLeft fontSize="large" />
      </IconButton>

      {/* Right Navigation Button */}
      <IconButton
        ref={prevRef}
        sx={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          right: "5px",
          zIndex: 10,
          color: theme.palette.primary.main,
          backgroundColor: "rgba(255, 255, 255, 0.75)",
          boxShadow: theme.shadows[2],
          "&:hover": { backgroundColor: "rgba(255,255,255,1)" },
        }}
      >
        <ChevronRight fontSize="large" />
      </IconButton>
    </Box>
  );
};

export default BestSells;
