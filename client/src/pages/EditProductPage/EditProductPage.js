import React, { useEffect, useState } from "react";
import axios from "axios";

import { Container, Data, ImageContainer, Header } from "./styles";
import { BiArrowBack, BiCartAlt } from "react-icons/bi";
import { Link, useHistory } from "react-router-dom";

export default function EditProductPage(props) {
  const productId = props.match.params.productId;
  const history = useHistory();

  // 3 empty states with the names: name, description, price
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const handleChangeProduct = async e => {
    e.preventDefault();

    const response = await axios.put(`/products/edit/${productId}`, {
      name: name,
      description: description,
      price: price,
    });

    if (response.status === 200) {
      history.push("/admin/home");
    }
  };

  useEffect(() => {
    async function getProduct() {
      const response = await axios.get(`/products/${productId}`);
      setName(response.data.name);
      setDescription(response.data.description);
      setPrice(response.data.price);
      setImage(response.data.image);
    }
    getProduct();
  }, [productId]);

  return (
    <>
      <Header>
        <Link to="/admin/home">
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
          <img src={`/${image}`} alt={`/${image}`} />
        </ImageContainer>
        <Data>
          <form onSubmit={handleChangeProduct}>
            <div className="formDiv">
              <label htmlFor="name">Nome do produto</label>
              <input
                type="text"
                name="name"
                defaultValue={name}
                onChange={e => setName(e.target.value)}
              />
            </div>
            <div className="formDiv">
              <label htmlFor="description">Descrição</label>
              <textarea
                name="description"
                defaultValue={description}
                onChange={e => setDescription(e.target.value)}
              />
            </div>
            <div className="formDiv">
              <label htmlFor="price">Valor</label>
              <input
                type="text"
                name="price"
                defaultValue={price}
                onChange={e => setPrice(e.target.value)}
              />
            </div>
            <button type="submit">Alterar Produto</button>
          </form>
        </Data>
      </Container>
    </>
  );
}
