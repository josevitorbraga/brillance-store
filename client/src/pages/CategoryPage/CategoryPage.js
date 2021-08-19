import React, { useEffect, useState } from "react";
import axios from "axios";

import { Container, MainContent } from "./styles";
import SideMenu from "../../components/SideMenu/SideMenu";
import ProductCard from "../../components/ProductCard/ProductCard";
import SliderCarrousel from "../../components/SliderCarrousel/SliderCarrousel";

export default function CategoryPage(props) {
  const category = props.match.params.category;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get(`/products/category/${category}`);
      setProducts(response.data);
    };
    getProducts();
  }, [category]);
  return (
    <>
      <SliderCarrousel />

      <Container>
        <SideMenu />
        <MainContent>
          <h3>{category.toUpperCase()}</h3>
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
