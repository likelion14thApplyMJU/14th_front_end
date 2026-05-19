function makeCounter() {
  let count = 0; 

  return { 
    increase: () => {
      count++;
      console.log("현재 카운트:", count);
    },
    decrease: () => {
      count--;
      console.log("현재 카운트:", count);
    },
    multiple: () => {
      count *= 2;
      console.log("현재 카운트:", count);
    },
    reset: () => {
      count = 0;
      console.log("현재 카운트:", count);
    }
  }; 
} 

const counter = makeCounter();
counter.increase(); // 현재 카운트: 1
counter.increase(); // 현재 카운트: 2
counter.decrease(); // 현재 카운트: 1
counter.reset();    // 현재 카운트: 0



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

// 출력 순서:  AECBD
// 이유: 가장 먼저 바로 실행되는 A와 E가 먼저 출력이 되고 태스크 큐보다 우선순위가 높은 마이크로태스크 큐가 그 다음으로 실행이 됩니다. 그리고 태스크 큐에서 처리가 되는 B와 D가 출력이 됩니다.


interface Product {
    id: number
    name: string
    price: number
    description: string;
}

const products: Product[] = [

    { id: 1, name: "키보드", price: 30000, description: "무선 키보드"},
    { id: 2, name: "마우스", price: 20000, description: "무선 마우스"}
];

function filterProduct(list:Product[]): Product[]{
    return list.filter((product) => product.price >= 1000);
}


import axios from "axios";

interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
}

async function getUser(id: number): Promise<void> {
  const response = await axios.get<void>(
     `https://jsonplaceholder.typicode.com/users/1${id}`
  );
  return response.data;
}

getUser(1);