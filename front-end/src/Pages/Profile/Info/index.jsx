import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  Stack,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const Info = () => {
  const balance = 12350000;

  return (
    <Box sx={{ width: "100%", margin: "auto", direction: "rtl" }}>
      <Card
        variant="outlined"
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
          border: "none",
        }}
      >
        <CardContent>
          {/* اطلاعات کاربر */}
          <Stack spacing={0.5} mb={3}>
            <Typography
              variant="h5"
              fontFamily="IranYekan"
              fontWeight="bold"
              color="white"
            >
              امیرمحمد برادارن حسینی
            </Typography>
            <Typography fontFamily="IranYekan" color="white">
              خراسان رضوی ، مشهد
            </Typography>
          </Stack>

          {/* بخش موجودی */}
          <Grid container alignItems="center" spacing={2} mb={3}>
            <Grid item xs={12} md={6}>
              <Box display="flex" alignItems="center" gap={1} flexWrap="wrap">
                <Typography
                  fontFamily="IranYekan"
                  variant="h6"
                  color="white"
                >
                  موجودی:
                </Typography>
                <Typography
                  variant="h6"
                  fontFamily="IranYekan"
                  sx={{
                    color: "white",
                    backgroundColor: "green",
                    px: 2,
                    py: 1,
                    borderRadius: 5,
                    boxShadow: "0px 0px 8px white",
                  }}
                >
                  {balance.toLocaleString()} تومان
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                sx={{
                  fontFamily: "IranYekan",
                  fontWeight: "bold",
                  maxWidth: 180,
                  ml: "auto",
                  display: "block",
                  py: 1.5,
                }}
              >
                افزایش موجودی
              </Button>
            </Grid>
          </Grid>

          {/* اطلاعات تماس */}
          <Stack spacing={2} mb={3}>
            <Box>
              <Typography
                fontFamily="IranYekan"
                variant="body1"
                fontWeight="bold"
                color="white"
              >
                ایمیل:
              </Typography>
              <Typography
                fontFamily="IranYekan"
                variant="body1"
                color="white"
                fontWeight="light"
              >
                info@gmail.com
              </Typography>
            </Box>

            <Box>
              <Typography
                fontFamily="IranYekan"
                variant="body1"
                fontWeight="bold"
                color="white"
              >
                شماره تلفن:
              </Typography>
              <Typography
                fontFamily="IranYekan"
                variant="body1"
                color="white"
                fontWeight="light"
              >
                ****** ***0915
              </Typography>
            </Box>

            <Box>
              <Typography
                fontFamily="IranYekan"
                variant="body1"
                fontWeight="bold"
                color="white"
              >
                آدرس:
              </Typography>
              <Typography
                fontFamily="IranYekan"
                variant="body1"
                color="white"
                fontWeight="light"
              >
                آدرس مکان ثبت شده
              </Typography>
            </Box>
          </Stack>

          {/* دکمه ویرایش */}
          <Button
            fullWidth
            variant="contained"
            startIcon={<EditIcon sx={{ ml: 2 }} />}
            sx={{
              width: { xs: "100%", sm: "40%", md: "25%", lg: "15%" },
              fontFamily: "IranYekan",
              fontWeight: "bold",
              backgroundColor: "orange",
              mt: 2,
            }}
          >
            ویرایش مشخصات
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Info;
