//문제 1
function makeCounter() {
    let count = 0;
    return {
        increase() {
            count++;
            console.log(count);
        },
        decrease() {
            count--;
            console.log(count);
        },
        reset() {
            count = 0;
            console.log(count);
        }
    }   
}

const counter = makeCounter();
counter.increase();
counter.increase();
counter.decrease();
counter.reset();


//문제 2
//A->E->C->B->D
//먼저 콜 스택 A와 E가 출력된다
//그 다음 마이크로태스크인 C가 출려된다.
//마지막으로 태스크 큐가 실행되는데 그 중에서도 B가 먼저
//실행되고 그 다음 D가 실행되었으니 A->E->C->B->D 순서로 출력된다.

//문제 3
interface Product {
    id : number;
    name: string;
    price: number;
    description?: string;
}

const products: Product[] = [
    { id: 1, name: "햄버거 세트", price: 12000 },
    { id: 2, name: "커피", price: 4500, description: "카페인" },
];

function filterByPrice(products: Product[], minPrice: number): Product[] {
  return products.filter((product) => product.price >= minPrice);
}

const result = filterByPrice(products, 10000);
console.log(result);


//문제 4
function getLastItem<T>(arr: T[]): T | null {
  // 여기를 완성해주세요
    if (arr.length === 0) {
        return null;
    } else {
        return arr[arr.length - 1] as T;
    }
}

console.log(getLastItem<number>([1, 2, 3]));       // 3
console.log(getLastItem<string>(["a", "b", "c"])); // c
console.log(getLastItem<number>([]));               // null

//문제 5
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
