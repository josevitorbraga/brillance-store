import React, { useEffect, useState } from "react";
import axios from "axios";

import { Container, MainContent } from "./styles";
import { VscLoading } from "react-icons/vsc";
import SideMenu from "../../components/SideMenu/SideMenu";
import ProductCard from "../../components/ProductCard/ProductCard";
import SliderCarrousel from "../../components/SliderCarrousel/SliderCarrousel";

export default function CategoryPage(props) {
  const category = props.match.params.category;

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get(`/products/category/${category}`);
      setProducts(response.data);
      setIsLoading(false);
    };
    getProducts();
  }, [category]);
  return (
    <>
      <SliderCarrousel />

      <Container>
        <SideMenu />
        <MainContent>
          <h1>{category[0].toUpperCase() + category.substring(1)}</h1>
          {isLoading ? (
            <div className="loadingIcon">
              Carregando <VscLoading />
            </div>
          ) : (
            <div className="products-grid">
              {products.map(item => (
                <ProductCard key={item._id} productData={item} />
              ))}
            </div>
          )}
        </MainContent>
      </Container>
    </>
  );
}
