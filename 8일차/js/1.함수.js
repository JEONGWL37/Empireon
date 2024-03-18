/* function(함수)
// 어떤 목적을 가지고 작성한 코드를 모아 둔 블록
//특정 동작(기능)을 수행하는 일부 코드의 집합(부분)
//함수를 만드는 이유
// - 반복적인 작업일 때
// - input을 받아서 output를 반환해야할 때
let j = 1;

for(let i = 1; i <= 3; i++) {
  for(let j = 1; j <= 9; j++) {
    document.write( i + '*' + j + '=' + i*j + '<br>');
  }
}

for(let i = 1; i <=9; i++) {
  document.write(`3 *${i} = ${3 * i}` + '<br>' );
} */

// function ljw() {
//   for(let i = 1; i <=9; i++) {
//     document.write(`3 * ${i} = ${3 * i}` + '<br>');
//   }
// }
// ljw();
// ljw();
// ljw();

//함수를 정의하는 방법
//    function 함수명() {}

//함수를 실행/호출 - 가장 일반적인 방법
//    함수명();

// 함수 표현식으로 함수 정의
//    함수는 객체에서 파생된 자료형, 자료형은 변수에 할당 / 함수를 데이터형으로 생각함
// const 변수명 = function() {} --> 익명함수, 함수 이름이 없음
// const 변수명 = function 함수명() {} --> 네이밍함수

// const gugudan = function gugudan() {
//   for(let i = 1; i <=9; i++) {
//      document.write(`3 * ${i} = ${3 * i}` + '<br>');
//     }
// }

// gugudan(); //함수 호출

// const gugudan = function() {
//   for(let i = 1; i <=9; i++) {
//      document.write(`3 * ${i} = ${3 * i}` + '<br>');
//     }
// }
// gugudan();


// // 함수 표현식
// const gugudan = function naming() { //함수의 식별자 이름과 변수명을 똑같이 써야 함. 'const gugudan = function naming(x)'
//   for(let i = 1; i <=9; i++) {
//      document.write(`3 * ${i} = ${3 * i}` + '<br>');
//     }
// }
// gugudan();

// 화살표 함수(가장 많이 사용되는 방법)
//    () => {};
// 익명함수로만 정의할 수 있어요
// 함수 표현식으로 사용

// const gugudan = () => { 
//   for(let i = 1; i <=9; i++) {
//      document.write(`3 * ${i} = ${3 * i}` + '<br>');
//     }
// };

// gugudan();

// parameter(매개 변수)와 argument(인수)
// parameter: 외부에서 전달되는 데이터를 함수에서 받을 수 있도록 정의하는 변수
// argument: 함수를 호출할 때 전달하고 싶은 데이터 

// function gugudan(dan) { // parameter: (dan)
//     for(let i = 1; i <=9; i++) {
//        document.write(`${dan} * ${i} = ${dan * i}` + '<br>');
//       }
//   }

// //함수 호출  
// gugudan(3); // argument: (3)
// gugudan(4);
// gugudan(9);


// const gugudan = (dan = 7) => { 
//   for(let i = 1; i <=9; i++) {
//      document.write(`${dan} * ${i} = ${dan * i}` + '<br>');
//     }
// };

// gugudan();

// return문
// 함수 외부로 데이터를 반환할 때.
// return 식(또는 값)

// function sum(num1, num2) {
//   let result = num1 + num2;
//   // console.log('inner: ' + result);
//   return result;
//   // return num1 + num2;
// } 

// const result = sum(10, 20);
// console.log('out: ' + result);

// function sum(num1, num2) {
//   if(typeof num1 !== 'number' || typeof num2 !== 'number'){
//     return;  //매개변수가 숫자가 아니면 강제종료
//   }
//   return num1 + num2;
//   } 

// const result = sum(10, 20);
// console.log('out: ' + result);

// 화살표함수에서 {} 생략 시 화살표 다음에 오는 코드는 
// return 문으로 처리 

// const sum = (num1, num2) => num1 + num2;
// const result = sum(10,20);
// console.log(result);

// scope(스코프)
// 변수나 함수와 같은 참조 대상 식별자를 찾아 내기 위한 규칙
// - 함수 스코프: 함수에서 정의된 블록 내에서만 사용
// - 블록 스코프: {}로 구성된 블록문 기준으로 스코프의 
//                유효범위를 나누는 방식
//                let, const 선언  
// - 전역(global) 스코프
// - 지역(local) 스코프

// let a = 10; // 전역변수
// {
//   let b = 20; //지역변수
//   console.log(`코드블록 내부 a: ${a}`);
//   console.log(`코드블록 내부 b: ${b}`);
// }
// console.log(`코드블록 외부 a: ${a}`);
// console.log(`코드블록 외부 b: ${b}`) //defined;

// 즉시실행함수
// 함수를 정의하면서 동시에 실행까지 됨. 
// 한 번만 실행할 함수
// (function(){})();

(function init(a, b){ // a, b 매개변수 사용 가능
  console.log('즉시실행함수');
  console.log(a+b)
})(10, 20);

// init();