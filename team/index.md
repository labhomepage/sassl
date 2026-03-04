---
title: Team
nav:
  order: 4
---

# {% include icon.html icon="fa-solid fa-users" %}Team

{% include section.html %}

## Professor {#professor}

{% capture professor %}
{% include figure.html 
    image="images/professor.jpg"
    caption="PhD Student<br><br>Chanseo JUNG<br>Hankyong National University<br><br><em>Lab Manager</em><br><br>Master Thesis (Feb. 2026)<br>Performance of Reinforced Concrete Beams Strengthened with Fabric Reinforced Cementitious Matrix in Shear<br><br><strong>Research Topic</strong><br>• Shear and Torsion Analysis<br>• FRCM Strengthening<br>• Parametric Study with FEA"
%}
{% endcapture %}

{% include grid.html style="square" content=professor %} 

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
