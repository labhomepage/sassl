---
title: Publications
nav:
  order: 5
---

# {% include icon.html icon="fa-regular fa-file-lines" %}Publication

<div class="pub-summary-wrap">
  <div class="pub-stat-card active" onclick="showPub('scie', this)" data-pub="scie">
    <div class="pub-stat-label">SCI(E)</div>
    <div class="pub-stat-value">{{ site.data.citations | size }}</div>
    <div class="pub-stat-sub">Journal Papers</div>
  </div>

  <div class="pub-stat-card" onclick="showPub('scopus', this)" data-pub="scopus">
    <div class="pub-stat-label">Scopus</div>
    <div class="pub-stat-value">16</div>
    <div class="pub-stat-sub">Journal Papers</div>
  </div>

  <div class="pub-stat-card" onclick="showPub('domestic', this)" data-pub="domestic">
    <div class="pub-stat-label">Domestic</div>
    <div class="pub-stat-value">5</div>
    <div class="pub-stat-sub">Journal Papers</div>
  </div>

  <div class="pub-stat-card" onclick="showPub('intl', this)" data-pub="intl">
    <div class="pub-stat-label">International Conf.</div>
    <div class="pub-stat-value">5</div>
    <div class="pub-stat-sub">Conference Papers</div>
  </div>

  <div class="pub-stat-card" onclick="showPub('domconf', this)" data-pub="domconf">
    <div class="pub-stat-label">Domestic Conf.</div>
    <div class="pub-stat-value">56</div>
    <div class="pub-stat-sub">Conference Papers</div>
  </div>
</div>

<style>
  .pub-summary-wrap {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 14px;
    max-width: 920px;
    margin: 32px auto 28px;
  }

  .pub-stat-card {
    background: #ffffff;
    border: 1px solid #e5eaf2;
    border-radius: 16px;
    padding: 18px 14px;
    text-align: center;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
    transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
    cursor: pointer;
    user-select: none;
  }

  .pub-stat-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.10);
  }

  .pub-stat-card.active {
    border-color: #007bff;
    box-shadow: 0 12px 28px rgba(0, 123, 255, 0.22);
  }

  .pub-stat-card.active .pub-stat-label,
  .pub-stat-card.active .pub-stat-value {
    color: #007bff;
  }

  .pub-stat-label {
    font-size: 13px;
    font-weight: 700;
    color: #4b5563;
    margin-bottom: 8px;
    transition: color 0.2s ease;
  }

  .pub-stat-value {
    font-size: 32px;
    font-weight: 800;
    color: #111827;
    line-height: 1;
    transition: color 0.2s ease;
  }

  .pub-stat-sub {
    margin-top: 8px;
    font-size: 12px;
    color: #7b8794;
  }

  .latest-sci-title {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 18px;
    color: #111827;
  }

  @media (max-width: 900px) {
    .pub-summary-wrap {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 520px) {
    .pub-summary-wrap {
      grid-template-columns: 1fr;
    }
  }
</style>

<div id="section-scie" class="pub-content">

  <div class="pub-left" style="text-align:left; margin-bottom:28px;">
    <h3 style="margin:10px 0 16px;">Under Review</h3>
    <div style="display:flex; align-items:flex-start; margin-bottom:18px;">
      <div style="width:25px;">3.</div>
      <div><strong><u>Son, D. H.</u></strong>, Bae, B. I.* (2026). Theoretical Modeling of Stiffness Reduction Mechanisms in Vertically Divided RC Shear Walls by Finite Element Analysis. <em>Journal of Building Engineering</em> <span style="color:#b03a2e; font-weight:bold;">[IF: 8.1 (Q1)]</span> (Under Review).</div>
    </div>
    <div style="display:flex; align-items:flex-start; margin-bottom:18px;">
      <div style="width:25px;">2.</div>
      <div>Lee, J., <strong><u>Son, D. H.*</u></strong> (2026). Knowledge Transfer Predictive Model for the Shear Capacity of Steel Fiber Reinforced Concrete Beams without Stirrups. <em>Engineering Structures</em> <span style="color:#b03a2e; font-weight:bold;">[IF: 7.6 (Q1)]</span> (Under Review).</div>
    </div>
    <div style="display:flex; align-items:flex-start; margin-bottom:18px;">
      <div style="width:25px;">1.</div>
      <div><strong><u>Son, D. H.</u></strong>, Lee, M. S., Choi, C. S., Kim, S. Y., Bae, B. I.* (2026). Flexural Retrofit Design of Existing Reinforced Concrete Structural Walls with a Boundary Element Retrofit. <em>International Journal of Concrete Structures and Materials</em> <span style="color:#b03a2e; font-weight:bold;">[IF: 4.6 (Q1)]</span> (Under Review).</div>
    </div>
  </div>

  {% include list.html data="citations" component="citation" style="rich" %}
</div>

<div id="section-scopus" class="pub-content pub-left" style="display:none; text-align:left;">
  <div style="display:flex; align-items:flex-start; margin-bottom:18px;">
    <div style="width:25px;">16.</div>
    <div>오채연, 이문석, <strong><u>손동희</u></strong>, 최창식, 배백일. (2026). 삼축 응력을 받는 강섬유 보강 콘크리트의 재료적 특성에 따른 강도 기준 개선에 대한 연구. 콘크리트학회 논문집, 38(4), 481-489. <a href="https://doi.org/10.4334/JKCI.2026.38.4.481" target="_blank">https://doi.org/10.4334/JKCI.2026.38.4.481</a></div>
  </div>
  <div style="display:flex; align-items:flex-start; margin-bottom:18px;">
    <div style="width:25px;">15.</div>
    <div>김유민, 이문석, <strong><u>손동희</u></strong>, 배백일, 최창식. (2026). 폴리프로필렌 섬유의 형상 및 혼입률에 따른 섬유보강 콘크리트의 온도별 기계적 성능 평가. 콘크리트학회 논문집, 38(2), 129-137. <a href="https://doi.org/10.4334/JKCI.2026.38.2.129" target="_blank">https://doi.org/10.4334/JKCI.2026.38.2.129</a></div>
  </div>
  <div style="display:flex; align-items:flex-start; margin-bottom:18px;">
    <div style="width:25px;">14.</div>
    <div>조성원, 이문석, <strong><u>손동희</u></strong>, 배백일, 최창식 (2026). 비선형 유한요소해석을 통한 PC 보강재가 삽입된 슬래브 계면의 균열각 변화에 따른 뚫림전단강도 평가. 콘크리트학회 논문집, 38(1), 31-39. <a href="https://doi.org/10.4334/JKCI.2026.38.1.031" target="_blank">https://doi.org/10.4334/JKCI.2026.38.1.031</a></div>
  </div>
  <div style="display:flex; align-items:flex-start; margin-bottom:18px;">
    <div style="width:25px;">13.</div>
    <div>정유진, 이문석, <strong><u>손동희</u></strong>, 배백일, 최창식. (2025). 분리타설구간에 180도 표준갈고리 철근으로 겹침이음된 슬래브에 대한 이음길이 영향 분석. 콘크리트학회 논문집, 37(6), 747-755. <a href="https://doi.org/10.4334/JKCI.2025.37.6.747" target="_blank">https://doi.org/10.4334/JKCI.2025.37.6.747</a></div>
  </div>
  <div style="display:flex; align-items:flex-start; margin-bottom:18px;">
    <div style="width:25px;">12.</div>
    <div>오경수, <strong><u>손동희</u></strong>, 최현기, 배백일, 최창식. (2024). 크기효과를 고려한 강섬유 콘크리트 보의 전단강도 분석. 콘크리트학회 논문집, 36(4), 367-374. <a href="https://doi.org/10.4334/JKCI.2024.36.4.367" target="_blank">https://doi.org/10.4334/JKCI.2024.36.4.367</a></div>
  </div>
  <div style="display:flex; align-items:flex-start; margin-bottom:18px;">
    <div style="width:25px;">11.</div>
    <div>주조린, 이문석, <strong><u>손동희</u></strong>, 최창식, 최현기, 배백일. (2024). 피복두께와 강섬유 혼입률에 따른 초고성능 콘크리트의 균열거동과 인장증강효과. 대한건축학회논문집, 40(1), 235-243. <a href="https://doi.org/10.5659/JAIK.2024.40.1.235" target="_blank">https://doi.org/10.5659/JAIK.2024.40.1.235</a></div>
  </div>
  <div style="display:flex; align-items:flex-start; margin-bottom:18px;">
    <div style="width:25px;">10.</div>
    <div>박성준, <strong><u>손동희</u></strong>, 배백일, 정다운, 최창식. (2023). 전단키를 갖는 프리캐스트 콘크리트 합성보의 수평전단강도. 콘크리트학회 논문집, 35(6), 625-633. <a href="https://doi.org/10.4334/JKCI.2023.35.6.625" target="_blank">https://doi.org/10.4334/JKCI.2023.35.6.625</a></div>
  </div>
  <div style="display:flex; align-items:flex-start; margin-bottom:18px;">
    <div style="width:25px;">9.</div>
    <div>이혜원, <strong><u>손동희</u></strong>, 배백일, 최창식. (2023). 직접전단 시험을 통한 분리타설된 강섬유 보강 콘크리트의 전단마찰강도 분석. 대한건축학회논문집, 39(10), 243-250. <a href="https://doi.org/10.5659/JAIK.2023.39.10.243" target="_blank">https://doi.org/10.5659/JAIK.2023.39.10.243</a></div>
  </div>
  <div style="display:flex; align-items:flex-start; margin-bottom:18px;">
    <div style="width:25px;">8.</div>
    <div>유진규, <strong><u>손동희</u></strong>, 배백일, 유창기, 최창식 (2023). 겹침이음실험을 통한 삼중나노소재 혼입 철근콘크리트보의 부착성능에 대한 실험적 고찰. 대한건축학회 논문집, 39(10), 235-242. <a href="https://doi.org/10.5659/JAIK.2023.39.10.235" target="_blank">https://doi.org/10.5659/JAIK.2023.39.10.235</a></div>
  </div>
  <div style="display:flex; align-items:flex-start; margin-bottom:18px;">
    <div style="width:25px;">7.</div>
    <div><strong><u>손동희</u></strong>, 정다운, 유무영, 배백일, 최창식 (2022). 확대머리철근이 정착된 강섬유 보강 콘크리트 외부 보-기둥 접합부의 내진성능. 대한건축학회 논문집, 38(11), 307-315. <a href="https://doi.org/10.5659/JAIK.2022.38.11.307" target="_blank">https://doi.org/10.5659/JAIK.2022.38.11.307</a></div>
  </div>
  <div style="display:flex; align-items:flex-start; margin-bottom:18px;">
    <div style="width:25px;">6.</div>
    <div><strong><u>손동희</u></strong>, 유무영, 배백일, 최창식 (2022). 단부 파쇄 후 수직철근 보강공법이 적용된 2층 철근콘크리트 구조벽체의 휨 거동 특성. 대한건축학회 논문집, 38(10), 283-291. <a href="https://doi.org/10.5659/JAIK.2022.38.10.283" target="_blank">https://doi.org/10.5659/JAIK.2022.38.10.283</a></div>
  </div>
  <div style="display:flex; align-items:flex-start; margin-bottom:18px;">
    <div style="width:25px;">5.</div>
    <div>김종규, <strong><u>손동희</u></strong>, 배백일, 엄순섭, 최창식 (2022). 반복하중을 받는 조립형 CFT 기둥의 리브길이에 따른 휨 성능 평가. 대한건축학회 논문집, 38(6), 213-220. <a href="https://doi.org/10.5659/JAIK.2022.38.6.213" target="_blank">https://doi.org/10.5659/JAIK.2022.38.6.213</a></div>
  </div>
  <div style="display:flex; align-items:flex-start; margin-bottom:18px;">
    <div style="width:25px;">4.</div>
    <div>유별이, <strong><u>손동희</u></strong>, 배백일, 엄순섭, 최창식. (2022). 조립형 CFT 기둥의 리브 길이에 따른 중심 압축 성능. 콘크리트학회 논문집, 34(2), 143-151. <a href="https://doi.org/10.4334/JKCI.2022.34.2.143" target="_blank">https://doi.org/10.4334/JKCI.2022.34.2.143</a></div>
  </div>
  <div style="display:flex; align-items:flex-start; margin-bottom:18px;">
    <div style="width:25px;">3.</div>
    <div>안효준, <strong><u>손동희</u></strong>, 정주홍, 최창식. (2021). 매크로 합성섬유를 혼입한 데크슬래브의 열적특성. 콘크리트학회 논문집, 33(4), 373-380. <a href="https://doi.org/10.4334/JKCI.2021.33.4.373" target="_blank">https://doi.org/10.4334/JKCI.2021.33.4.373</a></div>
  </div>
  <div style="display:flex; align-items:flex-start; margin-bottom:18px;">
    <div style="width:25px;">2.</div>
    <div>이문석, 정주홍, <strong><u>손동희</u></strong>, 최창식. (2020). 매크로 합성섬유를 혼입한 철근콘크리트 슬래브의 휨 강도평가. 대한건축학회논문집, 36(12), 241-248. <a href="https://doi.org/10.5659/JAIK.2020.36.12.241" target="_blank">https://doi.org/10.5659/JAIK.2020.36.12.241</a></div>
  </div>
  <div style="display:flex; align-items:flex-start; margin-bottom:18px;">
    <div style="width:25px;">1.</div>
    <div><strong><u>손동희</u></strong>, 정주홍, 좌동훈, 이종민, 최창식. (2018). 일체형 전단보강재로 보강된 철근콘크리트 보의 전단강도에 대한 실험적 연구. 콘크리트학회 논문집, 30(5), 543-551. <a href="https://doi.org/10.4334/JKCI.2018.30.5.543" target="_blank">https://doi.org/10.4334/JKCI.2018.30.5.543</a></div>
  </div>
</div>

<div id="section-domestic" class="pub-content pub-left" style="display:none; text-align:left;">
  <div style="display:flex; align-items:flex-start; margin-bottom:18px;">
    <div style="width:25px;">5.</div>
    <div><strong><u>손동희</u></strong> (2025). 유한요소해석에 의한 단부파쇄 후 수직철근이 보강된 철근콘크리트 전단벽의 휨 보강설계기법 제안. 교통건축 논문집, 8(1), 1-6. </div>
  </div>
  <div style="display:flex; align-items:flex-start; margin-bottom:18px;">
    <div style="width:25px;">4.</div>
    <div>송성휘, <strong><u>손동희</u></strong>, 배백일, 최창식. (2023). 일반 철근 배근 상세를 갖는 강섬유 보강 콘크리트 연결보의 전단강도 평가. 한국구조물진단유지관리공학회 논문집, 27(1), 37-45. <a href="https://doi.org/10.11112/jksmi.2023.27.1.37" target="_blank">https://doi.org/10.11112/jksmi.2023.27.1.37</a></div>
  </div>
  <div style="display:flex; align-items:flex-start; margin-bottom:18px;">
    <div style="width:25px;">3.</div>
    <div>황보동선, <strong><u>손동희</u></strong>, 배백일, 최창식 (2022). 반복하중을 받는 수직분할된 철근콘크리트 전단벽의 강성저감효과. 한국구조물진단유지관리공학회 논문집, 26(3), 103-110. <a href="https://doi.org/10.11112/jksmi.2022.26.3.103" target="_blank">https://doi.org/10.11112/jksmi.2022.26.3.103</a></div>
  </div>
  <div style="display:flex; align-items:flex-start; margin-bottom:18px;">
    <div style="width:25px;">2.</div>
    <div>최지윤, <strong><u>손동희</u></strong>, 배백일, 최창식 (2022). 반복하중을 받는 대각보강된 철근콘크리트 연결보의 강섬유 형상비와 혼입률에 따른 이력거동. 한국구조물진단유지관리공학회 논문집, 26(3), 84-91. <a href="https://doi.org/10.11112/jksmi.2022.26.3.84" target="_blank">https://doi.org/10.11112/jksmi.2022.26.3.84</a></div>
  </div>
  <div style="display:flex; align-items:flex-start; margin-bottom:18px;">
    <div style="width:25px;">1.</div>
    <div>배백일, <strong><u>손동희</u></strong>, 최현기, 정형석, 최창식 (2021). 이음된 초고강도 강섬유보강콘크리트 보의 휨강도에 관한 실험적 연구. 한국구조물진단유지관리공학회 논문집. <a href="https://doi.org/10.11112/jksmi.2021.25.6.76" target="_blank">https://doi.org/10.11112/jksmi.2021.25.6.76</a></div>
  </div>
</div>
<div id="section-intl" class="pub-content pub-left" style="display:none; text-align:left;">
  <div style="display:flex; align-items:flex-start; margin-bottom:18px;">
    <div style="width:25px;">5.</div>
    <div> <strong><u>Son, D. H.</u></strong>, Jeong, D. U., Choi, C. S., (2024) Mechanical Performance of Concrete Incorporated with Triple Hybrid Nanomaterials: Assessment on the bond Characteristics, 14th International Symposium on Architectural Interchanges in Asia, September </div>
  </div>
  <div style="display:flex; align-items:flex-start; margin-bottom:18px;">
    <div style="width:25px;">4.</div>
    <div> <strong><u>Son, D. H.</u></strong>, Bae, B. I., Choi, C. S., (2024) Seismic Retrofitting of Reinforced Concrete Walls through Vertical Division: Evaluating Stiffness Reduction and Load Redistribution Effect, 18th World Conference Earthquake Engineering, July </div>
  </div>
  <div style="display:flex; align-items:flex-start; margin-bottom:18px;">
    <div style="width:25px;">3.</div>
    <div> Kim, H., Choi, C. S., Seok, S., <strong><u>Son, D. H.</u></strong>, Lee, L. H., (2022) Verification of Vertically Divided walls through Finite Element Analysis, 13th International Symposium on Architectural Interchanges in Asia, November </div>
  </div>
  <div style="display:flex; align-items:flex-start; margin-bottom:18px;">
    <div style="width:25px;">2.</div>
    <div> You, B. I., <strong><u>Son, D. H.</u></strong>, Bae, B. I., Choi, C. S. (2021). Strength Evaluation of Prefabricated CFTs with saw-toothed Ribs., 11th International Symposium on Steel Structures, November, 2021, Jeju, Korea </div>
  </div>
  <div style="display:flex; align-items:flex-start; margin-bottom:18px;">
    <div style="width:25px;">1.</div>
    <div><strong><u>Son, D. H.</u></strong>, Choi, C. S., Min, N. K., Lee, D. W. (2018). Shear Performance of RC Beam with Integrated Shear Reinforcement, 12th International Symposium on Architectural Interchanges in Asia, October, 2018, Pyeongchang, Korea</div>
  </div>
</div>

<div id="section-domconf" class="pub-content pub-left" style="display:none; text-align:left;">
  <div style="display:flex; align-items:flex-start; margin-bottom:18px;">
    <div style="width:25px;">56.</div>
    <div><strong><u>Son, D. H.</u></strong>, (2025) Load Redistribution Effect of Existing Reinforced Concrete Structural Wall System Applying Vertical Division Technique Concrete Research Committee, 2025 Spring Conference of the Korea Concrete Institute.</div>
  </div>
  <div style="display:flex; align-items:flex-start; margin-bottom:18px;">
    <div style="width:25px;">55.</div>
    <div><strong><u>Son, D. H.</u></strong>, (2025) Safety Assurance Strategies for Existing Reinforced Concrete Shear Walls in Vertical Extension Remodeling of Apartment Buildings, Early-Career Researchers Networking Session, 2025 Spring Conference of the Architectural Institute of Korea</div>
  </div>
  <div style="display:flex; align-items:flex-start; margin-bottom:18px;">
    <div style="width:25px;">54.</div>
    <div>Cho, S. W., Lee, M. S., <strong><u>Son, D. H.</u></strong>, Bae. B. I., Choi C. S. (2025). Nonlinear Finite Element Analysis of Punching Shear Strength in Flat Plate slabs with PC Head. Proceedings of Korea Institute for Structural Maintenance and Inspection, 25(2), 100</div>
  </div>
  <div style="display:flex; align-items:flex-start; margin-bottom:18px;">
    <div style="width:25px;">53.</div>
    <div><strong><u>Son, D. H.</u></strong>, Lee, M. S., Bae. B. I., Choi C. S. (2025). Flexural Retrofit Design of Reinforced Concrete Shear Walls Using Finite Element Analysis. Proceedings of Korea Institute for Structural Maintenance and Inspection, 25(2), 105</div>
  </div>
  <div style="display:flex; align-items:flex-start; margin-bottom:18px;">
    <div style="width:25px;">52.</div>
    <div>Jung, Y. J., Lee, M. S., <strong><u>Son, D. H.</u></strong>, Bae. B. I., Choi C. S. (2025). Lap Splice Length Effect of 180-Degree Standard Hooked Bars in Precast Concrete Slabs. Proceedings of Korea Institute for Structural Maintenance and Inspection, 25(2), 111</div>
  </div>
  <div style="display:flex; align-items:flex-start; margin-bottom:18px;">
    <div style="width:25px;">51.</div>
    <div>Lee, M. S., <strong><u>Son, D. H.</u></strong>, Bae, B. I., Choi, C. S. (2025). Analysis of Effective Tensile Cross-Sectional Area of UHPC according to Steel Fiber. Proceeding of the Korea Concrete Institute, 37(1), 105-106</div>
  </div>
  <div style="display:flex; align-items:flex-start; margin-bottom:18px;">
    <div style="width:25px;">50.</div>
    <div>Jeong, H. J. Lee, M. S. <strong><u>Son, D. H.</u></strong>, Bae, B. I., Choi, C. S. (2025). A Study on the Reduction of Transverse Reinforcement Detailing and the Shear Strain of Joints with Steel Fiber Reinforced Ductile Connections, Proceeding of the Korea Concrete Institute, 37(2), 79-80</div>
  </div>
  <div style="display:flex; align-items:flex-start; margin-bottom:18px;">
    <div style="width:25px;">49.</div>
    <div><strong><u>Son, D. H.</u></strong>, Bae, B. I., Choi, C. S. (2025). Statistical Analysis on the Mitigation of Size Effect in Steel Fiber Reinforced Concrete Beams Based on Data Filtering, Proceeding of the Korea Concrete Institute, 37(2), 51-52</div>
  </div>
  <div style="display:flex; align-items:flex-start; margin-bottom:18px;">
    <div style="width:25px;">48.</div>
    <div>Ha, S. J., <strong><u>Son, D. H.</u></strong> (2025). Seismic behavior evaluation of FRP reinforced concrete columns using finite element analysis. Proceedings of Korea Institute for Structural Maintenance and Inspection, 25(1), 76.</div>
  </div>
  <div style="display:flex; align-items:flex-start; margin-bottom:18px;">
    <div style="width:25px;">47.</div>
    <div><strong><u>Son, D. H.</u></strong>, Ha, S. J., Bae, B. I., Choi, C. S. (2025). Analytical study on the stiffness reduction effect according to upper boundary conditions of vertically divided RC shear walls. Proceedings of Korea Institute for Structural Maintenance and Inspection, 29(1), 68.</div>
  </div>
  <div style="display:flex; align-items:flex-start; margin-bottom:18px;">
    <div style="width:25px;">46.</div>
    <div>Jeong, H. J., <strong><u>Son, D. H.</u></strong>, Bae, B. I., Lee, M. S., Choi, C. S. (2025). Shear strength analysis according to connection details such as splices of reinforcement and development in internal joints of precast concrete. Proceedings of Korea Institute for Structural Maintenance and Inspection, 29(1), 88.</div>
  </div>
  <div style="display:flex; align-items:flex-start; margin-bottom:18px;">
    <div style="width:25px;">45.</div>
    <div>Cho, S. W., Lee, M. S., <strong><u>Son, D. H.</u></strong>, Bae, B. I., Choi, C. S. (2025). Analytical study on the variation of punching shear crack angles at the interface of different compressive strength concrete in flat plates with PC shear member. Proceedings of Korea Institute for Structural Maintenance and Inspection, 29(1), 30.</div>
  </div>
  <div style="display:flex; align-items:flex-start; margin-bottom:18px;">
    <div style="width:25px;">44.</div>
    <div>Kim, Y. M., Lee, M. S., <strong><u>Son, D. H.</u></strong>, Bae, B. I., Choi, C. S. (2025). Mechanical performance evaluation of concrete based on the content of polypropylene fibers after high temperature exposure. Proceedings of Korea Institute for Structural Maintenance and Inspection, 29(1), 35.</div>
  </div>
  <div style="display:flex; align-items:flex-start; margin-bottom:18px;">
    <div style="width:25px;">43.</div>
    <div>Oh, C. Y., Lee, M. S., <strong><u>Son, D. H.</u></strong>, Bae, B. I., Choi, C. S. (2025). Proposal and evaluation of an expansion angle model based on statistical analysis of concrete under confining pressure. Proceedings of Korea Institute for Structural Maintenance and Inspection, 29(1), 274.</div>
  </div>
  <div style="display:flex; align-items:flex-start; margin-bottom:18px;">
    <div style="width:25px;">42.</div>
    <div>Lee, M. S., <strong><u>Son, D. H.</u></strong>, Bae, B. I., Choi, C. S. (2025). Evaluation of bond strength between concrete and rebar according to volume ratio of nano-material. Proceedings of Korea Institute for Structural Maintenance and Inspection, 29(1), 275.</div>
  </div>
  <div style="display:flex; align-items:flex-start; margin-bottom:18px;">
    <div style="width:25px;">41.</div>
    <div>Jung, Y. J., <strong><u>Son, D. H.</u></strong>, Bae, B. I., Lee, M. S., Choi, C. S. (2025). Analysis of splice length according to cover thickness in precast concrete slabs using 180-degree hooked bars. Proceedings of Korea Institute for Structural Maintenance and Inspection, 29(1), 29.</div>
  </div>
  <div style="display:flex; align-items:flex-start; margin-bottom:18px;">
    <div style="width:25px;">40.</div>
    <div><strong><u>Son, D. H.</u></strong>, Bae, B. I., Choi, C. S. (2024). Analysis of the slab effect on reinforced concrete walls retrofitted with wall end crushing method. Proceedings of Korea Institute for Structural Maintenance and Inspection, 28(2), 60.</div>
  </div>
  <div style="display:flex; align-items:flex-start; margin-bottom:18px;">
    <div style="width:25px;">39.</div>
    <div>Cho, S. W., Lee, M. S., <strong><u>Son, D. H.</u></strong>, Bae, B. I., Choi, C. S. (2024). Analytical Study on Punching Shear of Slab-Column Connections with PC Shear Member Based on Concrete Compressive Strength. Proceeding of the Korea Concrete Institute, 36(2), 185-186</div>
  </div>
  <div style="display:flex; align-items:flex-start; margin-bottom:18px;">
    <div style="width:25px;">38.</div>
    <div>Jung, Y. J., <strong><u>Son, D. H.</u></strong>, Lee, M. S., Bae, B. I., Choi, C. S. (2024). Finite Element Analysis of Reinforced Concrete Slab with Noncontact Lap Splices Using Hooked Rebars in ABAQUS. Proceeding of the Korea Concrete Institute, 36(2), 187-188.</div>
  </div>
  <div style="display:flex; align-items:flex-start; margin-bottom:18px;">
    <div style="width:25px;">37.</div>
    <div>Park, Y. J., <strong><u>Son, D. H.</u></strong>, Bae, B. I., Choi, C. S. (2024). Analysis of Shear Contribution in PC Composite Concrete Beams Based on Transverse Reinforcement Ratio and Moment Direction. Proceeding of the Korea Concrete Institute, 36(2), 49-50.</div>
  </div>
  <div style="display:flex; align-items:flex-start; margin-bottom:18px;">
    <div style="width:25px;">36.</div>
    <div>Chae, Y. H., Park, S. H., <strong><u>Son, D. H.</u></strong>, Bae, B. I., Choi, C. S. (2024). Fracture Simulation of CT-Scanned Concrete Specimens Using Finite Element Analysis. Proceeding of the Korea Concrete Institute, 36(2), 195-196</div>
  </div>
  <div style="display:flex; align-items:flex-start; margin-bottom:18px;">
    <div style="width:25px;">35.</div>
    <div>Kim, Y. M., <strong><u>Son, D. H.</u></strong>, Bae, B. I., Choi, C. S. (2024). Statistical Analysis of Compressive Strength of High-Strength Concrete Reinforced with PP Fibers After High-Temperature Exposure. Proceeding of the Korea Concrete Institute, 36(2), 55-56.</div>
  </div>
  <div style="display:flex; align-items:flex-start; margin-bottom:18px;">
    <div style="width:25px;">34.</div>
    <div>Lee, M. S., <strong><u>Son, D. H.</u></strong>, Bae, B. I., Choi, C. S. (2024). The Analytical Study on the Bond Strength of Non-contact Lap Spliced 180-degree Hooked Rebar. Proceeding of the Korea Concrete Institute, 36(2), 135-136.</div>
  </div>
  <div style="display:flex; align-items:flex-start; margin-bottom:18px;">
    <div style="width:25px;">33.</div>
    <div>Park, S. H., <strong><u>Son, D. H.</u></strong>, Bae, B. I., Seok, S. W., Choi, C. S. (2024). Analysis of the Effects of Confining Pressure and Volumetric Changes on Concrete Dilation Angle. Proceedings of the Korea Concrete Institute, 36(2), 691-692.</div>
  </div>
  <div style="display:flex; align-items:flex-start; margin-bottom:18px;">
    <div style="width:25px;">32.</div>
    <div>Oh, G., <strong><u>Son, D. H.</u></strong>, Choi, H. K., Bae, B. I., Choi, C. S., (2024) Shear Stress Analysis of Steel Fiber-Reinforced Concrete Beams Based on Effective Depth. Proceeding of the Korea Concrete Institute, 36(2), 299-300.</div>
  </div>
  <div style="display:flex; align-items:flex-start; margin-bottom:18px;">
    <div style="width:25px;">31.</div>
    <div><strong><u>Son, D. H.</u></strong>, Bae, B. I., Choi, C. S. (2024). Analysis of Effective Flexural and Shear Stiffness of Vertically Divided Reinforced Concrete Shear Walls, Proceeding of the Korea Concrete Institute, 36(1), 313-314</div>
  </div>
  <div style="display:flex; align-items:flex-start; margin-bottom:18px;">
    <div style="width:25px;">30.</div>
    <div>Song, S. H., <strong><u>Son, D. H.</u></strong>, Bae, B. I., Choi, C. S. (2024). Structural Behavior of Assembled CFT Column-composite Beam External Diaphragm Connection with Composite Beam Cross-section Details, Proceeding of the Korea Concrete Institute, 36(1), 349-350.</div>
  </div>
  <div style="display:flex; align-items:flex-start; margin-bottom:18px;">
    <div style="width:25px;">29.</div>
    <div><strong><u>Son, D. H.</u></strong>, Bae, B. I., Choi, C. S. (2024). The Influence of Nanomaterial Dispersion on the Bond Performance between Concrete and Reinforcing Bars, Proceedings of Architectural Institute of Korea, 44(1), 443-443.</div>
  </div>
  <div style="display:flex; align-items:flex-start; margin-bottom:18px;">
    <div style="width:25px;">28.</div>
    <div><strong><u>Son, D. H.</u></strong>, Choi, C. S. (2024). Structural Behavior of Reinforced Concrete Two-Story Structural Walls with Slabs Using Wall End Crushing, Proceedings of Korea Institute for Structural Maintenance and Inspection, 28(1), 62-62</div>
  </div>
  <div style="display:flex; align-items:flex-start; margin-bottom:18px;">
    <div style="width:25px;">27.</div>
    <div><strong><u>Son, D. H.</u></strong>, Park, Y. J., Kim, Y. M., Bae, B. I., Choi, C. S. (2023). Cyclic Loading Test of Steel Fiber Reinforced Concrete Exterior Beam-Column Joints According to Anchorage Type, Proceedings of the Korea Concrete Institute, 35(2), 85-86.</div>
  </div>
  <div style="display:flex; align-items:flex-start; margin-bottom:18px;">
    <div style="width:25px;">26.</div>
    <div><strong><u>Son, D. H.</u></strong>, Bae, B. I., Choi, C. S. (2023). Stiffness reduction model of vertically divided reinforced concrete shear walls, Proceedings of Architectural Institute of Korea, 43(2), 342-342.</div>
  </div>
  <div style="display:flex; align-items:flex-start; margin-bottom:18px;">
    <div style="width:25px;">25.</div>
    <div><strong><u>Son, D. H.</u></strong>, Bae, B. I., Choi, C. S. (2023). Structural analysis of an old apartment building using the shear wall vertical division method. Proceedings of Korean Recycled Construction Resources Institute, 208-209.</div>
  </div>
  <div style="display:flex; align-items:flex-start; margin-bottom:18px;">
    <div style="width:25px;">24.</div>
    <div>Bae, B. I., Choi, C. S., <strong><u>Son, D. H.</u></strong> (2023). The Analytical Study on the Flexural Performance of Reinforced Concrete Flexural Members According to the Replacement ratio of Recycled Coarse Aggregate. Proceedings of Korean Recycled Construction Resources Institute, 187-188.</div>
  </div>
  <div style="display:flex; align-items:flex-start; margin-bottom:18px;">
    <div style="width:25px;">23.</div>
    <div><strong><u>Son, D. H.</u></strong>, Bae, B. I., Choi, C. S. (2023). Structural analysis of an old apartment building using the shear wall vertical division method. Proceedings of Architectural Institute of Korea, 43(1), 915-915.</div>
  </div>
  <div style="display:flex; align-items:flex-start; margin-bottom:18px;">
    <div style="width:25px;">22.</div>
    <div>Ryu, J. G., <strong><u>Son, D. H.</u></strong>, Choi, C. S. (2023). An Analysis of Lap-splice performance of triple nano materials reinforced concrete beams. Proceedings of Architectural Institute of Korea, 43(1), 493-493.</div>
  </div>
  <div style="display:flex; align-items:flex-start; margin-bottom:18px;">
    <div style="width:25px;">21.</div>
    <div>Park, S. J., <strong><u>Son, D. H.</u></strong>, Choi, C. S. (2023). Analysis of horizontal shear strength of PC composite beams according to shear key details. Proceedings of Architectural Institute of Korea, 43(1),494-494.</div>
  </div>
  <div style="display:flex; align-items:flex-start; margin-bottom:18px;">
    <div style="width:25px;">20.</div>
    <div><strong><u>Son, D. H.</u></strong>, Bae, B. I., Choi, C. S. (2022). Reduction of strength and stiffness of vertically divided reinforced concrete shear walls. Proceedings of Architectural Institute of Korea, 42(2), 524.</div>
  </div>
  <div style="display:flex; align-items:flex-start; margin-bottom:18px;">
    <div style="width:25px;">19.</div>
    <div>Hwangbo D., <strong><u>Son, D. H.</u></strong>, Bae, B. I., Choi, C. S. (2022). Effect of Mechanical Properties on Bond Characteristis of Concrete with Nanomaterials. Proceedings of Architectural Institute of Korea, 42(2), 529.</div>
  </div>
  <div style="display:flex; align-items:flex-start; margin-bottom:18px;">
    <div style="width:25px;">18.</div>
    <div>Hwangbo D., <strong><u>Son, D. H.</u></strong>, Bae, B. I., Choi, C. S. (2022). Evaluating the Bond Stress of Concrete with Triple Nano Materials. Proceedings of the Korea Concrete Institute, 34(1), 341-342.</div>
  </div>
  <div style="display:flex; align-items:flex-start; margin-bottom:18px;">
    <div style="width:25px;">17.</div>
    <div>Lee, S. M., <strong><u>Son, D. H.</u></strong>, Choi, C. S. (2022). Numerical Study on Mechanical Properties of Triple-Hybrid Reinforced concrete. Proceedings of the Korea Concrete Institute, 34(1), 285-286.</div>
  </div>
  <div style="display:flex; align-items:flex-start; margin-bottom:18px;">
    <div style="width:25px;">16.</div>
    <div><strong><u>Son, D. H.</u></strong>, Bae, B. I., Choi, C. S. (2022). Stiffness Reduction Effect of Vertically Divided Reinforced Concrete Shear Walls According to Rebar Detail. Proceedings of Architectural Institute of Korea, 42(1), 426.</div>
  </div>
  <div style="display:flex; align-items:flex-start; margin-bottom:18px;">
    <div style="width:25px;">15.</div>
    <div>Kim, J. G., <strong><u>Son, D. H.</u></strong>, Bae, B. I., Choi, C. S. (2022). Evaluation of Flexural Stiffness of Assembled CFT Columns with Rib Length. Proceedings of Architectural Institute of Korea, 42(1), 425-425.</div>
  </div>
  <div style="display:flex; align-items:flex-start; margin-bottom:18px;">
    <div style="width:25px;">14.</div>
    <div><strong><u>Son, D. H.</u></strong>, Hwangbo, D., Bae, B. I., Choi, C. S. (2022). Relationship Between Tensile Strength and Compressive Strength of Triple-Hybrid Reinforced Concrete. Proceedings of Korea Institute for Structural Maintenance and Inspection, 26(1), 165-165.</div>
  </div>
  <div style="display:flex; align-items:flex-start; margin-bottom:18px;">
    <div style="width:25px;">13.</div>
    <div>Kim, H., <strong><u>Son, D. H.</u></strong>, Bae, B. I., Choi, C. S. (2022). Finite Element Analysis of Vertically Divided Reinforced Concrete Shear wall. Proceedings of Korea Institute for Structural Maintenance and Inspection, 26(1), 43-43.</div>
  </div>
  <div style="display:flex; align-items:flex-start; margin-bottom:18px;">
    <div style="width:25px;">12.</div>
    <div>Bae, B. I., <strong><u>Son, D. H.</u></strong>, Choi, C. S. (2022). Evaluation of Fiber Reinforced Ultra High Strength Concrete Members. Proceedings of Korea Institute for Structural Maintenance and Inspection, 26(1), 51-51.</div>
  </div>
  <div style="display:flex; align-items:flex-start; margin-bottom:18px;">
    <div style="width:25px;">11.</div>
    <div>Kim, J. G., <strong><u>Son, D. H.</u></strong>, Bae, B. I., Choi, C. S. (2022). Evaluation of Ductility of Prefabricated CFT Columns with Rib Length and Height. Proceedings of Korea Institute for Structural Maintenance and Inspection. 26(1), 19-19.</div>
  </div>
  <div style="display:flex; align-items:flex-start; margin-bottom:18px;">
    <div style="width:25px;">10.</div>
    <div>Kim, J. G., <strong><u>Son, D. H.</u></strong>, Bae, B. I., Choi, C. S. (2021). Evaluation of Deformation Capacity of Prefabricated CFT Columns with Rib Length. Proceedings of Korea Institute for Structural Maintenance and Inspection, 25(2), 28-28.</div>
  </div>
  <div style="display:flex; align-items:flex-start; margin-bottom:18px;">
    <div style="width:25px;">9.</div>
    <div>Hwangbo, D., <strong><u>Son, D. H.</u></strong>, Bae, B. I., Choi, C. S. (2021). An Enhancement Effect of Concrete Strength According to Nanomaterials Incorporating Methods. Proceedings of Korea Institute for Structural Maintenance and Inspection, 25(2), 174-174.</div>
  </div>
  <div style="display:flex; align-items:flex-start; margin-bottom:18px;">
    <div style="width:25px;">8.</div>
    <div>Bae, B. I., <strong><u>Son, D. H.</u></strong>, Choi, C. S. (2021). An Experimental Study on the Flexural Performance of Lap Spliced Ultra High Strength Fiber Reinforced Concrete Members. Proceedings of the Korea Concrete Institute, 33(2), 83-84.</div>
  </div>
  <div style="display:flex; align-items:flex-start; margin-bottom:18px;">
    <div style="width:25px;">7.</div>
    <div><strong><u>Son, D. H.</u></strong>, Hwangbo, D., Bae, B. I., Choi, C. S. (2021). Mechanical Properties of Mortar and Concrete According To the Containing Method of Nano Materials. Proceedings of the Korea Concrete Institute, 33(2), 703-704.</div>
  </div>
  <div style="display:flex; align-items:flex-start; margin-bottom:18px;">
    <div style="width:25px;">6.</div>
    <div>Ahn, H. J., <strong><u>Son, D. H.</u></strong>, Jeong, D., Choi, C. S. (2021). The Mechanical Properties of Concrete Incorporated with Macro Synthetic Fiber Dosage. Proceedings of Korea Institute for Structural Maintenance and Inspection, 25(1), 139.</div>
  </div>
  <div style="display:flex; align-items:flex-start; margin-bottom:18px;">
    <div style="width:25px;">5.</div>
    <div><strong><u>Son, D. H.</u></strong>, Bae, B. I., Yoo, C. G., Choi, C. S. (2021). The Shear Retrofit Effect of the Vertically Divided Reinforced Concrete Squat wall. Proceedings of Korea Institute for Structural Maintenance and Inspection, 25(1), 140-141.</div>
  </div>
  <div style="display:flex; align-items:flex-start; margin-bottom:18px;">
    <div style="width:25px;">4.</div>
    <div>You, B. I., <strong><u>Son, D. H.</u></strong>, Bae, B. I., Choi, C. S. (2021). Properties of Concrete Stress-Strain Curve in Prefabricated CFT Columns. Proceedings of the Korea Concrete Institute, 33(1), 179-180.</div>
  </div>
  <div style="display:flex; align-items:flex-start; margin-bottom:18px;">
    <div style="width:25px;">3.</div>
    <div><strong><u>Son, D. H.</u></strong>, Bae, B. I., Choi, C. S. (2021). Strength Characteristics of Cement Mortar with Triple Nano Materials. Proceedings of the Korea Concrete Institute, 33(1), 545-546.</div>
  </div>
  <div style="display:flex; align-items:flex-start; margin-bottom:18px;">
    <div style="width:25px;">2.</div>
    <div><strong><u>Son, D. H.</u></strong>, Bae, B. I., Lee, L.H., Choi, C. S. (2021). Behavior Characteristics of Steel Fiber Reinforced Concrete Conventional Coupling Beams. Proceedings of Architectural Institute of Korea, 41(1), 398-399.</div>
  </div>
  <div style="display:flex; align-items:flex-start; margin-bottom:18px;">
    <div style="width:25px;">1.</div>
    <div>You, B. I., <strong><u>Son, D. H.</u></strong>, Bae, B. I., Choi, C. S. (2021). Analysis of Effective Width Considering Rib Length of Prefabricated CFT Columns. Proceedings of Architectural Institute of Korea, 41(1), 400-400.</div>
  </div>
</div>

<script>
  function showPub(targetId, clickedCard) {
    const sections = document.querySelectorAll('.pub-content');

    sections.forEach(section => {
      section.style.display = 'none';
    });

    const target = document.getElementById('section-' + targetId);

    if (target) {
      target.style.display = 'block';
    }

    const cards = document.querySelectorAll('.pub-stat-card');

    cards.forEach(card => {
      card.classList.remove('active');
    });

    if (clickedCard) {
      clickedCard.classList.add('active');
    }

    const latestSciSection = document.getElementById('latest-sci-section');

    if (latestSciSection) {
      latestSciSection.style.display = (targetId === 'scie') ? 'block' : 'none';
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    const defaultCard = document.querySelector('.pub-stat-card[data-pub="scie"]');
    showPub('scie', defaultCard);
  });
</script>
