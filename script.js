const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function renderTopics() {
  const root = $("#topics");
  if (!root || typeof topics === "undefined") return;
  root.innerHTML = topics.map((topic, index) => {
    const formulas = topic.formulas.map((formula) => `<div class="formula">${formula}</div>`).join("");
    const steps = topic.solved.map((step) => `<li>${step}</li>`).join("");
    return `
      <article class="accordion-item" data-search="${escapeHtml((topic.title + " " + topic.simple + " " + topic.formulas.join(" ")).toLowerCase())}">
        <button class="accordion-head" type="button" aria-expanded="false">
          <span class="topic-icon">${topic.icon}</span>
          <span>
            <h3>${index + 1}. ${topic.title}</h3>
            <small>Oddiy tushuntirish, formula, hayotiy misol va yechilgan namuna</small>
          </span>
          <span class="chev">+</span>
        </button>
        <div class="accordion-body">
          <div class="content-grid">
            <div>
              <div class="block">
                <h4>🎯 Oddiy tushuntirish</h4>
                <p>${topic.simple}</p>
              </div>
              <div class="block">
                <h4>📐 Formulalar</h4>
                <div class="formula-list">${formulas}</div>
                <p><strong>Kelib chiqishi:</strong> ${topic.derivation}</p>
              </div>
              <div class="block note example">
                <h4>✅ Yechilgan misol</h4>
                <ol class="steps">${steps}</ol>
              </div>
            </div>
            <aside>
              <div class="block">
                <h4>💡 Hayotiy misol</h4>
                <p>${topic.life}</p>
              </div>
              <div class="note warn">
                <strong>⚠️ Diqqat!</strong>
                <p>${topic.warn}</p>
              </div>
              <div class="note remember">
                <strong>✅ Eslab qol!</strong>
                <p>${topic.remember}</p>
              </div>
            </aside>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function renderGuides() {
  const root = $("#guides");
  if (!root || typeof guides === "undefined") return;
  root.innerHTML = guides.map((guide) => `
    <article class="guide-card" data-search="${escapeHtml((guide.title + " " + guide.recognize + " " + guide.example + " " + (guide.pattern || "")).toLowerCase())}">
      <h3><span class="topic-icon">${guide.icon}</span>${guide.title}</h3>
      ${guide.pattern ? `<div class="pdf-pattern"><strong>PDFda keladigan ko'rinish:</strong><p>${guide.pattern}</p></div>` : ""}
      <span class="mini-title">Qanday taniysan?</span>
      <p>${guide.recognize}</p>
      <span class="mini-title">Qadamba-qadam algoritm</span>
      <ol class="steps">${guide.algorithm.map((item) => `<li>${item}</li>`).join("")}</ol>
      <div class="note example">
        <strong>✅ Yechilgan misol</strong>
        <p>${guide.example}</p>
      </div>
    </article>
  `).join("");
}

function bindAccordion() {
  $$(".accordion-head").forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest(".accordion-item");
      const isOpen = item.classList.toggle("open");
      button.setAttribute("aria-expanded", String(isOpen));
      if (window.MathJax) MathJax.typesetPromise([item]);
    });
  });
}

function bindProgress() {
  const progress = $("#progress");
  const topButton = $("#toTop");
  if (!progress || !topButton) return;
  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const percent = max > 0 ? (window.scrollY / max) * 100 : 0;
    progress.style.width = `${percent}%`;
    topButton.classList.toggle("show", window.scrollY > 650);
  };
  window.addEventListener("scroll", update, { passive: true });
  update();
  topButton.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

function bindSearch() {
  const input = $("#searchInput");
  if (!input) return;
  input.addEventListener("input", () => {
    const query = input.value.trim().toLowerCase();
    [...$$(".accordion-item"), ...$$(".guide-card")].forEach((card) => {
      const haystack = card.dataset.search || "";
      card.classList.toggle("hidden", query && !haystack.includes(query));
    });
  });
}

function factorial(n) {
  if (n < 0) return NaN;
  let result = 1;
  for (let i = 2; i <= n; i += 1) result *= i;
  return result;
}

function combination(n, k) {
  if (k < 0 || k > n) return 0;
  return factorial(n) / (factorial(k) * factorial(n - k));
}

function bindCalculators() {
  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-calc]");
    if (!button) return;
    const type = button.dataset.calc;
    if (type === "bernoulli") {
      if (!$("#bernN")) return;
      const n = Number($("#bernN").value);
      const k = Number($("#bernK").value);
      const p = Number($("#bernP").value);
      const q = 1 - p;
      const value = combination(n, k) * p ** k * q ** (n - k);
      $("#bernOut").textContent = `P = ${value.toFixed(6)} (${(value * 100).toFixed(2)}%).`;
    }
    if (type === "poisson") {
      if (!$("#poisL")) return;
      const lambda = Number($("#poisL").value);
      const k = Number($("#poisK").value);
      const value = (lambda ** k * Math.E ** (-lambda)) / factorial(k);
      $("#poisOut").textContent = `P = ${value.toFixed(6)} (${(value * 100).toFixed(2)}%).`;
    }
    if (type === "stats") {
      if (!$("#statData")) return;
      const values = $("#statData").value.split(/[,;\s]+/).map(Number).filter((x) => Number.isFinite(x));
      if (!values.length) {
        $("#statOut").textContent = "Kamida bitta son kiriting.";
        return;
      }
      const mean = values.reduce((a, b) => a + b, 0) / values.length;
      const variance = values.reduce((sum, x) => sum + (x - mean) ** 2, 0) / values.length;
      const sampleVariance = values.length > 1 ? values.reduce((sum, x) => sum + (x - mean) ** 2, 0) / (values.length - 1) : 0;
      $("#statOut").textContent = `O'rtacha = ${mean.toFixed(4)}, D = ${variance.toFixed(4)}, s² = ${sampleVariance.toFixed(4)}, sigma = ${Math.sqrt(variance).toFixed(4)}.`;
    }
  });
}

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

document.addEventListener("DOMContentLoaded", () => {
  renderTopics();
  renderGuides();
  bindAccordion();
  bindProgress();
  bindSearch();
  bindCalculators();
  const first = $(".accordion-item");
  if (first) {
    first.classList.add("open");
    first.querySelector(".accordion-head").setAttribute("aria-expanded", "true");
  }
  if (window.MathJax) MathJax.typesetPromise();
});
