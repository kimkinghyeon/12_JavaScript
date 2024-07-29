// 배열 메소드
const arr = [];
// 배열의 생성자 함수 = Array
console.log(arr.constructor === Array);
// 배열의 프로토타입 객첵 = Array.prototype
console.log(Object.getPrototypeOf(arr) === Array.prototype);

/* 
Array.prototype.idexOf
- indexOf : 배열에서 요소가 위치하는 인덱스를 리턴
- lastIndexOf : 배열의 요소가 위치한 마지막 인덱스를 리턴
- includes : 배열에 해당 요소 포함 여부를 리턴
 */
const fooList = ['갈비','냉면','양념게장','감자샐러드','갈비']
console.log('========== indexOf  ==========');
console.log(`foodList.indexOf('갈비') : ${fooList.indexOf('갈비')}`); // index : 0
// 중복값 중 두번째 위치반환 (같은 값을 찾는 다면 아래와 같이 0:갈비 1:갈비 중 2번째 갈비를 찾는다 그렇다면 인덱스 4번에 있는 갈비를 반환 )
console.log(`foodList.indexOf('갈비') : ${fooList.indexOf('갈비',1)}`); // index : 4
console.log(`foodList.indexOf('갈비') : ${fooList.indexOf('삼겹살')}`); // index : -1

console.log('========== lastIndexOf  ==========');

// 배열을 끝에서 부터 값을 찾아옴 없는 값은 -1
console.log(`foodList.lastIndexOf('갈비') : ${fooList.lastIndexOf('갈비')}`); // index : 4
console.log(`foodList.lastIndexOf('갈비') : ${fooList.lastIndexOf('갈비',1)}`); // index : 0
console.log(`foodList.lastIndexOf('갈비') : ${fooList.indexOf('삼겹살')}`); // index : -1

console.log('========== includes  ==========');

// 배열안에 값을 포함하고 있는지를 블리언 값으로 반환
console.log(`foodList.includes('갈비') : ${fooList.includes('갈비')}`); // true
console.log(`foodList.includes('갈비') : ${fooList.includes('삼겹살')}`); // false

/* 
Array.prototype.psuh : 배열의 맨 뒤에 요소를 추가
Array.prototype.pop : 배열의 맨 뒤에 요소를 제거
*/

console.log('========== push ==========');

const chineseFood = ['짜장면','짬뽕','깐풍기','탕수육']
console.log(`push 전 chineseFood : ${chineseFood}`);
// chineseFood.push('양장피');
// chineseFood.push('마라샹궈');
chineseFood.push('마라샹궈','양장피');
console.log(`push 후 chineseFood : ${chineseFood}`);

console.log('========== pop  ==========');
// 배열의 마지막 값을 갖고오지만 배열에서는 삭제됨
console.log(`chineseFood pop : ${chineseFood.pop()} `); // 양장피 out
console.log(`chineseFood pop : ${chineseFood.pop()} `); // 마라샹궈 out
console.log(`chineseFood pop : ${chineseFood.pop()} `); // 탕수육 out
console.log(`pop 후 chineseFood : ${chineseFood}`);

// Array.prototype.unshift : 배열의 맨 앞에 요소 추가
// Array.prototype.shift : 배열의 맨 앞에 요소 제거 후 반환

const chickenList =['양념치킨','후라이드치킨','파닭']
console.log('========== unshift  ==========');
console.log(`unshift 전 chickenLust : ${chickenList}`);
chickenList.unshift('간장치킨');
chickenList.unshift('마늘치킨');
console.log(`unshift 후 chickenLust : ${chickenList}`);
console.log('========== shift  ==========');
console.log(`chickenLust.shift : ${chickenList.shift()}`); // 마늘치킨 out
console.log(`chickenLust.shift : ${chickenList.shift()}`); // 간장치킨 out
console.log(`chickenLust.shift : ${chickenList.shift()}`); // 양념치킨 out
console.log(`shift 후 chickenLust : ${chickenList}`);

console.log('========== concat  ==========');
// Array.prototype.concat : 두개 이상의 배열을 결합하는 기능
const idol1 =['아이브','오마이걸']
const idol2 =['트와이스','레드벨벳']
const idol3 =['블랙핑크','에스파']

// 배열명.concat(배열명,배열명2,...)
const mix = idol1.concat(idol2); // idol1 기준으로 합쳐짐
console.log(mix);
const mix2 = idol2.concat(idol3,idol1); // idol2 기준으로 합쳐짐
console.log(mix2);

console.log('========== slice  ==========');
// Array.prototype.slice : 배열의 요소 선택 잘라내기
const front = ['HTML','JAVA','CSS','JQuery','JavaScipt']
// slice(시작 인덱스.종료 인덱스)
console.log(`front.slice(1,3) : ${front.slice(1,3)}`);
console.log(`front.slice : ${front}`);

console.log('========== join  ==========');
// Array.prototype.join : 배열을 구분자로 결합하여 문자열로 반환
const snackList=['사탕','초콜릿','껌','과자']
console.log(`${snackList.join()}`); // 구분자 ','
console.log(`${snackList.join('/')}`); // 구분자 '/'

console.log('==========  reverse  ==========');
// Array.prototype.reverse : 배열의 순서를 뒤집음
console.log(`[1,2,3,4,5].reverse : ${[1,2,3,4,5].reverse()}`);





















