import React from 'react';
import { 
  Box, 
  Typography, 
  Chip, 
  Card, 
  CardMedia,
  useTheme 
} from "@mui/material";

const statusData = { color: "#4caf50", text: "تایید خورده" };

const OrderCardHistory = ({ 
  title = "هدفون 25",
  price = 1250000,
  time = "15:20",
  image = "/placeholder.jpg",
  deliveryTime = "16:00",
  confirmationStatus = "تایید شده"
}) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: { xs: "flex-start", sm: "center" },
        justifyContent: "space-between",
        background: "#111827",
        color: "white",
        p: 2,
        borderRadius: 4,
        mb: 2,
        boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
        gap: 2,
        direction: 'rtl',
        fontFamily: theme.typography.fontFamily,
      }}
    >
      {/* Status Chip */}
      <Chip
        label={statusData.text}
        sx={{
          whiteSpace: "pre-line",
          backgroundColor: statusData.color,
          color: "white",
          fontWeight: "bold",
          fontSize: 12,
          height: 32,
          borderRadius: 2,
          px: 1.5,
          order: { xs: 1, sm: 0 }
        }}
      />

      {/* Price & Time */}
      <Box
        sx={{
          mx: 2,
          minWidth: 100,
          textAlign: { xs: "right", sm: "center" },
          width: { xs: "100%", sm: "auto" },
          order: { xs: 3, sm: 0 }
        }}
      >
        <Typography fontWeight="bold" fontSize="1.1rem">
          {price.toLocaleString('fa-IR')} تومان
        </Typography>
        <Typography variant="body2" color="gray">
          زمان ارسال: {time}
        </Typography>
        {/* تاریخ و زمان دریافت */}
        <Typography variant="body2" color="gray">
          زمان دریافت: {deliveryTime}
        </Typography>
      </Box>

      {/* Title & Date */}
      <Box
        sx={{
          textAlign: { xs: "right", sm: "left" },
          flex: 1,
          mx: 2,
          width: "100%",
          order: { xs: 2, sm: 0 }
        }}
      >
        <Typography
          variant="body1"
          fontWeight="bold"
          fontSize={{ xs: "1rem", sm: "1.2rem" }}
        >
          {title}
        </Typography>
        <Typography variant="body2" color="gray">
          تاریخ ارسال: {time}
        </Typography>
        {/* تایید وضعیت */}
        <Typography variant="body2" color="gray">
          وضعیت تایید: {confirmationStatus}
        </Typography>
      </Box>

      {/* Product Image */}
      <CardMedia
        component="img"
        image={image}
        alt={title}
        sx={{
          width: { xs: "100%", sm: 80 },
          height: { xs: 160, sm: 80 },
          borderRadius: 2,
          objectFit: "cover",
          order: { xs: 0, sm: 0 }
        }}
      />
    </Card>
  );
};

export default OrderCardHistory;
