/* 
flag의 종류
i(ignore case) : 대소문자를 구별하지 않고 패턴 검색
g(Global) : 대상 문자열 내에서 패턴과 일치하는 모든 문자열을 전역 검색
m(Multi line) : 문자열의 행이 바뀌더라도 패턴 검색을 계속
flag는 옵션이므로 선택적으로 사용할 수 있고, 순서와 상관 없이 하나 이상의 플래그를 동시에 설정할 수 있다.
*/

console.log('========== flag  ==========');


let target ='Java JavaScript'

console.log(target.match(/VA/));
console.log(target.match(/VA/i));
console.log(target.match(/VA/ig));

/* 
s(dotAll) : 점(.) 문자가 개행 문자를 포함한 모든 문자를 매치하도록 한다.
u(unicode) : 유니코드 전체를 지원하여 유니코드 코드 포인트를 정확히 매치할 수 있게 한다.
y(sticky) : 현재 위치에서만 검색을 수행하며, lastIndex 속성에서 지정한 위치부터 검색을 시작한다. 일치하지 않으면 실패한다.
*/

/* 
pattern
특별한 의미를 가지는 메타 문자 또는 기호로 표현할 수 있다.
*/
console.log('========== pattern  ==========');
// . : 임의의 문자열
target = 'abcdefg';
// 임의의 2자리 문자열 전역검색
console.log(target.match(/../g)); 
// [ 'ab', 'cd', 'ef' ] g 는 한자리 수로만 나오기 때문에 제외 g 다음 값도 있다면 [ 'ab', 'cd', 'ef' ,'g.'] 가 나오겠지?
console.log(target.match(/.../g));

console.log('========== {m,n}  ==========');
// {m,n} : 최소 m 번 최대 n 번 반복되는 문자열
target = ' a aa aaa b bb bbb ab aab abb';
console.log(target.match(/a{2,3}/g)); // a 가 최소 2~3번 반복디는 문자
console.log(target.match(/b{2}/g)); // b 가 2번반복디는 문자
console.log(target.match(/b{2,}/g)); // b 가 최소 2이상 반복디는 문자

console.log('========== + ==========');
// + 는 {1,} = 최소 1번 이상 반복
console.log(target.match(/b+/g)); 

console.log('========== ? ==========');
// ? : 앞선 패턴이 최대 한번 (0번 포함) 이상 반복되는 문자열
target = 'soul seoul'
console.log(target.match(/se?oul/g));
// s 를 찾고 다음 e가 최대 한번(0번포함) 이상 반복되고 뒤에 oul이 이어지는 문자열 검색
// e 가 있던 없던 즉 soul 인지 seoul 인지 상관 안하고 찾음

console.log('========== | ==========');
// | : or 
target = 'aa bb cc dd 123 456 _@';
console.log(target.match(/a+|b+/g));
console.log(target.match(/a|b/g));
// [] 내의 문자는 or 로 동작 = a or b or c
console.log(target.match(/[abc]/g));
// - 범위를 지정 [ 'aa', 'bb', 'cc', 'dd' ]
console.log(target.match(/[a-z]+/g));
// 대소문자 범위
console.log(target.match(/[A-Za-z]+/g));
// 숫자범위
console.log(target.match(/[0-9]+/g));

console.log('========== \d,\D  ==========');

// \d : 숫자
// \D : 숫자가 아닌 문자
console.log(target.match(/\d+/g));
console.log(target.match(/\D+/g));

console.log('========== \w\W  ==========');
// \w : 알파벳, 숫자, 언더스코어 
// \W : \w 제외한 나머지
console.log(target.match(/\w+/g));
console.log(target.match(/\W+/g));

console.log('========== [...] 내의 ^  ==========');

// [...] 내의 ^ : NOT
console.log(target.match(/[^0-9]+/g)); // 숫자가 아닌
console.log(target.match(/[^a-z]+/g)); // 영어소문자가 아닌

console.log('========== 시작위치와 마지막 위치  ==========');
// 시작위치 검색 : [...] 밖의 ^
// $ : 마지막 위치 검색
target = 'https://www.google.com';
console.log(/^https/.test(target)); // https 로 시작하는지
console.log(/com$/.test(target)); // com 으로 끝나는지




















