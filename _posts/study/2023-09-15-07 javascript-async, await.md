---
layout: single
title: "async, await"
categories: study
tags: javascript
sidebar:
  nav: "sidebar-category"
---

1. async

async 키워드는 함수를 비동기 함수로 선언해 암시적으로 Promise를 반환하고
그 안에서 await 키워드를 사용하여 비동기 작업의 완료를 기다릴 수 있다

2. await

await 키워드는 Promise를 받고 해당 Promise가 처리될 때까지 함수의 실행을 일시 중단한다

3. 오류 처리

비동기 작업 중 발생하는 오류를 처리하기 위해선 Promise(), Deffered() 랑 다르게
함수 내에서 try/catch 를 사용한다

```js
async function test() {
  try {
    const response = await fetch("https://test.com/test");

    if (!response.SUCCESE) {
      throw new Error("error");
    }

    return response.DATA;
  } catch (error) {
    error;
  }
}

async function test_call() {
  const call = await test();
}
```

async/await를 사용한 함수 A를 호출 할 경우
함수 A에는 await를 걸고 함수 A를 호출한 함수 B에는 async를 걸어주어야한다

에러는 예시의 경우에서 response에 SUCCESE가 없을 경우 함수 실행을 중단하고
throw 를 통해 Error 객체를 catch 문으로 전파시킨다
