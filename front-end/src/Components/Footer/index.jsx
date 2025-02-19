import {
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  Link,
  IconButton,
  Divider,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  Translate,
} from "@mui/icons-material";
import DarkModeIcon from "@mui/icons-material/Bedtime";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
const Footer = () => {
  return (
    <Box
      sx={{
        background: "var(--second-color)",
        color: "white",
        padding: 6,
        marginTop: "auto",
        direction: "rtl",
        zIndex: 1005,
      }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12} md={3}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontWeight: "bold", color: "var(--third-color)" , fontFamily:"IranYekan" }}
          >
            صدا پلاس
          </Typography>
          <Typography sx={{ color: "var(--third-color)", fontSize: "1.25rem" , fontFamily:"IranYekan"}}>
            هدفون‌هایتان، دنیای شما را تغییر می‌دهند
          </Typography>
        </Grid>
        <Grid item xs={6} md={2}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontWeight: "bold", color: "var(--third-color)"  , fontFamily:"IranYekan"}}
          >
            دسترسی سریع
          </Typography>
          <List dense>
            {[
              { text: "درباره ما", to: "/about-us" },
              { text: "مجله ها", to: "/magazines" },
              { text: "ورود", to: "/auth" },
              { text: "خانه", to: "/" },
            ].map((link) => (
              <ListItem key={link.to} disableGutters>
                <Link
                  component={RouterLink}
                  to={link.to}
                  sx={{
                    color: "var(--third-color)",
                    textDecoration: "none",
                    transition:"all 0.3s",
                    "&:hover": {
                      textDecoration: "none",
                      color: "var(--first-color)",
                      translate:"10px 0"
                    },
                    fontWeight: "bold",
                  }}
                >
                  {link.text}
                </Link>
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontWeight: "bold", color: "var(--third-color)" , fontFamily:"IranYekan"}}
          >
            راه های ارتباطی
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <a
              href="https://www.instagram.com/codemashad/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton aria-label="Instagram">
                <InstagramIcon sx={{ color: "white", fontSize: "30px" }} />
              </IconButton>
            </a>

            <a
              href="https://t.me/Codemashad_021"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton aria-label="Telegram">
                <TelegramIcon sx={{ color: "white", fontSize: "30px" }} />
              </IconButton>
            </a>

            <a
              href="https://wa.me/your-whatsapp-number"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton aria-label="WhatsApp">
                <WhatsAppIcon sx={{ color: "white", fontSize: "30px" }} />
              </IconButton>
            </a>
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ my: 4, backgroundColor: "var(--third-color)" }} />
      <Link to={"/"} style={{ display: "flex", justifyContent: "center" }}>
        <img
          src="DigiSeda.png"
          alt=""
          style={{ borderRadius: "100%", width: 100 }}
        />
      </Link>
    </Box>
  );
};

export default Footer;
