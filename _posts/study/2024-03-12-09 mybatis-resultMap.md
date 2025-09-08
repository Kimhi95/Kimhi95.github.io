---
layout: single
title: "resultMap 사용시 어노테이션"
categories: study
tags: mybatis, lombok
sidebar:
  nav: "sidebar-category"
---

기존 domain 에는 @Data @Bulider 만 사용중이었는데

resultMap collection 으로 1 대 다 매칭을 사용하는 경우

@NoArgsConstructor @AllArgsConstructor 두가지 어노테이션을 domain에 등록해야함

@Builder 만 사용하는 경우 변수명으로 매칭하는 것이 아니라 순서로 모든 변수가 매칭되는데

위의 두가지 어노테이션을 사용하는 경우 변수명과 컬럼명을 일치시켜야 매칭이 된다.
