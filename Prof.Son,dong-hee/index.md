---
title: Prof.Son,dong-hee
nav:
  order: 5
  tooltip: Email, address, and location
---

# {% include icon.html icon="fa-regular fa-envelope" %}Prof.Son,dong-hee

abcdefg Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

{%
  include button.html
  type="email"
  text="dhson@ut.ac.kr"
  link="dhson@ut.ac.kr"
%}
{%
  include button.html
  type="phone"
  text="043-841-5217"
  link="+82-43-841-5217"
%}
{%
  include button.html
  type="address"
  tooltip="Our location on Google Maps for easy navigation"
  link="https://www.google.co.kr/maps/place/%ED%95%9C%EA%B5%AD%EA%B5%90%ED%86%B5%EB%8C%80%ED%95%99%EA%B5%90+%EA%B1%B4%EC%B6%95%EA%B4%80+(E12)/data=!3m1!4b1!4m6!3m5!1s0x3564858ad7c001c7:0xc5d1d45d2a769dda!8m2!3d36.9713231!4d127.871814!16s%2Fg%2F11sskrc8cl?entry=ttu&g_ep=EgoyMDI2MDIxOC4wIKXMDSoASAFQAw%3D%3D"
%}

{% include section.html %}

{% capture col1 %}

{%
  include figure.html
  image="images/photo.jpg"
  caption="Lorem ipsum"
%}

{% endcapture %}

{% capture col2 %}

{%
  include figure.html
  image="images/photo.jpg"
  caption="Lorem ipsum"
%}

{% endcapture %}

{% include cols.html col1=col1 col2=col2 %}

{% include section.html dark=true %}

{% capture col1 %}
Lorem ipsum dolor sit amet  
consectetur adipiscing elit  
sed do eiusmod tempor
{% endcapture %}

{% capture col2 %}
Lorem ipsum dolor sit amet  
consectetur adipiscing elit  
sed do eiusmod tempor
{% endcapture %}

{% capture col3 %}
Lorem ipsum dolor sit amet  
consectetur adipiscing elit  
sed do eiusmod tempor
{% endcapture %}

{% include cols.html col1=col1 col2=col2 col3=col3 %}
