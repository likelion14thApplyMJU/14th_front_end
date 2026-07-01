import axios from "axios";

const BASE = "http://sajaking.duckdns.org:4000";

type CartItemRequest = {
  id: number;
  name: string;
  price: number;
};

export const addCartItem = async (item: CartItemRequest) => {
  return await axios.post(`${BASE}/api/cart`, item);
};

export const increaseCartItem = async (id: number) => {
  return await axios.patch(`${BASE}/api/cart/${id}/increase`);
};

export const decreaseCartItem = async (id: number) => {
  return await axios.patch(`${BASE}/api/cart/${id}/decrease`);
};

export const deleteCartItem = async (id: number) => {
  return await axios.delete(`${BASE}/api/cart/${id}`);
};

export const clearCart = async () => {
  return await axios.delete(`${BASE}/api/cart`);
};