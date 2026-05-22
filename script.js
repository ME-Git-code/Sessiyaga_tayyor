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

function bindDashboardNavigation() {
  const links = $$(".side-nav a[href^='#']");
  if (!links.length) return;

  const setActive = (hash) => {
    links.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === hash));
  };

  links.forEach((link) => {
    link.addEventListener("click", () => setActive(link.getAttribute("href")));
  });

  const sections = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if (!("IntersectionObserver" in window) || !sections.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(`#${visible.target.id}`);
    },
    { rootMargin: "-18% 0px -62% 0px", threshold: [0.12, 0.28, 0.48] },
  );

  sections.forEach((section) => observer.observe(section));
}

function bindPageTransitions() {
  const overlay = document.createElement("div");
  overlay.className = "page-transition-overlay";
  document.body.append(overlay);

  const links = $$("a[href]").filter((link) => {
    const href = link.getAttribute("href") || "";
    return (
      !href.startsWith("#") &&
      !href.startsWith("http") &&
      !href.endsWith(".pdf") &&
      link.target !== "_blank"
    );
  });

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");
      if (!href) return;
      event.preventDefault();
      const rect = link.getBoundingClientRect();
      overlay.style.setProperty("--transition-x", `${rect.left + rect.width / 2}px`);
      overlay.style.setProperty("--transition-y", `${rect.top + rect.height / 2}px`);
      overlay.classList.add("show");
      document.body.classList.add("is-leaving");
      window.setTimeout(() => {
        window.location.href = href;
      }, 330);
    });
  });
}

function bindCustomCursor() {
  if (!document.body.classList.contains("study-dashboard")) return;
  if (!window.matchMedia("(pointer: fine)").matches) return;

  const cursor = document.createElement("div");
  const ring = document.createElement("div");
  cursor.className = "mac-cursor";
  ring.className = "mac-cursor-ring";
  document.body.append(ring, cursor);
  document.body.classList.add("use-custom-cursor");

  let ringX = 0;
  let ringY = 0;
  let targetX = 0;
  let targetY = 0;

  const move = (event) => {
    targetX = event.clientX;
    targetY = event.clientY;
    cursor.style.transform = `translate(${targetX}px, ${targetY}px)`;
  };

  const tick = () => {
    ringX += (targetX - ringX) * 0.22;
    ringY += (targetY - ringY) * 0.22;
    ring.style.left = `${ringX}px`;
    ring.style.top = `${ringY}px`;
    window.requestAnimationFrame(tick);
  };

  document.addEventListener("mousemove", move, { passive: true });
  document.addEventListener("mouseleave", () => document.body.classList.remove("use-custom-cursor"));
  document.addEventListener("mouseenter", () => document.body.classList.add("use-custom-cursor"));
  document.addEventListener("mousedown", () => ring.style.transform = "translate(-50%, -50%) scale(0.72)");
  document.addEventListener("mouseup", () => ring.style.transform = "translate(-50%, -50%) scale(1)");
  tick();
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
  bindDashboardNavigation();
  bindPageTransitions();
  bindCustomCursor();
  const first = $(".accordion-item");
  if (first) {
    first.classList.add("open");
    first.querySelector(".accordion-head").setAttribute("aria-expanded", "true");
  }
  if (window.MathJax) MathJax.typesetPromise();
});
