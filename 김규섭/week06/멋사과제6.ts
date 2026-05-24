function makeCounter() {
  let count = 0;

  return {
    increase() {
      count += 1;
      console.log("현재 카운트:", count);
    },
    decrease() {
      count -= 1;
      console.log("현재 카운트:", count);
    },
    multiple() {
      count *= 2;
      console.log("현재 카운트:", count);
    },
    reset() {
      count = 0;
      console.log("현재 카운트:", count);
    },
  };
}

const counter = makeCounter();
counter.increase();
counter.increase();
counter.decrease();
counter.reset();

console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");
});

setTimeout(() => {
  console.log("D");
}, 100);

console.log("E");

interface Product {
  id: number;
  name: string;
  price: number;
  description?: string; 
}


const products: Product[] = [
  { id: 1, name: "노트북", price: 1500000, description: "고성능 노트북" },
  { id: 2, name: "마우스", price: 35000 },
  { id: 3, name: "키보드", price: 120000, description: "기계식 키보드" },
];

function filterByPrice(products: Product[]): Product[] {
  return products.filter((product) => product.price >= 10000);
}

console.log(filterByPrice(products));

function getLastItem<T>(arr: T[]): T | null {
  if (arr.length === 0) return null;
  return arr[arr.length - 1];
}

console.log(getLastItem<number>([1, 2, 3]));
console.log(getLastItem<string>(["a", "b", "c"]));
console.log(getLastItem<number>([])); 


import axios from "axios";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

async function getUser(id: number): Promise<void> {
  try {
    const response = await axios.get<User>(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const { name, email } = response.data;
    console.log("name:", name);
    console.log("email:", email);
  } catch (error) {
    console.error("API 호출 실패:", error);
  }
}

getUser(1);