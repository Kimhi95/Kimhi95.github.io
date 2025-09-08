---
layout: single
title: "resultMap 단점"
categories: study
tags: mybatis
sidebar:
  nav: "sidebar-category"
---

하나의 A에 연관된 B 목록을 뽑는 형식의 단 건 조회는 성능 저하가 그리 크지않지만
여러건의 A에 연관된 B 목록을 뽑는 형식같이 쿼리가 여러번 돌아야되는 로직의 경우에는
resultMap을 사용 시 성능 저하가 매우 큼
차라리 목록 A 와 목록 B를 뽑고 백단에서 데이터를 정제하는 형식이
정확성에서는 떨어질 수 있으나 속도면에서 매우 우수함

예시로 부서 목록과 부서에 포함된 부서원 목록 그리고 부서원이 작성한 일일보고 목록을 뽑는 로직을
resultMap을 사용했을땐 15초 이상 걸리던 것이
목록 세개를 각자 뽑고 데이터를 정제할 경우 1초 이내로 작업이 끝나게 됨
