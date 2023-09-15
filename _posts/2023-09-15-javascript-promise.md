---
layout: single
title: "Promise"
categories: study
tags: javascript
sidebar:
  nav: "sidebar-category"
---

1. Promise()

```js
function test() {
  return new Promise((resolve, reject) => {
    resolve();
    reject();
  });
}

test()
  .then((result) => {
    result;
  })
  .catch((error) => {
    error;
  });
```

resolve는 Promise 객체의 작업이 성공적으로 완료되었을때 호출됨
처리한 데이터를 resolve로 반환

reject는 Promise 객체의 작업이 실패했을때 호출됨
일반적으로 에러 메시지나 예외를 reject로 반환

then은 resolve를 사용하기 위해 사용함
resolve() 안에 들어간 값을 result로 반환함

catch는 reject를 사용하기 위해 사용함
reject() 안에 들어간 값을 error로 반환함

============================================

2. Promise.all()

```js
function test() {
  return new Promise((resolve, reject) => {
    resolve();
    reject();
  });
}

const promises[];

for(let i = 1; i < 10; i++){
  promises.push(test());
}

Promise.all(promises)
  .then(results => {
    results
  }).catch(error => {
    error
  });
```

Promise를 배열에 담아 Promise.all 로 실행하면 Promise들을 병렬로 실행해
모든 Promise가 성공하면 모든 결과가 배열에 담겨서 반환되고
하나라도 실패할 경우 error가 반환된다
