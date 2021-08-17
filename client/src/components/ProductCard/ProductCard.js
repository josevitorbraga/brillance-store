import React from "react";
import { Container } from "./styles.js";

import productImage from "../../assets/produtoTeste.jpg";

export default function ProductCard(props) {
  return (
    <Container>
      <img src={productImage} alt="produto" />
      <a href={`/product/${props.productData._id}`} className="card-body">
        <h3>{props.productData.name}</h3>
        R$ {props.productData.price}
      </a>
    </Container>
  );
}
