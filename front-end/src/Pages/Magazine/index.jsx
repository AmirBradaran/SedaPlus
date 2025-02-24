import {
  Stack,
  ToggleButtonGroup,
  ToggleButton,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  useTheme,
} from "@mui/material";
import { useState } from "react";

// داده‌های نمونه گسترش یافته
const newsItems = [
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
    image: "Sl.jpg",
  },
  {
    id: 4,
    title: "بررسی هدست حرفه ای استودیویی",
    description:
      "هدست‌های جدید استودیویی با دقت صدای بی‌نظیر برای تولیدکنندگان محتوا...",
    category: "هدست",
    image: "Sl.jpg",
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

export default function Magazine() {
  const [filter, setFilter] = useState("همه");
  const theme = useTheme();

  const handleFilterChange = (evnet, newFilter) => {
    if (newFilter !== null) setFilter(newFilter);
  };

  const filteredNews =
    filter === "همه"
      ? newsItems
      : newsItems.filter((item) => item.category === filter);

  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      my={10}
      gap={10}
      sx={{direction:"rtl" , mx:{ xs:"0%" , md:"5%" }}}
      
    >
      {/* بخش فیلتر */}
      <Stack spacing={2} sx={{ width: { xs: "100%", md: 240 } }}>
        <Typography
          variant="h5"
          sx={{
            color: "var(--first-color)",
            fontWeight: "bold",
            pb: 1,
            borderBottom: `2px solid gray`,
            fontFamily: "IranYekan",
          }}
        >
          فیلتر مقالات
        </Typography>

        <ToggleButtonGroup
          orientation="vertical"
          value={filter}
          exclusive
          onChange={handleFilterChange}
        >
          {["همه", "هدفون", "هدست", "لوازم جانبی"].map((cat) => (
            <ToggleButton
              key={cat}
              value={cat}
              sx={{
                px: 3,
                py: 1.5,
                borderRadius: 5,
                "&:hover": {
                  background:
                    "linear-gradient(175deg , var(--second-color) 60% , var(--forth-color))",
                  color: "#fff",
                },
                fontFamily: "IranYekan",
              }}
            >
              {cat}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Stack>

        {/* بخش اخبار */}
        <Grid container spacing={3} sx={{ flexGrow: 1 }}>
        {filteredNews.map((news) => (
          <Grid item xs={12} sm={10} lg={6} key={news.id}>
            <Card
              sx={{
                display: 'flex',
                height: { xs:"40vh" , sm:"220px"},

                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: theme.shadows[6],
                },
                flexWrap:"wrap"
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  width: 220,
                  objectFit: 'cover'
                }}
                image={news.image}
                alt={news.title}
              />
              <CardContent sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <Stack>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      mb: 1,
                      lineHeight: 1.3,
                      fontFamily: "IranYekan"
                    }}
                  >
                    {news.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      lineHeight: 1.6,
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      fontFamily: "IranYekan"
                    }}
                  >
                    {news.description}
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Stack>

  );
}
