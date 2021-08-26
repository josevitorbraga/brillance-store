import React, { useEffect, useState } from "react";
import axios from "axios";

import { Container, Data, ImageContainer, Header } from "./styles";
import { BiArrowBack, BiCartAlt } from "react-icons/bi";
import { Link, useHistory } from "react-router-dom";

import { useCartContext } from "../../context/CartContext";

export default function ProductPage(props) {
  const productId = props.match.params.productId;
  const history = useHistory();

  const [product, setProduct] = useState({});

  const { addToCart } = useCartContext();

  const handleAddToCart = () => {
    addToCart(product);
    history.replace("/cart");
  };

  useEffect(() => {
    async function getProduct() {
      const response = await axios.get(`/products/${productId}`);
      setProduct(response.data);
    }
    getProduct();
  }, [productId]);

  return (
    <>
      <Header>
        <Link to="/">
          <BiArrowBack />
          Voltar ao catálogo
        </Link>
        <Link to="/cart">
          Ir ao carrinho
          <BiCartAlt />
        </Link>
      </Header>
      <Container>
        <ImageContainer>
          <img src={`/${product.image}`} alt={`/${product.image}`} />
        </ImageContainer>
        <Data>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <h2>R$ {product.price}</h2>
          <button onClick={() => handleAddToCart()}>
            Adicionar ao carrinho
          </button>
        </Data>
      </Container>
    </>
  );
}
