import React, { useState, useMemo } from "react";
import {
  Badge,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  useMediaQuery,
  useTheme,
  SwipeableDrawer,
  List,
  ListItem,
  Divider,
  styled,
  Stack,
} from "@mui/material";
import {
  DarkMode,
  CardGiftcard,
  FavoriteBorder,
  Search,
  Menu as MenuIcon,
  Close,
  Shuffle,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: "var(--third-color)",
  transition: "all 0.15s ease",
  fontFamily: "IranYekan, sans-serif",
  "&:hover": {
    color: "var(--first-color)",
    transform: "translateY(-2px)",
  },
}));

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [menuAnchor, setMenuAnchor] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const cartLength = useSelector((state) => state.cart?.items?.length) || 0;
  const { token } = useSelector((state) => true);

  const navItems = useMemo(
    () => [
      { label: "دسته بندی ها", type: "menu" },
      { label: "درباره ما", path: "/about-us" },
      { label: token ? "پروفایل" : "ورود", path: token ? "/profile" : "/auth" },
      { label: "مجله ها", path: "/magazine" },
      { label: "خانه", path: "/" },
    ],
    [token]
  );

  const categories = ["لوازم جانبی", "هدفون", "هدست", "هندزفری"];

  return (
    <Stack
      component="nav"
      mx="auto"
      sx={{
        position: "relative",
        width: {xs:"100%" , sm:"95%" , md:"90%"},
        height: "100%",
        zIndex: 1200,
        background:
          "linear-gradient(to right , var(--second-color) 65%, #7A4A94)",
        py: 2,
        borderBottomRightRadius: {xs:"40px" , sm:"50px" , md:"60px" , lg:"80px"},
        borderBottomLeftRadius: {xs:"40px" , sm:"50px" , md:"60px" , lg:"80px"},
      }}
    >
      <Stack
        justifyContent="space-between"
        alignItems="center"
        direction={"row"}
        sx={{
          mx: { xs: 1, md: 5 },
          px: { xs: 0, md: 4 },
        }}
      >
        <Stack direction="row" sx={{gap:{xs:0 , sm:1}}}>
          <StyledLink to="/cart">
            <IconButton>
              <Badge badgeContent={cartLength} color="secondary">
                <CardGiftcard sx={{ fontSize: 32, color: "common.white" }} />
              </Badge>
            </IconButton>
          </StyledLink>

          <StyledLink to="/favorites">
            <IconButton>
              <FavoriteBorder sx={{ fontSize: 32, color: "common.white" }} />
            </IconButton>
          </StyledLink>

          <StyledLink to="/search">
            <IconButton>
              <Search sx={{ fontSize: 32, color: "common.white" }} />
            </IconButton>
          </StyledLink>
          <StyledLink to="/shuffle">
            <IconButton>
              <Shuffle sx={{ fontSize: 32, color: "common.white" }} />
            </IconButton>
          </StyledLink>
        </Stack>

        <Stack>
          {isMobile ? (
            <IconButton
              onClick={() => setDrawerOpen(true)}
              sx={{ position: "absolute", right: 15, top: 15 }}
            >
              <MenuIcon fontSize="large" sx={{ color: "var(--third-color)" }} />
            </IconButton>
          ) : (
            <Stack gap={5} direction="row">
              {navItems.map((item) =>
                item.type === "menu" ? (
                  <Button
                    sx={{
                      color: "var(--third-color)",
                      fontSize: "1.25rem",
                      fontWeight: "bold",
                      fontFamily: "IranYekan",
                      p: 0,
                      transition: "all 0.25s",
                      ":hover": {
                        color: "#b8b8b8",
                        translate: "0 -15%",
                      },
                    }}
                    key={item.label}
                    onMouseEnter={(e) => setMenuAnchor(e.currentTarget)}
                  >
                    {item.label}
                  </Button>
                ) : (
                  <StyledLink key={item.label} to={item.path}>
                    <Typography
                      sx={{
                        fontSize: "1.25rem",
                        color: "var(--third-color)",
                        fontWeight: "bold",
                        fontFamily: "IranYekan",
                        transition: "all 0.35s",
                        ":hover": { color: "#b8b8b8" },
                      }}
                    >
                      {item.label === "ورود" && token ? "پروفایل" : item.label}
                    </Typography>
                  </StyledLink>
                )
              )}
            </Stack>
          )}
        </Stack>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent={{ xs: "center", md: "flex-start" }}
          sx={{ width: { xs: "100%", md: "auto" }, position: "relative" }}
        >
          <StyledLink to="/">
            <Box
              component="img"
              src="/DigiSeda.png"
              alt="Logo"
              sx={{
                borderRadius: "50%",
                width: 70,
                height: 70,
                objectFit: "cover",
                position: { xs: "absolute", md: "static" },
                left: { xs: "25%", md: "auto" },
                transform: { xs: "translate(-50%)", md: "none" },
                top:-35
              }}
            />
          </StyledLink>
        </Stack>
      </Stack>

      {/* دسته بندی ها */}
      <Menu
        anchorEl={menuAnchor}
        open={Boolean(menuAnchor)}
        onClose={() => setMenuAnchor(null)}
      >
        {categories.map((category) => (
          <MenuItem
            sx={{
              width: "150px",
              transition: "all 0.15s",
              ":hover": {
                background:
                  "linear-gradient(135deg , var(--second-color) 65%, white)",
                color: "var(--third-color)",
              },
              fontFamily: "IranYekan",
            }}
            key={category}
            onClick={() => setMenuAnchor(null)}
          >
            {category}
          </MenuItem>
        ))}
      </Menu>

      {/* منو موبایل */}
      <SwipeableDrawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box
          sx={{
            width: 280,
            height: "100%",
            p: 2,
            background:
              "linear-gradient(135deg, var(--second-color), var(--third-color))",
            color: "white",
          }}
        >
          <IconButton
            onClick={() => setDrawerOpen(false)}
            sx={{ position: "absolute ", right: "5px" }}
          >
            <Close />
          </IconButton>
          <List>
            {navItems.map((item) => (
              <ListItem key={item.label}>
                <StyledLink to={item.path}>
                  <Typography sx={{ fontFamily: "IranYekan" }}>
                    {item.label}
                  </Typography>
                </StyledLink>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            <Typography
              variant="h6"
              sx={{ px: 2, py: 1.5, fontFamily: "IranYekan" }}
            >
              دسته بندی ها
            </Typography>
            {categories.map((category) => (
              <ListItem key={category}>
                <Typography sx={{ fontFamily: "IranYekan" }}>
                  {category}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Box>
      </SwipeableDrawer>
    </Stack>
  );
};

export default React.memo(Navbar);
