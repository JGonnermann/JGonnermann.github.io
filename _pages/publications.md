---
layout: page
permalink: /publications/
title: publications
description:
nav: true
nav_order: 1
---

<!-- Search field (from the template) -->
{% include bib_search.liquid %}

<div class="publications">
{% bibliography %}
</div>

<style>
  /* ---------- 4. year headings ---------- */
  .publications h2.bibliography {
    text-align: left;
    font-size: 1.15rem;
    font-weight: 700;
    border-top: none;
    border-bottom: 1px solid #111111;
    padding: 0 0 0.35rem;
    margin: 2.25rem 0 0.75rem;
  }

  /* ---------- list alignment ---------- */
  ol.bibliography {
    padding-left: 0;
    margin-left: 0;
    list-style: none;
  }
  ol.bibliography .row {
    margin-left: 0;
    margin-right: 0;
  }
  ol.bibliography [class*="col-"] {
    padding-left: 0;
    padding-right: 0;
    flex: 0 0 100%;
    max-width: 100%;
  }

  /* ---------- 5. hover effect ---------- */
  ol.bibliography > li {
    padding: 0.75rem 0.6rem;
    margin: 0 -0.6rem;
    border-radius: 4px;
    transition: background-color 0.15s ease;
  }
  ol.bibliography > li:hover {
    background-color: #f0f0f0;
  }

  /* ---------- 3. hierarchy within each entry ---------- */
  ol.bibliography .title {
    font-weight: 700;
    font-size: 1.05rem;
    line-height: 1.35;
    margin-bottom: 0.2rem;
  }
  ol.bibliography .author {
    font-size: 0.9rem;
    color: #666666;
    margin-bottom: 0.15rem;
  }
  ol.bibliography .periodical {
    font-size: 0.9rem;
    font-style: italic;
    color: #444444;
  }

  /* ---------- buttons (ABS, arXiv, PDF) ---------- */
  ol.bibliography .links a.btn,
  ol.bibliography .links .btn {
    color: #2b5797 !important;
    border-color: #2b5797 !important;
  }
  ol.bibliography .links a.btn:hover,
  ol.bibliography .links .btn:hover {
    background-color: #2b5797 !important;
    color: #ffffff !important;
  }

</style>

{% include custom.html %}
