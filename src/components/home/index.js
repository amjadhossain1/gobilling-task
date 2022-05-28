import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { categories } from "../../demo-data";
import productsData from "../../products-data";
import Categorie from "./categorie";
import Header from "./header";
import ProductCard from "./product-card";

const Home = () => {
  const [products, setProducts] = useState(productsData);
  const [filterProduct, setFilterProduct] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategorie, setActiveCategorie] = useState("All Categories");

  useEffect(() => {
    setFilterProduct(products);
  }, [products]);

  const handleCategory = (categorie) => {
    setActiveCategorie(categorie);

    if (categorie === "All Categories") {
      setFilterProduct(products);
    } else {
      const categoryProduct = products.filter(
        (product) => product.category === categorie
      );

      setFilterProduct(categoryProduct);
    }
  };

  useEffect(() => {
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilterProduct(results);
  }, [products, searchTerm]);

  useEffect(() => {
    searchTerm ? setActiveCategorie("") : setActiveCategorie("All Categories");
  }, [searchTerm]);

  return (
    <Container className="">
      <Header setSearchTerm={setSearchTerm} />
      <Row className="py-3">
        {categories.map((el) => (
          <Categorie
            element={el.title}
            handleCategory={handleCategory}
            activeCategorie={activeCategorie}
            key={el.title}
          />
        ))}
      </Row>

      <Row>
        {filterProduct.length === 0 && (
          <h2 className="text-center mt-5">No product found</h2>
        )}
        {filterProduct.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </Row>
    </Container>
  );
};

export default Home;
