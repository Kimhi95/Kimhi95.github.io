---
layout: single
title: "postgresql 경로 설정"
categories: study
tags: linux postgresql
sidebar:
  nav: "sidebar-category"
---

postgresql11 과 postgresql11-server 를 설치하고 켜보면  
postgresql의 버전이 낮다고 뜨는 경우가 있는데  
이 경우 which -a psql 을 터미널에 입력하면  
psql이 두개 잡히는걸 볼 수 있다.

이 경우 /usr/bin/psql을 백업해두고  
/usr/pgsql-11/bin/psql을 /usr/bin으로 옮긴 뒤  
psql을 종료하고 재실행하면 경고 문구가 사라진다.
