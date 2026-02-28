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
{% include figure.html image="images/professor.jpg" caption="Professor Name" %} 
{% endcapture %} 
{% include grid.html style="square" content=professor %} 

## Members 

{% capture members %} 
{% include figure.html image="images/members.jpg" caption="Member 1" %} 
{% include figure.html image="images/members.jpg" caption="Member 2" %} 
{% include figure.html image="images/members.jpg" caption="Member 3" %} 
{% include figure.html image="images/members.jpg" caption="Member 4" %} 
{% include figure.html image="images/members.jpg" caption="Member 5" %} 
{% include figure.html image="images/members.jpg" caption="Member 6" %} 
{% include figure.html image="images/members.jpg" caption="Member 7" %} 
{% include figure.html image="images/members.jpg" caption="Member 8" %} 
{% include figure.html image="images/members.jpg" caption="Member 9" %} 
{% include figure.html image="images/members.jpg" caption="Member 10" %} 
{% endcapture %} 
{% include grid.html style="square" content=members %} 

## Alumni {% capture alumni %} 

{% include figure.html image="images/alumni.jpg" caption="Alumni 1" %} 
{% include figure.html image="images/alumni.jpg" caption="Alumni 2" %} 
{% include figure.html image="images/alumni.jpg" caption="Alumni 3" %} 
{% endcapture %} 
{% include grid.html style="square" content=alumni %}