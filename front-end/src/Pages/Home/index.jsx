import SliderHm from "./SliderHm/index";
import CategoriesHm from "./CategoriesHm/index";
import BestSells from "./BestSells/index";
import FamousSells from "./FamousSells/index";
import FamousBrands from "./FamousBrands/index";
import NewestSells from "./NewestSells/index";
import SuggestionLeftSlider from "./SuggestionLeftSlider/index";
import SuggestionRightSlider from "./SuggestionRightSlider/index";
import React from "react";
import { Box, Stack } from "@mui/material";
import SuggestionCarts from "./SuggestionCarts";
import MagazineHm from "./MagazineHm";

export default function Home() {
  return (
    <Stack sx={{ py: 5 }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr",
            md: "1fr",
            lg: "1fr 1fr 1fr",
          },
          gap: { xs: 5, sm: 3, md: 2, lg: 0 },
          justifyContent: "center",
          alignItems: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <SuggestionLeftSlider />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <SliderHm />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <SuggestionRightSlider />
        </Box>
      </Box>
      <FamousBrands/>
      <SuggestionCarts />
      <CategoriesHm />
      <NewestSells />
      <BestSells />
      <FamousSells />
      <MagazineHm />
    </Stack>
  );
}
