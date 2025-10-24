---
title: Outreach & Talks
date: 2023-10-24
type: landing

design:
  spacing: '5rem'

# Page sections
sections:
  - block: collection
    content:
      title: 'Upcoming Talks'
      text: ''
      count: 0
      filters:
        folders:
          - talks
        tag: "future-talks"
        exclude_future: false
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
      title: 'Invited Talks & Workshops'
      text: ''
      count: 0
      filters:
        folders:
          - talks
        tag: "invited"
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
      title: 'Conference Talks'
      text: ''
      count: 0
      filters:
        folders:
          - talks
        tag: "conference"
      order: desc
    design:
      view: citation
      show_date: true
      show_read_time: false
      show_read_more: false
      show_image: false
      show_links: false
---