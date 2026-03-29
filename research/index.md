---
title: Research
nav:
  order: 2
---

# {% include icon.html icon="fa-solid fa-microscope" %}Research

## Research Areas
<style>
  /* 2x2 그리드 설정 (PC에서는 2열, 모바일에서는 1열) */
  .research-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 40px;
    margin-top: 30px;
    margin-bottom: 50px;
  }

  /* 각 연구 주제 블록 */
  .research-item {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  /* 제목 (네이비 사각형 + 밑줄) */
  .research-title {
    font-size: 1.3rem;
    font-weight: 700;
    color: #111;
    display: flex;
    align-items: center;
    gap: 10px;
    border-bottom: 2px solid #ddd;
    padding-bottom: 8px;
    margin: 0;
  }
  .research-title::before {
    content: '';
    display: inline-block;
    width: 16px;
    height: 16px;
    background-color: #000000; /* 네이비색 사각형 */
  }

  /* 본문 영역 (좌측 이미지, 우측 텍스트) */
  .research-content {
    display: flex;
    gap: 20px;
    align-items: flex-start;
  }

  /* 이미지 영역 */
  .research-img {
    flex: 0 0 180px; /* 이미지 너비 고정 */
  }
  .research-img img {
    width: 100%;
    height: auto;
    border: 1px solid #eaeaea;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  }

  /* 텍스트(리스트) 영역 */
  .research-text {
    flex: 1;
  }
  .research-text ul {
    margin: 0;
    padding-left: 20px;
    color: #333;
  }
  .research-text li {
    font-size: 0.95rem;
    line-height: 1.5;
    margin-bottom: 8px;
    word-break: keep-all; /* 단어 단위로 줄바꿈 (가독성 향상) */
  }

  /* 모바일 화면 대응 (이미지와 텍스트를 위아래로 배치) */
  @media (max-width: 600px) {
    .research-content {
      flex-direction: column;
    }
    .research-img {
      flex: 0 0 auto;
      width: 100%;
    }
  }
</style>

<div class="research-grid">

  <!-- 1. 노후 건축물 리모델링 -->
  <div class="research-item">
    <h3 class="research-title">노후 건축물 리모델링 및 내진보강기술 개발</h3>
    <div class="research-content">
      <div class="research-img">
        <img src="/images/Research_1.png" alt="내진실험">
      </div>
      <div class="research-text">
        <ul>
          <li>공동주택 벽식구조 실규모 내진실험</li>
          <li>하중 재분배 기술 제안 및 기술인증</li>
          <li>RC 전단벽 보강설계기법 제안</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- 2. 고성능 콘크리트 -->
  <div class="research-item">
    <h3 class="research-title">고성능 콘크리트 개발 및 내진성능평가</h3>
    <div class="research-content">
      <div class="research-img">
        <img src="/images/Research_2.png" alt="콘크리트 배합">
      </div>
      <div class="research-text">
        <ul>
          <li>삼중 나노콘크리트 배합기술 개발</li>
          <li>삼중 나노콘크리트 역학적 성능 향상 규명</li>
          <li>나노 콘크리트-철근 부착성능 평가</li>
          <li>강섬유 보강 콘크리트 (SFRC) 구조부재 내진실험</li>
          <li>접합부 정착성능 및 내진성능평가</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- 3. 컴퓨터 시뮬레이션 -->
  <div class="research-item">
    <h3 class="research-title">유한요소해석 기반 컴퓨터 시뮬레이션</h3>
    <div class="research-content">
      <div class="research-img">
        <img src="/images/Research_3.png" alt="유한요소해석">
      </div>
      <div class="research-text">
        <ul>
          <li>DIANA FEA 활용 철근콘크리트 전단벽 내진성능 시뮬레이션 수행</li>
          <li>VecTor2 활용 벽식구조 휨보강 설계</li>
          <li>MIDAS GEN 선형동적해석을 통한 철근콘크리트 공동주택 리모델링 구조설계</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- 4. 인공지능 구조설계 -->
  <div class="research-item">
    <h3 class="research-title">인공지능 활용 구조설계기법 개발</h3>
    <div class="research-content">
      <div class="research-img">
        <img src="/images/Research_4.png" alt="AI 구조설계">
      </div>
      <div class="research-text">
        <ul>
          <li>디지털 이미지 상관법 (DIC) 활용 콘크리트 응력분포 및 균열계측</li>
          <li>머신러닝을 활용한 강섬유 보강 콘크리트 대형 보의 전단설계 메커니즘 규명</li>
          <li>데이터 필터링 알고리즘 구축 및 비선형 회귀분석을 통한 SFRC 전단설계식 제안</li>
        </ul>
      </div>
    </div>
  </div>

</div>

{% include section.html %}


## Research Projects

<style>
  .projects-wrapper { margin-top: 30px; margin-bottom: 50px; text-align: left; }
  .project-item { margin-bottom: 24px; padding-bottom: 20px; border-bottom: 1px dashed #e0e0e0; }
  .project-item:last-child { border-bottom: none; }
  .project-title { font-size: 1.1rem; font-weight: 700; color: #222; margin-bottom: 8px; }
  .project-meta { font-size: 0.9rem; color: #666; }
  .meta-role { font-weight: 700; }
  .meta-role.pi { color: #003399; }
  .meta-divider { margin: 0 10px; color: #ccc; font-weight: 300; }
</style>

<div class="projects-wrapper">
  <div class="project-item">
    <div class="project-title">18. 신·구 콘크리트 접합부에 대한 이종 보강재 적용 연구</div>
    <div class="project-meta"><span class="meta-role">연구원</span><span class="meta-divider">|</span>한국구조물진단유지관리공학회<span class="meta-divider">|</span>2025.09.01 ~ 2025.11.30</div>
  </div>
  <div class="project-item">
    <div class="project-title">17. 딥러닝 활용 노후 철근콘크리트 구조물의 균열 계측 및 잔존 내진성능 기반 보강기술 개발</div>
    <div class="project-meta"><span class="meta-role pi">연구책임자</span><span class="meta-divider">|</span>한양대학교<span class="meta-divider">|</span>2024.09.01 ~ 2025.02.28</div>
  </div>
  <div class="project-item">
    <div class="project-title">16. 안정커뮤니티광장 지하주차장 사고 후 대책 및 보강방안</div>
    <div class="project-meta"><span class="meta-role">연구원</span><span class="meta-divider">|</span>대한건축학회<span class="meta-divider">|</span>2024.07.01 ~ 2024.12.31</div>
  </div>
  <div class="project-item">
    <div class="project-title">15. 건축구조기사 국가기술자격 신설 및 활용방안 마련을 위한 연구</div>
    <div class="project-meta"><span class="meta-role">연구원</span><span class="meta-divider">|</span>국토교통부<span class="meta-divider">|</span>2024.05.22 ~ 2025.01.16</div>
  </div>
  <div class="project-item">
    <div class="project-title">14. 인천검단 AA13-1BL, 2BL 공동주택 특별정밀안전진단</div>
    <div class="project-meta"><span class="meta-role">연구보조원</span><span class="meta-divider">|</span>대한건축학회<span class="meta-divider">|</span>2023.05.25 ~ 2023.10.13</div>
  </div>
  <div class="project-item">
    <div class="project-title">13. 딥러닝 기반 노후 철근콘크리트 구조물의 성능예측 기술개발</div>
    <div class="project-meta"><span class="meta-role pi">연구책임자</span><span class="meta-divider">|</span>한국연구재단<span class="meta-divider">|</span>2022.06.01 ~ 2024.02.16</div>
  </div>
  <div class="project-item">
    <div class="project-title">12. 고성능 프리캐스트 콘크리트 구조물의 성능기반 내진설계기술 개발</div>
    <div class="project-meta"><span class="meta-role">연구원</span><span class="meta-divider">|</span>한국연구재단<span class="meta-divider">|</span>2022.03.01 ~ 2025.02.28</div>
  </div>
  <div class="project-item">
    <div class="project-title">11. 개선된 강재 단면상세가 적용된 CFT 기둥 개발</div>
    <div class="project-meta"><span class="meta-role">연구원</span><span class="meta-divider">|</span>한우물중공업<span class="meta-divider">|</span>2021.02.01 ~ 2022.12.15</div>
  </div>
  <div class="project-item">
    <div class="project-title">10. 다기능·멀티스케일 건축재료 기반 성능설계 융합기술 개발</div>
    <div class="project-meta"><span class="meta-role">연구원</span><span class="meta-divider">|</span>한국연구재단<span class="meta-divider">|</span>2020.09.01 ~ 2025.02.28</div>
  </div>
  <div class="project-item">
    <div class="project-title">9. 수직증축 리모델링 최적 상부보강기술 개발</div>
    <div class="project-meta"><span class="meta-role">연구원</span><span class="meta-divider">|</span>국토교통부<span class="meta-divider">|</span>2020.09.01 ~ 2022.12.31</div>
  </div>
  <div class="project-item">
    <div class="project-title">8. Macro Fiber로 보강된 데크플레이트 슬래브 개발</div>
    <div class="project-meta"><span class="meta-role">연구원</span><span class="meta-divider">|</span>매크로테크<span class="meta-divider">|</span>2020.09.01 ~ 2021.08.31</div>
  </div>
  <div class="project-item">
    <div class="project-title">7. 고성능 재료를 사용한 철근콘크리트 병렬전단벽과 연결보의 내진성능 및 변형기반 설계기술 개발</div>
    <div class="project-meta"><span class="meta-role">연구원</span><span class="meta-divider">|</span>한국연구재단<span class="meta-divider">|</span>2020.09.01 ~ 2021.02.28</div>
  </div>
  <div class="project-item">
    <div class="project-title">6. 비내진 상세를 가진 철근콘크리트 골조의 내진보강용 벽체형 마찰댐퍼 성능시험</div>
    <div class="project-meta"><span class="meta-role">연구원</span><span class="meta-divider">|</span>아라스틸산업<span class="meta-divider">|</span>2018.10.11 ~ 2019.02.28</div>
  </div>
  <div class="project-item">
    <div class="project-title">5. 국가표준 한국건축규정 개발</div>
    <div class="project-meta"><span class="meta-role">연구원</span><span class="meta-divider">|</span>국토교통부<span class="meta-divider">|</span>2017.08.01 ~ 2018.12.31</div>
  </div>
  <div class="project-item">
    <div class="project-title">4. YG-데크플레이트 개발</div>
    <div class="project-meta"><span class="meta-role">연구원</span><span class="meta-divider">|</span>중소벤처기업부<span class="meta-divider">|</span>2017.12.01 ~ 2018.11.30</div>
  </div>
  <div class="project-item">
    <div class="project-title">3. 재하실험에 의한 LYS 슬래브의 구조성능에 관한 연구</div>
    <div class="project-meta"><span class="meta-role">연구원</span><span class="meta-divider">|</span>연구피씨엔지니어링<span class="meta-divider">|</span>2017.12.01 ~ 2018.04.22</div>
  </div>
  <div class="project-item">
    <div class="project-title">2. 고강도 철근의 보완성능실험을 통한 설계기술기준 개발</div>
    <div class="project-meta"><span class="meta-role">연구원</span><span class="meta-divider">|</span>한국콘크리트학회<span class="meta-divider">|</span>2017.01.16 ~ 2018.01.15</div>
  </div>
  <div class="project-item">
    <div class="project-title">1. 초고성능 재료의 기계적특성을 반영한 철근콘크리트 성능기반 설계기술 개발</div>
    <div class="project-meta"><span class="meta-role">연구원</span><span class="meta-divider">|</span>한국연구재단<span class="meta-divider">|</span>2017.07.01 ~ 2017.10.31</div>
  </div>
</div>
