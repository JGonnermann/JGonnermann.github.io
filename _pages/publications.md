---
layout: page
permalink: /publications/
title: publications
description: publications by categories in reversed chronological order. 
nav: true
nav_order: 1
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

{% bibliography %}

</div>

<style>
  ol.bibliography {
    padding-left: 0;
    margin-left: 0;
    list-style: none;
  }
  ol.bibliography li {
    margin-left: 0;
    padding-left: 0;
  }
  ol.bibliography .row {
    margin-left: 0;
    margin-right: 0;
  }
  ol.bibliography [class*="col-"] {
    padding-left: 0;
    flex: 0 0 100%;
    max-width: 100%;
  }
</style>

{% include custom.html %}
