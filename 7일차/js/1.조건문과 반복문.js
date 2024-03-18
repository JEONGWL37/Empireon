//조건문: 프로그램의 흐름을 변경
/* if(조건식) {
  조건식이 참이면 블록문 실헹
} else {
   조건식이 거짓이면 블록문 실행
}*/

/* if(조선식1) {
    조건식1이 참이면 실행
} else if(조건식2) {
    조건식1이 거짓이고 조건식2가 참이면 실행
} else {
    조건식1과 조건식2 둘다 모두 거짓이면 실행*/

/*let num = prompt("계산할 값을 입력하세요!", "숫자"); //짝수 or 홀수?
if(num % 4 == 0) {
  document.write("4의 배수.");
} else if(num % 2 == 0) {
  document.write("짝수입니다.");
} else {
  document.write("홀수입니다.");
} *?

/* if(num % 4) {
  if(num %2) {
    document.write("홀수입니다.");
  } else {
    document.write("짝수입니다.")
  }
} else {
  document.write("4의 배수입니다.") 
}*/

/*let strNum = '10'; // 이것을 형 변환이라고 함. 
let num = 10;
//document.write(strNum + num); //결과값은 20가 아닌 1010임.
document.write(Number(strNum) + num); //데이터 타입을 변환시켜서 20으로 출력 됨 
//document.write(strNum + String(num); 문자로 데이터 타입 변경하고 싶으면 */

// if(true) {
//   document.write('참');
// }

/*if(num %2 == 0) {  //나눈 나머지가 0이면 짝수임
 //document.write('<h3>짝수입니다!</h3>');
 confirm("짝수입니다.")
} else {
document.write("홀수입니다!"); } */

/*if(strNum == num) {  
  confirm("같다")
 } else {
 document.write("다르다"); } */

/* let gender = prompt('성별의 값(1,2,3,4)을 입력하세요'); //프로폼트에 입력시 문자로 출력 됨

if(gender ==1 || gender == 3) {
  document.write("남성입니다.");
} else if(gender ==2 || gender == 4) {
  document.write("여성입니다.");
} else {
  document.write("값을 잘못 입력했습니다.")
} */

// switch 문
/* switch(키, 옵션값) {
    case 키값1: 
      키값1일 때 실행할 블록문
    break; 

    case 키값2:
      키값2일 때 실행할 블록문
    break;

    case 키값2:
      키값3일 때 실행할 블록문
    break;

    default:
      일치하지 않을 때 실행할 블록문
    break;      
}  
*/

/* let gender = Number(prompt('성별의 값(1,2,3,4)을 입력하세요'));  //문자 데이터를 숫자 데이터로 전환시켜야 함.

 switch(gender) {
  case 1: // 만약 위의 Number를 사용하지 않는다면 "1" 문자로 전환하면 됨.
   document.write("남성입니다.");
   break;

  case 2:
   document.write("여성입니다.");
   break; 

  case 3:
   document.write("남성입니다.");
   break; 

  case 4:
   document.write("여성입니다.");
   break; 

  default:
   document.write("값이 잘못 입력되었습니다.")   
   break;
} */

/* let gender = Number(prompt('성별의 값(1,2,3,4)을 입력하세요'));
switch(gender) {
  case 1: // 만약 위의 Number를 사용하지 않는다면 "1" 문자로 전환하면 됨.
  case 3:
   document.write("남성입니다.");
   break;

  case 2:
  case 4:
   document.write("여성입니다.");
   break; 

  default:
   document.write("값이 잘못 입력되었습니다.")   
   break;
} */

// 반복문 : 조건이 참인 경우 블록문을 반복 실행
// for(변수선언;종료 조건; 변수증감) 
// 단항산술연산자 - i++ / ++i / i-- / --i   +i,-i
// 대입연산자 : = 
// 복합대입연산자 " x += y --> x에 x+y를 대입 x = x + y"
// x-=y, *=,/=, %=

/* for(let i = 1; i < 6; i++) {
  document.write(i + '<br>');
} 


for(let i = 5; i > 0; i--) {
  document.write(i + '<br>');
} */

/* document.write(1+'<br>');
document.write(2+'<br>');
document.write(3+'<br>');
document.write(4+'<br>');
document.write(5+'<br>'); */

/* for(let i = 1; i < 5; i++) {
  document.write(i + '<br>');
} */

/* while(조건식) { 

} 조건식이 참일 동안 실행

  do {
    블록문(무조건 1번씩 실행함.)
  } while(조건식)

} */

/*
let num =1;
while(num<=5) {
  document.write(num + '<br>')
  num++;
}

do{
  document.write("무조건 1번 실행"+'<br>');
} while(false);

// for문 중첩
for(let i = 0; i <2; i++) {
  document.write(`i: ${i}` + '<br>');
  for(let k = 0; k<2;k++) {
    document.write(`k: ${k}` + '<br>')
  }
}


for(let a = 1; a <=3; a++) {
  for(let b=1; b <=9; b++) {
  document.write(a +'x' + b + '=' + a*b + '<br>');
  }
}  

for(let c= 0; c <100; c++) {
  if(c % 3 == 0) continue; //컨티뉴는 어떤 조건을 만나면 그 조건을 뛰어넘는 역할. 반복문을 건너뛸 때.
  if(c >10) break; //반복문 또는 루프를 종료할 때 사용.
  document.write(c + '<br>');
} */

// 문제1) 1부터 시작해서 1000까지의 짝수의 개수는 몇개인가?
// 출력 : 짝수의 개수는 000개입니다.
 /* let count = 0;
  for(let i =1; i <=1000; i++) {
    if(i % 2 === 0) count++; {
    } document.write('짝수의 개수는 ' + count + '개 입니다.');
    
  }
//문제2) 1부터 100까지의 합을 출력하는 코드를 작성해보세요.
  let sum = 0;
  for(let i=1; i <=100; i++){
    sum += i;
  }
  document.write('합계는 '+ sum);


//두 문제를 메일로 본문의 코드만 보내주면 됨. 

for(d=1; d ==1000; d++) {
  if(d % 2 == 0) {
    document.write( `짝수의 개수는 ${d} 입니다.`);
  }
} */

// for문과 배열

/* const fruit = ['apple', 'peach', 'grape', 'cherry'];

document.write(fruit[1] + '<br><br>'); 

for( let f = 0; f < fruit.length; f++) {
  document.write(fruit[f] + '<br><br>');
}
// 내가 배열 범위를 모르면 'f < 3' 대신 'f < fruit.length' 형태로 해도 됨.

// for ..in 
//for(변수 in 배열/객체){ }
for(let i in fruit) {
  document.write(i+ ':' + fruit[i] + '<br>'); */
  


let obj = {name:'이정원', age: 29, weight:90};
for(let c in obj) {
  document.write(c +' : ' + obj[c]);
    }
