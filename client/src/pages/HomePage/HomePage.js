import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

import useOnScreen from "../../hooks/useOnScreen";

import { Container, MainContent } from "./styles";
import SideMenu from "../../components/SideMenu/SideMenu";
import ProductCard from "../../components/ProductCard/ProductCard";
import SliderCarrousel from "../../components/SliderCarrousel/SliderCarrousel";
import miniLogo from "../../assets/miniLogo.svg";

export default function HomePage() {
  const [products, setProducts] = useState([]);

  const ref = useRef();
  const isVisible = useOnScreen(ref);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get("/products");
      setProducts(response.data);
    };
    getProducts();
  }, []);
  return (
    <>
      <div ref={ref}>
        <SliderCarrousel />
      </div>
      <Container>
        <SideMenu />
        <MainContent isOnTop={isVisible}>
          <div className="contentHeader">
            <img src={miniLogo} alt="Brillance Store" />
            <h1>
              <strong>Em destaque</strong>
            </h1>
          </div>
          <div className="products-grid">
            {products.map(item => (
              <ProductCard productData={item} />
            ))}
          </div>
        </MainContent>
      </Container>
    </>
  );
}
