import React, { useState } from "react";
import {
  Box,
  Typography,
  Divider,
  TextField,
  Button,
  Rating,
  Avatar,
  Chip,
  Grid,
} from "@mui/material";
import { Send } from "@mui/icons-material";
import PropTypes from "prop-types";
import { toPersianNumbers } from "../../../Utils/helpers";

const ReviewSection = ({ productId }) => {
  const [review, setReview] = useState({ rating: 0, comment: "", name: "" });
  const [reviews, setReviews] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (review.rating > 0 && review.comment) {
      const newReview = {
        id: Date.now(),
        user: review.name || "ناشناس",
        rating: review.rating,
        comment: review.comment,
        date: new Date().toLocaleDateString("fa-IR"),
      };
      setReviews([...reviews, newReview]);
      setReview({ rating: 0, comment: "", name: "" });
    }
  };

  return (
    <Box
      sx={{ p: 3, borderRadius: 4, boxShadow: 1, bgcolor: "background.paper", fontFamily: "IranYekan" }}
    >
      <Box display={"flex"}>
        <Send color="primary" sx={{ ml: 1 }} />
        <Typography variant="h5" sx={{ fontFamily: "IranYekan", fontWeight: 700, mb: 4 }} gutterBottom>
          نظرات کاربران
        </Typography>
      </Box>

      {/* فرم ثبت نظر */}
      <Box component="form" onSubmit={handleSubmit} mb={6}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="نام شما"
              value={review.name}
              onChange={(e) => setReview({ ...review, name: e.target.value })}
              InputLabelProps={{ sx: { fontFamily: "IranYekan" } }}
              inputProps={{ style: { fontFamily: "IranYekan" } }}
            />
          </Grid>

          {/* Set Star */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Typography variant="body1" sx={{ fontFamily: "IranYekan" }}>
                امتیاز:
              </Typography>
              <Rating
                value={review.rating}
                onChange={(e, newValue) =>
                  setReview({ ...review, rating: newValue })
                }
                precision={0.5}
                sx={{ direction: "ltr" }}
              />
            </Box>
          </Grid>

          {/* TextField */}
          <Grid item xs={12} >
            <TextField
              fullWidth
              multiline
              rows={4}
              label="متن نظر"
              value={review.comment}
              onChange={(e) =>
                setReview({ ...review, comment: e.target.value })
              }
              required
              InputLabelProps={{ sx: { fontFamily: "IranYekan"  } }}
              inputProps={{ style: { fontFamily: "IranYekan" } }}
            />
          </Grid>

          {/* Send Button */}
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              startIcon={<Send sx={{ ml: 2.5 }} />}
              sx={{ px: 6, fontWeight: "bold", fontFamily: "IranYekan" }}
            >
              ارسال نظر
            </Button>
          </Grid>
        </Grid>
      </Box>

      <Divider sx={{ mb: 4 }} />

      {/* List Comments */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h5"
          gutterBottom
          sx={{ fontWeight: 700, fontFamily: "IranYekan" }}
        >
          نظرات ثبت شده
          <Chip
            label={toPersianNumbers(reviews.length)}
            sx={{ ml: 2, bgcolor: "primary.main", color: "white", fontFamily: "IranYekan" }}
          />
        </Typography>

        {reviews.length > 0 ? (
          reviews.map((review) => (
            <Box
              key={review.id}
              sx={{
                mb: 3,
                p: 3,
                borderRadius: 3,
                boxShadow: 1,
                bgcolor: "background.default",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Avatar sx={{ bgcolor: "primary.main", mr: 2 }}>
                  {review.user[0]}
                </Avatar>
                <Box>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: 700, fontFamily: "IranYekan" }}
                  >
                    {review.user}
                  </Typography>

                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Rating
                      value={review.rating}
                      readOnly
                      precision={0.5}
                      size="small"
                      sx={{ direction: "ltr" }}
                    />
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      sx={{ fontFamily: "IranYekan" }}
                    >
                      {toPersianNumbers(review.date)}
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ fontFamily: "IranYekan" }}
              >
                {review.comment}
              </Typography>
            </Box>
          ))
        ) : (
          <Typography
            variant="body1"
            color="text.secondary"
            align="center"
            sx={{ fontFamily: "IranYekan" }}
          >
            اولین نظر را شما ثبت کنید!
          </Typography>
        )}
      </Box>
    </Box>
  );
};

ReviewSection.propTypes = {
  productId: PropTypes.number.isRequired,
};

export default ReviewSection;
