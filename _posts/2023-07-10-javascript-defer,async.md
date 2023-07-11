---
layout: single
title: "js의 defer async"
categories: study
tags: javascript
sidebar:
  nav: "sidebar-category"
---

internal 방식으로 작성되어 있던 js를 external 방식으로 변경하자
잘 작성되던 js가 동작을 안하는 경우가 생겼다.

원인은 html head 부분에 넣었는데 순서대로 실행되다 보니
js에서 html body 부분을 읽어오지 못하는 것이 원인이었는데
defer 속성을 넣어줌으로서 원인을 해결했다.

DOM을 따라 반드시 순서대로 실행되어야 한다면 &#60;script&#62;
DOM이나 다른 스크립트에 의존성이 없고, 실행 순서가 중요하지 않은 경우라면 &#60;script async&#62;
DOM이나 다른 스크립트에 의존성이 있고, 실행 순서가 중요한 경우라면 &#60;script defer&#62;
