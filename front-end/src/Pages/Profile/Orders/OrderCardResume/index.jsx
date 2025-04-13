import { Box, Typography, Chip, Card, CardMedia } from "@mui/material";

const statusColors = {
  "در حال ارسال": { color: "#3f51b5", text: "در حال ارسال" },
  "ارسال شده (منتظر تایید)": {
    color: "#4caf50",
    text: "ارسال شده\n(منتظر تایید)",
  },
  "در حال بررسی": { color: "#fbc02d", text: "در حال بررسی" },
};

const OrderCard = ({ status, title, price, time, image }) => {
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
      }}
    >
      {/* استاتوس */}
      <Chip
        label={statusColors[status].text}
        sx={{
          whiteSpace: "pre-line",
          backgroundColor: statusColors[status].color,
          color: "white",
          fontWeight: "bold",
          fontSize: 12,
          height: 32,
          borderRadius: 2,
          px: 1.5,
        }}
      />

      {/* قیمت و زمان */}
      <Box
        sx={{
          mx: 2,
          minWidth: 100,
          textAlign: { xs: "right", sm: "center" },
          width: { xs: "100%", sm: "auto" },
        }}
      >
        <Typography fontWeight="bold" fontSize="1.1rem">
          {price.toLocaleString()} تومان
        </Typography>
        <Typography variant="body2" color="gray">
          زمان ارسال: {time}
        </Typography>
      </Box>

      {/* عنوان و تاریخ */}
      <Box
        sx={{
          textAlign: { xs: "right", sm: "left" },
          flex: 1,
          mx: 2,
          width: "100%",
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
      </Box>

      {/* عکس */}
      <CardMedia
        component="img"
        image={image}
        alt={title}
        sx={{
          width: { xs: "100%", sm: 80 },
          height: { xs: 160, sm: 80 },
          borderRadius: 2,
          objectFit: "cover",
        }}
      />
    </Card>
  );
};

export default OrderCard;
