import React from 'react';
import { Button, IconButton, Box } from '@mui/material';
import { AddShoppingCart, FavoriteBorder, Share } from '@mui/icons-material';

const ProductActions = () => {
  return (
    <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
      <Button
        variant="contained"
        size="large"
        startIcon={<AddShoppingCart />}
        sx={{ flexGrow: 1, py: 1.5, fontWeight: 600 }}
      >
        افزودن به سبد خرید
      </Button>
      
      <Box sx={{ display: 'flex', gap: 2 }}>
        <IconButton color="primary" sx={{ border: '1px solid' }}>
          <FavoriteBorder />
        </IconButton>
        <IconButton color="primary" sx={{ border: '1px solid' }}>
          <Share />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ProductActions;