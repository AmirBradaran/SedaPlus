import React from "react";
import { Box, Typography, Avatar } from "@mui/material";

const BrandSlider = () => {
  return (
    <Box
      display="flex"
      my={5}
      flexDirection="column"
      alignItems="center"
      gap={1}
    >
      <Typography
        width={"350px"}
        textAlign={"center"}
        pb={1}
        variant="h4"
        fontFamily={"IranYekan"}
        fontWeight={"bold"}
        borderRadius={"25%"}
        borderBottom={"5px solid var(--seven-color)"}
        sx={{ color: "var(--second-color)" }}
      >
        معروف ترین برند ها
      </Typography>
      <Box display="flex" justifyContent="center" mt={2} gap={2}>
        {[...Array(7)].map((_, index) => (
          <Avatar
            key={index}
            sx={{ bgcolor: "#2D1B42", width: 80, height: 80 }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default BrandSlider;
