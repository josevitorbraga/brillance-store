import React, { useEffect, useState } from "react";
import axios from "axios";

import { Container, MainContent } from "./styles";
import SideMenu from "../../components/SideMenu/SideMenu";
import ProductCard from "../../components/ProductCard/ProductCard";
import SliderCarrousel from "../../components/SliderCarrousel/SliderCarrousel";

export default function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get("/products");
      setProducts(response.data);
    };
    getProducts();
  }, []);
  return (
    <>
      <SliderCarrousel />

      <Container>
        <SideMenu />
        <MainContent>
          <h1>Home</h1>
          <div className="products-grid">
            {products.map(item => (
              <ProductCard key={item._id} productData={item} />
            ))}
          </div>
        </MainContent>
      </Container>
    </>
  );
}
