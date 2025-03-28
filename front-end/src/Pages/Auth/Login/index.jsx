import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, TextField, Typography } from "@mui/material";

export default function Login({ handlePageType }) {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.username || !formData.password) {
      setError("لطفاً تمام فیلدها را پر کنید.");
      return;
    }

    try {
      const response = await fetch(
        "https://67c2e5c71851890165ad918c.mockapi.io/users"
      );

      if (!response.ok) {
        throw new Error("خطا در دریافت داده‌ها از سرور");
      }

      const users = await response.json();

      if (!Array.isArray(users) || users.length === 0) {
        setError("هیچ کاربری ثبت نشده است.");
        return;
      }

      const user = users.find(
        (user) =>
          user.username === formData.username &&
          user.password === formData.password
      );

      if (user) {
        localStorage.setItem("token", user.id);
        alert("ورود با موفقیت انجام شد!");
        navigate("/");
      } else {
        setError("نام کاربری یا رمز عبور اشتباه است.");
      }
    } catch (error) {
      console.error("خطا:", error);
      setError("مشکلی در ارتباط با سرور به وجود آمد.");
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
          "linear-gradient(135deg, var(--first-color), var(--second-color))",
        borderRadius: 2,
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
        fontFamily: "IranYekan",
        textAlign: "right",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: "#fff",
          fontWeight: "bold",
          textAlign: "right",
          fontFamily: "IranYekan",
        }}
      >
        ورود
      </Typography>

      {error && (
        <Typography
          color="error"
          sx={{ marginBottom: 2, textAlign: "right", fontFamily: "IranYekan" }}
        >
          {error}
        </Typography>
      )}

      {["username", "password"].map((field) => (
        <TextField
          key={field}
          name={field}
          label={field === "username" ? "نام کاربری" : "رمز عبور"}
          type={field === "password" ? "password" : "text"}
          fullWidth
          onChange={handleChange}
          InputLabelProps={{
            sx: {
              color: "#fff",
              textAlign: "right",
              fontFamily: "IranYekan",
              direction: "rtl",
            },
          }}
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            input: { color: "#fff", fontFamily: "IranYekan" },
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
          background: "#15919B",
          color: "white",
          width: "100%",
          fontFamily: "IranYekan",
          textAlign: "right",
          ":hover": {
            background: "#0C6478",
          },
          fontWeight: "bold",
        }}
      >
        ورود
      </Button>
      <Button
        variant="text"
        onClick={handlePageType}
        sx={{ color: "#f1faee", fontFamily: "IranYekan", textAlign: "right" }}
      >
        حساب کاربری ندارید؟ بسازید
      </Button>
    </Box>
  );
}
