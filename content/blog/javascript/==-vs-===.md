---
title: == vs ===
date: 2020-04-10 18:04:63
category: javascript
draft: true
---

- 자바스크립트에는 눈으로 보기엔 비슷하지만 사실 매우 다른 동등 비교연산자 두개가 있습니다.
- 자바스크립트에서 === 연산을 사용할 때, 우리는 엄격한 동등성을 비교합니다. 엄격한 동등성의 의미는 타입과 값이 둘 다 같아야 한다는 이야기입니다.
- 우리가 자바스크립트에서 ==연산자를 쓰는 목적은 느슨한 동등 비교를 위함입니다. == 연산자도 강제 형변환(type coercion)을 수행합니다.
  - 강제 형변환(type coercion) 이란 동등 연산자로 비교하기 전에 피연산자들을 공통 타입(common type)으로 만드는 행위를 말합니다.
- 자바스크립트에서 강제 형변환(type coercion)은 어디로 튈지 모릅니다. 자바스크립트와 매우 친숙하지 않다면, 느슨한 동등 연산자(==)는 하나의 가치있는 선택이라기 보단 당신에게 엄청난 두통을 선사하는 녀석으로 변할 것입니다. 6가지 falsy 값을 암기해두세요 그리고 그들에 관련된 다양한 규칙들을 기억하세요. 암기한다면 느슨한 동등 연산자를 이해하는데 아주 큰 도움이 될 것입니다.
  - 6가지 falsy 값
    - false
    - 0
    - ""
    - null
    - undefined
    - NaN
- ===연산자는 ==연산자보다 좋습니다. 동등함을 비교해야 할 때는 === 연산자를 쓰는 편이 훨씬 좋을 것입니다. 타입과 값을 비교함으로써 우리는 우리가 피연산자들이 진정으로 동등한지를 비교한다고 확신할 수 있습니다.

## 참고

- [자바스크립트 개발자라면 알아야 할 33가지 개념 #5 == vs === 3분만에 배우기 (번역)](https://velog.io/@jakeseo_me/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EA%B0%9C%EB%B0%9C%EC%9E%90%EB%9D%BC%EB%A9%B4-%EC%95%8C%EC%95%84%EC%95%BC-%ED%95%A0-33%EA%B0%80%EC%A7%80-%EA%B0%9C%EB%85%90-5-vs-3%EB%B6%84%EB%A7%8C%EC%97%90-%EB%B0%B0%EC%9A%B0%EA%B8%B0-%EB%B2%88%EC%97%AD)
