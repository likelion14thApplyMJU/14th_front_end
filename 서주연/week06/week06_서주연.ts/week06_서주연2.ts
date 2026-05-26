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
//순서: A, E, C, B, D
//이유: A와 E (콜스택) 다음 C (마이크로태스크 큐) 다음 B, D (태스크 큐) 순서로 실행 우선순위가 정해짐.B와 D는 0ms초와 100ms초의 차이로 순서가 정해짐.
