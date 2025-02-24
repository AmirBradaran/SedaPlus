import React from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import HeadsetIcon from '@mui/icons-material/Headset';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import BuildIcon from '@mui/icons-material/Build';

const NumberedCategories = () => {
  const categories = [
    { title: 'هدفون', icon: <HeadphonesIcon style={{ fontSize: 50 }} />},
    { title: 'هدست', icon: <HeadsetIcon style={{ fontSize: 50 }} /> },
    { title: 'هندزفری', icon: <PhoneAndroidIcon style={{ fontSize: 50 }} /> },
    { title: 'لوازم جانبی', icon: <BuildIcon style={{ fontSize: 50 }} /> },
  ];

  return (
    <Box sx={{ padding: 0 }}>
      <Grid container spacing={3} justifyContent="center">
        {categories.map((category, index) => (
          <Grid item xs={6} sm={5} md={2} lg={1} key={index}>
            <Paper
              elevation={3}
              sx={{
                my: 3,
                padding: 3,
                height: '125px',
                width: '125px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                cursor: "pointer",
                background: "var(--third-color)",
                borderRadius: 100,
                transition:"all 0.15s",
                "&:hover": {
                  background: "var(--third-color)",
                  color: "var(--second-color)",
                  transform: "scale(1.05)",
                  boxShadow: "0px 4px 15px rgba(0,0,0,0.2)",
                },
                mx:{xs:"15%" , sm:"10%" , md:"0"}
              }}
            >
              <Box>
                {category.icon}
                <Typography variant="h7" fontWeight="bold" sx={{ marginTop: 1 }} fontFamily={'IranYekan'}>
                  {category.title}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default NumberedCategories;
