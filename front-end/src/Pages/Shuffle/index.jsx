import React from "react";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Typography,
} from "@mui/material";

const exampleProducts = [
  {
    id: 1,
    img: "/B.jpeg",
    title: "هدفون بی سیم مدل X200",
    price: "299.99 تومان",
    description: "هدفون بلوتوثی با کیفیت صدای بالا",
  },
  {
    id: 2,
    img: "/B.jpeg",
    title: "هندزفری سیمی مدل Y100",
    price: "79.99 تومان",
    description: "هندزفری سیمی با کیفیت صدای استریو",
  },
  {
    id: 3,
    img: "/B.jpeg",
    title: "پاوربانک 10000mAh مدل Z500",
    price: "199.99 تومان",
    description: "پاوربانک سریع با ظرفیت بالا",
  },
];

const Shuffle = ({ comparedProducts = exampleProducts, removeFromCompare }) => {
  return (
    <Container maxWidth="lg" sx={{ py: 4, direction: "rtl" }}>
      <h2 style={{ textAlign: "center" }}>مقایسه محصولات</h2>
      {comparedProducts.length === 0 ? (
        <p style={{ textAlign: "center" }}>هیچ محصولی برای مقایسه وجود ندارد</p>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    fontFamily: "IranYekan",
                    fontSize: { xs: "16px", sm: "18px", md: "20px" },
                  }}
                >
                  ویژگی
                </TableCell>
                {comparedProducts.map((product) => (
                  <TableCell
                    sx={{
                      fontFamily: "IranYekan",
                      fontSize: { xs: "14px", sm: "16px", md: "20px" },
                      textAlign: "center",
                    }}
                    key={product.id}
                  >
                    <img
                      src={product.img}
                      alt={product.title}
                      width="100%"
                      style={{
                        borderRadius: "15px",
                        paddingBottom: "5px",
                        width: "220px",
                      }}
                    />
                    <Typography
                      variant="h5"
                      fontFamily={"IranYekan"}
                      fontWeight={"bold"}
                    >
                      {product.title}
                    </Typography>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell
                  sx={{
                    fontFamily: "IranYekan",
                    fontSize: { xs: "16px", sm: "18px", md: "20px" },
                  }}
                >
                  قیمت
                </TableCell>
                {comparedProducts.map((product) => (
                  <TableCell
                    sx={{
                      fontFamily: "IranYekan",
                      fontSize: { xs: "14px", sm: "16px", md: "20px" },
                      textAlign: "center",
                    }}
                    key={product.id}
                  >
                    {product.price}
                  </TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{
                    fontFamily: "IranYekan",
                    fontSize: { xs: "16px", sm: "18px", md: "20px" },
                  }}
                >
                  توضیحات
                </TableCell>
                {comparedProducts.map((product) => (
                  <TableCell
                    sx={{
                      fontFamily: "IranYekan",
                      fontSize: { xs: "14px", sm: "16px", md: "20px" },
                      textAlign: "center",
                    }}
                    key={product.id}
                  >
                    {product.description}
                  </TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{
                    fontFamily: "IranYekan",
                    fontSize: { xs: "16px", sm: "18px", md: "20px" },
                  }}
                >
                  عملیات
                </TableCell>
                {comparedProducts.map((product) => (
                  <TableCell
                    sx={{
                      fontFamily: "IranYekan",
                      fontSize: { xs: "14px", sm: "16px", md: "20px" },
                      textAlign: "center",
                    }}
                    key={product.id}
                  >
                    <Button
                      variant="contained"
                      color="error"
                      sx={{
                        fontFamily: "IranYekan",
                        fontWeight: "bold",
                        fontSize: { xs: "12px", sm: "14px", md: "15px" },
                      }}
                      onClick={() =>
                        removeFromCompare && removeFromCompare(product.id)
                      }
                    >
                      حذف
                    </Button>
                  </TableCell>
                ))}
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Container>
  );
};

export default Shuffle;
