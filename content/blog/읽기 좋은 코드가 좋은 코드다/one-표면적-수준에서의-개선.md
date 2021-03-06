---
title: ONE 표면적 수준에서의 개선
date: 2020-07-01 14:07:97
category: 읽기 좋은 코드가 좋은 코드다
draft: true
---

## 2 이름에 정보 담기

- 변수, 함수, 혹은 클래스 등의 이름을 결정할 때는 항상 같은 원리가 적용됩니다.
- 이름은 일종의 설명문으로 간주해야 합니다.

### 이름에 정보를 담아내는 방법

1. 보편적인 단어를 피하고 구체적인 단어를 선택합니다.

- get => fetch, download
- find => search, extract, locate
- start => launch, create, open, begin

2. 변수의 목적이나 담고 있는 값을 설명합니다.
   - 변수명을 명확히 하면 버그를 예방/추적하기 좋습니다.
3. 시간의 양이나 바이트의 수 같이 측정치를 포함함다면, 단위를 포함시킵니다.

```javascript
// Wrong
const current = new Date().getTime();
console.log(`Current Seconds is ${current}`);

// Right
const currentMs = new Date().getTime();
console.log(`Current Seconds is ${currentMs}`);
```

4. 위험한 요소 또는 나중에 놀랄만한 내용이 있다면 표현합니다.

- 패스워드가 암호화가 안되있다면 : password => plainTextPassword
- URL Encoded 데이터라면 : data => dataURLEncoded

### 이름은 얼마나 길어야 하는가?

- 좁은 범위에서는 짧은 이름이 괜찮습니다.
  - 좁은 범위에서만 사용되는 변수의 이름에 많은 정보를 담을 필요가 없다.
  - 변수의 타입, 초기값 등 모든 정보가 쉽게 한눈에 보이므로 짧은 이름을 사용해도 좋습니다.
- 약어와 축약형
  - 특정 프로젝트에 국한된 의미를 가진 약어 사용은 나쁩니다.
  - 새로 합류한 사람에게 비밀스럽고 위협적인 모습입니다.
  - 팀에 새로합류한 사람이 이름이 의미를 이해할 수 있는가를 기준으로 합니다.
- 불필요한 단어 제거 하기
  - 정보의 손실하지 않으면서 이름에 포함된 단어를 제거할 수 있습니다.
  - convertToString() => ToString()

### 이름 포매팅으로 의미를 전달하라

- 문법적 차이가 드러나게 서로 다른 개체의 이름에 각자 다른 포맷팅 방식을 적용하는 방식은 코드를 더 읽게 쉽게 해줍니다.
  - 클래스 : PascalCase
  - 변수, 함수, 메소드 : camelCase
  - 상수 : CONSTANT_NAME

## 3 오해할 수 없는 이름들

- 본인이 지은 이름을 `다른 사람들이 다른 의미로 해석할 수 있을까`라는 질문을 던져보며 철저하게 확인해야 합니다.
- `한계를 설정하는 이름`을 가장 명확하게 만드는 방법은 제헌 받는 대상의 이름 앞에 max/min을 붙이는 것입니다.
- `경계의 양끝점을 포함된다는 의미`에서 경계를 표함하는 범위에는 first/last가 좋은 선택입니다.
- `불리언 이름`은 일반적으로 is/has/can/should와 같은 단어를 더하면 불리언 값을 의미합니다.

## 4 미학

- 미학적으로 보기 좋은 코드가 사용하기 더 편리합니다. 코드를 작성하는 시간 보다 코드를 읽는 시간이 더 많습니다. 코드를 훑어보는 데 걸리는 시간이 적을 수록, 사람들은 코드를 더 쉽게 사용할 수 있습니다.

1. 일관성과 간결성을 위해서 줄바꿈을 재정렬합니다.
2. 메소드를 활용해 불규칙성을 정렬합니다.
3. 의미 있는 순서를 선택하고 일관성 있게 사용합니다.

- 가장 중요한 것을 시작해서 가장 덜 중요한 순서로 정렬합니다.
- 알파벳 순서 정렬합니다.

4. 선언문을 블록으로 구성합니다.

- 우리의 뇌는 자연스럽게 그룹과 계층 구조를 따라서 동작합니다. 이런 방식으로 조직하면 코드를 읽는 데 도움이 됩니다.
- 논리 영역에 따라서 필드를 선언합니다.

5. 코드를 문단으로 쪼개라

- 비슷한 생각을 묶어서, 성격이 다른 생각과 구분합니다.
- 문단은 시각적 디딤돌 역할을 수행합니다.

## 5 주석에 담아야 하는 대상

- 주석으로 설명하지 말아야 할 것들이 있습니다.
  - 설명을 자체를 위한 설명입니다.
  - 나쁜 이름에 대한 주석입니다.
    - 대신 이름을 고칩니다.
- 주석은 생각을 기록하는 것입니다.
  - 자신의 생각을 기록하는 것만으로 좋은 주석이 탄생할 수 있습니다.
  - 코드에 있는 결함을 설명합니다.

## 참고

- [읽기 좋은 코드가 좋은 코드다](https://peter-cho.gitbook.io/book/11/undefined-4#one)
