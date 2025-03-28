import {
  Card,
  CardMedia,
  CardContent,
  Stack,
  Typography,
  Button,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export default function MagazineHm() {
  const theme = useTheme();
  const navigate = useNavigate();
  const newNews = [
    {
      id: 1,
      title: "انقلاب در دنیای هدفون‌های بی‌سیم 2024",
      description:
        "شرکت‌های پیشرو فناوری‌های جدید شارژ سریع و باتری ماندگارتر معرفی کردند...",
      category: "هدفون",
      image: "/S.jpg",
    },
    {
      id: 2,
      title: "مقایسه برترین هدفون‌های نویزکنسلینگ",
      description:
        "در این بررسی جامع به مقایسه فناوری‌های نویزکنسلینگ برندهای مختلف پرداخته‌ایم...",
      category: "هدفون",
      image: "/S.jpg",
    },
    {
      id: 3,
      title: "هدست‌های گیمینگ نسل جدید",
      description:
        "تکنولوژی‌های صدای سه بعدی در هدست‌های گیمینگ 2024 تحول ایجاد کرده است...",
      category: "هدست",
      image: "/Sl.jpg",
    },
    {
      id: 4,
      title: "بررسی هدست حرفه‌ای استودیویی",
      description:
        "هدست‌های جدید استودیویی با دقت صدای بی‌نظیر برای تولیدکنندگان محتوا...",
      category: "هدست",
      image: "/Sl.jpg",
    },
    {
      id: 5,
      title: "جدیدترین گجت‌های جانبی صوتی",
      description:
        "از پایه‌های شارژر بی‌سیم تا کابل‌های پرسرعت - بررسی لوازم جانبی 2024...",
      category: "لوازم جانبی",
      image: "/Sb.png",
    },
    {
      id: 6,
      title: "مکمل‌های ضروری برای علاقه‌مندان به صدا",
      description: "۱۰ وسیله جانبی که تجربه شنیداری شما را متحول می‌کند...",
      category: "لوازم جانبی",
      image: "/Sb.png",
    },
  ];

  return (
    <Stack
      spacing={4}
      sx={{ mx: { xs: 2, sm: 4, md: 6, lg: 12 }, my: 5, direction: "rtl" }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          fontFamily: "IranYekan",
          color: "var(--second-color)",
          borderBottom: "5px solid var(--second-color)",
          pb: 1,
          width: "300px",
          mx: "auto",
          borderRadius:"25%"
        }}
      >
        تازه‌ترین خبرها
      </Typography>

      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        style={{
          padding: "20px 20px 40px",
          "--swiper-navigation-color": theme.palette.primary.main,
          "--swiper-navigation-size": "35px",
        }}
      >
        {newNews.map((news) => (
          <SwiperSlide key={news.id}>
            <Card
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                height: { xs: "auto", sm: "200px", md: "220px", lg: "230px" },
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: theme.shadows[6],
                },
                flexWrap: "nowrap",
                borderRadius: 2.5,
                mx: "auto",
                maxWidth: 500,
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  width: { xs: "100%", sm: "40%", md: "45%" },
                  height: { xs: "160px", sm: "100%", md: "100%" },
                  objectFit: "cover",
                }}
                image={news.image}
                alt={news.title}
              />
              <CardContent
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  p: { xs: 2, sm: 3 },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", fontFamily: "IranYekan" }}
                >
                  {news.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    lineHeight: 1.6,
                    display: "-webkit-box",
                    WebkitLineClamp: { xs: 2, sm: 3 },
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    fontFamily: "IranYekan",
                  }}
                >
                  {news.description}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => navigate(`/news/${news.id}`)}
                  sx={{ fontFamily: "IranYekan" }}
                >
                  بیشتر
                </Button>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Stack>
  );
}
