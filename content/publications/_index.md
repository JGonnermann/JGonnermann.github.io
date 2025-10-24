---
title: Publications
date: 2023-10-24
type: landing

design:
  spacing: '5rem'

# Page sections
sections:
  - block: collection
    content:
      title: Featured Publications
      filters:
        folders:
          - publications
        featured_only: true
    design:
      view: article-grid
      columns: 2
  - block: collection
    content:
      title: All Publications
      text: ''
      filters:
        folders:
          - publications
        exclude_featured: false
    design:
      view: citation
---
