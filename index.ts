import {이름2, 나이2, 네임스페이스, Car3, Bike3, InOb} from "./a";
// 타입도 import 가능
// html에서 script를 불러와서 사용했지만, 이렇게 사용하면 이름겹침 버그 감소
///<reference path="./a"/> //옛날 임폴트 문법
let 이름: string = "김동엽";
let 나이: number = 27;
let 출생지역: string = "강릉";

let 노래: { 제목: string, 가수: string | number } = { 제목: "노래", 가수: "자이언티" };

type 오브젝트 = {
  member: string[],
  days: number,
  started: boolean
}

let 테스트: 오브젝트 = {
  member: ['kim', 'park'],
  days: 30,
  started: true,
}

let user: string = "kim";
let age: undefined | number = undefined;
let married: boolean = false;
let 철수: (string | undefined | number | boolean)[] = [user, age, married];

type 학교타입 = {
  score: (number | boolean)[],
  teacher: string,
  friend: string | (string[])
}

let 학교: 학교타입 = {
  score: [100, 97, 84],
  teacher: 'Phil',
  friend: 'John'
}
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher]

function 함수(x?: number): void {
  if (x !== undefined) {
    console.log(x * 2)
  }
}

function 출력(이름?: string): string {
  if (이름 !== undefined) {
    return `안녕하세요 ${이름}`
  } else {
    return "이름이 없습니디"
  }
}

function 자릿수(숫자: string | number): number {
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

function 결혼여부(소득: number, 집보유: boolean, 매력점수: string): string | void {
  let num: number = 0;
  if (매력점수 === "상") {
    num += 100;
  }
  if (집보유) {
    num += 500
  }
  num += 소득;
  if (num >= 600) {
    return "결혼가능"
  }
}

function 내함수(x: string | number) {
  let arr: number[] = [];
  arr[0] = x as number;
  // assertion 문법은 Narrowing 할때 씁니다.
  // 타입을 변경하는 문법이 아님.
  // 무슨 타입이 들어올지 100% 확실할 때 사용
  // 가능하면 if문으로 typeof 사용하기, as문법은 타입에러 체크 x
  // <number> x = 옛날 as 문법
}

function setNum(num: (number | string)[]) {
  let arr: number[] = [];
  for (let i of num) {
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
function LastPang(sam: { subject: string | string[] }): string {
  if (typeof (sam.subject) === "object") {
    return sam.subject[sam.subject.length - 1];
  }
  else if (typeof (sam.subject) === "string") {
    return sam.subject;
  }
  else {
    return "없음"
  }
}

let 철수쌤 = { subject: 'math' }
let 영희쌤 = { subject: ['science', 'english'] }
let 민수쌤 = { subject: ['science', 'art', 'korean'] }

// console.log(LastPang(철수쌤));
// console.log(LastPang(영희쌤));
// console.log(LastPang(민수쌤));
// console.log(LastPang({ hello : 'hi' }));

type 이상한 = string | number | undefined;
type 방식 = { name: string, age: number };

type PositionX = { x: number, y: number };
type PositionY = { y: number, z: number };

type NewPosition = PositionX & PositionY;

let 동물: 방식 = { name: "name", age: 20 };

type Girlfriend = {
  readonly name: string
}

const 여친: Girlfriend = {
  name: "은진"
}

let position: NewPosition = { x: 1, y: 1, z: 1 }

type 색깔 = {
  color?: string,
  size: number,
  readonly position: number[]
};

let test2: 색깔 = {
  color: "red",
  size: 10,
  position: [1, 2, 3]
}

type user1 = {
  name: string,
  phone: number,
  email: string
}

type Child = {
  adult: boolean
};

type Check = user1 & Child;
let jame: Check = {
  name: "kim",
  phone: 123,
  email: "kk",
  adult: true
}
let 바보: string = "바보"

let 접니다: "대머리" | "솔로";
접니다 = "솔로"

function 함수2(a: "hello"): 1 | 0 {
  return 1;
}
함수2("hello");
type Rsp = ("가위" | "바위" | "보")

function 짱깬(input: Rsp): Rsp[] {
  return []
}

짱깬("가위");

var 자료 = {
  name: "kim"
} as const
// object value값을 그대로 타입으로 지정해줌
// object의 속성들에 모두 readonly를 붙여줌

function 내함수2(a: "kim") {

}
내함수2(자료.name);

type 함수타입 = (a: string) => number;

const 함수3: 함수타입 = () => {
  return 1;
}
type UserInfo = {
  name: string,
  age?: number,
  plusOne(a: number): number,
  changeName: () => void
}
let 회원정보: UserInfo = {
  name: "kim",
  age: 30,
  plusOne(a) {
    return a + 1;
  },
  changeName: () => {
    console.log("안녕");
  }
}
// console.log(회원정보.plusOne(10));
// console.log(회원정보.changeName);

type Zero = (x: string) => string;
type Dash = (x: string) => number;

const cutZero: Zero = (a) => {
  if (a[0] === "0") {
    a.slice(0, 1);
  }
  return a;
}

const removeDash: Dash = (a) => {
  a = a.replace(/-/gi, "");
  return parseInt(a);
}
// console.log(removeDash("01037912975"));
// console.log(removeDash("010-3791-2975"));

type Zzambong = (a: string, b: Zero, c: Dash) => void;

const 만들함수: Zzambong = function (a, b, c) {
  console.log(c(b(a)))
};
만들함수("010-1111-2222", cutZero, removeDash);

let 제목 = document.querySelector("#title");
// if(제목 != null)
// if(제목 instanceof Element){
if (제목?.innerHTML != undefined) {
  제목.innerHTML = "반가워요";
}

let 링크 = document.querySelector('.link');
if (링크 instanceof HTMLAnchorElement) {
  링크.href = "https://kakao.com";
}
// 상세히 정의되어있음
// HTMLHeadingElement
// HTMLAnchorElement
// HTMLButtonElement
let 버튼 = document.querySelector("#button");
버튼?.addEventListener("click", () => {
  let 이미지 = document.querySelector("#image");
  if (이미지 instanceof HTMLImageElement) {
    이미지.src = "new.jpg";
  }
})
// if(버튼 instanceof HTMLButtonElement){
//   버튼.addEventListener("click", ()=>{})
// }
let 네이버 = document.querySelectorAll(".naver");
if (네이버 instanceof NodeList) {
  네이버.forEach((item) => {
    if (item instanceof HTMLAnchorElement) {
      item.href = "https://kakao.com";
    }
  })
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


class Person {
  name: string;
  data: number = 0;
  constructor(a: string) {
    this.name = a;
  }
  함수(a: string) {
    console.log("안녕" + a);
  }
}
let 사람1 = new Person("kim");
let 사람2 = new Person("park");

console.log(사람1)
console.log(사람2)
사람1.함수("안녕");

class Car {
  model: string;
  price: number;
  constructor(a: string, b: number) {
    this.model = a;
    this.price = b;
  }
  tax(): number {
    return this.price * 0.1;
  }
}

let car1 = new Car("sonata", 3000);
console.log(car1);
console.log(car1.tax());

class Word {
  num: number[] = [];
  str: string[] = [];
  constructor(...a: (string | number)[]) {
    //   a.forEach((x)=>{
    //     if(typeof(x)==="number"){
    //       this.num.push(x);
    //     }else{
    //       this.str.push(x);
    //     }
    //   })
    for (let x of a) {
      if (typeof (x) === "number") {
        this.num.push(x);
      } else {
        this.str.push(x);
      }
    }
  }
}
let obj = new Word('kim', 3, 5, 'park', 'moon');
console.log(obj.num);
console.log(obj.str);

type Square = {color:string, width:number}
interface Square2{color:string, width:number}

let 네모 :Square2= {color: "red", width:100}
interface Student{name:string};
interface Student{score:number};
interface Sam extends Student{ age:number};


let 학생 :Student={name:"kim", score:10};
let 선생 :Sam = {name:"kim", age:20, score:10};

interface Product {
  brand:string,
  serialNumber:number,
  model:string[]
}
interface Cart {
  product:string,
  price:number
}

let 상품:Product = { brand : 'Samsung', serialNumber : 1360, model : ['TV', 'phone'] }

let 장바구니:Cart[] = [ { product : '청소기', price : 7000 }, { product : '삼다수', price : 800 } ] 

interface UseCard extends Cart{
  card:false
}
let 물건:UseCard = { product : '청소기', price : 7000, card : false }

interface Carculation{
  // plus(a:number,b:number):number;
  // minus(a:number,b:number):number;
  plus : (a:number, b:number) => number,
  minus : (a:number, b:number) => number
}

let 계산:Carculation = {
  plus(a,b){
    return a+b; 
  },
  minus(a,b){
    if(a>=b)
      return a-b;
    else
      return b-a;
  }
}

let {student, ages} = {student:true, ages:20};
let 오브젝트 = {student:true, ages:20};

function 함수4({student, ages}:{student:boolean, ages:number}){
  console.log(student, ages)
}
함수4(오브젝트);

function 함수5(...a:number[]):number{
  a.sort((a,b)=>b-a);
  return a[0];
}
interface Fsix{
  user:string,
  comment:number[],
  admin:boolean
}
function 함수6({user,comment,admin}:Fsix):void{
  console.log(user, comment, admin)
}
함수6( { user : 'kim', comment : [3,5,4], admin : false } )

function 함수7([a,b,c]:(string|number|boolean)[]):void{
  console.log(a,b,c);
}

함수7( [40, 'wine', false] );

function 함수8(a : string | undefined){
  if(a && typeof a === "string"){

  }
}

type Fish = {swim:string};
type Bird = {fly:string};

function 함수9(animal : Fish | Bird){
  if("swim" in animal){
    // 요소 in 오브젝트
    animal.swim
  }else{

  }
}
// 오브젝트 instanceof 부모클래스
// let 날짜 = new Date();
// if(날짜 instanceof Date){

// }
type Car2 = {
  wheel : "4개",
  color : string
}
type Bike = {
  wheel : "2개",
  color : string
}

function 함수10(x:Car2|Bike){
  if(x.wheel === "4개"){

  }
}
// never타입은 대부분 사용 x
// never타입이 에러가 나는 이유정도만 알고있으면 좋음
function 함수11():never{
  // return이 없어야함
  // endpoint가 없어야 함
  // 모든함수는 return undefind를 기본값으로 가짐
  // throw new Error(); // 강제로 함수 중단, 강제 에러
  while(true){
    // 무한루프라 끝나지않음
  }
}
// never타입이 등장하는 경우
// 뭔가 이상한 narrowing
// 변수할당식 함수 표현식

function 함수12(param:string){
  if(typeof param == "string"){
    console.log(param);
  }else{
    console.log(param);//타입이 never임
  }
}

let 함수13 = function(){
  throw new Error();
}

class User2{
  // 디펄트
  // public name = "kim";
  // 외부접근 x private
  // private name = "kim";
  name :string
  private familyName :string = "kim"
  constructor(a:string){
    this.name=a + this.familyName;
  }
  이름변경(){
    this.familyName="park";
  }
}

let 유저1 = new User2("minsoo");
// 유저1.name = "안녕"
유저1.이름변경()
console.log(유저1)

class Person1{
  constructor(public name :string, public age:number){
    name;
    age;
  }
}
let 자식 = new Person1("kim",10);
console.log(자식)

// protected = private + 확장
// 클래스끼리 공유하고 싶다
// static 부모에서만 쓰고싶을 때
// static 은 public, private, protected 랑 같이 사용가능
class User3{
  // protected x = 10;
  static x = 10;
  y=20;
}

class NewUser extends User3{
  doThis(){
    this.y = 20;
  }
}
 
let 유저2 = new NewUser();
// 스테틱은 본인자체적으로 사용하기 위해 동작
class User4 {
  private static x = 10; // 외부에서 접근하지못하고 수정도 불가, User자체에서만 사용가능
  public static y = 20; // 외부에서 접근 가능하며, User자체에서만 사용
  protected z = 30; //외부에서 접근이 제한되나 확장된 개념이라 상속된 클래스에서도 사용가능
}
// 1. 필드값은 원래는 모든 User의 자식들에게 물려주는 속성이지만 

// x와 y에는 static 키워드가 붙었기 때문에 User.x 이런 식으로만 접근해서 쓸 수 있습니다.

// User의 자식들은 x와 y를 쓸 수 없습니다.

 

// 2. private static x는 class 내부에서만 수정가능합니다. 

 

// 3. public static y는 class 내부 외부 상관없이 수정가능합니다. public 키워드 지워도 똑같이 동작할 듯 

 

// 4. protected z는 private 키워드와 유사하게 class 내부에서만 사용이 가능한데 

// 약간 범위가 넓어서 extends로 복사한 class 내부에서도 사용할 수 있습니다. 

class User5 {
  private static x =10;
  public static y = 20;

  static addOne(a:number){
    this.x = this.x+a;
  }
  static printX():void{
    console.log(this.x);
  }
}

User5.addOne(3) //이렇게 하면 x가 3 더해져야함
User5.addOne(4) //이렇게 하면 x가 4 더해져야함
User5.printX()  //이렇게 하면 콘솔창에 x값이 출력되어야함

class Square3{
  public w1:number;
  public h1:number;
  public c1:string;
  constructor(width:number, height:number, color:string){
    this.w1 = width;
    this.h1 = height;
    this.c1 = color;
  }
  public draw():void{
    let id = document.getElementById("drawPlace");
    console.log(id);
    if(id instanceof HTMLDivElement){
      id.innerHTML+=`<div style="width:${this.w1}px; height:${this.h1}px; background:${this.c1};top:${Math.random()*10000%400}px; left:${Math.random()*10000%400}px;position:absolute;"></div>`
    }
  }
}

let 네모2 = new Square3(30, 30, 'red');
네모2.draw()
네모2.draw()
네모2.draw()
네모2.draw()
네모2.draw()
네모2.draw()
네모2.draw()
네모2.draw()

let test3 : InOb = function(a){console.log(a)}

test3({a:10})

namespace NameDog{
  export interface Dog2 { name : string };
}

type Dog2 = string;
// interface Dog2 { name : string };

let dog1 :Dog2 = 'bark';
let dog2 :NameDog.Dog2 = { name : 'paw' }

function 함수20<MyType2>(x:MyType2[]):MyType2{
  return x[0]
}

let a = 함수20<number>([4,2])

interface LengthCheck{
  length:number;
}

function 함수21<MyType extends LengthCheck>(x:MyType){
  
  // return x.length;
  console.log(x.length)
}

let b = 함수21<string[]>(["hello","park"]);

interface Animal2{
  name:string;
  age:number;
}

let data = '{"name" : "dog", "age" : 1 }'

function changeAnimal<TypeAnimal>(a:string):TypeAnimal{
  return JSON.parse(a);
}

console.log(changeAnimal(data));

class Person3<MyType3> {
  name:MyType3;
  constructor(a:MyType3){
    this.name = a;
  }
}
let aa = new Person3<string>('어쩌구');
aa.name //any 타입이 되었넹 

// tuple type으로 동일한 문법으로 타입생성하기 (깐깐하게보자)
let arr = [1,2,3];
let arr2 :[number, number, ...number[]] = [4,5,...arr];

type food = [string, number, boolean]

let 음식 = ["동서녹차", 4000, true];

let arr3:[string, number, ...boolean[]] =  ['동서녹차', 4000, true, false, true, true, false, true]

// tuple + rest 파라미터
function 함수22(...a:[string,boolean,...(string|number)[]]){
  console.log(a);
}

함수22("aaa",true,1,2,3,4)

// tuple + rest 파라미터
function 함수23(...a:(string|number)[]):[string[],number[]]{
  let stringAry :string[] = [];
  let numberAry :number[] = [];
  for(let value of a){
    if(typeof value === "string"){
      stringAry.push(value);
    }else{
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
  return  [ stringAry, numberAry ] 
}

console.log(함수23('b', 5, 6, 8, 'a')); 

// declare let a :number; 
//변수 재정의가 가능한 declare문법

// ts -> ts파일로 변수 쓰려면 import export 사용
// ts 특징
// 모든 ts파일은 ambient module 글로벌 모듈
// export 하나 적어두면 ambient 식으로 적용 x -> 로컬모듈로 변경
// ex) export {}
// 로컬 모듈에서 글로벌 모듈로 사용하고 싶을때 declare global 사용하여 적용
// declare global{ 
//  type Dog = string  
//}


// interface는 오브젝트의 타입지정으로 사용 가능한데
// 추가적인 기능으로 class의 타입 확인도 가능
// implements 를 이용하여 interface에 있는 속성이 다 포함되어 있는지 확인가능
// 타입 체크용도이지 타입할당용도 x

// interface CarType {
//   model : string,
//   price : number
// }

// class Car implements CarType {
//   model : string;
//   price : number = 1000;
//   constructor(a :string){
//     this.model = a
//   }
// }
// let 붕붕이 = new Car('morning');

interface AllString {
  [아무거나:string]:string
  // [key:string]:string
}
// 모든속성에 string지정

// 자기자신을 속성으로 지정
interface MyType4 {
  "font-size": MyType4 | number
}

let css:MyType4={
  "font-size":{
    "font-size":{
      "font-size":14
    }
  }
}

interface Molaseo {
  [key:string]:string|number;
}

let obj3:Molaseo = {
  model : 'k5',
  brand : 'kia',
  price : 6000,
  year : 2030,
  date : '6월',
  percent : '5%',
  dealer : '김차장',
}

interface Esang {
  "font-size":number;
  [key:string]:Esang|number;
}

// interface FirstEsang{
//   [key:string]:Esang|number|FirstEsang
// }

let obj2:Esang = {
  'font-size' : 10,
  'secondary' : {
    'font-size' : 12,
    'third' : {
      'font-size' : 14
    }
  }
}

console.log(Object.keys(obj3));

interface Person2{
  age:number,
  name:string
}

type PersonKeys = keyof Person2;
let aaaa:PersonKeys ="name"

type TypeChanger<MaType> ={
  [key in keyof MaType]:string
}

//type NewType = TypeChanger<Fsix>
type NewType = TypeChanger<Square3>

type Bus = {
  color : string,
  model : boolean,
  price : number
}

type TypeChanger2<TestType> ={
  [key in keyof TestType]:string|number
}

type TypeChanger3<TestType, T> ={
  [key in keyof TestType]: T extends string?T:number
}
type NewType2 = TypeChanger2<Bus>
type NewType3 = TypeChanger3<Bus, Number>
let newbus:NewType2 = {
  color:20,
  model:"cc",
  price:2000
}

let newbus2:NewType3 = {
  color:20,
  model:10,
  price:2000
}

type Age<T> = T extends string?T:unknown;

let age2 :Age<number> = 10;

// type FirstItem<T> = T extends LengthCheck? T : any
type FirstItem<T> = T extends any[]? T : any
let age3 :FirstItem<string[]>;
let age4 :FirstItem<number>;
// 왼쪽 에서 추출하는 infer
// type 타입추출<T> = T extends (infer R)[]? R : any
type 타입추출<T> = T extends (()=> infer R)? R : any
// type a = 타입추출<string[]>
type a = 타입추출<()=>void>
type b = ReturnType<()=>void>

type Age7<T> = T extends [string, ...any]? T[0] : unknown

let age5 :Age7<[string, number]>;
let age6 :Age7<[boolean, number]>; 

type 파라미터추출<T> = T extends ((x:infer R)=> any)? R : any

type dd=파라미터추출<(x :number) => void> //이러면 number가 이 자리에 남음
type cc= 파라미터추출<(x :string) => void> //이러면 string이 이 자리에 남음

let abc:Age8 = 20;

let 이름5:string = "김";