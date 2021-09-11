import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import { Container, ShippingForm } from "./styles";
import { useCartContext } from "../../context/CartContext";
import { useHistory } from "react-router";

export default function PlaceOrderPage() {
  const { cart } = useCartContext();

  const history = useHistory();

  const [isDisabled, setIsDisabled] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const getCepAddress = async cep => {
    setCep(cep);
    await axios
      .get(`https://viacep.com.br/ws/${cep}/json/`)
      .then(res => {
        setAddress(`${res.data.logradouro}, ${res.data.bairro}`);
        setCity(res.data.localidade);
        setState(res.data.uf);
        setIsDisabled(false);
      })
      .catch(error => {
        console.log(error);
        toast.warn("Cep não identificado", {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  const handleShipmentSubmit = async e => {
    e.preventDefault();

    const response = await axios.post("/order/create/new", {
      name: name,
      email: email,
      contact: contact,
      productsList: cart.products,
      totalPrice: cart.total,
      address: `${address}, ${number}, ${city}, ${state}, ${cep}`,
    });

    localStorage.removeItem("cart");

    window.location.replace(response.data);
  };

  useEffect(() => {
    if (cart.products.length === 0) {
      history.replace("/");
    }
  }, []);

  return (
    <Container>
      <span>Envio e pagamento</span>
      <p>
        Após preencher o formulário de envio você será redirecionado ao portal
        de pagamento.
      </p>
      <ShippingForm onSubmit={handleShipmentSubmit}>
        <div className="formInput">
          <label htmlFor="name">Nome</label>
          <input
            required
            onChange={e => setName(e.target.value)}
            placeholder="Quem vai receber nossos produtos?"
            type="text"
            name="name"
            id="name"
          />
        </div>
        <div className="formInput">
          <label htmlFor="email">Email</label>
          <input
            required
            onChange={e => setEmail(e.target.value)}
            placeholder="Seu email para receber atualizações sobre o pedido"
            type="text"
            name="email"
            id="email"
          />
        </div>
        <div className="formInput">
          <label htmlFor="contact">Telefone</label>
          <input
            required
            onChange={e => setContact(e.target.value)}
            placeholder="Seu telefone de contato"
            type="text"
            name="contact"
            id="contact"
          />
        </div>
        <div className="formInput">
          <label htmlFor="cep">CEP</label>
          <input
            required
            onBlur={e => getCepAddress(e.target.value)}
            placeholder="Qual o cep do destino?"
            type="text"
            name="cep"
            id="cep"
          />
        </div>
        <div className="sameLine">
          <div className="formInput big">
            <label htmlFor="endereco">Endereço</label>
            <input
              value={address}
              required
              onChange={e => setAddress(e.target.value)}
              disabled={isDisabled}
              placeholder="Primeiro fala pra gente seu cep"
              type="text"
              name="endereco"
              id="endereco"
            />
          </div>
          <div className="formInput">
            <label htmlFor="houseNumber">Nº</label>
            <input
              required
              onChange={e => setNumber(e.target.value)}
              placeholder="Nº da residência"
              type="text"
              name="houseNumber"
              id="houseNumber"
            />
          </div>
        </div>
        <div className="sameLine">
          <div className="formInput big">
            <label htmlFor="city">Cidade</label>
            <input
              value={city}
              required
              onChange={e => setCity(e.target.value)}
              disabled={isDisabled}
              type="text"
              name="city"
              id="city"
            />
          </div>
          <div className="formInput">
            <label htmlFor="state">Estado</label>
            <input
              value={state}
              required
              onChange={e => setState(e.target.value)}
              disabled={isDisabled}
              type="text"
              name="state"
              id="state"
            />
          </div>
        </div>
        <div className="submitBtn">
          <button required type="submit">
            Ir ao pagamento
          </button>
        </div>
      </ShippingForm>
    </Container>
  );
}
