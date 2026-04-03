---
title: Team
nav:
  order: 4
---

# {% include icon.html icon="fa-solid fa-users" %} Team

<style>
  .team-grid {
    display: grid;
    /* 카드 너비를 280px로 더 늘려서 이름이 옆으로 길게 들어갈 공간 확보 */
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 30px;
    margin-top: 20px;
  }

  .member-card {
    background: #ffffff;
    border: 1px solid #eaeaea;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 3px 6px rgba(0,0,0,0.05);
  }

  .member-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0,0,0,0.1);
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
    padding: 20px;
  }

  /* 이름 부분: 모두 검은색 */
  .member-name {
    font-size: 1.3rem;
    font-weight: 700;
    margin: 0 0 3px 0;
    color: #000;
    white-space: nowrap; /* 이름이 카드 안에서 강제로 줄바꿈되지 않게 함 */
  }

  /* 영어 이름: 한국어 옆에 붙고, 크기만 작게 */
  .member-name-en {
    font-size: 1.0rem; /* 영어 이름 크기 축소 */
    font-weight: 600;
    color: #000;
    margin-left: 8px; /* 한국어 이름과의 간격 */
    display: inline-block; /* 옆으로 나란히 배치 */
  }

  .member-role {
    font-size: 1.0rem;
    font-weight: 700;
    color: #000;
    margin-bottom: 12px;
  }

  .member-detail {
    font-size: 0.9rem;
    color: #000;
    margin: 4px 0;
    line-height: 1.5;
    text-align: left;
  }

  /* 연구 주제: 글씨 크기 줄이고 줄간격 좁게 조정 */
  .member-research-list {
    margin: 0;
    padding-left: 12px; 
    list-style-type: disc;
    color: #333;
  }

  .member-research-list li {
    font-size: 0.9rem; 
    line-height: 1.3;   /* 줄간격 좁게 */
    margin-top: 2px;
    margin-bottom: 2px;
    word-break: keep-all;
  }

  /* 세부 항목 라벨 스타일 (추가) */
  .member-detail b {
    color: #555;      /* 라벨 색상을 약간 흐리게 */
    font-weight: 600; /* 너무 두껍지 않게 조정 */
    margin-right: 5px;
  }
</style>

## M.S. Students
<div class="team-grid">
  <div class="member-card">
    <img src="https://labhomepage.github.io/sassl/images/ms1.png" alt="정성훈" class="member-photo">
    <div class="member-info">
      <h3 class="member-name">
        정성훈 <span class="member-name-en">(Jung, Sunghoon)</span>
      </h3>
      <p class="member-role">M.S. Student</p>
      <p class="member-detail"><b>Email:</b> wjdtjdgns404@naver.com</p>
      <div class="member-detail">
        <b>Research:</b>
        <ul class="member-research-list">
          <li>Bond performance of GFRP rebar and CO2 cured concrete</li>
        </ul>
      </div>
    </div>
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
      <div class="member-detail">
        <b>Research:</b>
        <ul class="member-research-list">
          <li>Community/infrastructure resilience</li>
          <li>Application of machine learning to RC structure</li>
          <li>Mitigation of damage from natural hazard </li>
        </ul>
      </div>
    </div>
  </div>
</div>
