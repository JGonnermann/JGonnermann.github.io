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
      title: 'Pre-prints'
      text: ''
      count: 0
      filters:
        folders:
          - publications
        tag: "preprint"
      order: desc
        exclude_featured: false
    design:
      view: citation
      show_date: true
      show_read_time: false
      show_read_more: false
  
  - block: collection
    content:
      title: 'Journal'
      text: ''
      count: 0
      filters:
        folders:
          - talks
        tag: "journal"
      order: desc
    design:
      view: citation
      show_date: true
      show_read_time: false
      show_read_more: false
      show_image: false
      show_links: false
  
  - block: collection
    content:
      title: 'Conferences'
      text: ''
      count: 0
      filters:
        folders:
          - talks
        tag: "conferences"
      order: desc
    design:
      view: citation
      show_date: true
      show_read_time: false
      show_read_more: false
      show_image: false
      show_links: false

---
