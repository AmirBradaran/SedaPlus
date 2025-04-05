import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import {
  Container,
  Grid,
  Fade,
  Typography // اضافه شد
} from "@mui/material";
import ProductGallery from "./ProductImgs";
import ProductInfo from "./ProductInfo";
import ProductFeatures from "./ProductFeatures";
import ColorSelector from "./ColorSelector";
import ProductActions from "./ProductAction";
import ReviewSection from "./ProductReview";

const ProductDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  
  // لیست محصولات
  const products = [
    {
      id: 1,
      name: "هدفون Z150",
      price: "1700000",
      rating: 4.5,
      description: "هدفون حرفه ای با کیفیت صدای استثنایی و طراحی ارگونومیک",
      features: [
        "فناوری حذف نویز فعال",
        "پشتیبانی از صدای سه بعدی",
        "باتری با عمر 30 ساعت",
        "طراحی سبک و راحت",
      ],
      images: ["/B.jpeg", "/Space.png", "/S.jpg", "/Sl.jpg"],
      sizes: ["قرمز", "آبی", "زرد", "مشکی", "سفید"],
      sizeColors: {
        قرمز: "#D32F2F",
        آبی: "#1976D2",
        زرد: "#FBC02D",
        مشکی: "#000000",
        سفید: "#FFFFFF",
      },
      reviews: [
        {
          id: 1,
          user: "کاربر نمونه",
          rating: 4,
          comment: "کیفیت ساخت عالی، صدای بسیار خوبی داره",
          date: "۱۴۰۲/۰۳/۱۵",
        },
      ],
    },
  ];

  // پیدا کردن محصول
  const product = 
    location.state?.product || 
    products.find((p) => p.id === parseInt(id, 10));

  const [selectedSize, setSelectedSize] = useState("");

  if (!product) {
    return (
      <Container maxWidth="lg" sx={{ py: 4, textAlign: "center" }}>
        <Typography variant="h4">محصول یافت نشد</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Fade in timeout={500}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <ProductGallery images={product.images} />
          </Grid>

          <Grid item xs={12} md={6}>
            <ProductInfo product={product} />
            <ProductFeatures features={product.features} />

            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              انتخاب رنگ
            </Typography>
            <ColorSelector
              sizes={product.sizes}
              sizeColors={product.sizeColors}
              selectedSize={selectedSize}
              onSizeChange={(e, newSize) => setSelectedSize(newSize)}
            />

            <ProductActions />
          </Grid>

          <Grid item xs={12}>
            <ReviewSection productId={product.id} />
          </Grid>
        </Grid>
      </Fade>
    </Container>
  );
};

export default ProductDetail;