import React, { useContext, useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { AppContext } from "../../App";
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
  const { cart, setCart } = useContext(AppContext);

  useEffect(() => {
    setFilterProduct(products);
  }, [products]);

  const handleCategory = (categorie) => {
    if (categorie === "All Categories") {
      setFilterProduct(products);
    } else {
      const categoryProduct = products.filter(
        (product) => product.category === categorie
      );

      setFilterProduct(categoryProduct);
    }
    setActiveCategorie(categorie);
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

  const handleCart = (product) => {
    const key = product.key;

    const sameProduct = cart.find((pd) => pd.key === key);
    let count = 1;
    let newCart;

    if (sameProduct) {
      count = sameProduct.quantity + 1;
      sameProduct.quantity = count;
      const others = cart.filter((pd) => pd.key !== key);
      newCart = [...others, sameProduct];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }

    setCart(newCart);
  };

  return (
    <div className="bg-light">
      <Container className="">
        <Header setSearchTerm={setSearchTerm} />
        <Row
          className=" d-flex align-items-center"
          style={{ padding: "100px 0  50px" }}
        >
          {categories.map((el) => (
            <Categorie
              element={el.title}
              handleCategory={handleCategory}
              activeCategorie={activeCategorie}
              key={el.title}
              more={el.more}
            />
          ))}
        </Row>

        <Row>
          {filterProduct.length === 0 && (
            <h2 className="text-center mt-5">No product found</h2>
          )}
          {filterProduct.map((product, index) => (
            <ProductCard
              product={product}
              handleCart={handleCart}
              key={index}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
