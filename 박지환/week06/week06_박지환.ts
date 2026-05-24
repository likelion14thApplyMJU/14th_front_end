//1. 클로저로 카운터 만들기
function makeCounter() {
  let count = 0;

  return {
    increase() {
      count++;
      console.log('현재 카운트: ' + count);
    },
    decrease() {
      count--;
      console.log('현재 카운트: ' + count);
    },
    multiple() {
      count *= 2;
      console.log('현재 카운트: ' + count);
    },
    reset() {
      count = 0;
      console.log('현재 카운트: ' + count);
    }
  };
}

const counter = makeCounter();
counter.increase(); // 현재 카운트: 1
counter.increase(); // 현재 카운트: 2
counter.decrease(); // 현재 카운트: 1
counter.reset();    // 현재 카운트: 0
counter.increase(); // 현재 카운트: 1
counter.multiple(); // 현재 카운트: 2
counter.multiple(); // 현재 카운트: 4
counter.decrease(); // 현재 카운트: 3

//2. 이벤트 루프 순서 예측하기
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

// 출력 순서: A, E, C, B, D
// 이유: 
// 1. `console.log("A")`는 동기적으로 실행됩니다.
// 2. `console.log("E")`는 동기적으로 실행됩니다.
// 3. `Promise.resolve().then(() => { console.log("C"); })`는 마이크로태스크 큐에 추가됩니다.
// 4. `setTimeout(() => { console.log("B"); }, 0)`는 매크로태스크 큐에 추가됩니다.
// 5. `setTimeout(() => { console.log("D"); }, 100)`는 매크로태스크 큐에 추가되지만 지연됩니다.
// 6. 이벤트 루프는 마이크로태스크 큐를 먼저 처리하고, 그 후에 매크로태스크 큐를 처리합니다.
// 7. 따라서 출력 순서는 A, E, C, B, D가 됩니다.

//3. TypeScript 타입 정의하기
interface Product {
  id: number;
  name: string;
  price: number;
  description?: string; // 선택적 속성
}

const products: Product[] = [
  { id: 1, name: "치즈피자", price: 15000},
  { id: 2, name: "페퍼로니피자", price: 8000, description: "치즈크러스트" },
  { id: 3, name: "고구마피자", price: 20000 }
];

function filterExpensiveProducts(productList: Product[]): Product[] {
  return productList.filter(product => product.price >= 10000);
}
const expensiveProducts = filterExpensiveProducts(products);
console.log(expensiveProducts);

//4. 제네릭 함수 작성하기
function getLastItem<T>(arr: T[]): T | null {
  if (arr.length === 0) {
    return null;
  }
  return arr[arr.length - 1];
}

console.log(getLastItem<number>([1, 2, 3]));       // 3
console.log(getLastItem<string>(["a", "b", "c"])); // c
console.log(getLastItem<number>([]));              // null

//5. TypeScript + Axios로 API 호출하기
import axios from "axios";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

async function getUser(id: number): Promise<void> {
  try {
    const response = await axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`);
    console.log(response.data.name);
    console.log(response.data.email);
  } catch (error) {
    console.error("Error fetching user:", error);
  }
}

getUser(1);