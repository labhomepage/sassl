---
title: Team
nav:
  order: 4
---

# {% include icon.html icon="fa-solid fa-users" %}Team

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

{%
  include button.html
  type="github"
  text="Professor"
  link="greenelab/lab-website-template"
%}
{%
  include button.html
  type="github"
  text="Members"
  link="greenelab/lab-website-template"
%}
{%
  include button.html
  type="github"
  text="Alumni"
  link="greenelab/lab-website-template"
%}

{% include section.html %}


## Professor

{% capture professor %} 
{% include figure.html image="images/professor.jpg" %} 
{% endcapture %} 

## Members 

{% capture members %} 
{% include figure.html image="images/members.jpg" %} 
{% endcapture %} 

## Alumni 

{% capture alumni %} 
{% include figure.html image="images/alumni.jpg" %} 
{% endcapture %} 

{% include grid.html style="square" content=professor %} 
{% include grid.html style="square" content=members %} 
{% include grid.html style="square" content=alumni %}
