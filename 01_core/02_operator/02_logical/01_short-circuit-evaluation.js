/*
    논리 연산자
    || (OR), && (AND), !(NOT)

    단축 평가
    - 표현식을 평가하는 도중 결과가 확정이 된 경우
    - 나머지 과정을 생략한다. ex) A && B -> A 가 false 면 B 는 실행 안 함
*/

// OR 연산의 경우 'apple' 문자열이 Truthy 값이기 때문에
// 뒤에 banana 는 보지도 않고 결정한다.
// 그렇기 때문에 논리 연산의 결과를 결정한 apple 이라는 피연산자를 반환한다.
console.log('apple' || 'banana');
console.log(false || 'banana');
console.log('apple' || false);

console.log('apple' && 'banana');
console.log(false && 'banana');
console.log('apple' && false);