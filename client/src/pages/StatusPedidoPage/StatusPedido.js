import React, { useEffect, useState } from "react";
import queryString from "query-string";
import axios from "axios";
import { Link } from "react-router-dom";

import { Container, ResponseBox, StatusIcon } from "./styles";
import { VscLoading, VscArrowSmallLeft } from "react-icons/vsc";

export default function StatusPedido(props) {
  const orderId = props.match.params.orderId;
  const query = queryString.parse(window.location.search);

  const [loading, setLoading] = useState(true);
  const [orderIsPaid, setorderIsPaid] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:3333/payment/check/${orderId}/${query.payment_id}`)
      .then(response => {
        if (response.data === true) {
          console.log(response);
          setorderIsPaid(true);
          setLoading(false);
        } else {
          console.log(response);

          setLoading(false);
        }
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <Container>
      {loading ? (
        <div className="loadingIcon">
          Carregando <VscLoading />
        </div>
      ) : (
        <ResponseBox>
          {orderIsPaid ? (
            <>
              <div className="responseText">
                <h1>Seu pedido foi aprovado!!!</h1>
                <p>
                  <h3>Obrigado por comprar na Brillance Store,</h3>
                  <br /> seu pedido entrará em fase de separação e assim que for
                  despachado você receberá um email com todos os detalhes!
                </p>
                <Link to="/">
                  <VscArrowSmallLeft size={25} /> Voltar à loja
                </Link>
              </div>
              <StatusIcon status="success">
                <svg
                  className="checkmark"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 52 52"
                >
                  <circle
                    className="checkmark__circle"
                    cx="26"
                    cy="26"
                    r="25"
                    fill="none"
                  />
                  <path
                    className="checkmark__check"
                    fill="none"
                    d="M14.1 27.2l7.1 7.2 16.7-16.8"
                  />
                </svg>
              </StatusIcon>
            </>
          ) : (
            <>
              <div className="responseText">
                <h1>Ooops, parece que deu algo de errado com seu pagamento.</h1>
                <p>
                  Obrigado por comprar na Brillance Store mas parece que houve
                  algum problema com seu pagamento, clique no botão abaixo e
                  tente novamente.
                </p>
                <Link to="/">
                  <VscArrowSmallLeft size={25} /> Voltar à loja
                </Link>
              </div>
              <StatusIcon status="error">
                <svg
                  className="checkmark"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    className="checkmark__circle"
                    cx="26"
                    cy="26"
                    r="25"
                    fill="none"
                  />

                  <path
                    className="checkmark__check"
                    fill="none"
                    d="M8 8.707l3.646 3.647.708-.707L8.707 8l3.647-3.646-.707-.708L8 7.293 4.354 3.646l-.707.708L7.293 8l-3.646 3.646.707.708L8 8.707z"
                  ></path>
                </svg>
              </StatusIcon>
            </>
          )}
        </ResponseBox>
      )}
    </Container>
  );
}
