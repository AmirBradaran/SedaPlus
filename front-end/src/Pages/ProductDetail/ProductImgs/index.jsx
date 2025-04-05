import React, { useState } from "react";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import Zoom from "react-medium-image-zoom";
import PropTypes from "prop-types";

const ProductGallery = ({ images }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mainImage, setMainImage] = useState(0);

  return (
    <Box sx={{ position: "relative" }}>
      <Box sx={{ position: "relative", overflow: "hidden", borderRadius: 2 }}>
        {!isMobile ? (
          <Zoom wrapElement="div" zoomMargin={40}>
            <Box
              component="img"
              src={images[mainImage]}
              sx={{
                width: "100%",
                height: 400,
                borderRadius: 2,
                mb: 2,
                boxShadow: 3,
                transition: "transform 0.3s ease-in-out",
                cursor: "zoom-in",
              }}
            />
          </Zoom>
        ) : (
          <Box
            component="img"
            src={images[mainImage]}
            sx={{
              width: "100%",
              height: "auto",
              borderRadius: 2,
              mb: 2,
              boxShadow: 3,
            }}
          />
        )}
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: 2,
          overflowX: "auto",
          py: 2,
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
              style={{ width: 100, height: 100, objectFit: "cover" }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

ProductGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProductGallery;
