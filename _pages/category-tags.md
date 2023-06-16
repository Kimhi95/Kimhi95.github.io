---
title: "Tags"
layout: archive
permalink: /tags
author_profile: true
sidebar:
  nav: "sidebar-category"
---

{% assign posts = site.tags %}
{% for post in posts %} {% include archive-single.html type=page.entries_layout %} {% endfor %}
