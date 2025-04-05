import React, { useState } from "react";
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
import Info from "./Info";
import Orders from "./Orders";
import Setting from "./Settings";
import Support from "./Support";

const ProfileMenu = () => {
  const [activeComponent, setActiveComponent] = useState("Info");

  const menu = [
    {
      title: "اطلاعات کل",
      icon: <Person sx={{ fontSize: "2rem" }} />,
      key: "Info",
    },
    {
      title: "سفارشات",
      icon: <LocalOffer sx={{ fontSize: "2rem" }} />,
      key: "Orders",
    },
    {
      title: "پشتیبانی",
      icon: <Call sx={{ fontSize: "2rem" }} />,
      key: "Support",
    },
    {
      title: "تنظیمات",
      icon: <Settings sx={{ fontSize: "2rem" }} />,
      key: "Settings",
    },
    {
      title: "خروج",
      icon: <HighlightOff sx={{ fontSize: "2rem" }} />,
      key: "Logout",
    },
  ];

  const renderComponent = () => {
    switch (activeComponent) {
      case "Info":
        return <Info />;
      case "Orders":
        return <Orders />;
      case "Support":
        return <Support />;
      case "Settings":
        return <Setting />;
      case "Logout":
        return (
          <Typography variant="h6" color="white">
            شما با موفقیت خارج شدید
          </Typography>
        );
      default:
        return null;
    }
  };

  return (
    <Stack
      direction={{ xs: "column", md: "row-reverse" }}
      justifyContent="center"
      alignItems="flex-start"
      spacing={4}
      sx={{
        position: "relative",
        minHeight: "100vh",
        p: { xs: 1, sm: 2, md: 3 },
      }}
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

      {/* منو سمت راست یا بالا (در موبایل) */}
      <Stack
        width={{ xs: "100%", md: 350 }}
        borderRadius={5}
        p={2}
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
          <Tune
            sx={{
              color: "white",
              mr: 1,
              fontSize: { xs: "1.8rem", sm: "2rem", md: "2.5rem" },
            }}
          />
          <Typography
            variant="h5"
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
                onClick={() => setActiveComponent(item.key)}
                sx={{
                  gap: 1,
                  color: "white",
                  "&:hover": { background: "#ffffff20" },
                }}
              >
                {item.icon}
                <Typography
                  variant="body1"
                  fontFamily="IranYekan"
                  sx={{ fontSize: { xs: "0.95rem", sm: "1.1rem" } }}
                >
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
              <ArrowCircleRight sx={{ fontSize: "1.8rem" }} />
              <Typography
                fontFamily="IranYekan"
                variant="body1"
                sx={{ fontSize: { xs: "0.95rem", sm: "1.1rem" } }}
              >
                بازگشت به خانه
              </Typography>
            </Stack>
          </Link>
        </Box>
      </Stack>

      {/* محتوای کامپوننت */}
      <Box
        flex={1}
        mt={{ xs: 2, md: 6 }}
        borderRadius={3}
        p={2}
        sx={{
          backgroundColor: "#00000050",
          backdropFilter: "blur(15px)",
          width: { xs: "100%", md: "auto" },
          minWidth: { xs: "auto", md: 500 },
        }}
      >
        {renderComponent()}
      </Box>
    </Stack>
  );
};

export default ProfileMenu;
