---
layout: about
title: about
permalink: /

selected_papers: false
social: false

announcements:
  enabled: false
  scrollable: true
  limit: 5

latest_posts:
  enabled: false
  scrollable: true
  limit: 3
---

<div class="hero">
<div class="hero-text" markdown="1">

I lead the research group **[Humans and AI](https://iol.zib.de/research/iol-human.html)** at the [Zuse Institute Berlin](https://www.zib.de) ([Interactive Optimization and Learning Lab](https://iol.zib.de)) and am an associate researcher at the [Weizenbaum Institute](https://www.weizenbaum-institut.de).

My work sits at the intersection of psychology and AI. I trained as a psychologist and received my PhD in Information Systems. I study how people interact with AI systems with a focus on education and learning. My group develops LLM-based simulations and agents that help teachers personalize learning materials, context-aware AI tutors, and adaptive AR/VR for vocational training. A second line of work addresses human-AI synergy: when humans and AI complement each other, how trust develops, and how agency is shared.

<p class="hero-tags">
  <span class="topic-tag">AI in education</span>
  <span class="topic-tag">Adaptive augmented reality</span>
  <span class="topic-tag">AI and decision-making</span>
</p>

</div>
<div class="hero-photo">
  <img src="{{ '/assets/img/JGM.jpg' | relative_url }}" alt="Jana Gonnermann-Müller">
  <p class="profile-links">
    <a href="https://scholar.google.com/citations?user=55weieUAAAAJ" title="Google Scholar"><i class="ai ai-google-scholar"></i></a>
    <a href="https://orcid.org/0000-0002-0313-3779" title="ORCID"><i class="ai ai-orcid"></i></a>
    <a href="https://www.researchgate.net/profile/Jana-Gonnermann-Mueller" title="ResearchGate"><i class="ai ai-researchgate"></i></a>
    <a href="https://www.linkedin.com/in/jana-gonnermann-m%C3%BCller-77b062190/" title="LinkedIn"><i class="fa-brands fa-linkedin"></i></a>
    <a href="mailto:gonnermann-mueller@zib.de" title="Email"><i class="fa-solid fa-envelope"></i></a>
  </p>
</div>
</div>

{% include updates.html limit=5 %}

<style>
  /* hide the large name heading on the about page only */
  .post-header,
  h1.post-title {
    display: none;
  }
  .hero {
    display: grid;
    grid-template-columns: 1fr 260px;
    gap: 2.5rem;
    align-items: start;
    background-color: #ececec;
    border-radius: 6px;
    padding: 2.5rem;
  }
  .hero-text p:last-child {
    margin-bottom: 0;
  }
  .hero-photo img {
    width: 100%;
    height: auto;
    border-radius: 4px;
    display: block;
  }
  .hero-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1.25rem;
  }
  .topic-tag {
    display: inline-block;
    font-size: 0.75rem;
    line-height: 1.4;
    padding: 0.15rem 0.6rem;
    border: 1px solid #2b5797;
    border-radius: 3px;
    color: #2b5797;
    text-transform: uppercase;
    letter-spacing: 0.02em;
  }
  .profile-links {
    display: flex;
    justify-content: center;
    gap: 0.8rem;
    margin: 1rem 0 0;
  }
  .profile-links a {
    font-size: 1.5rem;
    text-decoration: none;
  }
  @media (max-width: 700px) {
    .hero {
      grid-template-columns: 1fr;
      padding: 1.5rem;
    }
    .hero-photo {
      order: -1;
      max-width: 220px;
      margin: 0 auto;
    }
  }
</style>

{% include custom.html %}
