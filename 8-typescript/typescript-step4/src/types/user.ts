//user.ts
//사용자 정보 타입 정의
export type User={
    id:number;
    name:string;
    age:number;
    personalColor:string; //여기까지는 필수타입
    hobbies? : string[]; //옵션타입(옵셔널 체이닝)은 속성명 다음에 ?를 붙인다.
  }