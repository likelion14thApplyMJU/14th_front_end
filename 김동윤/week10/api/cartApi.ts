import axios from "axios";

type CartItemRequest = {
  id: number;
  name: string;
  price: number;
};

export const addCartItem = async (item: CartItemRequest) => {
  const res = await axios.post(
    "https://jsonplaceholder.typicode.com/posts",
    item
  );
  return res.data;
};

export const removeCartItem = async (id: number) => {
  const res = await axios.delete(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return res.data;
};  