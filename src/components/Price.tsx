import React from "react";
import { Typography } from "@mui/material";
interface PriceProps {
  newPrice: string; 
  usedPrice: string;
}

const Price: React.FC<PriceProps> = ({ newPrice, usedPrice }) => {
  return (
    <div>
      {}
      <Typography
        variant="h6"
        sx={{ color: "#BF0000", fontSize: "20px", marginBottom: "8px" }}
      >
        {newPrice} <span style={{ fontSize: "12px" }}>Neuf</span>
      </Typography>
      
      {}
      <Typography
        variant="body2"
        sx={{ fontSize: "14px", color: "#333" }}
      >
        Occasion dès <b>{usedPrice}</b>
      </Typography>
    </div>
  );
};

export default Price;
