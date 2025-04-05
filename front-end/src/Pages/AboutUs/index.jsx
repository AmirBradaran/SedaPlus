import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { Speed, Sell, Headphones, Recommend } from "@mui/icons-material";

export default function AboutUs() {
  const features = [
    {
      title: "ارسال سریع و مطمئن به سراسر کشور",
      icon: Speed,
    },
    {
      title: "قیمت‌های رقابتی و مناسب",
      icon: Sell,
    },
    {
      title: "ارائه محصولات اورجینال و باکیفیت",
      icon: Headphones,
    },
    {
      title: "پشتیبانی و مشاوره تخصصی برای انتخاب بهترین محصول",
      icon: Recommend,
    },
  ];

  const sectionBoxStyle = {
    borderRadius: "30px",
    width: { xs: "100%", md: "70%" },
    p: { xs: 3, md: 5 },
    sx: {
      direction: "rtl",
      backdropFilter: "blur(55px)",
      background: "#00000040",
    },
  };

  const titleStyle = {
    textAlign: "center",
    variant: "h4",
    color: "white",
    fontWeight: "bold",
    fontFamily: "IranYekan",
  };

  const featureTextStyle = {
    color: "white",
    fontSize: { xs: "0.95rem", md: "1.25rem" },
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "IranYekan",
    maxWidth: "90%",
  };

  const iconStyle = {
    fontSize: { xs: 30, md: 40 },
    color: "white",
  };

  return (
    <Box position="relative">
      <img
        src="/He.jpg"
        alt="background"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      />

      <Stack
        position="relative"
        mx="auto"
        my={{ xs: 10, md: 20 }}
        width={{ xs: "90%", md: "80%" }}
        p={{ xs: 4, sm: 6, md: 10, lg: 15 }}
        borderRadius={{ xs: "30px", md: "100px" }}
        alignItems="center"
        sx={{
          backdropFilter: "blur(20px)",
          boxShadow: "0 0 10px 2.5px white",
          direction: "rtl",
        }}
      >
        <Box
          component="img"
          src="/DigiSeda.png"
          alt="logo"
          sx={{
            width: { xs: 100, sm: 150, md: 200, lg: 250 },
            height: { xs: 100, sm: 150, md: 200, lg: 250 },
            position: "absolute",
            borderRadius: "100%",
            boxShadow: "0px 5px 20px 2.5px white",
            transform: "translateY(-100%)",
          }}
        />

        <Stack alignItems="center" gap={2.5} my={5} width="100%">
          <Typography {...titleStyle}>درباره ما</Typography>
          <Box {...sectionBoxStyle}>
            <Typography
              fontFamily="IranYekan"
              textAlign="center"
              color="white"
              fontSize={{ xs: "1rem", md: "1.5rem" }}
            >
              به فروشگاه <b>صدا پلاس </b>خوش آمدید! ما یک فروشگاه اینترنتی هستیم
              که با هدف ارائه <b>بهترین</b> و <b>باکیفیت‌ترین</b> محصولات در
              حوزه هدفون، هدست، هندزفری، لوازم جانبی صوتی و پاوربانک تأسیس
              شده‌ایم. هدف ما ارائه کالاهای <b>اورجینال</b>، <b>قیمت مناسب</b> و
              <b> تجربه خریدی آسان</b> و مطمئن برای مشتریان عزیزمان است.
            </Typography>
          </Box>
        </Stack>

        <Stack alignItems="center" gap={2.5} my={5} width="100%">
          <Typography {...titleStyle}>هدف ما</Typography>
          <Box {...sectionBoxStyle}>
            <Typography
              fontFamily="IranYekan"
              textAlign="center"
              color="white"
              fontSize={{ xs: "1rem", md: "1.5rem" }}
            >
              در دنیای امروزی که تکنولوژی نقش <b>مهمی</b> در زندگی روزمره ما
              دارد، انتخاب یک هدفون یا هدست <b>باکیفیت</b> می‌تواند تجربه گوش
              دادن به موسیقی، تماشای فیلم یا برقراری مکالمات را لذت‌بخش‌تر کند.
              به همین دلیل، ما تلاش می‌کنیم تا با ارائه محصولات <b>متنوع</b> از
              <b> برندهای معتبر</b>، نیازهای مختلف کاربران را پوشش دهیم.
            </Typography>
          </Box>
        </Stack>

        <Stack alignItems="center" gap={2.5} my={5} width="100%">
          <Typography {...titleStyle}>چرا ما؟</Typography>
          <Box
            borderRadius="30px"
            width="100%"
            p={{ xs: 3, md: 5 }}
            sx={{
              direction: "rtl",
              backdropFilter: "blur(55px)",
              background: "#00000040",
            }}
          >
            <Stack gap={4}>
              {features.map(({ title, icon: Icon }, index) => (
                <Stack
                  key={index}
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  gap={2}
                  flexWrap="wrap"
                >
                  <Icon sx={iconStyle} />
                  <Typography sx={featureTextStyle}>{title}</Typography>
                </Stack>
              ))}
            </Stack>
          </Box>
        </Stack>

        <Typography
          variant="h5"
          color="white"
          fontFamily="IranYekan"
          fontWeight="bold"
        >
          ! با ما همراه باشید و بهترین‌ها را تجربه کنید
        </Typography>
      </Stack>
    </Box>
  );
}
