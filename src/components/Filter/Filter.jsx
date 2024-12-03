import React from "react";
import { Form } from "react-bootstrap";

const Filters = ({ setCategory, setPriceRange, setSortOption, category, priceRange, sortOption }) => {
  return (
    <div className="filters d-flex flex-column p-3">
      <h5 className="fw-bold text-muted">Filters</h5>

      <Form.Label className="fs-6 fw-bold text-muted">
        Category
        <Form.Select size="sm" className="m-2" onChange={(e) => setCategory(e.target.value)} value={category}>
          <option value="">All</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothes">Clothes</option>
          <option value="Shoes">Shoes</option>
          <option value="Miscellaneous">Miscellaneous</option>
        </Form.Select>
      </Form.Label>

      <Form.Label className="fs-6 fw-bold text-muted">
        Price
        <Form.Select
          size="sm"
          className="m-2"
          onChange={(e) => {
            const value = e.target.value;
            if (value === "all") {
              setPriceRange([0, Infinity]);
            } else if (value === "low") {
              setPriceRange([0, 50]);
            } else if (value === "medium") {
              setPriceRange([50, 200]);
            } else if (value === "high") {
              setPriceRange([200, Infinity]);
            }
          }}
          value={priceRange[0] === 0 && priceRange[1] === Infinity ? "all" : priceRange[0] === 0 ? "low" : priceRange[0] === 50 ? "medium" : "high"}
        >
          <option value="all">All</option>
          <option value="low">Under 50</option>
          <option value="medium">$50 - $200</option>
          <option value="high">$200 & above</option>
        </Form.Select>
      </Form.Label>

      <Form.Label className="fs-6 fw-bold text-muted">
        Sort By
        <Form.Select
          size="sm"
          className="m-2"
          onChange={(e) => setSortOption(e.target.value)}
          value={sortOption}
        >
          <option value="">None</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </Form.Select>
      </Form.Label>
    </div>
  );
};

export default Filters;