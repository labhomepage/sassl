---
title: Team
nav:
  order: 4
---

# {% include icon.html icon="fa-solid fa-users" %} Team

<style>
  .team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 25px;
    margin-top: 20px;
  }

  .member-card {
    background: #ffffff;
    border: 1px solid #eaeaea;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 3px 6px rgba(0,0,0,0.05);
    transition: transform 0.2s ease;
  }
  .member-card:hover {
    transform: translateY(-5px);
  }

  /* 🖼️ 증명사진 설정: 잘리지 않고 전체가 나오도록 함 */
  .member-photo {
    width: 100%;
    height: 250px; /* 사진 크기를 약간 줄임 */
    object-fit: contain; /* 사진 전체를 유지 */
    background-color: #fcfcfc; 
    border-bottom: 1px solid #eee;
    padding: 10px; 
    box-sizing: border-box;
  }

  .member-info {
    padding: 15px;
  }
  .member-name {
    font-size: 1.15rem;
    font-weight: 700;
    margin: 0 0 5px 0;
  }
  .member-role {
    font-size: 0.95rem;
    font-weight: 600;
    margin-bottom: 10px;
  }
  .member-detail {
    font-size: 0.85rem;
    color: #666;
    margin: 3px 0;
    line-height: 1.4;
  }
/* 연구 주제 리스트 스타일 */
  .member-research-list {
    margin: 5px 0 0 0;
    padding-left: 18px; /* 점이 들어갈 왼쪽 여백 */
    list-style-type: disc; /* 작은 원형 점 */
  }

</style>

## M.S. Students
<div class="team-grid">
  <div class="member-card">
    <img src="https://labhomepage.github.io/sassl/images/ms1.png" alt="정성훈" class="member-photo">
    <div class="member-info">
      <h3 class="member-name">정성훈 (Chung, Sunghun)</h3>
      <p class="member-role">M.S. Student</p>
      <p class="member-detail"><b>Email:</b> wjdtjdgns404@naver.com</p>
      <p class="member-detail"><b>Research:</b></p>
      <ul class="member-research-list">
        <li>Bond performance of GFRP rebar and CO2 cured concrete</li>
      </ul></div>
  </div>
</div>

{% include section.html %}

## Undergraduate Researchers (Senior)
<div class="team-grid">
  <div class="member-card">
    <img src="images/members2.jpg" alt="Senior" class="member-photo">
    <div class="member-info">
      <h3 class="member-name">학부생 1 (Name)</h3>
      <p class="member-role">Senior</p>
      <p class="member-detail"><b>Email:</b> email@address.com</p>
    </div>
  </div>
</div>

{% include section.html %}

## Undergraduate Researchers (Junior)
<div class="team-grid">
  <div class="member-card">
    <img src="images/members7.jpg" alt="Junior" class="member-photo">
    <div class="member-info">
      <h3 class="member-name">학부생 6 (Name)</h3>
      <p class="member-role">Junior</p>
      <p class="member-detail"><b>Email:</b> email@address.com</p>
    </div>
  </div>
</div>

{% include section.html %}

## Collaborating Researchers
<div class="team-grid">
  <div class="member-card">
    <img src="https://labhomepage.github.io/sassl/images/collab1.JPG" alt="이장재" class="member-photo">
    <div class="member-info">
      <h3 class="member-name">이장재 (Lee, Jangjae)</h3>
      <p class="member-role">Postdoctoral Researcher</p>
      <p class="member-detail"><b>Affiliation:</b> University of Houston</p>
      <ul class="member-research-list">
        <li>Community/infrastructure resilience</li>
        <li>Application of machine learning to RC structure</li>
        <li>Mitigation of damage from natural hazard </li>
      </ul></div>
  </div>
</div>
