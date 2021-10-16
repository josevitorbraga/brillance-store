import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import { Container, Details, Actions } from "./styles";

export default function AdminOrderPage(props) {
  const orderId = props.match.params.orderId;

  const [order, setOrder] = useState({});
  const [productsList, setProductsList] = useState([]);

  const [input, setInput] = useState("");
  const [refresh, setRefresh] = useState(false);

  const handleSubmitOrder = (e, trackerId) => {
    e.preventDefault();
    //change isShipped to true
    //change trackerId to the given parameter
    axios
      .post("/order/update", {
        orderId,
        trackerId,
      })
      .then(response =>
        toast.success(response, {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      )
      .catch(error =>
        toast.fail("Erro interno", {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      );

    setRefresh(true);
  };

  useEffect(() => {
    axios
      .get(`/order/get/${orderId}`)
      .then(res => {
        setOrder(res.data);
        setProductsList(res.data.productsList);
      })
      .catch(err => console.log(err));
  }, [orderId, refresh]);

  return (
    <Container>
      <h2>Detalhes do pedido</h2>

      <Details>
        <div className="detailsBox">
          <label>Nome do cliente:</label>
          <span>{order.name}</span>
        </div>
        <div className="detailsBox">
          <label>Email:</label>
          <span>{order.email}</span>
        </div>
        <div className="detailsBox">
          <label>Telefone para contato:</label>
          <span>{order.contact}</span>
        </div>
        <div className="detailsBox">
          <label>Endereço:</label>
          <span>{order.address}</span>
        </div>
        <div className="detailsBox">
          <label>Items:</label>
          <ul>
            {productsList.map(item => (
              <li>
                {item.quantity}x - {item.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="detailsBox">
          <label>Tipo de entrega:</label>
          <span>{order.shippmentType}</span>
        </div>

        <div className="detailsBox">
          <label>Total:</label>
          <span>R$ {order.totalPrice}</span>
        </div>
      </Details>
      <Actions>
        <h3>Status</h3>
        {order.isShipped ? (
          <p>Produto enviado: {order.trackerId}</p>
        ) : (
          <>
            <form
              onSubmit={e => handleSubmitOrder(e, input)}
              className="shippingForm"
            >
              <p>Após despachar o pedido insira o código de rastreio abaixo</p>
              <div className="actionForm">
                <input type="text" onChange={e => setInput(e.target.value)} />
                <button type="submit">Despachar</button>
              </div>
            </form>
          </>
        )}
      </Actions>
    </Container>
  );
}
