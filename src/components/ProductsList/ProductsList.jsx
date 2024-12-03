import React, { useState, useEffect, useCallback, useRef } from "react";
import { fetchProducts } from "../../services/productService";
import ProductCard from "../ProductCard/ProductCard";
import { Col, Container, Row } from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner';
import Filters from "../Filter/Filter";


const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [offset, setOffset] = useState(1);
  const limit = 12;
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState([0, Infinity]);
  const [sortOption, setSortOption] = useState("");
  const hasRun = useRef(false);

  const loadProducts = useCallback(async () => {
    if (loading || !hasMore) return;
    setLoading(true);
    setError(null);

    try {
      const data = await fetchProducts(limit, offset);
      setProducts((prev) => [...prev, ...data]);

      if (data.length < limit) {
        setHasMore(false);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
      setOffset((prev) => prev + limit);
    }
  }, [loading, hasMore, offset]);

  useEffect(() => {
    if (!hasRun.current) {
      loadProducts();
      hasRun.current = true;
    }
  }, []);
  

  const handleScroll = useCallback(() => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      if (scrollHeight - scrollTop <= clientHeight + 100) {
        loadProducts();
      }
  }, [loadProducts]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    let updatedProducts = [...products];

    if (category) {
      updatedProducts = updatedProducts.filter(
        (product) => product.category.name === category
      );
    }

    updatedProducts = updatedProducts.filter(
      (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    if (sortOption === "price-asc") {
      updatedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-desc") {
      updatedProducts.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(updatedProducts);
  }, [products, category, priceRange, sortOption]);

  return (
    <Container>
      <Row>
        <Col xs={12} md={3}>
          <Filters
            setCategory={setCategory}
            setPriceRange={setPriceRange}
            setSortOption={setSortOption}
            category={category}
            priceRange={priceRange}
            sortOption={sortOption}
          />
        </Col>

        <Col xs={12} md={9}>
          {loading ? (
            <div className="text-center">
              <Spinner animation="border" />
            </div>
          ) : error ? (
            <div className="text-danger text-center">{error}</div>
          ) : filteredProducts.length > 0 ? (
            <div className="d-flex flex-wrap justify-content-between">
              {filteredProducts.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center">No products found.</div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ProductsList;