---
title: BilinguaLab
layout: "base.njk"
---

{% for team in collections.team %}
- [{{ team.data.title}}]({{ team.url }})
{% endfor %}

{% for articles in collections.articles %}
- [{{ articles.data.title}}]({{ articles.url }})
{% endfor %}

Esto es un prueba de eleventy para la web de bilinguaLab.