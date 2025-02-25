import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Box } from "@mui/material";

export default function SliderHm() {
  return (
    <Box sx={{width:{xs:"325px" , sm:"600px" , md:"700px" }}}>
      <Swiper
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={{ dynamicBullets: true }}
        loop={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
        spaceBetween={20}
        slidesPerView={1}
        style={{
          width:"100%",
          maxWidth: "800px",
          height: "40vh",
          border: "1px solid black",
          borderRadius: 5,
          border: "none",
          boxShadow: "1px 1px 10px 2px black",
        }}
      >
        <SwiperSlide>
          <img
            src="./Jd.jpg"
            alt=""
            style={{
              display:"block",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: 5,
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./Jg.jpg"
            alt=""
            style={{
              display:"block",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: 5,
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./Sl.jpg"
            alt=""
            style={{
              display:"block",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: 5,
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./S.jpg"
            alt=""
            style={{
              display:"block",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: 5,
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./Sb.png"
            alt=""
            style={{
              display:"block",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: 5,
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./sj.jpg"
            alt=""
            style={{
              display:"block",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: 5,
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./Sja.jpg"
            alt=""
            style={{
              display:"block",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: 5,
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./Space.png"
            alt=""
            style={{
              display:"block",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: 5,
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./Sl.jpg"
            alt=""
            style={{
              display:"block",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: 5,
            }}
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
