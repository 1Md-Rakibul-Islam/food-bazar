import axios from 'axios'

const API = axios.create({baseURL: 'http://localhost:5000'})

export const addProduct = (product) => API.post(`/products`, product);
export const fetchProduct = (id) => API.get(`/products/${id}`);
export const fetchProducts = () => API.get(`/products`);
export const updateProductStatus = (id, status) => API.patch(`/products/${id}`, {status : status});