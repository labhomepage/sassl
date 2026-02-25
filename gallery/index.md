---
title: Gallery
nav:
  order: 6
---

# {% include icon.html icon="fa-regular fa-image" %}Gallery

### Professor

Department of Architectural Engineering, Korea National University of Transportation

{% include section.html %}

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

{% include grid.html style="square" content=content %}
