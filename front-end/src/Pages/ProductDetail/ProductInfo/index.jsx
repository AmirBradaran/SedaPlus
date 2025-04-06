import React from "react";
import { Box, Typography, Divider, Rating } from "@mui/material";
import PropTypes from "prop-types";
import { toPersianNumbers } from "../../../Utils/helpers";

const ProductInfo = ({ product }) => {
  return (
    <Box sx={{ position: "relative", top: 0, pb: 4 }}>
      <Typography
        variant="h4"
        component="h1"
        fontFamily={"IranYekan"}
        gutterBottom
        sx={{ fontWeight: 700 }}
      >
        {product.name}
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
        <Rating
          value={product.rating}
          precision={0.5}
          readOnly
          sx={{ "& .MuiRating-icon": { color: "warning.main" } }}
        />
        <Typography fontFamily={"IranYekan"} variant="body2" sx={{ mr: 1 }}>
          ({toPersianNumbers(product.rating.toFixed(1))})
        </Typography>
      </Box>

      <Typography
        variant="h5"
        fontFamily={"IranYekan"}
        sx={{ mb: 3, color: "primary.main", fontWeight: 600 }}
      >
        {toPersianNumbers(
          product.price.replace(/,/g, "").toLocaleString("fa-IR")
        )}{" "}
        تومان
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="body1" fontFamily={"IranYekan"} paragraph sx={{ mb: 3, lineHeight: 1.8 }}>
        {product.description}
      </Typography>
    </Box>
  );
};

ProductInfo.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductInfo;
