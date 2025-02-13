import React, { useState } from 'react';
import { 
  Grid, 
  Typography, 
  Button, 
  Chip, 
  Divider, 
  Rating, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails, 
  IconButton, 
  Box, 
  useTheme 
} from '@mui/material';
import {
  FavoriteBorder,
  Share,
  ExpandMore,
  AddShoppingCart,
  Remove,
  Add
} from '@mui/icons-material';
import { Carousel } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductDetail = () => {
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [expanded, setExpanded] = useState('panel1');
  const theme = useTheme();

  const sizes = ['S', 'M', 'L', 'XL'];
  const features = ['100% Cotton', 'Machine Wash', 'Premium Quality', 'Organic Material'];
  const reviews = [
    { user: 'John D.', rating: 4, comment: 'Great product, very comfortable!', date: '2024-03-15' },
    { user: 'Sarah M.', rating: 5, comment: 'Absolutely love this shirt!', date: '2024-03-10' }
  ];

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  const handleAccordion = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Box sx={{ p: 4, background: theme.palette.background.default }}>
      <Grid container spacing={4}>
        {/* Product Images */}
        <Grid item xs={12} md={6}>
          <Box sx={{ borderRadius: 2, overflow: 'hidden', boxShadow: 3 }}>
            <Carousel {...carouselSettings}>
              {[1, 2, 3, 4].map((item) => (
                <Box key={item}>
                  <img 
                    src={`https://picsum.photos/600/800?random=${item}`} 
                    alt={`Product view ${item}`}
                    style={{ width: '100%', height: '600px', objectFit: 'cover' }}
                  />
                </Box>
              ))}
            </Carousel>
          </Box>
        </Grid>

        {/* Product Details */}
        <Grid item xs={12} md={6}>
          <Typography variant="h3" gutterBottom sx={{ fontWeight: 700 }}>
            Premium Cotton T-Shirt
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Rating value={4.5} precision={0.5} readOnly />
            <Typography variant="body2" sx={{ ml: 1, color: 'text.secondary' }}>
              (128 reviews)
            </Typography>
          </Box>

          <Typography variant="h4" sx={{ mb: 3, color: 'primary.main' }}>
            $49.99
          </Typography>

          <Divider sx={{ my: 3 }} />

          <Typography variant="h6" gutterBottom>
            Select Size
          </Typography>
          <Box sx={{ mb: 3, display: 'flex', gap: 1 }}>
            {sizes.map((size) => (
              <Chip
                key={size}
                label={size}
                variant={selectedSize === size ? 'filled' : 'outlined'}
                onClick={() => setSelectedSize(size)}
                sx={{
                  px: 3,
                  py: 1,
                  fontSize: '1rem',
                  borderColor: selectedSize === size ? 'primary.main' : ''
                }}
              />
            ))}
          </Box>

          <Typography variant="h6" gutterBottom>
            Quantity
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, gap: 2 }}>
            <IconButton 
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              sx={{ border: `1px solid ${theme.palette.divider}` }}
            >
              <Remove />
            </IconButton>
            <Typography variant="h6">{quantity}</Typography>
            <IconButton 
              onClick={() => setQuantity(quantity + 1)}
              sx={{ border: `1px solid ${theme.palette.divider}` }}
            >
              <Add />
            </IconButton>
          </Box>

          <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
            <Button
              variant="contained"
              size="large"
              startIcon={<AddShoppingCart />}
              sx={{ px: 4, py: 1.5, flexGrow: 1 }}
            >
              Add to Cart
            </Button>
            <IconButton sx={{ border: `1px solid ${theme.palette.divider}` }}>
              <FavoriteBorder />
            </IconButton>
            <IconButton sx={{ border: `1px solid ${theme.palette.divider}` }}>
              <Share />
            </IconButton>
          </Box>

          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 4 }}>
            {features.map((feature) => (
              <Chip
                key={feature}
                label={feature}
                variant="outlined"
                sx={{ borderRadius: 1 }}
              />
            ))}
          </Box>

          {/* Accordion Sections */}
          <Accordion 
            expanded={expanded === 'panel1'}
            onChange={handleAccordion('panel1')}
          >
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography variant="h6">Product Description</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Premium quality cotton t-shirt with reinforced stitching. 
                Available in multiple sizes and colors. Perfect for everyday wear 
                or athletic activities.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion 
            expanded={expanded === 'panel2'}
            onChange={handleAccordion('panel2')}
          >
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography variant="h6">Specifications</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography><strong>Material:</strong> 100% Organic Cotton</Typography>
                  <Typography><strong>Weight:</strong> 180 GSM</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography><strong>Care:</strong> Machine Wash Cold</Typography>
                  <Typography><strong>Origin:</strong> Made in USA</Typography>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>

          <Accordion 
            expanded={expanded === 'panel3'}
            onChange={handleAccordion('panel3')}
          >
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography variant="h6">Reviews ({reviews.length})</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {reviews.map((review, index) => (
                <Box key={index} sx={{ mb: 2, p: 2, border: `1px solid ${theme.palette.divider}`, borderRadius: 1 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="subtitle1">{review.user}</Typography>
                    <Typography variant="body2" color="text.secondary">{review.date}</Typography>
                  </Box>
                  <Rating value={review.rating} readOnly />
                  <Typography variant="body1" sx={{ mt: 1 }}>{review.comment}</Typography>
                </Box>
              ))}
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductDetail;
