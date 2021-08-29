import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Container, MissingAuth, ProductGrid } from "./styles";
import { BiPlus } from "react-icons/bi";

export default function AdminPage() {
  const [productList, setProductList] = useState([]);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    async function getAdminPermission() {
      const response = await axios.get("/products/auth", {
        withCredentials: true,
      });
      if (response.status === 200) {
        setIsAuth(true);
        setProductList(response.data);
      }
    }
    getAdminPermission();
  }, [productList]);

  return (
    <div>
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
