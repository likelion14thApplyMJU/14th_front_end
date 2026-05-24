// 1. 클로저로 카운터 만들기
function makeCounter() {
    let count = 0;

    return {
        increase() {
            count++;
            console.log(`현재 카운트: ${count}`);
        },
        decrease() {
            count--;
            console.log(`현재 카운트: ${count}`);
        },
        multiple() {
            count *= 2;
            console.log(`현재 카운트: ${count}`);
        },
        reset() {
            count = 0;
            console.log(`현재 카운트: ${count}`);
        },
    };
}

const counter = makeCounter();
counter.increase(); // 현재 카운트: 1
counter.increase(); // 현재 카운트: 2
counter.decrease(); // 현재 카운트: 1
counter.multiple(); // 현재 카운트: 2
counter.reset();    // 현재 카운트: 0


// 2. 이벤트 루프 순서 예측하기
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

// 출력 순서: A → E → C → B → D
//
// 이유:
// 1. "A" - console.log()이므로 즉시 실행
// 2. "E" - console.log()이므로 즉시 실행
//    (setTimeout, Promise는 콜 스택이 비워질 때까지 대기)
// 3. "C" - 콜 스택이 비워지면 마이크로태스크 큐가 먼저 실행됨
//          Promise.then()은 마이크로태스크 큐 이므로 setTimeout보다 우선
// 4. "B" - 마이크로태스크 큐 처리 후 태스크 큐 실행, 0ms setTimeout
// 5. "D" - 100ms 후 태스크 큐 실행


// 3. TypeScript 타입 정의하기
interface Product {
    id: number;
    name: string;
    price: number;
    description?: string;
}

const products: Product[] = [
    { id: 1, name: "무선 이어폰", price: 15000, description: "노이즈 캔슬링 지원" },
    { id: 2, name: "볼펜", price: 500 },
    { id: 3, name: "노트북 파우치", price: 12000, description: "방수 소재" },
    { id: 4, name: "포스트잇", price: 3000 },
];

function filterExpensiveProducts(items: Product[]): Product[] {
    return items.filter((item) => item.price >= 10000);
}

console.log(filterExpensiveProducts(products));



// 4. 제네릭 함수 작성하기
function getLastItem<T>(arr: T[]): T | null {
    if (arr.length === 0) return null;
    return arr[arr.length - 1];
}

console.log(getLastItem<number>([1, 2, 3]));       // 3
console.log(getLastItem<string>(["a", "b", "c"])); // c
console.log(getLastItem<number>([]));               // null


// 5. TypeScript + Axios로 API 호출하기
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
        console.log(name);
        console.log(email);
    } catch (error) {
        console.error("데이터를 불러오는 데 실패했습니다:", error);
    }
}

getUser(1);