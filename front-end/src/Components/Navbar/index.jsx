import React, { useState, useMemo } from "react";
import {
  Badge,
  Box,
  IconButton,
  Typography,
  useMediaQuery,
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  Stack,
} from "@mui/material";
import {
  CardGiftcard,
  FavoriteBorder,
  Search,
  Shuffle,
  Home,
  Person,
  Info,
  Article,
  Login,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

{
  /*Styles*/
}
const iconStyle = {
  fontSize: 35,
  color: "common.white",
  transition: "all 0.3s",
  ":hover": { transform: "translateY(-10px)" },
};

const typographyStyle = {
  fontFamily: "IranYekan",
  fontSize: "1.5rem",
  fontWeight: "bold",
  display: "flex",
  alignItems: "center",
  gap: 1,
  color: "var(--third-color)",
  transition: "all 0.3s",
  ":hover": {
    color: "#b8b8b8",
    transform: "translateY(-5px)",
  },
};

const navActionStyle = {
  color: "white",
  transition: "all 0.3s",
  ":hover": { transform: "translateY(-5px)" },
  ".MuiBottomNavigationAction-label": {
    fontFamily: "IranYekan",
    fontSize: "1rem",
    fontWeight: "bold",
  },
};

{
  /*Component Styles*/
}
const StyledLink = ({ to, children }) => (
  <Link
    to={to}
    style={{
      textDecoration: "none",
      color: "var(--third-color)",
      fontFamily: "IranYekan, sans-serif",
      transition: "all 0.3s",
    }}
  >
    {children}
  </Link>
);

{
  /*NavBar Components*/
}
const Navbar = () => {
  const isMobile = useMediaQuery("(max-width:1244px)");
  const [bottomNavValue, setBottomNavValue] = useState(0);

  const cartLength = useSelector((state) => state.cart?.items?.length) || 0;
  const token = useSelector((state) => true);

  const navItems = useMemo(
    () => [
      {
        label: token ? "پروفایل" : "ورود",
        path: token ? "/profile" : "/auth",
        icon: token ? <Person /> : <Login />,
      },
      { label: "مجله ها", path: "/magazine", icon: <Article /> },
      { label: "درباره ما", path: "/about-us", icon: <Info /> },
      { label: "خانه", path: "/", icon: <Home /> },
    ],
    [token]
  );

  {
    /*Render ke help mikone*/
  }
  const renderIconLink = (to, icon, withBadge = false) => (
    <StyledLink to={to}>
      <IconButton>
        {withBadge ? (
          <Badge badgeContent={cartLength} color="secondary">
            {icon}
          </Badge>
        ) : (
          icon
        )}
      </IconButton>
    </StyledLink>
  );

  return (
    <>
      <Stack
        component="nav"
        mx="auto"
        direction="row"
        sx={{
          position: "relative",
          width: "95%",
          height: "100px",
          zIndex: 1200,
          background:
            "linear-gradient(to right , var(--second-color) 65%, #7A4A94)",
          py: 2,
          borderBottomRightRadius: 50,
          borderBottomLeftRadius: 50,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Left Icons */}
        <Stack direction="row" sx={{ gap: 1, position: "absolute", left: 15 }}>
          {renderIconLink("/cart", <CardGiftcard sx={iconStyle} />, true)}
          {isMobile ? (
            renderIconLink("/search", <Search sx={iconStyle} />)
          ) : (
            <>
              {renderIconLink("/favorites", <FavoriteBorder sx={iconStyle} />)}
              {renderIconLink("/search", <Search sx={iconStyle} />)}
              {renderIconLink("/shuffle", <Shuffle sx={iconStyle} />)}
            </>
          )}
        </Stack>

        {/* Logo */}
        <StyledLink to="/">
          <Box
            component="img"
            src="/DigiSeda.png"
            alt="Logo"
            sx={{
              borderRadius: "50%",
              width: 90,
              height: 90,
              objectFit: "cover",
              position: "absolute",
              left: "50%",
              top: 5,
              transform: "translateX(-50%)",
            }}
          />
        </StyledLink>

        {/* Right Icons */}
        {isMobile && (
          <Stack
            direction="row"
            sx={{ gap: 1, position: "absolute", right: 15 }}
          >
            {renderIconLink("/favorites", <FavoriteBorder sx={iconStyle} />)}
            {renderIconLink("/shuffle", <Shuffle sx={iconStyle} />)}
          </Stack>
        )}

        {/* Desktop Navigation */}
        {!isMobile && (
          <Stack gap={5} direction="row" position="absolute" right={15}>
            {navItems.map(({ label, path, icon }) => (
              <StyledLink key={label} to={path}>
                <Typography sx={typographyStyle}>
                  {icon}
                  {label}
                </Typography>
              </StyledLink>
            ))}
          </Stack>
        )}

        {/* Mobile Bottom Navigation */}
        {isMobile && (
          <Paper
            sx={{
              position: "fixed",
              bottom: 0,
              left: 0,
              right: 0,
              zIndex: 1200,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              background:
                "linear-gradient(to right , var(--second-color) 65%, #7A4A94)",
              width: "90%",
              mx: "auto",
            }}
            elevation={8}
          >
            <BottomNavigation
              showLabels
              value={bottomNavValue}
              onChange={(e, newValue) => setBottomNavValue(newValue)}
              sx={{
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                background:
                  "linear-gradient(to right , var(--second-color) 65%, #7A4A94)",
              }}
            >
              {navItems.map(({ label, path, icon }) => (
                <BottomNavigationAction
                  key={label}
                  component={Link}
                  to={path}
                  label={label}
                  icon={icon}
                  sx={navActionStyle}
                />
              ))}
            </BottomNavigation>
          </Paper>
        )}
      </Stack>
    </>
  );
};

export default React.memo(Navbar);
