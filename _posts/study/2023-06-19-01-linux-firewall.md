---
layout: single
title: "Linux 특정 포트 열기"
categories: study
tags: linux postgresql
sidebar:
  nav: "sidebar-category"
---

리눅스 부팅 시마다 systemctl stop firewalld 로 방화벽을 끄거나  
systemctl disable firewalld 로 아예 안켜지게 할 수도 있지만  
공부 목적이 아닌 경우 보안 등의 이유로 특정 포트만 열어주는 것이 좋다.

postgresql의 기본 포트 번호는 5432이니 5432만 열어주도록 하자

firewall-cmd --permanent --zone=public --add-port=5432/tcp

를 통해 포트 5432를 열어준 뒤

firewall-cmd --reload

를 사용해 방화벽을 재기동해야 설정이 적용된다.  
마지막으로

firewall-cmd --list-all

을 통해 포트가 열렸는지 확인할 수 있다.
