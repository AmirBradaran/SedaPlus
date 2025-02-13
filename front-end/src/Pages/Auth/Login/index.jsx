import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, TextField, Typography } from "@mui/material";

export default function Login({ handlePageType }) {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (
      storedUser &&
      storedUser.username === formData.username &&
      storedUser.password === formData.password
    ) {
      localStorage.setItem("token", storedUser.token);
      alert("ورود با موفقیت انجام شد!");
      navigate("/");
    } else {
      alert("نام کاربری یا رمز عبور اشتباه است!");
    }
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
          "linear-gradient(135deg, var(--forth-color), var(--third-color))",
        borderRadius: 2,
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Typography
        variant="h4"
        sx={{ color: "#fff", fontWeight: "bold", textAlign: "center" }}
      >
        ورود
      </Typography>
      {["username", "password"].map((field) => (
        <TextField
          key={field}
          name={field}
          label={field === "username" ? "نام کاربری" : "رمز عبور"}
          type={field === "password" ? "password" : "text"}
          fullWidth
          onChange={handleChange}
          InputLabelProps={{ sx: { color: "#fff" } }}
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            input: { color: "#fff" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#fff" },
              "&:hover fieldset": { borderColor: "#a8dadc" },
              "&.Mui-focused fieldset": { borderColor: "#f1faee" },
            },
          }}
        />
      ))}
      <Button
        type="submit"
        sx={{
          background: "var(--second-color)",
          color: "white",
          width: "100%",
        }}
      >
        ورود
      </Button>
      <Button variant="text" onClick={handlePageType} sx={{ color: "#f1faee" }}>
        حساب کاربری ندارید؟ بسازید
      </Button>
    </Box>
  );
}
