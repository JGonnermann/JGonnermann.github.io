---
title: Projects
date: 2023-10-24
type: landing

design:
  spacing: '1rem'
  css_class: 'projects-page'

# Page sections
sections:
  - block: markdown
    content:
      title: projects
    design:
      columns: '1'
      css_class: 'text-center'

  - block: collection
    content:
      title: ''
      text: ''
      count: 0
      filters:
        folders:
          - projects
        exclude_featured: false
      order: asc
    design:
      view: card
      show_date: true
      show_read_time: false
      show_read_more: true
      show_image: true
      columns: '2'
      css_class: 'text-left'
      external_link: false
---
