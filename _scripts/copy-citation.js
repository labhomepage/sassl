/*
  ============================================================
  [Copy citation 버튼]
  - 논문 카드의 "Copy citation" 버튼을 누르면
    버튼에 저장된 인용문(APA 형식, data-cite)을 클립보드에 복사
  - 복사되면 2초 동안 "Copied!"(초록색)로 바뀜
  - _scripts 폴더의 js는 모든 페이지에 자동으로 불러와지므로 따로 연결할 필요 없음
  ============================================================
*/

{
  // 클립보드에 글자 복사 (최신 방식 → 안 되면 예전 방식)
  const copyText = async (text) => {
    // 1) 최신 브라우저 방식 (https 사이트에서 동작)
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        return true;
      }
    } catch (error) {
      // 실패하면 아래 예전 방식으로 다시 시도
    }

    // 2) 예전 브라우저용 방식 (안 보이는 입력창에 넣고 복사)
    const box = document.createElement("textarea");
    box.value = text;
    box.setAttribute("readonly", "");
    box.style.position = "fixed";
    box.style.top = "0";
    box.style.opacity = "0";
    document.body.appendChild(box);
    box.select();

    let ok = false;
    try {
      ok = document.execCommand("copy");
    } catch (error) {
      ok = false;
    }

    document.body.removeChild(box);
    return ok;
  };

  // 페이지 전체에서 버튼 클릭 감지 (버튼이 몇 개든 이 코드 하나로 처리)
  document.addEventListener("click", async (event) => {
    const button = event.target.closest(".cite-copy-btn");
    if (!button) return;

    const label = button.querySelector(".cite-copy-label");
    const ok = await copyText(button.dataset.cite || "");

    // 원래 글자("Copy citation") 기억
    if (!label.dataset.original) label.dataset.original = label.textContent;

    // 결과 표시
    label.textContent = ok ? "Copied!" : "Copy failed";
    button.classList.toggle("is-copied", ok);

    // 2초 뒤 원래대로
    clearTimeout(button.copyTimer);
    button.copyTimer = setTimeout(() => {
      label.textContent = label.dataset.original;
      button.classList.remove("is-copied");
    }, 2000);
  });
}
