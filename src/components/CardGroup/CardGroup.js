import React from "react";
import Card from "../Card/Card";

const CardGroup = () => {
  const products = [
    { id: 1, name: "book", price: 550 },
    { id: 2, name: "cook", price: 550 },
    { id: 3, name: "dook", price: 550 },
  ];
  return (
    <div className="card-group">
      {products.map((product) => (
        <Card key={product.id} product={product}></Card>
      ))}
    </div>
  );
};

export default CardGroup;
