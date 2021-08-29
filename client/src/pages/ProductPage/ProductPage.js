import React, { useEffect, useState } from "react";
import axios from "axios";

import { Container, Data, ImageContainer, Header } from "./styles";
import { BiArrowBack, BiCartAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

import { useCartContext } from "../../context/CartContext";
import { toast } from "react-toastify";

export default function ProductPage(props) {
  const productId = props.match.params.productId;

  const [product, setProduct] = useState({});
  const [counter, setCounter] = useState(0);

  const { addToCart } = useCartContext();

  const handleAddToCart = () => {
    addToCart(product);
    setCounter(counter + 1);
    toast.success("Produto adicionado ao carrinho!", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
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
          {counter > 0 ? (
            <div>
              Ir ao carrinho <BiCartAlt />
              <span>{`+${counter}`}</span>
            </div>
          ) : (
            <div>
              Ir ao carrinho <BiCartAlt />
            </div>
          )}
        </Link>
      </Header>
      <Container>
        <ImageContainer>
          <img
            src={`https://brillance-store.s3.sa-east-1.amazonaws.com/${product.image}`}
            alt={`/${product.image}`}
          />
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
