import React, { useEffect, useState } from "react";
import axios from "axios";

import { Container, Row, Table, TableHeader, Switcher } from "./styles";
import { MdLocalShipping, MdDone } from "react-icons/md";
import { Link } from "react-router-dom";

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState([]);

  const [openOrders, setOpenOrders] = useState(0);
  const [completedOrders, setCompletedOrders] = useState(0);

  useEffect(() => {
    const getOrders = async () => {
      await axios
        .get("/order/get")
        .then(order => setOrders(order.data))
        .catch(err => console.log(err));
    };

    getOrders();
  }, []);

  useEffect(() => {
    console.log(orders);
    orders.forEach(order =>
      order.isShipped
        ? setCompletedOrders(completedOrders + 1)
        : setOpenOrders(openOrders + 1)
    );
  }, [orders]);

  return (
    <Container>
      <Switcher>
        <Link to="/admin/home">
          <h2>Produtos</h2>
        </Link>
        <h2>|</h2>
        <h2 className="selected">Pedidos</h2>
      </Switcher>

      <div className="orderSummary">
        <div>
          Quantidade de pedidos: <span>{orders.length}</span>
        </div>
        <div>
          Aguardando separação: <span className="warn">{openOrders}</span>
        </div>
        <div>
          Despachado: <span className="success">{completedOrders}</span>
        </div>
      </div>

      <Table>
        <thead>
          <Row header>
            <TableHeader>ID</TableHeader>
            <TableHeader>Destinatário</TableHeader>
            <TableHeader>Endereço</TableHeader>
            <TableHeader>Entrega</TableHeader>
            <TableHeader>Produtos</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader>Açoes</TableHeader>
          </Row>
        </thead>
        <tbody>
          {orders.map(order =>
            order.isShipped ? (
              <Row classname="successRow" key={order._id}>
                <td>{order._id}</td>
                <td>{order.name}</td>
                <td>{order.address}</td>
                <td>{order.shippmentType}</td>
                <td>
                  {order.productsList.map(product => (
                    <div key={product._id}>
                      {product.quantity}x - {product.title}
                      <br />
                    </div>
                  ))}
                </td>
                {order.isShipped ? (
                  <td className="success">Produto enviado</td>
                ) : (
                  <td className="warn">Aguardando separação</td>
                )}
                <td>
                  {order.isShipped ? (
                    <a className="doneBtn" href={`/admin/pedidos/${order._id}`}>
                      <MdDone />
                    </a>
                  ) : (
                    <a href={`/admin/pedidos/${order._id}`}>
                      <MdLocalShipping />
                      Detalhes
                    </a>
                  )}
                </td>
              </Row>
            ) : (
              <Row className="warn" key={order._id}>
                <td>{order._id}</td>
                <td>{order.name}</td>
                <td>{order.address}</td>
                <td>{order.shippmentType}</td>
                <td>
                  {order.productsList.map(product => (
                    <div key={product._id}>
                      {product.quantity}x - {product.title}
                      <br />
                    </div>
                  ))}
                </td>
                {order.isShipped ? (
                  <td className="success">Produto enviado</td>
                ) : (
                  <td className="warn">Aguardando separação</td>
                )}
                <td>
                  {order.isShipped ? (
                    <MdDone />
                  ) : (
                    <a href={`/admin/pedidos/${order._id}`}>
                      <MdLocalShipping />
                      Detalhes
                    </a>
                  )}
                </td>
              </Row>
            )
          )}
        </tbody>
      </Table>
    </Container>
  );
}
