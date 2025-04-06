import React, { useState } from "react";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import PropTypes from "prop-types";

const ProductGallery = ({ images }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const [mainImage, setMainImage] = useState(0);
  const [zoomed, setZoomed] = useState(false);

  const handleMainImageClick = () => {
    setZoomed((prev) => !prev);
  };

  return (
    <Box sx={{ position: "relative" }}>
      {/* Main Image */}
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 2,
        }}
        onClick={handleMainImageClick}
      >
        <Box
          component="img"
          src={images[mainImage]}
          alt="Main"
          sx={{
            width: "100%",
            height: {
              xs: "250px", // small screen
              sm: "300px", // tablet
              md: "400px", // desktop
              lg: "500px", // larger screen
            },
            borderRadius: 2,
            mb: 2,
            boxShadow: 3,
            objectFit: "cover",
            cursor: "zoom-in",
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.02)",
            },
          }}
        />
      </Box>

      {/* Thumbnail list */}
      <Box
        sx={{
          width: "100%",
          height: {
            xs: "100px",
            sm: "120px",
            md: "134px",
          },
          display: "flex",
          gap: 1.5,
          overflowX: "auto",
          py: 2,
          px: 1,
          "&::-webkit-scrollbar": { height: 6 },
        }}
      >
        {images.map((img, index) => (
          <Box
            key={index}
            onClick={() => setMainImage(index)}
            sx={{
              cursor: "pointer",
              border: `2px solid ${
                mainImage === index ? theme.palette.primary.main : "#e0e0e0"
              }`,
              borderRadius: 1,
              overflow: "hidden",
              flexShrink: 0,
              transition: "all 0.3s",
            }}
          >
            <img
              src={img}
              alt={`Thumbnail ${index + 1}`}
              style={{
                width: isMobile ? 70 : isTablet ? 80 : 100,
                height: isMobile ? 70 : isTablet ? 80 : 100,
                objectFit: "cover",
              }}
            />
          </Box>
        ))}
      </Box>

      {/* Zoomed Overlay */}
      {zoomed && (
        <Box
          onClick={handleMainImageClick}
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            bgcolor: "rgba(0, 0, 0, 0.85)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1300,
            cursor: "zoom-out",
            transition: "opacity 0.3s ease-in-out",
            animation: "fadeInZoom 0.3s ease forwards",
            "@keyframes fadeInZoom": {
              from: {
                opacity: 0,
                transform: "scale(0.8)",
              },
              to: {
                opacity: 1,
                transform: "scale(1)",
              },
            },
          }}
        >
          <Box
            component="img"
            src={images[mainImage]}
            sx={{
              maxWidth: "90%",
              maxHeight: "90%",
              borderRadius: 2,
              boxShadow: 5,
              transition: "transform 0.3s ease-in-out",
            }}
          />
        </Box>
      )}
    </Box>
  );
};

ProductGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProductGallery;
