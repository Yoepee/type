var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// 타입도 import 가능
// html에서 script를 불러와서 사용했지만, 이렇게 사용하면 이름겹침 버그 감소
///<reference path="./a"/> //옛날 임폴트 문법
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
var _a = { student: true, ages: 20 }, student = _a.student, ages = _a.ages;
var 오브젝트 = { student: true, ages: 20 };
function 함수4(_a) {
    var student = _a.student, ages = _a.ages;
    console.log(student, ages);
}
함수4(오브젝트);
function 함수5() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    a.sort(function (a, b) { return b - a; });
    return a[0];
}
function 함수6(_a) {
    var user = _a.user, comment = _a.comment, admin = _a.admin;
    console.log(user, comment, admin);
}
함수6({ user: 'kim', comment: [3, 5, 4], admin: false });
function 함수7(_a) {
    var a = _a[0], b = _a[1], c = _a[2];
    console.log(a, b, c);
}
함수7([40, 'wine', false]);
function 함수8(a) {
    if (a && typeof a === "string") {
    }
}
function 함수9(animal) {
    if ("swim" in animal) {
        // 요소 in 오브젝트
        animal.swim;
    }
    else {
    }
}
function 함수10(x) {
    if (x.wheel === "4개") {
    }
}
// never타입은 대부분 사용 x
// never타입이 에러가 나는 이유정도만 알고있으면 좋음
function 함수11() {
    // return이 없어야함
    // endpoint가 없어야 함
    // 모든함수는 return undefind를 기본값으로 가짐
    // throw new Error(); // 강제로 함수 중단, 강제 에러
    while (true) {
        // 무한루프라 끝나지않음
    }
}
// never타입이 등장하는 경우
// 뭔가 이상한 narrowing
// 변수할당식 함수 표현식
function 함수12(param) {
    if (typeof param == "string") {
        console.log(param);
    }
    else {
        console.log(param); //타입이 never임
    }
}
var 함수13 = function () {
    throw new Error();
};
var User2 = /** @class */ (function () {
    function User2(a) {
        this.familyName = "kim";
        this.name = a + this.familyName;
    }
    User2.prototype.이름변경 = function () {
        this.familyName = "park";
    };
    return User2;
}());
var 유저1 = new User2("minsoo");
// 유저1.name = "안녕"
유저1.이름변경();
console.log(유저1);
var Person1 = /** @class */ (function () {
    function Person1(name, age) {
        this.name = name;
        this.age = age;
        name;
        age;
    }
    return Person1;
}());
var 자식 = new Person1("kim", 10);
console.log(자식);
// protected = private + 확장
// 클래스끼리 공유하고 싶다
// static 부모에서만 쓰고싶을 때
// static 은 public, private, protected 랑 같이 사용가능
var User3 = /** @class */ (function () {
    function User3() {
        this.y = 20;
    }
    // protected x = 10;
    User3.x = 10;
    return User3;
}());
var NewUser = /** @class */ (function (_super) {
    __extends(NewUser, _super);
    function NewUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewUser.prototype.doThis = function () {
        this.y = 20;
    };
    return NewUser;
}(User3));
var 유저2 = new NewUser();
// 스테틱은 본인자체적으로 사용하기 위해 동작
var User4 = /** @class */ (function () {
    function User4() {
        this.z = 30; //외부에서 접근이 제한되나 확장된 개념이라 상속된 클래스에서도 사용가능
    }
    User4.x = 10; // 외부에서 접근하지못하고 수정도 불가, User자체에서만 사용가능
    User4.y = 20; // 외부에서 접근 가능하며, User자체에서만 사용
    return User4;
}());
// 1. 필드값은 원래는 모든 User의 자식들에게 물려주는 속성이지만 
// x와 y에는 static 키워드가 붙었기 때문에 User.x 이런 식으로만 접근해서 쓸 수 있습니다.
// User의 자식들은 x와 y를 쓸 수 없습니다.
// 2. private static x는 class 내부에서만 수정가능합니다. 
// 3. public static y는 class 내부 외부 상관없이 수정가능합니다. public 키워드 지워도 똑같이 동작할 듯 
// 4. protected z는 private 키워드와 유사하게 class 내부에서만 사용이 가능한데 
// 약간 범위가 넓어서 extends로 복사한 class 내부에서도 사용할 수 있습니다. 
var User5 = /** @class */ (function () {
    function User5() {
    }
    User5.addOne = function (a) {
        this.x = this.x + a;
    };
    User5.printX = function () {
        console.log(this.x);
    };
    User5.x = 10;
    User5.y = 20;
    return User5;
}());
User5.addOne(3); //이렇게 하면 x가 3 더해져야함
User5.addOne(4); //이렇게 하면 x가 4 더해져야함
User5.printX(); //이렇게 하면 콘솔창에 x값이 출력되어야함
var Square3 = /** @class */ (function () {
    function Square3(width, height, color) {
        this.w1 = width;
        this.h1 = height;
        this.c1 = color;
    }
    Square3.prototype.draw = function () {
        var id = document.getElementById("drawPlace");
        console.log(id);
        if (id instanceof HTMLDivElement) {
            id.innerHTML += "<div style=\"width:".concat(this.w1, "px; height:").concat(this.h1, "px; background:").concat(this.c1, ";top:").concat(Math.random() * 10000 % 400, "px; left:").concat(Math.random() * 10000 % 400, "px;position:absolute;\"></div>");
        }
    };
    return Square3;
}());
var 네모2 = new Square3(30, 30, 'red');
네모2.draw();
네모2.draw();
네모2.draw();
네모2.draw();
네모2.draw();
네모2.draw();
네모2.draw();
네모2.draw();
var test3 = function (a) { console.log(a); };
test3({ a: 10 });
var NameDog;
(function (NameDog) {
    ;
})(NameDog || (NameDog = {}));
// interface Dog2 { name : string };
var dog1 = 'bark';
var dog2 = { name: 'paw' };
function 함수20(x) {
    return x[0];
}
var a = 함수20([4, 2]);
function 함수21(x) {
    // return x.length;
    console.log(x.length);
}
var b = 함수21(["hello", "park"]);
var data = '{"name" : "dog", "age" : 1 }';
function changeAnimal(a) {
    return JSON.parse(a);
}
console.log(changeAnimal(data));
var Person3 = /** @class */ (function () {
    function Person3(a) {
        this.name = a;
    }
    return Person3;
}());
var aa = new Person3('어쩌구');
aa.name; //any 타입이 되었넹 
// tuple type으로 동일한 문법으로 타입생성하기 (깐깐하게보자)
var arr = [1, 2, 3];
var arr2 = __spreadArray([4, 5], arr, true);
var 음식 = ["동서녹차", 4000, true];
var arr3 = ['동서녹차', 4000, true, false, true, true, false, true];
// tuple + rest 파라미터
function 함수22() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    console.log(a);
}
함수22("aaa", true, 1, 2, 3, 4);
// tuple + rest 파라미터
function 함수23() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    var stringAry = [];
    var numberAry = [];
    for (var _a = 0, a_2 = a; _a < a_2.length; _a++) {
        var value = a_2[_a];
        if (typeof value === "string") {
            stringAry.push(value);
        }
        else {
            numberAry.push(value);
        }
    }
    // a.forEach((b)=>{
    //   if (typeof a === 'string') {
    //     result[0].push(b)
    //   } else {
    //     result[1].push(b)
    //   }
    // })
    return [stringAry, numberAry];
}
console.log(함수23('b', 5, 6, 8, 'a'));
export {};
