export var 이름2 = "kim";
export var 나이2 = 20;

export namespace 네임스페이스 {
  export type Name = string | number;
}
// 변수나 타입 이름 숨기고싶을때 사용
module 네이스페이스2 {

}
// 옛날 문법
let 변수 : 네임스페이스.Name;
// (index.ts)

export type Car3 = {
  wheel : number,
  model : string
}
export interface Bike3 {
  wheel : 2,
  model : string
}

export type InOb= (a?:object)=>void