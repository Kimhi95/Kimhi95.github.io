---
layout: single
title: "postgresql 기본 설정"
categories: study
tags: linux postgresql
sidebar:
  nav: "sidebar-category"
---

postgresql을 사용하려면 postgresql.conf 와 pg_hba.conf 를 수정해줘야한다.  
CentOS7의 경우 /var/lib/pgsql/(version)/data 폴더에 둘 다 들어있고  
vi /경로/파일명 을 사용하면 파일을 수정할 수 있다.

첫번째로 postgresql.conf의 경우

![postgresql.conf]({{site.url}}/assets/img/posts/20230619postgresqlsetting/psql_setting_01.png)

Connetion Setting 의 listen_address = 의 부분을 수정해주어야 하는데  
= '\*' 를 사용해 모든 IP를 허가하거나 특정 IP만 허가해줄 수 있다.

두번째로 pg_hba.conf 의 경우

![postgresql.conf]({{site.url}}/assets/img/posts/20230619postgresqlsetting/psql_setting_02.png)

TYPE, DATABASE, USER, ADDRESS, METHOD 다섯가지 설정을 통해 권한을 열어주어야한다.
