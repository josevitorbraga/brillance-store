import React from "react";
import { useCartContext } from "../../context/CartContext";

import { IoBagCheck, IoClose } from "react-icons/io5";
import { BiArrowBack } from "react-icons/bi";
import {
  Container,
  OrderContainer,
  OrderDetails,
  OrderItem,
  Header,
} from "./styles";
import { Link, useHistory } from "react-router-dom";

export default function CartPage() {
  const { cart, removeItem, addToCart, removeProductUnit } = useCartContext();

  const history = useHistory();

  const handleMakeOrder = () => {
    history.push(`/novopedido`);
  };

  const handleIterateOnCart = product => {
    if (product.quantity < product.stock) {
      addToCart(product);
    }
  };

  return (
    <>
      <Header>
        <Link to="/">
          <BiArrowBack />
          Voltar ao catálogo
        </Link>
        <span>Pedido</span>
        <div className="spacing"></div>
      </Header>
      <Container>
        <OrderContainer>
          {/* Here we are mapping the cart array and returning the order details */}
          {cart.products.length === 0 ? (
            <p>
              O carrinho está vazio, <Link to="/">vamos às compras.</Link>
            </p>
          ) : (
            cart.products.map(item => (
              <OrderItem key={item._id}>
                <div className="orderInfo">
                  <div className="productImage">
                    <img
                      src={`https://brillance-store.s3.sa-east-1.amazonaws.com/${item.image}`}
                      alt="miniature"
                    />
                  </div>
                  <div className="productName">
                    <label>Name</label>

                    <p>{item.title}</p>
                  </div>
                  <div className="itemQuantity">
                    <label>Quantidade</label>
                    <div className="quantityButton">
                      <button onClick={() => handleIterateOnCart(item)}>
                        +
                      </button>
                      <input type="text" value={item.quantity} />
                      <button onClick={() => removeProductUnit(item)}>-</button>
                    </div>
                  </div>
                  <div className="productPrice">
                    <label>Total</label>
                    <p>R$ {item.unit_price * item.quantity}</p>
                  </div>
                </div>
                <div className="orderActions">
                  <button onClick={() => removeItem(item._id)}>
                    Remover <IoClose />
                  </button>
                </div>
              </OrderItem>
            ))
          )}
        </OrderContainer>
        <OrderDetails>
          <span>Resumo do pedido</span>
          <div className="orderResume">
            Valor: <span>R$ {cart.total.toFixed(2)}</span>
          </div>
          <p align="center">
            Ao finalizar o pedido o redirecionaremos para um atendente que
            ficará encarregado de colher todos os dados do seu pedido.
          </p>
          <button onClick={() => handleMakeOrder()}>
            Finalizar <IoBagCheck />
          </button>
        </OrderDetails>
      </Container>
    </>
  );
}
