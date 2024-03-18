// 한줄 주석
/* 여러줄 주석 
document.write("안녕하세요");
document.write("외부 파일과 연결");
''와 ""를 넣으면 해당 값은 숫자가 아닌 문자, 문자열이 된다.
var는 키워드 or 예약어라고 함. 최근에 많이 넣는다고 함.
구글 콘솔에서 undefined 라고 나오는 이유는 입력한 값이 정의되지 않았다는 뜻임
문자데이터 정의할 때는 큰 따옴표 or 작은 따옴표 해도 무방
%: 나눈 나머지 값, !: 반대(현재 값을 뒤집는 것)
문자 데이터 값을 비교할 때 ===로 비교 가능 console.log("10" === 10 or "A")/false, console.log("10" === "10")/true;;
*/


var num1; //선언
num1 = 30 // 할당

var num2 = 50; // 초기화(할당+선언, 동시에 하는 것)
var total = num1 + num2;
document.write("total = "+ total);

// var, let(변수 선언시 사용하는 키워드) const(상수선언할 때 사용하는 키워드) if with :모두 키워드라고 함.
//키워드: JS 내에서 어떤 역할이나 기능이 정해진 단어들, 또는 예약어라고 부름
//num1, num2, name 같은 키위드 뒤에서 오는 단어는 식별자라고 함.
// +, -, = 같은 기호는 연산자라고 함. 
// document.write("total = "+ total); 같은 단어는 표현식이라고 함. 


const name = "이정원";//("개명 전까지 변하지 않는 이름으로 선언하는 const = 상수")