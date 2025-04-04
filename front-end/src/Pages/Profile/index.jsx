import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  Typography,
  Stack,
  Box,
} from "@mui/material";
import {
  ArrowCircleRight,
  Person,
  LocalOffer,
  Call,
  Settings,
  HighlightOff,
  Tune,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const ProfileMenu = () => {
  const menu = [
    {
      title: "اطلاعات کل",
      icon: <Person sx={{ fontSize: "2rem" }} />,
      path: "./Info",
    },
    {
      title: "سفارشات",
      icon: <LocalOffer sx={{ fontSize: "2rem" }} />,
      path: "./Orders",
    },
    {
      title: "پشتیبانی",
      icon: <Call sx={{ fontSize: "2rem" }} />,
      path: "./Support",
    },
    {
      title: "تنظیمات",
      icon: <Settings sx={{ fontSize: "2rem" }} />,
      path: "./Settings",
    },
    {
      title: "خروج",
      icon: <HighlightOff sx={{ fontSize: "2rem" }} />,
      path: "./Logout",
    },
  ];

  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{ position: "relative", minHeight: "100vh" }}
    >
      {/* بک‌گراند ثابت */}
      <Box
        component="img"
        src="/SS.jpg"
        alt="background"
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          objectFit: "cover",
        }}
      />

      {/* کارت منو */}
      <Stack
        width={350}
        borderRadius={5}
        p={2}
        mr={6}
        position={"fixed"}
        right={"5%"}
        top={"15%"}
        sx={{
          direction: "rtl",
          backdropFilter: "blur(15px)",
          backgroundColor: "#00000090",
        }}
      >
        {/* عنوان */}
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          borderBottom={"5px solid white"}
          gap={1}
        >
          <Tune sx={{ color: "white", mr: 1, fontSize: "2.5rem" }} />
          <Typography
            variant="h4"
            fontFamily="IranYekan"
            fontWeight="bold"
            color="white"
            pb={1}
          >
            پروفایل
          </Typography>
        </Stack>

        {/* لیست منو */}
        <List>
          {menu.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                component={Link}
                to={item.path}
                sx={{
                  gap: 1,
                  color: "white",
                  "&:hover": { background: "#ffffff20" },
                }}
              >
                {item.icon}
                <Typography variant="h5" fontFamily="IranYekan">
                  {item.title}
                </Typography>
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        {/* دکمه بازگشت */}
        <Box mt={3}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              sx={{
                gap: 1,
                p: 1,
                borderRadius: 2,
                color: "white",
                "&:hover": { background: "#ffffff20" },
              }}
            >
              <ArrowCircleRight sx={{ fontSize: "2rem" }} />
              <Typography fontFamily="IranYekan" variant="h5">
                بازگشت به خانه
              </Typography>
            </Stack>
          </Link>
        </Box>
      </Stack>
    </Stack>
  );
};

export default ProfileMenu;
