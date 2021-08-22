import React from "react";
import { Container } from "./styles.js";

import { BiEditAlt } from "react-icons/bi";

import { useHistory, Link } from "react-router-dom";

export default function ProductCard(props) {
  const history = useHistory();
  const handleGoToProduct = productId => {
    history.push(`/produto/${productId}`);
  };
  const handleGoToEditProduct = productId => {
    history.push(`/produto/edit/${productId}`);
  };
  return (
    <>
      {props.editMode === true ? (
        <Container>
          <img
            src={`/${props.productData.image}`}
            alt="produto"
            onClick={() => handleGoToEditProduct(props.productData._id)}
          />
          <Link
            to={`/produto/edit/${props.productData._id}`}
            className="card-body"
          >
            <h3>{props.productData.name}</h3>
            R$ {props.productData.price}
            <BiEditAlt size={25} />
          </Link>
        </Container>
      ) : (
        <Container>
          <img
            src={`/${props.productData.image}`}
            alt="produto"
            onClick={() => handleGoToProduct(props.productData._id)}
          />
          <Link to={`/produto/${props.productData._id}`} className="card-body">
            <h3>{props.productData.name}</h3>
            R$ {props.productData.price}
          </Link>
        </Container>
      )}
    </>
  );
}
