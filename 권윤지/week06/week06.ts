// ### 1. 클로저로 카운터 만들기

// 아래 조건에 맞게 클로저를 활용한 카운터를 만드세요.

// - `makeCounter` 함수를 작성하세요.
// - `increase()` 호출 시 카운트가 1 증가하고 현재 값을 출력하세요.
// - `decrease()` 호출 시 카운트가 1 감소하고 현재 값을 출력하세요.
// - `multiple()` 호출 시 값이 2배 증가하고 증가한 값을 출력하세요.
// - `reset()` 호출 시 카운트가 0으로 초기화되고 현재 값을 출력하세요.
// - `count` 변수는 외부에서 직접 접근할 수 없어야 합니다.

function makeCounter() {
  let count = 0;

  return {
    increase: () => {
      count++;
      console.log(`현재 카운트:${count}`);
    },
    decrease: () => {
      count--;
      console.log(`현재 카운트:${count}`);
    },

    multiple: () => {
        count *= 2;
        console.log(`현재 카운트: ${count}`);
    },

    reset() {
      count = 0;
      console.log(`현재 카운트: ${count}`);
    },

    getCount: () => count,
  };
}

const counter = makeCounter();
counter.increase(); // 현재 카운트: 1
counter.increase(); // 현재 카운트: 2
counter.decrease(); // 현재 카운트: 1
counter.reset();    // 현재 카운트: 0


// ### 2. 이벤트 루프 순서 예측하기

// 아래 코드의 출력 순서를 예측하고, 그 이유를 주석으로 설명하세요.

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

// 출력 순서: A -> E -> C -> B -> D
// 이유:
// 1. A, E가 먼저 실행
// 2. Promise.then()은 마이크로태스크 큐에 들어감
// 3. setTimeout()은 태스크 큐에 들어감
// 4. 현재 실행 중인 코드가 끝난 뒤 마이크로태스크가 먼저 실행되므로 C 출력
// 5. 이후 setTimeout의 B 출력
// 6. 마지막으로 100초 뒤 D 출력


// ### 3. TypeScript 타입 정의하기

// 아래 조건에 맞게 TypeScript로 타입을 정의하고 코드를 완성하세요.

// - `Product` 인터페이스를 만들어 `id(number)`, `name(string)`, `price(number)`, `description(string, 선택적)`을 포함하세요.
// - `products` 배열을 `Product[]` 타입으로 선언하고 데이터를 2개 이상 넣으세요.
// - 가격이 10000원 이상인 상품만 필터링하는 함수를 TypeScript로 작성하세요.

interface Product {
  id: number;
  name: string;
  price: number;
  description?: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "키보드",
    price: 30000,
    description: "기계식 키보드"
  },
  {
    id: 2,
    name: "마우스",
    price: 8000
  },
  {
    id: 3,
    name: "모니터",
    price: 150000
  }
];

function filterExpensiveProducts(products: Product[]): Product[] {
  return products.filter(product => product.price >= 10000);
}

console.log(filterExpensiveProducts(products));


// ### 4. 제네릭 함수 작성하기

// 아래 조건에 맞게 제네릭 함수를 작성하세요.

// - 배열을 받아서 마지막 요소를 반환하는 `getLastItem<T>` 함수를 작성하세요.
// - 빈 배열이 들어오면 `null`을 반환하세요.

function getLastItem<T>(arr: T[]): T | null {
  if (arr.length === 0) {
    return null;
  }

  return arr[arr.length - 1];
}

console.log(getLastItem<number>([1, 2, 3]));       // 3
console.log(getLastItem<string>(["a", "b", "c"])); // c
console.log(getLastItem<number>([]));               // null


// ### 5. TypeScript + Axios로 API 호출하기

// 아래 조건에 맞게 TypeScript와 Axios를 활용한 코드를 작성하세요.

// URL: `https://jsonplaceholder.typicode.com/users/1`

// - `User` 인터페이스를 정의하세요. (`id`, `name`, `email`, `phone` 포함)
// - `async/await`와 `try/catch`를 사용해 데이터를 가져오세요.
// - 가져온 데이터에서 `name`과 `email`만 콘솔에 출력하세요.

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

    const user = response.data;

    console.log("이름:", user.name);
    console.log("이메일:", user.email);

  } catch (error) {
    console.error("에러 발생:", error);
  }
}

getUser(1);