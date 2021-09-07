import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { Container } from "./styles";
import { BiPlus, BiArrowBack } from "react-icons/bi";
import axios from "axios";

export default function CreateProductPage() {
  const history = useHistory();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const [createdProductId, setCreatedProductId] = useState("");

  const [nextPhase, setNextPhase] = useState(false);

  const backToProducts = () => {
    history.replace("/admin/home");
  };

  const handleCreateProduct = async e => {
    e.preventDefault();
    const response = await axios.post("/products", {
      title: name,
      description: description,
      unit_price: Number(price),
      category_id: category,
    });
    setCreatedProductId(response.data);
    setNextPhase(true);
  };

  const handleImage = async e => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append("image", file);
    try {
      await axios.patch(`/products/${createdProductId}/image`, bodyFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Link to="/admin/home">
        <BiArrowBack />
        Cancelar
      </Link>
      {nextPhase ? (
        <Container>
          <h2>Adicionar novo produto</h2>

          <strong className="header">
            Passo 2 - Escolha uma foto para seu produto
          </strong>
          <form onSubmit={backToProducts}>
            <label htmlFor="name">Imagem</label>
            <input
              type="file"
              name="image"
              id="image"
              onChange={handleImage}
              required
            />
            <button type="submit">Finalizar</button>
          </form>
        </Container>
      ) : (
        <Container>
          <h2>Adicionar novo produto</h2>

          <strong className="header">Passo 1 - Definir dados do produto</strong>
          <form onSubmit={handleCreateProduct}>
            <label htmlFor="name">Nome do produto</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={e => setName(e.target.value)}
              required
            />
            <label htmlFor="price">Valor</label>
            <input
              type="text"
              name="price"
              id="price"
              placeholder="R$"
              onChange={e => setPrice(e.target.value)}
              required
            />
            <label htmlFor="description">Descrição</label>
            <textarea
              type="text"
              name="description"
              id="description"
              onChange={e => setDescription(e.target.value)}
              required
            ></textarea>
            <label htmlFor="category">Categoria</label>
            <select
              name="category"
              id="category"
              onChange={e => setCategory(e.target.value)}
            >
              <option value="aneis">Aneis</option>
              <option value="colares">Colares</option>
              <option value="brincos">Brincos</option>
              <option value="pulseiras">Pulseiras</option>
            </select>
            <button type="submit">
              Adicionar à coleção <BiPlus />
            </button>
          </form>
        </Container>
      )}
    </>
  );
}
