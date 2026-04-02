---
title: Team
nav:
  order: 4
---

# {% include icon.html icon="fa-solid fa-users" %} Team

<style>
  .team-grid {
    display: grid;
    /* 카드 최소 너비를 220px -> 260px로 늘려 이름 줄바꿈 방지 */
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 30px;
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

  .member-photo {
    width: 100%;
    height: 250px; 
    object-fit: contain; 
    background-color: #fcfcfc; 
    border-bottom: 1px solid #eee;
    padding: 10px; 
    box-sizing: border-box;
  }

  .member-info {
    padding: 20px; /* 여백을 조금 더 주어 시원하게 배치 */
  }

  .member-name {
    font-size: 1.2rem; /* 한국어 이름 크기 */
    font-weight: 700;
    margin: 0 0 8px 0;
    color: #000; /* 검은색 */
  }

  /* 영어 이름을 위한 스타일 추가 */
  .member-name-en {
    font-size: 0.95rem; /* 영어 이름은 살짝 작게 */
    font-weight: 400;
    color: #333;
    display: block; /* 이름 아래로 배치하거나 한 줄로 두려면 inline 사용 */
    margin-top: 2px;
  }

  .member-role {
    font-size: 1.0rem;
    font-weight: 700;
    color: #000;
    margin-bottom: 15px;
  }

  .member-detail {
    font-size: 0.9rem;
    color: #000; /* 모두 검은색 */
    margin: 4px 0;
    line-height: 1.5;
  }

  /* 연구 주제 리스트: 줄간격과 글씨 크기 축소 */
  .member-research-list {
    margin: 5px 0 0 0;
    padding-left: 18px; 
    list-style-type: disc;
    color: #000;
  }

  .member-research-list li {
    font-size: 0.85rem; /* 리스트 글씨 크기 줄임 */
    line-height: 1.3;   /* 줄간격 좁게 설정 */
    margin-bottom: 4px;
    word-break: keep-all;
  }
</style>

## M.S. Students
<div class="team-grid">
  <div class="member-card">
    <img src="https://labhomepage.github.io/sassl/images/ms1.png" alt="정성훈" class="member-photo">
    <div class="member-info">
      <h3 class="member-name">
        정성훈 <span class="member-name-en">(Chung, Sunghun)</span>
      </h3>
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
      <h3 class="member-name">
      이장재 <span class="member-name-en">(Lee, Jangjae)</span>
      </h3>
      <p class="member-role">Postdoctoral Researcher</p>
      <p class="member-detail"><b>Affiliation:</b> University of Houston</p>
      <ul class="member-research-list">
        <li>Community/infrastructure resilience</li>
        <li>Application of machine learning to RC structure</li>
        <li>Mitigation of damage from natural hazard </li>
      </ul></div>
  </div>
</div>
