var 이름 = "김동엽";
var 나이 = 27;
var 출생지역 = "강릉";
var 노래 = { 제목: "노래", 가수: "자이언티" };
var 테스트 = {
    member: ['kim', 'park'],
    days: 30,
    started: true,
};
var user = "kim";
var age = undefined;
var married = false;
var 철수 = [user, age, married];
var 학교 = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John'
};
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];
function 함수(x) {
    if (x !== undefined) {
        console.log(x * 2);
    }
}
function 출력(이름) {
    if (이름 !== undefined) {
        return "\uC548\uB155\uD558\uC138\uC694 ".concat(이름);
    }
    else {
        return "이름이 없습니디";
    }
}
function 자릿수(숫자) {
    // let num:number = 0;
    // if(typeof(숫자)==="string"){
    //   num = 숫자.split("").length;
    // }else{
    //   if(숫자<0){
    //     숫자 = 숫자 * -1;
    //   }
    //   do{
    //     num++;
    //     숫자 = 숫자/10;
    //   }while(숫자>1)
    // }
    // return num;
    return 숫자.toString().length;
}
function 결혼여부(소득, 집보유, 매력점수) {
    var num = 0;
    if (매력점수 === "상") {
        num += 100;
    }
    if (집보유) {
        num += 500;
    }
    num += 소득;
    if (num >= 600) {
        return "결혼가능";
    }
}
function 내함수(x) {
    var arr = [];
    arr[0] = x;
    // assertion 문법은 Narrowing 할때 씁니다.
    // 타입을 변경하는 문법이 아님.
    // 무슨 타입이 들어올지 100% 확실할 때 사용
    // 가능하면 if문으로 typeof 사용하기, as문법은 타입에러 체크 x
    // <number> x = 옛날 as 문법
}
function setNum(num) {
    var arr = [];
    for (var _i = 0, num_1 = num; _i < num_1.length; _i++) {
        var i = num_1[_i];
        if (typeof (i) === "string") {
            arr.push(Number(i));
        }
        else {
            arr.push(i);
        }
    }
    return arr;
}
// console.log(setNum([1,2,"3","4", 5]));
function LastPang(sam) {
    if (typeof (sam.subject) === "object") {
        return sam.subject[sam.subject.length - 1];
    }
    else if (typeof (sam.subject) === "string") {
        return sam.subject;
    }
    else {
        return "없음";
    }
}
var 철수쌤 = { subject: 'math' };
var 영희쌤 = { subject: ['science', 'english'] };
var 민수쌤 = { subject: ['science', 'art', 'korean'] };
var 동물 = { name: "name", age: 20 };
var 여친 = {
    name: "은진"
};
var position = { x: 1, y: 1, z: 1 };
var test2 = {
    color: "red",
    size: 10,
    position: [1, 2, 3]
};
var jame = {
    name: "kim",
    phone: 123,
    email: "kk",
    adult: true
};
var 바보 = "바보";
var 접니다;
접니다 = "솔로";
function 함수2(a) {
    return 1;
}
함수2("hello");
function 짱깬(input) {
    return [];
}
짱깬("가위");
var 자료 = {
    name: "kim"
};
// object value값을 그대로 타입으로 지정해줌
// object의 속성들에 모두 readonly를 붙여줌
function 내함수2(a) {
}
내함수2(자료.name);
var 함수3 = function () {
    return 1;
};
var 회원정보 = {
    name: "kim",
    age: 30,
    plusOne: function (a) {
        return a + 1;
    },
    changeName: function () {
        console.log("안녕");
    }
};
var cutZero = function (a) {
    if (a[0] === "0") {
        a.slice(0, 1);
    }
    return a;
};
var removeDash = function (a) {
    a = a.replace(/-/gi, "");
    return parseInt(a);
};
var 만들함수 = function (a, b, c) {
    console.log(c(b(a)));
};
만들함수("010-1111-2222", cutZero, removeDash);
var 제목 = document.querySelector("#title");
// if(제목 != null)
// if(제목 instanceof Element){
if ((제목 === null || 제목 === void 0 ? void 0 : 제목.innerHTML) != undefined) {
    제목.innerHTML = "반가워요";
}
var 링크 = document.querySelector('.link');
if (링크 instanceof HTMLAnchorElement) {
    링크.href = "https://kakao.com";
}
// 상세히 정의되어있음
// HTMLHeadingElement
// HTMLAnchorElement
// HTMLButtonElement
var 버튼 = document.querySelector("#button");
버튼 === null || 버튼 === void 0 ? void 0 : 버튼.addEventListener("click", function () {
    var 이미지 = document.querySelector("#image");
    if (이미지 instanceof HTMLImageElement) {
        이미지.src = "new.jpg";
    }
});
// if(버튼 instanceof HTMLButtonElement){
//   버튼.addEventListener("click", ()=>{})
// }
var 네이버 = document.querySelectorAll(".naver");
if (네이버 instanceof NodeList) {
    네이버.forEach(function (item) {
        if (item instanceof HTMLAnchorElement) {
            item.href = "https://kakao.com";
        }
    });
}
// for (let i = 0; i < 3; i++){
//   let a = 네이버[i];
//   if (a instanceof HTMLAnchorElement){
//     a.href = 'https://kakao.com'
//   }
// } 
// if(네이버 instanceof HTMLAnchorElement){
//   네이버.href = "https://kakao.com";
// }
var Person = /** @class */ (function () {
    function Person(a) {
        this.data = 0;
        this.name = a;
    }
    Person.prototype.함수 = function (a) {
        console.log("안녕" + a);
    };
    return Person;
}());
var 사람1 = new Person("kim");
var 사람2 = new Person("park");
console.log(사람1);
console.log(사람2);
사람1.함수("안녕");
var Car = /** @class */ (function () {
    function Car(a, b) {
        this.model = a;
        this.price = b;
    }
    Car.prototype.tax = function () {
        return this.price * 0.1;
    };
    return Car;
}());
var car1 = new Car("sonata", 3000);
console.log(car1);
console.log(car1.tax());
var Word = /** @class */ (function () {
    function Word() {
        var a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            a[_i] = arguments[_i];
        }
        this.num = [];
        this.str = [];
        //   a.forEach((x)=>{
        //     if(typeof(x)==="number"){
        //       this.num.push(x);
        //     }else{
        //       this.str.push(x);
        //     }
        //   })
        for (var _a = 0, a_1 = a; _a < a_1.length; _a++) {
            var x = a_1[_a];
            if (typeof (x) === "number") {
                this.num.push(x);
            }
            else {
                this.str.push(x);
            }
        }
    }
    return Word;
}());
var obj = new Word('kim', 3, 5, 'park', 'moon');
console.log(obj.num);
console.log(obj.str);
var 네모 = { color: "red", width: 100 };
;
;
;
var 학생 = { name: "kim", score: 10 };
var 선생 = { name: "kim", age: 20, score: 10 };
var 상품 = { brand: 'Samsung', serialNumber: 1360, model: ['TV', 'phone'] };
var 장바구니 = [{ product: '청소기', price: 7000 }, { product: '삼다수', price: 800 }];
var 물건 = { product: '청소기', price: 7000, card: false };
var 계산 = {
    plus: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        if (a >= b)
            return a - b;
        else
            return b - a;
    }
};
