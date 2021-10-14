import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Container, MissingAuth, ProductGrid, Switcher } from "./styles";
import { BiPlus } from "react-icons/bi";

export default function AdminPage() {
  const [productList, setProductList] = useState([]);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    async function getAdminPermission() {
      await axios
        .get("/products/auth", {
          withCredentials: true,
        })
        .then(response => {
          setIsAuth(true);
          setProductList(response.data);
        })
        .catch(err => console.log(err));
    }
    getAdminPermission();
  }, []);

  return (
    <div>
      <Switcher>
        <h2 className="selected">Produtos</h2> <h2>|</h2>
        <Link to="/admin/pedidos">
          <h2>Pedidos</h2>
        </Link>
      </Switcher>
      {isAuth ? (
        <Container>
          <div className="info">
            Use esta página para a criação ou edição de produtos
          </div>
          <div className="header">
            <h1>Coleção atual</h1>
            <Link to="/admin/product/create">
              Adicionar novo produto <BiPlus />
            </Link>
          </div>
          <ProductGrid>
            {productList.map(product => (
              <ProductCard
                editMode={true}
                productData={product}
                key={product._id}
              />
            ))}
          </ProductGrid>
        </Container>
      ) : (
        <MissingAuth>
          <div>
            <h1>OOps! parace que seu login expirou!</h1>
            <Link to="/admin/login">Fazer login</Link>
          </div>
        </MissingAuth>
      )}
    </div>
  );
}
