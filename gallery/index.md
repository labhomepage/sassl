---
title: News
nav:
  order: 8
---

# {% include icon.html icon="fa-regular fa-image" %}News


{% capture content %}

{%
  include figure.html
  image="images/gallery1.png"
  caption="2025년 봄 학술대회"
%}
{%
  include figure.html
  image="images/gallery2.png"
  caption="2025년 가을 학술대회"
%}
{%
  include figure.html
  image="images/gallery3.png"
  caption="교내 캡스톤디자인 경진대회"
%}
{%
  include figure.html
  image="images/gallery4.png"
  caption="구조물 내진설계경진대회"
%}

{% endcapture %}

{% include grid.html style="square" content=content %}
