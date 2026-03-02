---
title: Team
nav:
  order: 4
---

# {% include icon.html icon="fa-solid fa-users" %}Team

{% include section.html %}


## Professor {#professor}

{% capture professor %} 
{% include figure.html image="images/professor.jpg" caption="손동희" %} 
{% endcapture %} 
{% include grid.html style="square" content=professor %} 

## Members {#members}

{% capture members %} 
{% include figure.html image="images/members.jpg" caption="정성훈 (Graduate Student)" %} 
{% include figure.html image="images/members.jpg" caption="Member 2" %} 
{% include figure.html image="images/members.jpg" caption="Member 3" %} 
{% include figure.html image="images/members.jpg" caption="Member 4" %} 
{% include figure.html image="images/members.jpg" caption="Member 5" %} 
{% include figure.html image="images/members.jpg" caption="Member 6" %} 
{% include figure.html image="images/members.jpg" caption="Member 7" %} 
{% include figure.html image="images/members.jpg" caption="백종우 (Undergraduate Student)" %} 
{% include figure.html image="images/members.jpg" caption="윤성수 (Undergraduate Student)" %} 
{% include figure.html image="images/members.jpg" caption="금승우 (Undergraduate Student)" %} 
{% endcapture %} 
{% include grid.html style="square" content=members %} 

## Alumni {#alumni}

{% capture alumni %} 
{% include figure.html image="images/alumni.jpg" caption="Alumni 1" %} 
{% include figure.html image="images/alumni.jpg" caption="Alumni 2" %} 
{% include figure.html image="images/alumni.jpg" caption="Alumni 3" %} 
{% endcapture %} 
{% include grid.html style="square" content=alumni %}
