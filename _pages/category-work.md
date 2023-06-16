---
title: "Work"
layout: archive
permalink: /work
author_profile: true
sidebar:
  nav: "sidebar-category"
---

{% assign posts = site.categories.work %}
{% for post in posts %} {% include archive-single.html type=page.entries_layout %} {% endfor %}
