---
title: hoisting
date: 2020-08-21 08:08:70
category: javascript
tags: ['javascript', 'hoisting']
draft: true
---

## 호이스팅(Hoisting)의 개념

- 함수 안에 있는 선언들을 모두 끌어올려서 해당 함수 유효 범위의 최상단에 선언하는 것을 말합니다.

### 호이스팅이란

- 자바스크립트 함수는 실행되기 전에 함수 안에 필요한 변수값들을 모두 모아서 유효 범위의 최상단에 선언합니다.
  - 자바스크립트 Parser가 함수 실행 전 해당 함수를 한 번 훑습니다.
  - 함수 안에 존재하는 변수/함수선언에 대한 정보를 기억하고 있다가 실행시킵니다.
  - 유효 범위: 함수 블록 {} 안에서 유효합니다.
- 함수 내에서 아래쪽에 존재하는 내용 중 필요한 값들을 끌어올리는 것입니다.
  - 실제로 코드가 끌어올려지는 건 아니며, 자바스크립트 Parser 내부적으로 끌어올려서 처리하는 것입니다.
  - 실제 메모리에서는 변화가 없습니다.

### 호이스팅의 대상

- var/let/const 변수 선언과 함수선언문에서 호이스팅이 일어납니다.
- var 변수/함수의 선언만 위로 끌어 올려지며, 할당은 끌어 올려지지 않습니다.
- let/const 변수 선언과 함수표현식에서는 호이스팅이 발생하지 않는다고 알고 있는 경우가 많습니다. 하지만 let/const선언 변수는 호이스팅되지 않는 것이 아닙니다. 스코프에 진입할 때 변수가 만들어지고 TDZ(Temporal Dead Zone)가 생성되지만, 코드 실행이 변수가 실제 있는 위치에 도달할 때까지 액세스할 수 없는 것입니다. let/const변수가 선언된 시점에서 제어흐름은 TDZ를 떠난 상태가 되며, 변수를 사용할 수 있게 됩니다.
- 호이스팅은 함수선언문과 함수표현식에서 서로 다르게 동작하기 때문에 주의해야 합니다.
  - 변수에 할당된 함수표현식은 끌어 올려지지 않기 때문에 이때는 변수의 스코프 규칙을 그대로 따릅니다.

## 함수선언문과 함수표현식에서의 호이스팅

### 함수선언문에서의 호이스팅

- 함수선언문은 코드를 구현한 위치와 관계없이 자바스크립트의 특징인 호이스팅에 따라 브라우저가 자바스크립트를 해석할 때 맨 위로 끌어 올려집니다.

### 함수표현시에서의 호이스팅

- 함수표현식은 함수선언문과 달리 선언과 호출 순서에 따라서 정상적으로 함수가 실행되지 않을 수 있습니다.
  - 함수표현식에서는 선언과 할당의 분리가 발생합니다.

## 호이스팅 우선순위

### 같은 이름의 var 변수 선언과 함수 선언에서의 호이스팅

- 변수 선언이 함수 선언보다 위로 끌어올려집니다.
- 값이 할당되어 있지 않은 변수의 경우, 함수선언문이 변수를 덮어씁니다.

## 참고

- [[JavaScript] 호이스팅(Hoisting)이란](https://gmlwjd9405.github.io/2019/04/22/javascript-hoisting.html)
- [let과 const는 호이스팅 될까?](https://medium.com/korbit-engineering/let%EA%B3%BC-const%EB%8A%94-%ED%98%B8%EC%9D%B4%EC%8A%A4%ED%8C%85-%EB%90%A0%EA%B9%8C-72fcf2fac365)