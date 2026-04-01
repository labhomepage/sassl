---
title: Team
nav:
  order: 4
---

# {% include icon.html icon="fa-solid fa-users" %} Team


<!-- 공통 CSS 스타일 -->
<style>
  .team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 30px;
    margin-top: 20px;
    margin-bottom: 50px;
  }

  .member-card {
    background: #ffffff;
    border: 1px solid #eaeaea;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  .member-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0,0,0,0.1);
  }

  .member-photo {
    width: 100%;
    height: 250px;
    object-fit: cover;
    object-position: center;
    border-bottom: 1px solid #eaeaea;
  }

  .member-info {
    padding: 18px;
    text-align: left;
  }
  .member-name {
    font-size: 1.2rem;
    font-weight: 700;
    margin: 0 0 5px 0;
    color: #222;
  }
  .member-role {
    font-size: 0.95rem;
    font-weight: 600;
    color: #55555;
    margin: 0 0 12px 0;
  }
  .member-detail {
    font-size: 0.85rem;
    color: #555;
    margin: 4px 0;
    line-height: 1.5;
  }
  .detail-label {
    font-weight: 600;
    color: #333;
  }
</style>


## Members
<div class="team-grid">

  <!-- 석사과정 (1명) -->
  <div class="member-card">
    <img src="https://labhomepage.github.io/sassl/images/ms1.png" alt="석사연구생" class="member-photo">
    <div class="member-info">
      <h3 class="member-name">정성훈 (Chung, Sunghun)</h3>
      <p class="member-role">M.S. Student</p>
      <p class="member-detail"><span class="detail-label">Email:</span> wjdtjdgns404@naver.com</p>
      <p class="member-detail"><span class="detail-label">Research:</span> Bond performance of GFRP rebar in carbonated recycled aggregate concrete</p>
    </div>
  </div>

  <!-- 학부연구생 4학년 (5명) -->
  <div class="member-card">
    <img src="images/members2.jpg" alt="학부 4학년 1" class="member-photo">
    <div class="member-info">
      <h3 class="member-name">학부생 1 (Name)</h3>
      <p class="member-role">Undergraduate Researcher(Senior)</p>
      <p class="member-detail"><span class="detail-label">Email:</span> email@address.com</p>
      <p class="member-detail"><span class="detail-label">Research:</span> GFRP Bond Behavior</p>
    </div>
  </div>

  <div class="member-card">
    <img src="images/members3.jpg" alt="학부 4학년 2" class="member-photo">
    <div class="member-info">
      <h3 class="member-name">학부생 2 (Name)</h3>
      <p class="member-role">Undergraduate Researcher(Senior)</p>
      <p class="member-detail"><span class="detail-label">Email:</span> email@address.com</p>
      <p class="member-detail"><span class="detail-label">Research:</span> Recycled Aggregates</p>
    </div>
  </div>

  <div class="member-card">
    <img src="images/members4.jpg" alt="학부 4학년 3" class="member-photo">
    <div class="member-info">
      <h3 class="member-name">학부생 3 (Name)</h3>
      <p class="member-role">Undergraduate Researcher(Senior)</p>
      <p class="member-detail"><span class="detail-label">Email:</span> email@address.com</p>
      <p class="member-detail"><span class="detail-label">Research:</span> FEM Modeling</p>
    </div>
  </div>

  <div class="member-card">
    <img src="images/members5.jpg" alt="학부 4학년 4" class="member-photo">
    <div class="member-info">
      <h3 class="member-name">학부생 4 (Name)</h3>
      <p class="member-role">Undergraduate Researcher(Senior)</p>
      <p class="member-detail"><span class="detail-label">Email:</span> email@address.com</p>
      <p class="member-detail"><span class="detail-label">Research:</span> Structural Testing</p>
    </div>
  </div>

  <div class="member-card">
    <img src="images/members6.jpg" alt="학부 4학년 5" class="member-photo">
    <div class="member-info">
      <h3 class="member-name">학부생 5 (Name)</h3>
      <p class="member-role">Undergraduate Researcher(Senior)</p>
      <p class="member-detail"><span class="detail-label">Email:</span> email@address.com</p>
      <p class="member-detail"><span class="detail-label">Research:</span> UTM Simulation</p>
    </div>
  </div>

  <!-- 학부연구생 3학년 (3명) -->
  <div class="member-card">
    <img src="images/members7.jpg" alt="학부 3학년 1" class="member-photo">
    <div class="member-info">
      <h3 class="member-name">학부생 6 (Name)</h3>
      <p class="member-role">Bachelor's Course (Junior)</p>
      <p class="member-detail"><span class="detail-label">Email:</span> email@address.com</p>
      <p class="member-detail"><span class="detail-label">Research:</span> Data Analysis</p>
    </div>
  </div>

  <div class="member-card">
    <img src="images/members8.jpg" alt="학부 3학년 2" class="member-photo">
    <div class="member-info">
      <h3 class="member-name">학부생 7 (Name)</h3>
      <p class="member-role">Bachelor's Course (Junior)</p>
      <p class="member-detail"><span class="detail-label">Email:</span> email@address.com</p>
      <p class="member-detail"><span class="detail-label">Research:</span> TG/DTA Analysis</p>
    </div>
  </div>

  <div class="member-card">
    <img src="images/members9.jpg" alt="학부 3학년 3" class="member-photo">
    <div class="member-info">
      <h3 class="member-name">학부생 8 (Name)</h3>
      <p class="member-role">Bachelor's Course (Junior)</p>
      <p class="member-detail"><span class="detail-label">Email:</span> email@address.com</p>
      <p class="member-detail"><span class="detail-label">Research:</span> HPC Infrastructure</p>
    </div>
  </div>

</div>


{% include section.html %}

## Collaborating Researchers
<div class="team-grid">
  <!-- 공동 연구자 1 -->
  <div class="member-card">
    <img src="sassl/images/collab1.JPG" alt="공동연구자1" class="member-photo">
    <div class="member-info">
      <h3 class="member-name">이장재 (Lee, Jangjae)</h3>
      <p class="member-role">Postdoctoral Researchear</p>
      <p class="member-detail"><span class="detail-label">Affiliation:</span> University of Houston</p>
      <p class="member-detail"><span class="detail-label">Research:</span> Community/infrastructure resilience, application of machine learning to concrete structure, mitigation of damage from natural hazard </p>
    </div>
  </div>
</div>


## Alumni {#alumni}
<div class="team-grid">
  <!-- 졸업생 1 -->
  <div class="member-card">
    <img src="images/alumni1.jpg" alt="Alumni 1" class="member-photo">
    <div class="member-info">
      <h3 class="member-name">졸업생 1 (Name)</h3>
      <p class="member-role">M.S. Class of 2023</p>
      <p class="member-detail"><span class="detail-label">Current:</span> Dasan Enterprise</p>
    </div>
  </div>
</div>
