import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  Stack,
  Avatar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const Info = () => {
  const balance = 12350000;
  const profileImage = "https://i.pravatar.cc/150?img=12";
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down(400));

  const personalInfo = [
    { label: "ایمیل", value: "info@gmail.com" },
    { label: "شماره تلفن", value: "****** ***0915" },
    { label: "آدرس", value: "آدرس مکان ثبت شده" },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 1200,
        margin: "auto",
        direction: "rtl",
        px: { xs: 1, sm: 2, md: 3 },
      }}
    >
      <Card
        variant="outlined"
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
          border: "none",
        }}
      >
        <CardContent>
          {/* Profile Section */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            alignItems="center"
            gap={{ xs: 2, sm: 5 }}
            mb={3}
          >
            <Avatar
              alt="Profile"
              src={profileImage}
              sx={{
                width: { xs: 100, sm: 150 },
                height: { xs: 100, sm: 150 },
                border: "1px solid white",
              }}
            />
            <Stack gap={1} textAlign={{ xs: "center", sm: "right" }}>
              <Typography
                variant={isXs ? "h6" : "h5"}
                fontFamily="IranYekan"
                fontWeight="bold"
                color="white"
              >
                امیرمحمد برادارن حسینی
              </Typography>
              <Typography
                fontFamily="IranYekan"
                color="white"
                fontSize={{ xs: "0.9rem", sm: "1rem" }}
              >
                خراسان رضوی ، مشهد
              </Typography>
            </Stack>
          </Stack>

          {/* Balance Section */}
          <Grid container alignItems="center" spacing={1} mb={3}>
            <Grid item xs={12} sm={6} md={3}>
              <Box
                display="flex"
                alignItems="center"
                gap={1}
                flexWrap="wrap"
                justifyContent={{ xs: "center", sm: "flex-start" }}
              >
                <Typography
                  fontFamily="IranYekan"
                  variant={isXs ? "body1" : "h6"}
                  color="white"
                >
                  موجودی:
                </Typography>
                <Typography
                  variant={isXs ? "body1" : "h6"}
                  fontFamily="IranYekan"
                  sx={{
                    color: "white",
                    backgroundColor: "green",
                    px: { xs: 1, sm: 2 },
                    py: { xs: 0.5, sm: 1 },
                    borderRadius: 5,
                    boxShadow: "0px 0px 8px white",
                    fontSize: { xs: "0.9rem", sm: "1rem" },
                  }}
                >
                  {balance.toLocaleString()} تومان
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Box
                display="flex"
                justifyContent={{ xs: "center", sm: "flex-end" }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    fontFamily: "IranYekan",
                    fontWeight: "bold",
                    fontSize: { xs: "0.8rem", sm: "1rem" },
                    width: { xs: "100%", sm: "auto" },
                    maxWidth: 180,
                    py: { xs: 1, sm: 1.5 },
                    borderRadius: 5,
                  }}
                >
                  افزایش موجودی
                </Button>
              </Box>
            </Grid>
          </Grid>

          {/* Contact Info */}
          <Stack
            spacing={2}
            mb={3}
            sx={{ "& > div": { textAlign: { xs: "center", sm: "right" } } }}
          >
            {personalInfo.map((info, index) => (
              <Box key={index}>
                <Typography
                  fontFamily="IranYekan"
                  variant="body1"
                  fontWeight="bold"
                  color="white"
                  fontSize={{ xs: "0.9rem", sm: "1rem" }}
                >
                  {info.label}:
                </Typography>
                <Typography
                  fontFamily="IranYekan"
                  color="white"
                  fontWeight="light"
                  fontSize={{ xs: "0.8rem", sm: "1rem" }}
                >
                  {info.value}
                </Typography>
              </Box>
            ))}
          </Stack>

          {/* Edit Button */}
          <Box
            display="flex"
            justifyContent={{ xs: "center", sm: "flex-start" }}
          >
            <Button
              variant="contained"
              startIcon={
                <EditIcon
                  sx={{
                    ml: { xs: 0, sm: 2 },
                    fontSize: { xs: "1rem", sm: "1.2rem" },
                  }}
                />
              }
              sx={{
                width: { xs: "100%", sm: "40%", md: "25%", lg: "20%" },
                minWidth: 120,
                fontFamily: "IranYekan",
                fontWeight: "bold",
                backgroundColor: "orange",
                mt: 2,
                fontSize: { xs: "0.8rem", sm: "1rem" },
                py: { xs: 1, sm: 1.5 },
              }}
            >
              ویرایش مشخصات
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Info;
