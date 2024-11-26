import React from "react";
import { Box, Typography, Link } from "@mui/material";
import Price from "./Price"; 
interface ProductProps {
  brand: string;
  href: string;
  title: string;
  newPrice: string;
  usedPrice: string;
  image: string;
}

const ProductCard: React.FC<ProductProps> = ({
  brand,
  href,
  title,
  newPrice,
  usedPrice,
  image,
}) => {
  if (!brand || !href || !title || !newPrice || !usedPrice || !image) {
    return null;
  }

  return (
    <Box
      sx={{
        display: "flex",
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
        maxWidth: "340px",
        backgroundColor: "#fff",
      }}
    >
      {}
      <img
        src={image}
        alt={title}
        style={{
          width: "120px",
          height: "auto",
          marginRight: "16px",
        }}
      />

      {}
      <Box>
        <Typography
          variant="caption"
          sx={{ color: "#696969", fontSize: "12px", marginBottom: "8px" }}
        >
          {brand}
        </Typography>
        <Typography variant="body1" sx={{ fontSize: "14px", marginBottom: "8px" }}>
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
                textDecoration: "none",
                color: "#333",
                fontSize: "14px",
                "&:hover": {
                textDecoration: "underline",
                },
            }}
            >
            {title}
            </Link>
        </Typography>
        <Price newPrice={newPrice} usedPrice={usedPrice} />
      </Box>
    </Box>
  );
};

export default ProductCard;
