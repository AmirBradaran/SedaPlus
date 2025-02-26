import SliderHm from "./SliderHm/index";
import CategoriesHm from "./CategoriesHm/index";
import BestSells from "./BestSells/index";
import NewstSells from "./NewstSells/index";
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
          gap: 3,
          justifyContent: "center",
          alignItems:"center",
          py: 5,
          px: "5%",
          borderTopRightRadius: "5%",
          borderTopLeftRadius: "5%",
          background: "linear-gradient(to bottom, var(--second-color), white)",
          alignItems: "center",
          width:"100%"
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <SuggestionLeftSlider />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" , width:"100%" }}>
          <SliderHm />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <SuggestionRightSlider />
        </Box>
      </Box>
      <CategoriesHm />
      <SuggestionCarts />
      <NewstSells />
      <BestSells />
      <MagazineHm/>
    </Stack>
  );
}
