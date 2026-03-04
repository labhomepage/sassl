---
title: Team
nav:
  order: 4
---

<style> /* team/index.md 안에서만 figure 스타일 변경 */ .team-page .figure { display: flex; flex-direction: row; align-items: flex-start; gap: 20px; margin: 30px 0; } .team-page .figure-image img { width: 180px; height: 220px; object-fit: cover; object-position: center; flex-shrink: 0; } .team-page .figure-caption { text-align: left; line-height: 1.5; } 

</style>

<div class="team-page">

# {% include icon.html icon="fa-solid fa-users" %}Team

{% include section.html %}


## Professor {#professor} 

{% include figure.html image="images/professor.jpg" caption="손동희<br>텍스트2<br>텍스트3<br>텍스트4<br>텍스트5<br>텍스트6<br>텍스트7" %} 

## Members {#members}

{% include figure.html image="images/members1.jpg" caption="정성훈<br>텍스트2<br>텍스트3<br>텍스트4<br>텍스트5" %} 
{% include figure.html image="images/members2.jpg" caption="Member 2<br>텍스트2<br>텍스트3<br>텍스트4<br>텍스트5" %} 
{% include figure.html image="images/members3.jpg" caption="Member 3<br>텍스트2<br>텍스트3<br>텍스트4<br>텍스트5" %} 
{% include figure.html image="images/members4.jpg" caption="Member 4<br>텍스트2<br>텍스트3<br>텍스트4<br>텍스트5" %} 
{% include figure.html image="images/members5.jpg" caption="Member 5<br>텍스트2<br>텍스트3<br>텍스트4<br>텍스트5" %} 
{% include figure.html image="images/members6.jpg" caption="Member 6<br>텍스트2<br>텍스트3<br>텍스트4<br>텍스트5" %} 
{% include figure.html image="images/members7.jpg" caption="Member 7<br>텍스트2<br>텍스트3<br>텍스트4<br>텍스트5" %} 
{% include figure.html image="images/members8.jpg" caption="백종우<br>텍스트2<br>텍스트3<br>텍스트4<br>텍스트5" %} 
{% include figure.html image="images/members9.jpg" caption="윤성수<br>텍스트2<br>텍스트3<br>텍스트4<br>텍스트5" %} 
{% include figure.html image="images/members10.jpg" caption="금승우<br>텍스트2<br>텍스트3<br>텍스트4<br>텍스트5" %} 


## Alumni {#alumni}

{% capture alumni %} 
{% include figure.html image="images/alumni.jpg" caption="Alumni 1" %} 
{% include figure.html image="images/alumni.jpg" caption="Alumni 2" %} 
{% include figure.html image="images/alumni.jpg" caption="Alumni 3" %} 

{% endcapture %}

</div>
