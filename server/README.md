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