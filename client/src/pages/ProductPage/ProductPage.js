import React, { useEffect, useState } from "react";
import axios from "axios";

import { Container, Data, ImageContainer } from "./styles";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";

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
    <>
      <div className="header">
        <Link to="/">
          <BiArrowBack />
          Voltar ao catálogo
        </Link>
      </div>
      <Container>
        <ImageContainer>
          <img src={`/${product.image}`} alt={`/${product.image}`} />
        </ImageContainer>
        <Data>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <h2>R$ {product.price}</h2>
        </Data>
      </Container>
    </>
  );
}
