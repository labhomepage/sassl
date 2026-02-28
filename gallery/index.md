---
title: Gallery
nav:
  order: 6
---

# {% include icon.html icon="fa-regular fa-image" %}Gallery


{% capture content %}

{%
  include figure.html
  image="images/photo.jpg"
  caption="Lorem ipsum"
%}
{%
  include figure.html
  image="images/photo.jpg"
  caption="Lorem ipsum"
%}
{%
  include figure.html
  image="images/photo.jpg"
  caption="Lorem ipsum"
%}

{% endcapture %}

{% include grid.html style="square" content=content %}
