import React from "react";
import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";

const ProductFeatures = ({ features }) => {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography
        fontFamily={"IranYekan"}
        variant="h6"
        fontWeight={"bold"}
        gutterBottom
        sx={{}}
      >
        ویژگی‌های اصلی
      </Typography>
      <Box component="ul" sx={{ pr: 3 }}>
        {features.map((feature, index) => (
          <li key={index}>
            <Typography
              fontFamily={"IranYekan"}
              variant="body1"
              color="text.secondary"
            >
              {feature}
            </Typography>
          </li>
        ))}
      </Box>
    </Box>
  );
};

ProductFeatures.propTypes = {
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProductFeatures;
