import React from "react";
import { Container } from "./styles.js";

import productImage from "../../assets/produtoTeste.jpg";
import { useHistory, Link } from "react-router-dom";

export default function ProductCard(props) {
  const history = useHistory();
  const handleGoToProduct = productId => {
    history.push(`/produto/${productId}`);
  };
  return (
    <Container>
      <img
        src={productImage}
        alt="produto"
        onClick={() => handleGoToProduct(props.productData._id)}
      />
      <Link to={`/produto/${props.productData._id}`} className="card-body">
        <h3>{props.productData.name}</h3>
        R$ {props.productData.price}
      </Link>
    </Container>
  );
}
