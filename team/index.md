---
title: Team
nav:
  order: 4
---

# {% include icon.html icon="fa-solid fa-users" %}Team

{% include section.html %}

<style> div.professor-img div.grid figure img { width: 180px !important; height: 220px !important; object-fit: cover !important; object-position: center !important; } </style> 

## Professor {#professor} 
<div class="professor-img"> 
{% capture professor %} 
{% include figure.html image="images/professor.jpg" caption="손동희<br>텍스트2<br>텍스트3<br>텍스트4<br>텍스트5<br>텍스트6<br>텍스트7" %} 
{% endcapture %} 
{% include grid.html style="square" content=professor %} 
</div>

## Members {#members}

{% capture members %} 
{% include figure.html image="images/members.jpg" caption="정성훈" %} 
{% include figure.html image="images/members.jpg" caption="Member 2" %} 
{% include figure.html image="images/members.jpg" caption="Member 3" %} 
{% include figure.html image="images/members.jpg" caption="Member 4" %} 
{% include figure.html image="images/members.jpg" caption="Member 5" %} 
{% include figure.html image="images/members.jpg" caption="Member 6" %} 
{% include figure.html image="images/members.jpg" caption="Member 7" %} 
{% include figure.html image="images/members.jpg" caption="백종우" %} 
{% include figure.html image="images/members.jpg" caption="윤성수" %} 
{% include figure.html image="images/members.jpg" caption="금승우" %} 
{% endcapture %} 
{% include grid.html style="square" content=members %} 

## Alumni {#alumni}

{% capture alumni %} 
{% include figure.html image="images/alumni.jpg" caption="Alumni 1" %} 
{% include figure.html image="images/alumni.jpg" caption="Alumni 2" %} 
{% include figure.html image="images/alumni.jpg" caption="Alumni 3" %} 
{% endcapture %} 
{% include grid.html style="square" content=alumni %}
