# Awesome Project Build with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `data-source.ts` file
3. Run `npm start` command

# TypeORM 

- Object Relational mapping
- Typescript로 작성된 객체 관계형 매퍼 라이브러리
- 클래스 사용하는 객체지향 프로그래밍 <-> 테이블 사용하는 관계형 데이터베이스 

## One To Many, Many To One

1. 관계를 형성하기 위해 entity 에 서로간의 field를 넣어야 함
2. 한 명이 여러 개의 게시글을 작성

## 파라미터

1. Type
2. inverseSide - board에서 유저로 접근하려면 board.user로 접근해야함.
3. Option

## class-tranformer 모듈
: plain object를 class instance로 변환할 수 있음 (반대로도 변환)
- 자바스크립트 리터럴 객체를 클래스의 인스턴스로 변경할 경우,
1. class에 정의해 놓은 logic을 바로 사용할 수 있어 상태와 행위가 함께 있는 응집력 있는 코드 완성!
-> plainToInstance, instanceToPlain 메소드 사용 

* plain object
```
{ "id" : 1, "firstname" : "choi}
```

* class instance
```
export class User {
    id: number;
    firstname: string;
}
```

## URL, URN

* URI : 자원의 식별자 identifier
* URL : 자원의 위치로 자원을 식별 locator
* URN : 고유한 이름으로 자원을 식별 name

URI : Protocol + Domain-name + Port + Path to the File + Parameters 
URL : Parameters 제외 
-> 어떻게 resource를 어디에서 가져올지 명시
URN : 경로와 리소스 자체를 특정하는 것을 목표

ex) http://sample.com/author/sample.html#posts

Method : http -> defines how to access resource
Location : html -> where resoure resides
Resource : posts 

