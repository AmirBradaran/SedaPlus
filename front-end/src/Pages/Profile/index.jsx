import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Typography,
  ThemeProvider,
  createTheme,
  Box,
  Stack,
} from "@mui/material";
import { ArrowCircleRight } from "@mui/icons-material";
import { Link } from "react-router-dom";

const ProfileMenu = () => {
  const menuItems = ["اطلاعات کل", "سفارشات", "پشتیبانی", "تنظیمات", "خروج"];

  return (
    <Stack
      direction={"row"}
      justifyContent={"center"}
      gap={5}
      alignItems={"center"}
    >
      <img
        src="/SS.jpg"
        alt=""
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
        width={"300px"}
        borderRadius={10}
        sx={{
          direction: "rtl",
          mr: 12,
          backdropFilter: "blur(15px)",
          background: "#00000090",
        }}
      >
        <div dir="rtl" style={{ padding: "16px", maxWidth: "300px" }}>
          {/* عنوان پروفایل */}
          <Typography
            variant="h5"
            gutterBottom
            fontFamily={"IranYekan"}
            textAlign={"center"}
            fontWeight={"bold"}
            color="white"
            lineHeight={2}
            borderBottom={"5px solid white"}
          >
            پروفایل
          </Typography>

          {/* لیست منو */}
          <List sx={{ width: "100%" }}>
            {menuItems.map((text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <Typography
                    color="white"
                    fontFamily={"IranYekan"}
                    variant="h6"
                  >
                    {text}
                  </Typography>
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          {/* لینک بازگشت */}
          <Link
            to={"/"}
            style={{
              textDecoration: "none",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              cursor: "pointer",
              "&:hover": { background: "#00000050" }
            }}
          >
            <ArrowCircleRight
              sx={{ color: "white", fontSize: "1.75rem", fontWeight: "bold" }}
            />
            <Typography
              variant="h6"
              fontFamily={"IranYekan"}
              color="white"
              textAlign={"center"}
              borderRadius={10}
            >
              بازگشت به خانه
            </Typography>
          </Link>
        </div>
      </Stack>
    </Stack>
  );
};

export default ProfileMenu;
