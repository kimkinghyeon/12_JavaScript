// 1. 화살표 함수는 this 를 가지지 않는다.
// => 화살표함수는 화살표 함수가 있는 위치의 this 를 가져온다.
let theater = {
    strore : '강남점',
    titles : ['데드풀과울버린','사랑의 하츄핑', '파일럿','인사이드아웃'],
    // showMovieList(){
    //     this.titles.forEach(
    //         title => console.log(this.strore + ' : ' + title)
    //     );
    // }
    showMovieList(){
        this.titles.forEach(
            function(title){
            console.log(this.strore + ' : ' + title)
            }
        );
    }
}
theater.showMovieList();
// 2. 화살표 함수는 new 와 함께 호출할 수 없다.
// this 가 없기 때문에 생성자 함수로 사용할 수 없다.

let arrowFunc = () => {};
let nomalFunc = function() {};
new nomalFunc(); // 에러가 발생하지않음
// new arrowFunc(); TypeError: arrowFunc is not a constructor

// 생성자 함수로 사용할수없다. -> 객체 생성이 불가능 -> prototype 프로퍼티가 없고,
// -> prototype 생성하지 않음
console.log(arrowFunc.hasOwnProperty('prototype')); // false
console.log(nomalFunc.hasOwnProperty('prototype')); // true

// 3. 화살표함수는 super를 가지지 않는다.
// 화살표 함수는 다른 함수의 인수로 전달되어 롤백함수로 사용되는 경우가 많다.
