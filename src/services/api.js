import axios from "axios";

const BASE_URL = "http://20.244.56.144/test/";

const api = axios.create({
  baseURL: BASE_URL,
});

export const getAllProducts = async () => {
  try {
    const response = await api.get('/products');
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const getProductDetails = async (id) => {
  try {
    const response = await api.get('/products/${id}');
    return response.data;
  } catch (error) {
    console.error("Error fetching product details:", error);
    throw error;
  }
};
