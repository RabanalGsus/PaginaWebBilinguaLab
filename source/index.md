---
title: BilinguaLab
layout: "layouts/base.html"
intro:
  eyebrow: 'Language is our field of research'
  main: 'Acquisition & Research'
  summary: 'Leading eye-tracking research in Spain.'
  buttonText: 'See our work'
  buttonUrl: '/work'
  image: '/images/bg/toast.jpg'
  imageAlt: 'Eye-tracker'
---

{% for team in collections.team %}
- [{{ team.data.title}}]({{ team.url }})
{% endfor %}

{% for articles in collections.articles %}
- [{{ articles.data.title}}]({{ articles.url }})
{% endfor %}

Esto es un prueba de eleventy para la web de bilinguaLab.