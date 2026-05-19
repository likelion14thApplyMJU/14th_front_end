// 1번
function makeCounter() {
    let count = 0;

    return{
     increase:function(){
        count++ ;
        console.log("현재 카운트:" + count);
    },
      decrease:function(){
        count--;
        console.log("현재 카운트:" + count);
    },
    multiple:function(){
        count *= 2;
        console.log("현재 카운트:" + count);
    },
     reset:function(){
        count = 0;
        console.log("현재 카운트:" + count);
    },
};

}

const counter = makeCounter();
counter.increase(); // 현재 카운트: 1
counter.increase(); // 현재 카운트: 2
counter.decrease(); // 현재 카운트: 1
counter.reset();    // 현재 카운트: 0

//2번
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

// 출력 순서: A-E-C-B-D
// 이유: A,E -> 콜 스택, C -> 마이크로태스크 큐, B,D -> 태스크 큐

//3번
interface Product {
    id: number;
    name: string;
    price: number;
    description?: string;
}
const products: Product[] = [
  {
    id: 1,
    name: "맥북 프로",
    price: 2490000,
    description: "Apple M3 칩 탑재 노트북",
  },
  {
    id: 2,
    name: "마우스 패드",
    price: 8000,
  },
  {
    id: 3,
    name: "기계식 키보드",
    price: 150000,
    description: "청축 기계식 키보드",
  },
  {
    id: 4,
    name: "USB 허브",
    price: 9900,
  },
];

function priceFilter(products: Product[], minPrice: number): Product[] {
  return products.filter((product) => product.price >= minPrice);
}

const result = priceFilter(products, 10000);
console.log(result);

//4번
function getLastItem<T>(arr: T[]): T | null {
    if(arr.length === 0) return null;
    return arr[arr.length - 1];
}

console.log(getLastItem<number>([1, 2, 3]));       // 3
console.log(getLastItem<string>(["a", "b", "c"])); // c
console.log(getLastItem<number>([]));               // null

//5번
import axios from "axios";

interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
}

async function getUser(id: number): Promise<void> {
    try{
        const response = await axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`);
        console.log(response.data.name);
        console.log(response.data.email);
    } catch (error) {
        if(error instanceof Error){
            console.log("요청 실패!", error.message);
        }
    }
}
getUser(1);