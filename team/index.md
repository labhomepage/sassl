---
title: Team
nav:
  order: 3
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
    margin: 0 !important;   /* !important를 붙여 브라우저 기본 마진을 무시 */
    color: #000;
    white-space: nowrap; /* 이름이 카드 안에서 강제로 줄바꿈되지 않게 함 */
  }

  /* 영어 이름: 한국어 옆에 붙고, 크기만 작게 */
  .member-name-en {
    font-size: 1.0rem; /* 영어 이름 크기 축소 */
    font-weight: 600;
    color: #000;
    margin-left: 5px; /* 한국어 이름과의 간격 */
    display: inline-block; /* 옆으로 나란히 배치 */
    /* 자간(글자 사이 간격)을 미세하게 좁힘 */
    letter-spacing: -0.01em; /* -0.02em ~ -0.05em 사이에서 조절해 보세요 */
  }

  .member-role {
    font-size: 1.1rem;
    font-weight: 700;
    color: #000;
    margin: 0 0 10px 0 !important; /* 위 마진은 0, 아래만 10px */
  }

  .member-detail {
    font-size: 0.9rem;
    color: #000;
    margin: 2px 0;
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

  .team-grid-narrow {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
    gap: 30px;
    margin-top: 20px;
  }

  .team-grid-narrow .member-photo {
    height: 200px;
  }
  
  .member-name-en-block {
    display: block;
    font-size: 1.0rem;
    font-weight: 600;
    color: #000;
    letter-spacing: -0.01em;
    margin-top: 2px;      /* 한글이름과의 위아래 간격 (좁게) */
    margin-bottom: 6px;   /* 영문이름과 Senior 사이 간격 */
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
<div class="team-grid-narrow">
  <div class="member-card">
    <img src="https://labhomepage.github.io/sassl/images/김주영.png" alt="김주영" class="member-photo">
    <div class="member-info">
      <h3 class="member-name">김주영 <span class="member-name-en-block">(Kim, Juyoung)</span></h3>
      <p class="member-role">Senior</p>
      <p class="member-detail"><b>Email:</b> juyong1229@gmail.com</p>
    </div>
  </div>

  <div class="member-card">
    <img src="https://labhomepage.github.io/sassl/images/박채영.jpg" alt="박채영" class="member-photo"> 
    <div class="member-info">
      <h3 class="member-name">박채영 <span class="member-name-en-block">(Park, Chaeyoung)</span></h3>
      <p class="member-role">Senior</p>
      <p class="member-detail"><b>Email:</b> chae05220@naver.com</p>
    </div>
  </div>

  <div class="member-card">
    <img src="https://labhomepage.github.io/sassl/images/정민경.png" alt="정민경" class="member-photo"> 
    <div class="member-info">
      <h3 class="member-name">정민경 <span class="member-name-en-block">(Jung, Minkyung)</span></h3>
      <p class="member-role">Senior</p>
      <p class="member-detail"><b>Email:</b> alsrudwjddoli@naver.com</p>
    </div>
  </div>

  <div class="member-card">
    <img src="https://labhomepage.github.io/sassl/images/허진영.jpg" alt="허진영" class="member-photo"> 
    <div class="member-info">
      <h3 class="member-name">허진영 <span class="member-name-en-block">(Heo, Jinyoung)</span></h3>
      <p class="member-role">Senior</p>
      <p class="member-detail"><b>Email:</b> gjwlsdud021210@naver.com</p>
    </div>
  </div>

  <div class="member-card">
    <img src="https://labhomepage.github.io/sassl/images/황해원.jpg" alt="황해원" class="member-photo"> 
    <div class="member-info">
      <h3 class="member-name">황해원 <span class="member-name-en-block">(Hwang, Haewon)</span></h3>
      <p class="member-role">Senior</p>
      <p class="member-detail"><b>Email:</b> hwanghw512@naver.com</p>
    </div>
  </div>
</div>

{% include section.html %}

## Undergraduate Researchers (Junior)
<div class="team-grid-narrow">
  <div class="member-card">
    <img src="https://labhomepage.github.io/sassl/images/%EC%9C%A4%EC%84%B1%EC%88%98.jpg" alt="윤성수" class="member-photo">
    <div class="member-info">
      <h3 class="member-name">윤성수 <span class="member-name-en-block">(Yoon, Seongsu)</span></h3>
      <p class="member-role">Junior</p>
      <p class="member-detail"><b>Email:</b> yss031226@naver.com</p>
    </div>
  </div>

  <div class="member-card">
    <img src="https://labhomepage.github.io/sassl/images/%EA%B8%88%EC%8A%B9%EC%9A%B0.jpg" alt="금승우" class="member-photo">
    <div class="member-info">
      <h3 class="member-name">금승우 <span class="member-name-en-block">(Geum, Seungwoo)</span></h3>
      <p class="member-role">Junior</p>
      <p class="member-detail"><b>Email:</b> rmatmddn0815@naver.com</p>
    </div>
  </div>

  <div class="member-card">
    <img src="https://labhomepage.github.io/sassl/images/%EB%B0%B1%EC%A2%85%EC%9A%B0.jpg" alt="백종우" class="member-photo">
    <div class="member-info">
      <h3 class="member-name">백종우 <span class="member-name-en-block">(Baek, Jongwoo)</span></h3>
      <p class="member-role">Junior</p>
      <p class="member-detail"><b>Email:</b> baekjohn8821@gmail.com</p>
    </div>
  </div>

  <div class="member-card">
    <img src="https://labhomepage.github.io/sassl/images/%EC%86%90%ED%98%84%EC%9A%B0.jpg" alt="손현우" class="member-photo">
    <div class="member-info">
      <h3 class="member-name">손현우 <span class="member-name-en-block">(Son, Hyunwoo)</span></h3>
      <p class="member-role">Junior</p>
      <p class="member-detail"><b>Email:</b> mn030307@gmail.com</p>
    </div>
  </div>

  <div class="member-card">
    <img src="https://labhomepage.github.io/sassl/images/%EC%A1%B0%ED%98%84%EB%AF%BC.jpg" alt="조현민" class="member-photo">
    <div class="member-info">
      <h3 class="member-name">조현민 <span class="member-name-en-block">(Cho, Hyunmin)</span></h3>
      <p class="member-role">Junior</p>
      <p class="member-detail"><b>Email:</b> whgusals0808@naver.com</p>
    </div>
  </div>
</div>
{% include section.html %}



## Collaborating Researchers

<div class="team-grid">
  <div class="member-card">
    <img src="https://labhomepage.github.io/sassl/images/%EC%B5%9C%EC%B0%BD%EC%8B%9D%20%EA%B5%90%EC%88%98.jpg" alt="최창식" class="member-photo">
    <div class="member-info">
      <h3 class="member-name">최창식 교수 <span class="member-name-en">(Choi, Chang-Sik)</span></h3>
      <p class="member-role">Professor</p>
      <p class="member-detail"><b>Affiliation:</b> Dept. of Architectural Engineering, Hanyang University</p>
    </div>
  </div>

  <div class="member-card">
    <img src="https://labhomepage.github.io/sassl/images/%EB%B0%B0%EB%B0%B1%EC%9D%BC%20%EA%B5%90%EC%88%98.jpg" alt="배백일" class="member-photo">
    <div class="member-info">
      <h3 class="member-name">배백일 교수 <span class="member-name-en">(Bae, Baek-Il)</span></h3>
      <p class="member-role">Professor</p>
      <p class="member-detail"><b>Affiliation:</b> Dept. of Architectural and Urban Engineering, Hanyang Cyber University</p>
    </div>
  </div>

  <div class="member-card">
    <img src="https://labhomepage.github.io/sassl/images/%EC%A0%95%EC%A3%BC%ED%99%8D%20%EA%B5%90%EC%88%98.jpg" alt="정주홍" class="member-photo">
    <div class="member-info">
      <h3 class="member-name">정주홍 교수 <span class="member-name-en">(Jung, Joo-Hong)</span></h3>
      <p class="member-role">Professor</p>
      <p class="member-detail"><b>Affiliation:</b> Dept. of Architectural Engineering, Daejin University</p>
    </div>
  </div>

  <div class="member-card">
    <img src="https://labhomepage.github.io/sassl/images/%EC%84%9D%EC%8A%B9%EC%9A%B1%20%EA%B5%90%EC%88%98.jpg" alt="석승욱" class="member-photo">
    <div class="member-info">
      <h3 class="member-name">석승욱 교수 <span class="member-name-en">(Seok, Seungwook)</span></h3>
      <p class="member-role">Professor</p>
      <p class="member-detail"><b>Affiliation:</b> Dept. of Architectural Engineering, Gachon University</p>
    </div>
  </div>

  <div class="member-card">
    <img src="https://labhomepage.github.io/sassl/images/%EC%84%9C%ED%98%95%EC%9B%90%20%EA%B5%90%EC%88%98.jpg" alt="서형원" class="member-photo">
    <div class="member-info">
      <h3 class="member-name">서형원 교수 <span class="member-name-en">(Suh, Heongwon)</span></h3>
      <p class="member-role">Professor</p>
      <p class="member-detail"><b>Affiliation:</b> Dept. of Architectural Engineering, Pusan National University</p>
    </div>
  </div>

  <div class="member-card">
    <img src="https://labhomepage.github.io/sassl/images/collab1.JPG" alt="이장재" class="member-photo">
    <div class="member-info">
      <h3 class="member-name">
      이장재 박사 <span class="member-name-en">(Lee, Jangjae)</span>
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
