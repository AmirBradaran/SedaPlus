import SliderHm from "./SliderHm/index";
import CategoriesHm from "./CategoriesHm/index";
import BestSells from "./BestSells/index";
import NewstSells from "./NewstSells/index";
import SuggestionLeftSlider from "./SuggestionLeftSlider/index";
import SuggestionRightSlider from "./SuggestionRightSlider/index";
import React from "react";
import { Stack } from "@mui/material";
import SuggestionCarts from "./SuggestionCarts";

export default function Home() {
  return (
    <Stack sx={{ py: 5 }}>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent:"center",
          flexWrap:"wrap",
          py:5,
          background:"linear-gradient(to bottom, var(--forth-color), var(--white-color))"
        }}
      >
        <SuggestionLeftSlider />
        <SliderHm />
        <SuggestionRightSlider />
      </Stack>
      <CategoriesHm />
      <SuggestionCarts/>/
      <NewstSells/>
      <BestSells />
    </Stack>
  );
}
