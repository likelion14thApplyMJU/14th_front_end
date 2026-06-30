const PI = 3.14;
let radius = Number(prompt('반지름을 입력하세요'));
let area = PI * radius * radius;
alert(area);

let foods = ['치즈', '요구르트', '우유'];
foods.push('아이스크림');
console.log(foods);

foods.splice(2, 0, '빵');
console.log(foods);

const nom = Number(prompt('숫자를 입력하세요'));
if (nom > 0) {
  alert('양수입니다');
} else if (nom === 0) {
  alert('0입니다');
} else {
  alert('음수입니다');
}

const nim = Number(prompt('숫자를 입력하세요'));
if (nim % 2 === 0) {
  alert('짝수입니다');
} else {
  alert('홀수입니다');
}

let nam = 0;
for (let i = 1; i <= 10; i++) {
  num += i;
}
console.log(nam);

for (let i = 1; i <= 5; i++) {
  let stars = '';
  for (let j = 0; j < i; j++) {
    stars += '*';
  }
  console.log(stars);
}

let a = Number(prompt('a를 입력해주세요'));
let b = Number(prompt('b를 입력해주세요'));

function addRange(a, b) {
  let num = 0;
  for (let i = a; i <= b; i++) {
    num += i;
  }
  return num;
}

console.log(`${addRange(a, b)}`);

console.log(student.name);
console.log(student.isGraduated);
console.log(student.subjects[1]);
console.log(student.address.city);

//홍길동은(는) 20세이고, 서울에 살고 있습니다.

const greeting = (name) => `안녕하세요, ${name}님!`;

console.log(greeting("김미미"));

