---
title: 클라이언트 IP 알아내기
date: 2020-05-25 22:05:21
category: backend
draft: true
---

```javascript
req.header['x-forwarded-for'] || req.connection.remoteAddress;
// 혹은 proxy-adddr 패키지 사용
```

- 크롬에서 로컬 호스트로 접속한 경우 IP가 ::1 로 뜹니다.
