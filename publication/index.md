---
title: Publication
nav:
  order: 2
---

# {% include icon.html icon="fa-regular fa-file-lines" %}Publication

총 논문 개수 요약
SCI(E) : ## Paper,
 Scopus : ##

{%
  include button.html
  type="github"
  text="SCI(E)"
  link="greenelab/lab-website-template"
%}
{%
  include button.html
  type="github"
  text="Scopus"
  link="greenelab/lab-website-template"
%}
{%
  include button.html
  type="github"
  text="Domestic"
  link="greenelab/lab-website-template"
%}
{%
  include button.html
  type="github"
  text="International Conference"
  link="greenelab/lab-website-template"
%}
{%
  include button.html
  type="github"
  text="Domestic Conference"
  link="greenelab/lab-website-template"
%}

{% include section.html %}

## Highlighted

{% assign dict = site.data.citations %} 
{% assign entries = dict | map: 1 %} 
{% assign sorted = entries | sort: "date" | reverse %} 
{% assign latest = sorted[0] %} {% include citation.html entry=latest style="rich" %}

{% include section.html %}

## All

{% include search-box.html %}

{% include search-info.html %}

{% include list.html data="citations" component="citation" style="rich" %}
