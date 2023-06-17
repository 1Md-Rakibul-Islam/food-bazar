import axios from 'axios'

const API = axios.create({baseURL: 'http://localhost:5000'})

export const addOrder = (product) => API.post(`/orders`, product);
export const fetchAOrder = (id) => API.get(`/orders/${id}`);
export const fetchOrders = (status) => API.get(`/orders`, status);
export const fetchPendingOrders = () => API.get(`/orders/pending`);
export const updateOrderStatus = (id, status) => API.patch(`/orders/${id}`, {status : status});