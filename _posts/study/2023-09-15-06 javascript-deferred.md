---
layout: single
title: "Deferred"
categories: study
tags: javascript
sidebar:
  nav: "sidebar-category"
---

1. deffered

```js
const deferred = $.Deferred();

if (true) {
  deferred.resolve();
} else {
  deferred.reject();
}

deffered
  .done((result) => {
    result;
  })
  .fail((error) => {
    error;
  })
  .then(
    (resolve) => {
      resolve;
    },
    (reject) => {
      reject;
    }
  )
  .always(() => {
    "always";
  });
```

JQuery 에서 제공하는 기능 중 하나로 비동기 작업을 효과적으로 다룰 수 있도록 도와주는 개념
'Defferd' 객체는 작업의 상태를 관리하고 작업이 완료되었을 때 콜백 함수를 호출함

비동기 작업의 상태를 'pending'(대기중), 'resolved'(성공), 'rejected'(실패) 로 나눠서 상태 값을 가지고 있음

Promise랑 다르게 then이 아닌 done을 catch가 아닌 fail을 finally가 아닌 always를 사용한다
defferd에서 then의 경우에는 Promise랑 비슷하게 then 안에서 resolve 콜백함수와, reject 콜백함수 둘을 반환하여 사용할 수 있다

2. defferd.promise();

```js
function test() {
  const deferred = $.Deferred();

  if (true) {
    deferred.resolve();
  } else {
    deferred.reject();
  }

  return deferred.promise();
}

const promise = test();

test
  .then((result) => {
    result;
  })
  .catch((error) => {
    error;
  })
  .finally(() => {
    "finally";
  });
```

defferd 객체를 감싸는 새로운 promise 객체를 생성해
deferred 객체의 상태를 변경할 수 없는 불변의 promise 객체를 얻을 수 있다
