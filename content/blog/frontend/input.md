---
title: input
date: 2020-02-08 15:02:74
category: frontend
draft: false
---

## number

- +, -, ., e은 input type이 number이어도 입력이 가능하기 때문에 onKeyDown에서 keyCode를 확인해서 입력을 막습니다.
- 아이폰에서 숫자키패드 노출을 하고 싶다면 `type=tel` 이나 `pattern="\d*"`로 사용합니다.

```tsx
import * as React from 'react';
class InputComponent extends React.Component {
  render() {
    return (
      <input
        type='number'
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {}}
        onInput={(e: React.ChangeEvent<HTMLInputElement>) => {}}
        onFocus={(e: React.FocusEvent<HTMLInputElement>) => {}}
        onBlur={(e: React.FocusEvent<HTMLInputElement>) => {}}
        // type number 일 때 +-.e 의 입력을 막습니다
        onKeyDown={event => {
          if (
            type === 'number' &&
            (event.keyCode === 69 ||
              event.keyCode === 187 ||
              event.keyCode === 189 ||
              event.keyCode === 107 ||
              event.keyCode === 109 ||
              event.keyCode === 190 ||
              event.keyCode === 110)
          ) {
            event.preventDefault();
          }
        }}
      />;)
  }
}
```

## input 파일에서 확장자 제한 하기

```html
<input type="file" format="image/png, image/jpg, image/gif" />
```