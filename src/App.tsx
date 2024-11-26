import React from "react";
import ProductCard from "./components/ProductCard";
import data from "./data.json";

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
      <ProductCard
        brand={data.brand}
        href={data.href}
        title={data.title}
        newPrice={data.newPrice}
        usedPrice={data.usedPrice}
        image={data.image}
      />
    </div>
  );
}

export default App;
