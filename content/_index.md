---
# Leave the homepage title empty to use the site title
title: ''
date: 2022-10-24
type: landing

design:
  spacing: '3rem'

# Page sections
sections:
  - block: resume-biography
    id: about
    content:
      username: admin
    design:
      css_class: 'text-center'
      columns: '1'

  - block: markdown
    content:
      title: 'research interests'
      subtitle: ''
      text: |-
        <div class="interests-light-blue">
          <div class="interest-box">AI for education</div>
          <div class="interest-box">agentic AI</div>
          <div class="interest-box">socially-aware AI</div>
          <div class="interest-box">AI in AR/VR</div>
        </div>
    design:
      columns: '1'
      css_class: 'text-center'

  - block: markdown
    content:
      title: 'latest news'
      subtitle: ''
      text: |-
        <div class="news-light-blue">
          Aug 2025 - Recent preprint 'FACET: Teacher-Centred LLM-Based Multi-Agent Systems—Towards Personalized Educational Worksheets' on arXiv. 
          
          The paper presents a teacher-centred LLM-based multi-agent system that supports teachers in developing personalized educational materials according to students characteristics. 
          
          [read the full paper on arXiv →](https://arxiv.org/abs/2508.11401)</a>
          
          <div class="news-button-container">
            <a href="/blog/" class="news-button">to the blog post →</a>
          </div>
        </div>
    design:
      columns: '1'
      css_class: 'text-center'

---
