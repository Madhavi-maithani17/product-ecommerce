import api from "./api";

// Fetch all products
export const fetchProducts = async (limit, offset) => {
  try {
    const response = await api.get(`/products?limit=${limit}&offset=${offset}`);
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to fetch products."
    );
  }
};

// Fetch a single product by ID
export const fetchProductById = async (id) => {
  try {
    const response = await api.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || `Failed to fetch product with ID ${id}.`
    );
  }
};
