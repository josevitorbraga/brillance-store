import React, { useEffect, useState } from "react";

import axios from "axios";

export default function ProductPage(props) {
  const productId = props.match.params.productId;
  const [product, setProduct] = useState({});

  useEffect(() => {
    async function getProduct() {
      const response = await axios.get(`/products/${productId}`);
      setProduct(response.data);
    }
    getProduct();
  }, [productId]);

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <h2>R$ {product.price}</h2>
    </div>
  );
}
