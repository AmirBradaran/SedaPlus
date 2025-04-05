import React from "react";
import {
  Box,
  Typography,
  Slider,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import PropTypes from "prop-types";
const Filters = React.memo(
  ({ priceRange, availability, onPriceChange, onAvailabilityChange }) => {
    return (
      <Box
        sx={{
          p: 3,
          direction: "rtl",
          boxShadow: "2px 4px 10px black",
          borderRadius: 8,
        }}
      >
        <Typography
          variant="h6"
          fontFamily={"IranYekan"}
          fontWeight={"bold"}
          gutterBottom
        >
          فیلترها
        </Typography>

        <Box sx={{ mb: 4 }}>
          <Typography
            fontFamily={"IranYekan"}
            fontWeight={"light"}
            gutterBottom
          >
            محدوده قیمت (تومان)
          </Typography>
          <Slider
            value={priceRange}
            onChange={onPriceChange}
            min={0}
            max={15000000}
            valueLabelDisplay="auto"

            valueLabelFormat={(v) => v.toLocaleString("fa-IR")}
            sx={{ mt: 3, color:"var(--forth-color)" }}
          />
        </Box>

        <Box>
          <Typography gutterBottom fontFamily={"IranYekan"} fontWeight={"bold"}>
            وضعیت موجودی
          </Typography>
          <RadioGroup
            value={availability}
            onChange={(e) => onAvailabilityChange(e.target.value)}
          >
            <FormControlLabel value="all" control={<Radio />} label="همه" />
            <FormControlLabel
              value="available"
              control={<Radio />}
              label="موجود"
            />
            <FormControlLabel
              value="unavailable"
              control={<Radio />}
              label="ناموجود"
            />
          </RadioGroup>
        </Box>
      </Box>
    );
  }
);

Filters.propTypes = {
  priceRange: PropTypes.array.isRequired,
  availability: PropTypes.string.isRequired,
  onPriceChange: PropTypes.func.isRequired,
  onAvailabilityChange: PropTypes.func.isRequired,
};

export default Filters;
