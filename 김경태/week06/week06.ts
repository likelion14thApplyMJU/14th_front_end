// 1. 클로저로 카운터 만들기
function makeCounter() {
    let count = 0;

    return{
        increase() {
            count ++;
            console.log(`현재 카운트: ${count}`);
        },
        decrease() {
            count --;
            console.log(`현재 카운트: ${count}`);
        },
        multiple() {
            count *= 2;
            console.log(`현재 카운트: ${count}`);
        },
        reset() {
            count = 0;
            console.log(`현재 카운트: ${count}`);
        }
    }
}

const counter = makeCounter();
counter.increase(); // 현재 카운트: 1
counter.increase(); // 현재 카운트: 2
counter.multiple();
counter.decrease(); // 현재 카운트: 1
counter.reset();    // 현재 카운트: 0

// 2
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
// 이유: 콜스택 A, E 1순위, 마이크로태스크 C 2순위, 태스크큐 B, D 3순위

// 3.
interface Product {
    id : number;
    name : string;
    price : number;
    description? : string;
}

const products : Product[] = [{
    id :1,
    name : "빵",
    price : 1000
},
{
    id : 2,
    name : "집",
    price : 100000000
}];

function filterProducts(products : Product[]){
    return products.filter((product) => product.price > 10000);
}

filterProducts(products);

// 4.
function getLastItem<T>(arr: T[]): T | null{
    if (arr.length > 0) {
        // ts가 해당 인덱스에 값이 없을수도 있다고 간주해서 문제가 생기니,  ??을 넣으라는데 솔직히 잘 모르겠음;;;
        return arr[arr.length - 1]?? null;
    }
    else{
        return null;
    }
}

console.log(getLastItem<number>([1, 2, 3]));       // 3
console.log(getLastItem<string>(["a", "b", "c"])); // c
console.log(getLastItem<number>([]));               // null

// 5.
import axios, {AxiosError} from "axios";

interface User {
    id?: number;
    name : string;
    email : string;
    phone? : string;
};

async function getUser(id: number): Promise<void> {
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        const user: User = {
            name: response.data.name,
            email: response.data.email,
        };
        console.log(user);
    } catch(error) {
    if (error instanceof AxiosError) {
        console.log("Axios 에러:", error.message);
        console.log("상태 코드:", error.response?.status);
    } else {
        console.log("알 수 없는 에러:", error);
    }
    }
};

getUser(1);