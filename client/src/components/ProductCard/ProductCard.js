import React from "react";
import axios from "axios";
import { Container } from "./styles.js";

import { BiEditAlt, BiEraser } from "react-icons/bi";

import { useHistory, Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function ProductCard(props) {
  const history = useHistory();

  const handleDeleteProduct = async id => {
    const response = await axios.delete(`/products/${id}`);
    if (response.status === 200) {
      toast.success(response.data.message);
    }
  };

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
            src={`https://brillance-store.s3.sa-east-1.amazonaws.com/${props.productData.image}`}
            alt="produto"
            onClick={() => handleGoToEditProduct(props.productData._id)}
          />
          <div className="card-body">
            <h3>{props.productData.name}</h3>
            R$ {props.productData.price}
          </div>
          <div className="productActions">
            <Link
              to={`/produto/edit/${props.productData._id}`}
              className="editProduct"
            >
              <BiEditAlt size={25} />
            </Link>
            <Link
              onClick={() => handleDeleteProduct(props.productData._id)}
              className="deleteProduct"
            >
              <BiEraser size={25} />
            </Link>
          </div>
        </Container>
      ) : (
        <Container>
          <img
            src={`https://brillance-store.s3.sa-east-1.amazonaws.com/${props.productData.image}`}
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
