---
layout: single
title:  "jekyll은 누가 쉽다 한거야  "
categories: chat
tags: 잡담
sidebar:
  nav: "sidebar-category"
---

jekyll 테마를 다운받아서 사용하면 쉽게 꾸밀수 있다길래  
chirpy란 테마를 선택해서 적용해 봤는데  

jekyll server에선 뜨는데 github에 올릴 경우 404가 뜬다.
고치기 위해서 별 짓을 다 해봤는데 하루종일하다 포기하고  
minimal mistake 테마를 받고 직접 수정해서 사용하기로 결정  

카테고리나 글 갯수 등을 띄우는데 직접 하느냐 좀 걸렸지만  
그래도 이건 잘 뜬다.

글 갯수 띄우는데 오래걸린게 navigation 설정에서  
title 에는 첫 글자에 대문자를 주고 url에선 안줬더니  
liquid 함수에서 | upcase 같은걸로 일치시켜도 제대로 적용이 안되더라  
결국 그냥 다 소문자로 주고 표시를 capitalize 로 적용시켰다.