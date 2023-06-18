---
title: "Tags"
layout: tags
permalink: /tags
author_profile: true
sidebar:
  nav: "sidebar-category"
---

{% assign posts = site.tags.tag %}

{% for post in posts %} {% include archive-single.html type=page.entries_layout %} {% endfor %}
