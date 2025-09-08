---
layout: single
title: "popstate"
categories: study
tags: javascript
sidebar:
  nav: "sidebar-category"
---

1. popstate

뒤로가기, 앞으로가기같은 브라우저의 기록을 바탕으로 페이지를 이동할때 제어할때 사용
단순히 뒤로가기 이벤트를 막는 경우에는

history.pushState(null, null, location.href);
로 새로운 state를 생성하고

window.onpopstate = function () {
history.go(1);
};
로 단순히 뒤로가는 이벤트를 방지하면 되지만

뒤로가기 시 예를 들어 모달의 창을 닫는다거나 특정 이벤트를 동작하게 하고싶을땐
window.removeEventListener("popstate", eventFunction);
window.addEventListener("popstate", eventFunction);
을 사용해 제어해야한다

window.onpopstate = function () {
history.go(1);
};
와 같이 사용시엔
뒤로가는 이벤트가 두번 동작하게 됨으로 둘 중에 하나만 사용해야한다
