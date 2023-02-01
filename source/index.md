---
title: BilinguaLab
layout: "base.njk"
---

Esto es un prueba de eleventy para la web de bilinguaLab.

{% for team in collections.team %}
- [{{ team.data.title}}]({{ team.url }})
{% endfor %}