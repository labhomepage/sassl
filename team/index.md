---
title: Team
nav:
  order: 4
---

# {% include icon.html icon="fa-solid fa-users" %}Team

{% include section.html %}


<style> /* Members 전체를 3열 grid 로 */ #members-wrapper { display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px; margin-top: 30px; } /* 이미지 */ #members-wrapper .figure-image img { width: 180px; height: 220px; object-fit: cover; object-position: center; border-radius: var(--rounded); box-shadow: var(--shadow); } /* 캡션 */ #members-wrapper .figure-caption { text-align: center; line-height: 1.4; } 

</style>

<style> /* alumni 전체를 3열 grid 로 */ #alumni-wrapper { display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px; margin-top: 30px; } /* 이미지 */ #alumni-wrapper .figure-image img { width: 180px; height: 220px; object-fit: cover; object-position: center; border-radius: var(--rounded); box-shadow: var(--shadow); } /* 캡션 */ #alumni-wrapper .figure-caption { text-align: center; line-height: 1.4; } 

</style>



## Professor {#professor} 

<div class="professor-card"> 
{% include figure.html image="images/professor.jpg" caption="손동희<br>텍스트2<br>텍스트3<br>텍스트4<br>텍스트5<br>텍스트6<br>텍스트7" %} 
</div> 

## Members 
<div id="members-wrapper"> 
{% include figure.html image="images/professor.jpg" caption="정성훈<br>텍스트2<br>텍스트3<br>텍스트4<br>텍스트5<br>텍스트6" %} 
{% include figure.html image="images/professor.jpg" caption="Member 2<br>텍스트2<br>텍스트3<br>텍스트4<br>텍스트5<br>텍스트6" %} 
{% include figure.html image="images/professor.jpg" caption="Member 3<br>텍스트2<br>텍스트3<br>텍스트4<br>텍스트5<br>텍스트6" %} 
{% include figure.html image="images/members4.jpg" caption="Member 4<br>텍스트2<br>텍스트3<br>텍스트4<br>텍스트5<br>텍스트6" %} 
{% include figure.html image="images/members5.jpg" caption="Member 5<br>텍스트2<br>텍스트3<br>텍스트4<br>텍스트5<br>텍스트6" %} 
{% include figure.html image="images/members6.jpg" caption="Member 6<br>텍스트2<br>텍스트3<br>텍스트4<br>텍스트5<br>텍스트6" %} 
{% include figure.html image="images/members7.jpg" caption="Member 7<br>텍스트2<br>텍스트3<br>텍스트4<br>텍스트5<br>텍스트6" %} 
{% include figure.html image="images/members8.jpg" caption="백종우<br>텍스트2<br>텍스트3<br>텍스트4<br>텍스트5<br>텍스트6" %} 
{% include figure.html image="images/members9.jpg" caption="윤성수<br>텍스트2<br>텍스트3<br>텍스트4<br>텍스트5<br>텍스트6" %} 
{% include figure.html image="images/members10.jpg" caption="금승우<br>텍스트2<br>텍스트3<br>텍스트4<br>텍스트5<br>텍스트6" %} 

</div>

## Alumni {#alumni}
<div id="alumni-wrapper"> 
{% capture alumni %} 
{% include figure.html image="images/alumni1.jpg" caption="Alumni 1<br>텍스트2<br>텍스트3<br>텍스트4<br>텍스트5<br>텍스트6" %} 
{% include figure.html image="images/alumni2.jpg" caption="Alumni 2<br>텍스트2<br>텍스트3<br>텍스트4<br>텍스트5<br>텍스트6" %} 

</div>

{% endcapture %} 

{% include grid.html style="square" content=alumni %}
