---
title: Publication
nav:
  order: 2
---

# {% include icon.html icon="fa-regular fa-file-lines" %}

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

{% include citation.html lookup="Open collaborative writing with Manubot" style="rich" %}

{% include section.html %}

## All

{% include search-box.html %}

{% include search-info.html %}

{% include list.html data="citations" component="citation" style="rich" %}
