import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, TextField, Typography } from "@mui/material";

export default function Register({ handlePageType }) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = Math.random().toString(36).substr(2);
    localStorage.setItem("user", JSON.stringify({ ...formData, token }));
    alert("ثبت نام با موفقیت انجام شد!");

    navigate("/");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        padding: 4,
        maxWidth: 400,
        margin: "auto",
        marginTop: 8,
        background:
          "linear-gradient(135deg, var(--first-color), var(--second-color))",
        borderRadius: 2,
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Typography
        variant="h4"
        sx={{ color: "#fff", fontWeight: "bold", textAlign: "center" }}
      >
        ثبت نام
      </Typography>
      <TextField
        name="username"
        label="نام کاربری"
        fullWidth
        onChange={handleChange}
        InputLabelProps={{ sx: { color: "#fff" } }}
        sx={{
          input: { color: "#fff" },
          "& .MuiOutlinedInput-root": {
            "& fieldset": { borderColor: "#fff" },
            "&:hover fieldset": { borderColor: "#a8dadc" },
            "&.Mui-focused fieldset": { borderColor: "#f1faee" },
          },
        }}
      />
      <TextField
        name="email"
        label="ایمیل"
        type="email"
        fullWidth
        onChange={handleChange}
        InputLabelProps={{ sx: { color: "#fff" } }}
        sx={{
          input: { color: "#fff" },
          "& .MuiOutlinedInput-root": {
            "& fieldset": { borderColor: "#fff" },
            "&:hover fieldset": { borderColor: "#a8dadc" },
            "&.Mui-focused fieldset": { borderColor: "#f1faee" },
          },
        }}
      />
      <TextField
        name="password"
        label="رمز عبور"
        type="password"
        fullWidth
        onChange={handleChange}
        InputLabelProps={{ sx: { color: "#fff" } }}
        sx={{
          input: { color: "#fff" },
          "& .MuiOutlinedInput-root": {
            "& fieldset": { borderColor: "#fff" },
            "&:hover fieldset": { borderColor: "#a8dadc" },
            "&.Mui-focused fieldset": { borderColor: "#f1faee" },
          },
        }}
      />
      <Button
        type="submit"
        sx={{
          background: "var(--second-color)",
          color: "white",
          width: "100%",
          ":hover":{
            background:"var(--forth-color)"
          }
        }}
      >
        ثبت نام
      </Button>
      <Button variant="text" onClick={handlePageType} sx={{ color: "#f1faee" }}>
        اکانت دارید؟ وارد شوید
      </Button>
    </Box>
  );
}
