---
title: Team
nav:
  order: 4
---

# {% include icon.html icon="fa-solid fa-users" %} Team

<style>
  /* 그리드 레이아웃 */
  .team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 25px;
    margin-top: 20px;
    margin-bottom: 40px;
  }

  .member-card {
    background: #ffffff;
    border: 1px solid #eaeaea;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 3px 6px rgba(0,0,0,0.05);
    transition: transform 0.2s ease;
    display: flex;
    flex-direction: column;
  }

  .member-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0,0,0,0.1);
  }

  /* 🖼️ 증명사진 최적화: 잘리지 않고 전체 출력 */
  .member-photo {
    width: 100%;
    height: 180px; 
    object-fit: contain; 
    background-color: #f8f9fa; 
    border-bottom: 1px solid #eee;
    padding: 15px; 
    box-sizing: border-box;
  }

  .member-info {
    padding: 15px;
    flex-grow: 1;
  }

  .member-name {
    font-size: 1.15rem;
    font-weight: 700;
    margin: 0 0 5px 0;
    color: #111;
  }

  .member-role {
    font-size: 0.9rem;
    font-weight: 600;
    color: #004488; 
    margin: 0 0 10px 0;
  }

  .member-detail {
    font-size: 0.85rem;
    color: #555;
    margin: 3px 0;
    line-height: 1.4;
    word-break: keep-all;
  }

  .detail-label {
    font-weight: 600;
    color: #333;
  }

  /* 섹션 구분선 스타일 */
  h2 {
    margin-top: 50px;
    border-bottom: 2px solid #333;
    padding-bottom: 10px;
    font-size: 1.6rem;
  }
</style>

## M.S. Students
<div class="team-grid">
  <div class="member-card">
    <img src="https://labhomepage.github.io/sassl/images/ms1.png" alt="정성훈" class="member-photo">
    <div class="member-info">
      <h3 class="member-name">정성훈 (Chung, Sunghun)</h3>
      <p class="member-role">M.S. Student</p>
      <p class="member-detail"><span class="detail-label">Email:</span> wjdtjdgns404@naver.com</p>
      <p class="member-detail"><span class="detail-label">Research:</span> Bond performance of GFRP rebar in carbonated recycled aggregate concrete</p>
    </div>
  </div>
</div>

## Undergraduate Researchers (Senior)
<div class="team-grid">
  <div class="member-card">
    <img src="images/members2.jpg" alt="학부 4학년" class="member-photo">
    <div class="member-info">
      <h3 class="member-name">학부생 1 (Name)</h3>
      <p class="member-role">Senior</p>
      <p class="member-detail"><span class="detail-label">Email:</span> email@address.com</p>
      <p class="member-detail"><span class="detail-label">Research:</span> GFRP Bond Behavior</p>
    </div>
  </div>
  </div>

## Undergraduate Researchers (Junior)
<div class="team-grid">
  <div class="member-card">
    <img src="images/members7.jpg" alt="학부 3학년" class="member-photo">
    <div class="member-info">
      <h3 class="member-name">학부생 6 (Name)</h3>
      <p class="member-role">Junior</p>
      <p class="member-detail"><span class="detail-label">Email:</span> email@address.com</p>
      <p class="member-detail"><span class="detail-label">Research:</span> Data Analysis</p>
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
      <p class="member-detail"><span class="detail-label">Affiliation:</span> University of Houston</p>
      <p class="member-detail"><span class="detail-label">Research:</span> Community/infrastructure resilience, Machine learning</p>
    </div>
  </div>
</div>

## Alumni {#alumni}
<div class="team-grid">
  <div class="member-card">
    <img src="images/alumni1.jpg" alt="졸업생" class="member-photo">
    <div class="member-info">
      <h3 class="member-name">졸업생 1 (Name)</h3>
      <p class="member-role">M.S. Class of 2023</p>
      <p class="member-detail"><span class="detail-label">Current:</span> Dasan Enterprise</p>
    </div>
  </div>
</div>
