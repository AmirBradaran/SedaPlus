import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      textAlign="center"
    >
      <Typography variant="h1" color="primary" gutterBottom>
       404
      </Typography>
      <Typography variant="h5" color="textSecondary" gutterBottom>
        اوه! صفحه‌ای که به دنبال آن هستید وجود ندارد.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{background:"var(--seven-color)" , fontSize:"1.25rem"}}
        onClick={() => navigate("/")}
      >
        بازگشت به صفحه اصلی
      </Button>
    </Box>
  );
};

export default NotFound;
