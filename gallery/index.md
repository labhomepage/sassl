---
title: Activity
nav:
  order: 7
---

# {% include icon.html icon="fa-regular fa-image" %} Activity

<style>
/* =====================================================
   [1] 카드 목록 영역
   ===================================================== */
.activity-list {
  display: flex;
  flex-direction: column;
  gap: 28px;
  margin-top: 24px;
}

/* 카드 한 개 (사진 + 텍스트 + 버튼) */
.activity-item {
  background: #ffffff;
  border: 1px solid #ececec;
  border-radius: 14px;
  padding: 20px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  transition: box-shadow 0.25s;
}
.activity-item:hover {
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.12);
}

.activity-row {
  display: flex;
  align-items: center;
  gap: 24px;
}

/* 대표 이미지 — 크기 바꾸려면 width / flex 두 값을 같이 수정 */
.activity-row > img {
  width: 280px;
  flex: 0 0 280px;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border-radius: 10px;
}

.activity-text {
  flex: 1;
  text-align: left;
}

/* 연도 배지 */
.activity-year {
  display: inline-block;
  background: #eef2f8;
  color: #1b5fc1;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.03em;
  padding: 3px 10px;
  border-radius: 12px;
  margin-bottom: 10px;
}

.activity-title {
  font-size: 1.3rem;
  font-weight: 700;
  margin: 0 0 6px 0;
  color: #111;
  line-height: 1.4;
}

.activity-date {
  font-size: 0.85rem;
  color: #888;
  margin: 0 0 8px 0;
}

.activity-desc {
  font-size: 0.98rem;
  line-height: 1.65;
  color: #444;
  margin: 0;
}

/* =====================================================
   [2] More photo 버튼  ★ 색상/굵기 수정은 여기 ★
   ===================================================== */
.more-photo-wrap {
  display: flex;
  justify-content: flex-end;   /* 오른쪽 정렬 (center / flex-start 로 변경 가능) */
  margin-top: 16px;
}

.more-photo-btn {
  background: #1b5fc1;          /* ← 버튼 배경색 */
  border: 2px solid #1b5fc1;    /* ← 테두리 굵기 & 색 */
  color: #ffffff;               /* ← 글자색 */
  font-size: 0.95rem;           /* ← 글자 크기 */
  font-weight: 700;             /* ← 글자 굵기 (700=굵게, 800=더 굵게) */
  letter-spacing: 0.02em;
  border-radius: 24px;          /* ← 0 으로 하면 각진 버튼 */
  padding: 9px 22px;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(27, 95, 193, 0.3);
  transition: background 0.2s, border-color 0.2s, transform 0.15s;
}

.more-photo-btn:hover {
  background: #14479a;          /* ← 마우스 올렸을 때 배경색 */
  border-color: #14479a;
  transform: translateY(-1px);
}

.more-photo-btn .arrow {
  display: inline-block;
  margin-left: 8px;
  transition: transform 0.2s;
}
.more-photo-btn:hover .arrow {
  transform: translateX(4px);
}

/* 원본 사진 목록 보관용 — 화면에는 절대 안 보임 (수정 불필요) */
.photo-source {
  display: none;
}

/* =====================================================
   [3] 모달 팝업 창
   ===================================================== */
.photo-modal {
  display: none;
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.65);   /* ← 배경 어둡기 (0~1) */
  padding: 40px 20px;
  overflow-y: auto;
}
.photo-modal.open {
  display: flex;
}

.photo-modal-inner {
  position: relative;
  max-width: 1000px;                 /* ← 팝업 최대 너비 */
  width: 100%;      
  margin: auto;
  max-height: calc(100vh - 80px);     /* ← 추가 : 화면보다 길면 팝업 내부만 스크롤 */
  overflow-y: auto;                   /* ← 추가 */
  background: #ffffff;
  border-radius: 14px;
  padding: 28px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
}

.photo-modal-title {
  font-size: 1.15rem;
  font-weight: 700;
  color: #111;
  margin: 0 0 18px 0;
  padding-right: 44px;               /* X 버튼과 겹치지 않게 */
}

/* 우측 상단 X 버튼 */
.photo-modal-close {
  position: sticky; 
  top: 16px;
  right: 16px;
  width: 36px;
  height: 36px;
  border: none;
  border-radius: 50%;
  background: #f1f3f6;
  color: #333;
  font-size: 1.35rem;
  line-height: 1;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  float: right;
}
.photo-modal-close:hover {
  background: #1b5fc1;
  color: #ffffff;
}

/* 팝업 안 3열 바둑판 */
.photo-modal-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);   /* ← 열 개수 변경 지점 */
  gap: 12px;
}

.photo-modal-grid img,
.photo-modal-grid video {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border-radius: 8px;
  background: #000;
  display: block;
}

/* =====================================================
   [4] 모바일 대응
   ===================================================== */
@media (max-width: 700px) {
  .activity-row {
    flex-direction: column;
    align-items: flex-start;
  }
  .activity-row > img {
    width: 100%;
    flex: none;
  }
  .photo-modal {
    padding: 20px 12px;
  }
  .photo-modal-inner {
    padding: 20px;
  }
  .photo-modal-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }
}
</style>

<div class="activity-list" markdown="0">
  <!-- ============================================================
       카드 1 : 2026 내진설계경진대회
       ============================================================ -->
  <div class="activity-item">

    <div class="activity-row">
      <img src="https://labhomepage.github.io/sassl/images/2026 내진설계경진대회 8.jpg" alt="2026 내진설계경진대회">
      <div class="activity-text">
        <span class="activity-year">2026</span>
        <h3 class="activity-title">2026 구조물 내진설계 경진대회 참가 및 입상</h3>
        <p class="activity-date">2026.07.24(금)</p>
        <p class="activity-desc">
          부산대학교 지진방재연구센터에서 진행된 2026 구조물 내진설계 경진대회에 참가하였으며
          신지수(팀장), 김호수, 전희경, 임효성 학생이 장려상을 수상하였습니다.
        </p>
      </div>
    </div>

    <!-- ▼▼▼ 추가 사진 블록 (없으면 아래 두 div 를 통째로 삭제) ▼▼▼ -->
    <div class="more-photo-wrap">
      <button class="more-photo-btn" onclick="openPhotos(this)">More photo <span class="arrow">→</span></button>
    </div>

    <div class="photo-source">
      <img src="https://labhomepage.github.io/sassl/images/2026 내진설계경진대회 7.jpg" alt="사진1" loading="lazy">
      <img src="https://labhomepage.github.io/sassl/images/2026 내진설계경진대회 1.jpg" alt="사진2" loading="lazy">
      <img src="https://labhomepage.github.io/sassl/images/2026 내진설계경진대회 2.jpg" alt="사진3" loading="lazy">
    </div>
    <!-- ▲▲▲ 여기까지 삭제 ▲▲▲ -->

  </div>  <!-- ★ 카드 닫는 태그는 반드시 사진블록 다음에 -->

  <!-- ============================================================
       카드 1 : 2026 국토교통기술대전 코엑스
       ============================================================ -->
  <div class="activity-item">

   <div class="activity-row">
      <img src="https://labhomepage.github.io/sassl/images/코엑스 국토교통기술대전.jpg" alt="코엑스 국토교통기술대전">
      <div class="activity-text">
        <span class="activity-year">2026</span>
        <h3 class="activity-title">2026 국토교통기술대전</h3>
        <p class="activity-date">2026.06.25(목)</p>
        <p class="activity-desc">
          4학년 학부생들과 함께 2026 국토교통기술대전에 참여하여 최신 연구 및 기술 동향에 대한 지식을 습득하였습니다.
        </p>
      </div>
    </div>
 </div>

  <!-- ============================================================
       카드 1 : 2026년 한국콘크리트학회 봄 학술대회
       ============================================================ -->
  <div class="activity-item">

   <div class="activity-row">
      <img src="https://labhomepage.github.io/sassl/images/2026 봄 콘학.jpg" alt="2026 봄 콘학">
      <div class="activity-text">
        <span class="activity-year">2026</span>
        <h3 class="activity-title">2026년 한국콘크리트학회 봄 학술대회</h3>
        <p class="activity-date">2026.05.06(수) ~ 2026.05.08(금)</p>
        <p class="activity-desc">
          연구실 인원들과 함께 2026년 콘크리트학회 봄 학술대회에 참석하였으며,
          손동희 교수가 학술교류 활동 및 세션 좌장을 하였습니다.
        </p>
      </div>
    </div>

    <!-- ▼▼▼ 추가 사진 블록 (없으면 아래 두 div 를 통째로 삭제) ▼▼▼ -->
   <div class="more-photo-wrap">
      <button class="more-photo-btn" onclick="openPhotos(this)">More photo <span class="arrow">→</span></button>
    </div>

   <div class="photo-source">
      <img src="https://labhomepage.github.io/sassl/images/2026 봄 콘학.jpg" alt="사진1" loading="lazy">
      <img src="https://labhomepage.github.io/sassl/images/2026 봄 콘학 1.jpg" alt="사진1" loading="lazy">
      <img src="https://labhomepage.github.io/sassl/images/2026 봄 콘학 2.jpg" alt="사진2" loading="lazy">
  </div>
    <!-- ▲▲▲ 여기까지 삭제 ▲▲▲ -->

  </div>

  <!-- ============================================================
       카드 2 : 2026년 한국구조물진단유지관리공학회 봄 학술대회
       ============================================================ -->
  <div class="activity-item">

   <div class="activity-row">
      <img src="https://labhomepage.github.io/sassl/images/2026 봄 진단학회.jpg" alt="2026 봄 진단학회">
      <div class="activity-text">
        <span class="activity-year">2026</span>
        <h3 class="activity-title">2026년 한국구조물진단유지관리공학회 봄 학술대회</h3>
        <p class="activity-date">2026.04.08(수) ~ 2026.04.10(금)</p>
        <p class="activity-desc">
          2026년 한국구조물진단유지관리공학회 봄 학술대회 및 30주년 행사에 참석하였습니다.
        </p>
      </div>
    </div>

    <!-- ▼▼▼ 추가 사진 블록 (없으면 삭제) ▼▼▼ -->
    <div class="more-photo-wrap">
      <button class="more-photo-btn" onclick="openPhotos(this)">More photo <span class="arrow">→</span></button>
    </div>

    <div class="photo-source">
      <img src="https://labhomepage.github.io/sassl/images/2026 봄 진단학회.jpg" alt="사진1" loading="lazy">
      <img src="https://labhomepage.github.io/sassl/images/2026 봄 진단학회 1.jpg" alt="사진1" loading="lazy">
      <img src="https://labhomepage.github.io/sassl/images/2026 봄 진단학회 2.jpg" alt="사진2" loading="lazy">
      <img src="https://labhomepage.github.io/sassl/images/2026 봄 진단학회 3.jpg" alt="사진3" loading="lazy">
    </div>
    <!-- ▲▲▲ 여기까지 ▲▲▲ -->

  </div>

  <!-- ============================================================
       카드 3 : 2025년 한국콘크리트학회 가을 학술대회
       ============================================================ -->
  <div class="activity-item">

    <div class="activity-row">
      <img src="https://labhomepage.github.io/sassl/images/gallery2.png" alt="2025년 가을 학술대회">
      <div class="activity-text">
        <span class="activity-year">2025</span>
        <h3 class="activity-title">2025년 한국콘크리트학회 가을 학술대회</h3>
        <p class="activity-date">2025.11.05(수) ~ 2025.11.07(금)</p>
        <p class="activity-desc">
          2025년 콘크리트학회 가을 학술대회에 참석하여 손동희 교수가 학술논문 발표를 하였습니다.<br>
         <strong>발표논문 :</strong> 데이터 필터링에 기반한 강섬유 보강 콘크리트 보의 크기효과 저감에 대한 통계적 분석
        </p>
      </div>
    </div>

    <!-- ▼▼▼ 추가 사진 블록 (없으면 삭제) ▼▼▼ -->
    <div class="more-photo-wrap">
      <button class="more-photo-btn" onclick="openPhotos(this)">More photo <span class="arrow">→</span></button>
    </div>

    <div class="photo-source">
      <img src="https://labhomepage.github.io/sassl/images/gallery2.png" alt="사진1" loading="lazy">
      <img src="https://labhomepage.github.io/sassl/images/2025 가을 콘학 1.jpg" alt="사진2" loading="lazy">
      <img src="https://labhomepage.github.io/sassl/images/2025 가을 콘학 2.jpg" alt="사진3" loading="lazy">
    </div>
    <!-- ▲▲▲ 여기까지 ▲▲▲ -->

  </div>

  <!-- ============================================================
       카드 4 : KNUT RISE Capstone X-Road 2025
       ============================================================ -->
  <div class="activity-item">

    <div class="activity-row">
      <img src="https://labhomepage.github.io/sassl/images/gallery3.png" alt="교내 캡스톤디자인 경진대회">
      <div class="activity-text">
        <span class="activity-year">2025</span>
        <h3 class="activity-title">「KNUT RISE Capstone X-Road 2025」참가</h3>
        <p class="activity-date">2025.11.20(금)</p>
        <p class="activity-desc">
          교내 캡스톤 디자인 경진대회 「KNUT RISE Capstone X-Road 2025」에서
          박성진(팀장), 박성훈, 윤성수, 금승우, 백종우 학생이 우수상을 수상하였습니다.
        </p>
      </div>
    </div>

    <!-- ▼▼▼ 추가 사진 블록 (없으면 삭제) ▼▼▼ -->
    <div class="more-photo-wrap">
      <button class="more-photo-btn" onclick="openPhotos(this)">More photo <span class="arrow">→</span></button>
    </div>

    <div class="photo-source">
      <img src="https://labhomepage.github.io/sassl/images/gallery3.png" alt="사진1" loading="lazy">
      <img src="https://labhomepage.github.io/sassl/images/KNUT RISE_1.jpg" alt="사진2" loading="lazy">
      <img src="https://labhomepage.github.io/sassl/images/KNUT RISE_2.jpg" alt="사진3" loading="lazy">
      <img src="https://labhomepage.github.io/sassl/images/KNUT RISE_3.jpg" alt="사진3" loading="lazy">
      <img src="https://labhomepage.github.io/sassl/images/KNUT RISE_4.jpg" alt="사진3" loading="lazy">
    </div>
    <!-- ▲▲▲ 여기까지 ▲▲▲ -->

  </div>

  <!-- ============================================================
       카드 5 : 2025 구조물 내진설계 경진대회
       ============================================================ -->
  <div class="activity-item">

    <div class="activity-row">
      <img src="https://labhomepage.github.io/sassl/images/gallery4.png" alt="구조물 내진설계경진대회">
      <div class="activity-text">
        <span class="activity-year">2025</span>
        <h3 class="activity-title">2025 구조물 내진설계 경진대회 참가</h3>
        <p class="activity-date">2025.07.25(금)</p>
        <p class="activity-desc">
          부산에서 개최된 2025 구조물 내진설계 경진대회에서
          정성훈(팀장), 천우진, 김연우, 정원철 학생이 아이디어 우수상을 수상하였습니다.
        </p>
      </div>
    </div>

    <!-- ▼▼▼ 추가 사진 블록 (없으면 삭제) ▼▼▼ -->
    <div class="more-photo-wrap">
      <button class="more-photo-btn" onclick="openPhotos(this)">More photo <span class="arrow">→</span></button>
    </div>

    <div class="photo-source">
      <img src="https://labhomepage.github.io/sassl/images/gallery4.png" alt="사진2" loading="lazy">
      <img src="https://labhomepage.github.io/sassl/images/2025 내진설계경진대회_1.png" alt="사진1" loading="lazy">
      <img src="https://labhomepage.github.io/sassl/images/2025 내진설계경진대회_2.png" alt="사진2" loading="lazy">
      <img src="https://labhomepage.github.io/sassl/images/2026 내진설계경진대회 3.jpg" alt="사진1" loading="lazy">
      <img src="https://labhomepage.github.io/sassl/images/2026 내진설계경진대회 4.jpg" alt="사진2" loading="lazy">
      <img src="https://labhomepage.github.io/sassl/images/2026 내진설계경진대회 5.jpg" alt="사진3" loading="lazy">
      <img src="https://labhomepage.github.io/sassl/images/2026 내진설계경진대회 6.jpg" alt="사진3" loading="lazy">

      <video src="https://labhomepage.github.io/sassl/images/2025 내진설계경진대회.mp4"
           poster="https://labhomepage.github.io/sassl/images/2025 내진설계경진대회 3.png"
           controls preload="metadata" muted playsinline></video>
    </div>
    <!-- ▲▲▲ 여기까지 ▲▲▲ -->

  </div>

  <!-- ============================================================
       카드 6 : 2025년 한국콘크리트학회 봄 학술대회
       ============================================================ -->
  <div class="activity-item">

    <div class="activity-row">
      <img src="https://labhomepage.github.io/sassl/images/gallery1.png" alt="2025년 봄 학술대회">
      <div class="activity-text">
        <span class="activity-year">2025</span>
        <h3 class="activity-title">2025년 한국콘크리트학회 봄 학술대회</h3>
        <p class="activity-date">2025.05.07(수) ~ 2025.05.09(금)</p>
        <p class="activity-desc">
          2025년 콘크리트학회 봄 학술대회에 참석하여 손동희 교수가 콘크리트연구회 특별세션 발표를 하였습니다.<br>
          발표주제 : 수직분할공법을 적용한 기존 철근콘크리트 벽식구조의 하중 재분배 효과
        </p>
      </div>
    </div>

    <!-- ▼▼▼ 추가 사진 블록 (없으면 삭제) ▼▼▼ -->
    <div class="more-photo-wrap">
      <button class="more-photo-btn" onclick="openPhotos(this)">More photo <span class="arrow">→</span></button>
    </div>

    <div class="photo-source">
      <img src="https://labhomepage.github.io/sassl/images/gallery1.png" alt="사진1" loading="lazy">
      <img src="https://labhomepage.github.io/sassl/images/2025 봄 콘학 1.jpg" alt="사진2" loading="lazy">
      <img src="https://labhomepage.github.io/sassl/images/2025 봄 콘학 2.jpg" alt="사진3" loading="lazy">
    </div>
    <!-- ▲▲▲ 여기까지 ▲▲▲ -->

  </div>

</div>

<!-- ================================================================
     모달 팝업 (페이지에 딱 하나만 존재 / 카드 추가해도 수정 불필요)
     ================================================================ -->
<div class="photo-modal" id="photoModal" onclick="modalBackdrop(event)" markdown="0">
  <div class="photo-modal-inner">
    <button class="photo-modal-close" onclick="closePhotos()" aria-label="닫기">&times;</button>
    <h4 class="photo-modal-title" id="photoModalTitle"></h4>
    <div class="photo-modal-grid" id="photoModalGrid"></div>
  </div>
</div>

<script>
/* More photo 버튼 클릭 → 해당 카드의 .photo-source 내용을 팝업으로 복사 */
function openPhotos(btn) {
  var item   = btn.closest('.activity-item');
  var title  = item.querySelector('.activity-title').textContent;
  var source = item.querySelector('.photo-source');

  document.getElementById('photoModalTitle').textContent = title;
  document.getElementById('photoModalGrid').innerHTML = source.innerHTML;
  document.getElementById('photoModal').classList.add('open');
  document.body.style.overflow = 'hidden';   /* 뒤 배경 스크롤 잠금 */
}

/* 팝업 닫기 (X 버튼 / ESC / 바깥 클릭) */
function closePhotos() {
  document.getElementById('photoModal').classList.remove('open');
  document.getElementById('photoModalGrid').innerHTML = '';   /* 영상 정지 겸 초기화 */
  document.body.style.overflow = '';
}

/* 어두운 바깥 영역 클릭 시에만 닫기 */
function modalBackdrop(e) {
  if (e.target.id === 'photoModal') closePhotos();
}

/* ESC 키로 닫기 */
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closePhotos();
});
</script>
