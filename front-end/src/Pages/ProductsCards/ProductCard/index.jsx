import React, { memo } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import {
  FavoriteBorder,
  Favorite,
  ShoppingCart,
  Shuffle,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ProductCard = memo(({ product, isFavorite, onFavoriteToggle }) => {
  const handleActionClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <Link
      to={`/product-details/${product.id}/${product.title}`}
      style={{ textDecoration: "none" }}
    >
      <Card
        sx={{
          height: 450,
          display: "flex",
          flexDirection: "column",
          borderRadius: 5,
          alignItems: "center",
          transition: "all 0.3s",
          ":hover": { transform: "scale(105%)" },
        }}
      >
        {/* Img Card */}
        <CardMedia
          component="img"
          image={product.image}
          alt={product.title}
          p={2}
          height={200}
          sx={{
            objectFit: "cover",
            backgroundColor: "#f5f5f5",
            borderRadius: 2,
          }}
        />
        {/* Texts Card */}
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography
            variant="h6"
            fontFamily={"IranYekan"}
            fontWeight={"bold"}
            height={64}
            overflow={"hidden"}
          >
            {product.title}
          </Typography>

          <Typography
            variant="h5"
            color="primary"
            fontFamily={"IranYekan"}
            fontWeight={"bold"}
            mt={1}
          >
            {product.price.toLocaleString("fa-IR")} تومان
          </Typography>
        </CardContent>

        {/* Icons */}
        <CardActions sx={{ justifyContent: "space-between", p: 2, pb: 4 }}>
          <IconButton
            onClick={(e) => {
              handleActionClick(e);
              onFavoriteToggle();
            }}
            color={isFavorite ? "error" : "default"}
          >
            {isFavorite ? <Favorite /> : <FavoriteBorder color="warning" />}
          </IconButton>

          <Button
            variant="contained"
            color="primary"
            startIcon={<ShoppingCart sx={{ ml: 2 }} />}
            onClick={handleActionClick}
            disabled={!product.available}
            sx={{
              fontFamily: "IranYekan",
              fontWeight: "bold",
              fontSize: "1rem",
            }}
          >
            افزودن به سبد
          </Button>

          <IconButton onClick={handleActionClick}>
            <Shuffle color="primary" />
          </IconButton>
        </CardActions>
      </Card>
    </Link>
  );
});

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  onFavoriteToggle: PropTypes.func.isRequired,
};

export default ProductCard;
