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
  type="docs"
  text="SCI(E)"
  link="greenelab/lab-website-template"
%}
{%
  include button.html
  type="docs"
  text="Scopus"
  link="greenelab/lab-website-template"
%}
{%
  include button.html
  type="docs"
  text="Domestic"
  link="greenelab/lab-website-template"
%}
{%
  include button.html
  type="docs"
  text="International Conference"
  link="greenelab/lab-website-template"
%}
{%
  include button.html
  type="docs"
  text="Domestic Conference"
  link="greenelab/lab-website-template"
%}

{% include section.html %}

## Highlighted

{% assign sorted = site.data.citations | sort: "date" | reverse %} 
{% assign latest = sorted[0] %} 
{% include citation.html lookup=latest.id style="rich" %}

{% include section.html %}

## SCI(E)

{% include search-box.html %}

{% include search-info.html %}

{% include list.html data="citations" component="citation" style="rich" %}

## Scopus

{% include search-box.html %}

{% include search-info.html %}

{% include list.html data="scopuslist" component="citation" style="rich" %}

## Domestic

{% include search-box.html %}

{% include search-info.html %}

{% include list.html data="domesticlist" component="citation" style="rich" %}
