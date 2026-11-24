/* Muslim Lighthouse v2 · small, dependency-free behaviour */

/* ---- Settings ------------------------------------------------------------
   KIT_FORM_ID: the numeric id of the Muslim Lighthouse form in Kit
   (muslim-lighthouse.kit.com). Find it in Kit: Grow > Landing Pages & Forms >
   open the form > the number in the page address. Leave empty until created. */
const KIT_FORM_ID = "";
const CHECKOUT_URL = "https://www.muslimlighthouse.app/checkout/quarterly-vs-annual-3-months-free";

document.documentElement.classList.add("js");

/* ---- Reveal on scroll ---- */
(() => {
  const els = document.querySelectorAll(".reveal");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("is-in")); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
  els.forEach((e) => io.observe(e));
})();

/* ---- Tier tabs (WAI-ARIA tabs pattern, arrow keys supported) ---- */
(() => {
  const tabs = [...document.querySelectorAll('.segmented [role="tab"]')];
  if (!tabs.length) return;
  const select = (tab, focus) => {
    tabs.forEach((t) => {
      const on = t === tab;
      t.setAttribute("aria-selected", String(on));
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute("aria-controls")).hidden = !on;
    });
    if (focus) tab.focus();
  };
  tabs.forEach((t, i) => {
    t.addEventListener("click", () => select(t));
    t.addEventListener("keydown", (e) => {
      const d = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
      if (d) { e.preventDefault(); select(tabs[(i + d + tabs.length) % tabs.length], true); }
    });
  });
})();

/* ---- Testimonials ----
   Website quotes come from the previous muslimlighthouse.com.
   Trustpilot quotes are short exact excerpts from trustpilot.com/review/muslimlighthouse.com */
const QUOTES = [
  { feature: true, q: "After completing the Illuminate programme I felt like it was necessary for me to retake my Shahada as Islam felt like a completely brand new gift that I’d previously taken for granted.", n: "Sahar", c: "United Kingdom", tp: true, hl: ["retake my Shahada"] },
  { q: "Muslim Lighthouse gave me direction, helped me make constant progress and make friends along the way.", n: "Omar", c: "France", tp: true, hl: ["gave me direction"] },
  { q: "The most compelling part of Muslim Lighthouse is that we learn every topic thoroughly, no matter how complicated it is. Nothing feels “intermediate” or “advanced only.” Everything is explained clearly and deeply, and you truly feel like you’re building real understanding.", n: "Lima", hl: ["no matter how complicated it is"] },
  { q: "My life totally changed after joining MLH alhumdulilah I’m a hijabi now and every time I travel now they know straight away that I’m a Muslim because of my clothes and hijab.", n: "Ayesha", hl: ["I’m a hijabi now"] },
  { q: "They take complex, scholarly-level knowledge and make it accessible to everyone", n: "Abrar", c: "United Arab Emirates", tp: true, hl: ["accessible to everyone"] },
  { feature: true, q: "I hesitated for months before signing up because I couldn’t picture what it would be like. I thought it would just be uploaded videos and a few live sessions, but it turned out to be much more interactive, personal, and engaging than I imagined.", n: "Fatima", hl: ["much more interactive, personal, and engaging"] },
  { q: "I’ve never enjoyed learning about the religion that much. Worship tastes better than ever.", n: "Ugo", hl: ["Worship tastes better than ever"] },
  { q: "In the past whenever I needed information I would go to Google, but ultimately that would always lead me to confusion as there was always so much information and different answers. Having a teacher has completely erased that confusion.", n: "Sumayyah", c: "United Kingdom", tp: true, hl: ["completely erased that confusion"] },
  { q: "Only been using this a month and alhamdulilah I have already seen a difference in my relationship with Allah and those around me. The teaching style by Ustadh Rhyad is very clear and effective, Allahumma Barik.", n: "Samah", c: "United Kingdom", tp: true, hl: ["already seen a difference"] },
  { q: "Paying for stuff like this online has never really been something I considered doing. But alhamdullillah, it was very worth it.", n: "Nicolai", hl: ["very worth it"] },
  { q: "This is the best course I found, with an expert teacher you can genuinely trust to inspire and impart masses of knowledge in a brilliantly motivational, sharp, interesting way during live online classes.", n: "Hanna", c: "United Kingdom", tp: true, hl: ["the best course I found"] },
  { q: "It helped me build solid foundations, and as result my knowledge has increased and is now deeply rooted inside me. Now I see things with clarity in my life.", n: "Nizar", c: "Spain", tp: true, hl: ["deeply rooted"] },
  { q: "You will come out of the program, with a different perspective on life. A complete perspective.", n: "Rayyan", c: "Canada", tp: true, hl: ["different perspective on life"] },
  { q: "My family have seen the positive changes in me and the advice I receive from my teacher has been of great benefit.", n: "Deepak", c: "United Kingdom", tp: true, hl: ["My family have seen the positive changes"] },
  { q: "Brother Rhyad is a teacher who helps to bring ease to the student’s life. He makes the information very digestible which is not common to come by.", n: "Seher", c: "United Kingdom", tp: true, hl: ["very digestible"] },
  { q: "The way you teach is phenomenal and you are always able to keep our attention.", n: "Asmaa", hl: ["always able to keep our attention"] },
  { q: "In this program the knowledge is organised in areas and you are given a guide map on how to use the resources of the platform and make the most of it.", n: "Rahal", c: "Spain", tp: true, hl: ["guide map"] },
  { q: "Learning Fiqh has helped me improve my prayer, and lighthouse habits is honestly life-changing.", n: "Jumainah", hl: ["improve my prayer"] },
  { q: "It truly enhances your relationship with Allah as you explore and delve into various aspects of the deen", n: "Laiba", c: "United Kingdom", tp: true, hl: ["relationship with Allah"] },
  { q: "I’ve also gained a supportive and motivating community of like-minded individuals on this same journey.", n: "Rozanna", c: "United States", tp: true, hl: ["supportive and motivating community"] },
  { q: "The most compelling and beautiful thing about this Muslim Lighthouse Community is that it’s a community. I find people in this chat are always doing something to benefit the other students.", n: "Yaseen", hl: ["it’s a community"] },
  { q: "Joining Muslim Lighthouse has truly been one of the most transformative decisions of my life.", n: "Ella", c: "United Kingdom", tp: true, hl: ["most transformative decisions"] },
  { q: "I'm continuously gaining connection with my maker in a way I never thought I would've with the help of your great illustration skills.", n: "Muhammed", hl: ["connection with my maker"] },
  { q: "I guarantee you’ll love both the community and the courses.", n: "Renwar", c: "United Kingdom", tp: true, hl: [] },
];

(() => {
  const host = document.getElementById("quotes");
  if (!host) return;
  const esc = (s) => s.replace(/[&<>"]/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[ch]));
  const mark = (q, hl) => {
    let out = esc(q);
    (hl || []).forEach((h) => { const e = esc(h); out = out.replace(e, `<mark>${e}</mark>`); });
    return out;
  };
  host.innerHTML = QUOTES.map((x) => `
    <figure class="quote${x.feature ? " quote--feature" : ""}">
      <p>${mark(x.q, x.hl)}</p>
      <footer><span><b>${esc(x.n)}</b>${x.c ? ", " + esc(x.c) : ""}</span><span class="quote__src">${x.tp ? "Trustpilot ★★★★★" : "Student"}</span></footer>
    </figure>`).join("");
  host.classList.add("is-collapsed");
  const more = document.createElement("div");
  more.className = "quotes-more";
  more.innerHTML = `<button class="btn btn--dark" type="button" aria-controls="quotes" aria-expanded="false">Read more reviews</button>`;
  host.after(more);
  more.querySelector("button").addEventListener("click", (e) => {
    host.classList.remove("is-collapsed");
    e.currentTarget.setAttribute("aria-expanded", "true");
    more.innerHTML = `<a class="link-arrow" href="https://www.trustpilot.com/review/muslimlighthouse.com" target="_blank" rel="noopener">Read every review on Trustpilot</a>`;
  });
})();

/* ---- Mobile sticky CTA: shows after the hero, hides near pricing and the final CTA ---- */
(() => {
  const bar = document.getElementById("sticky");
  const hero = document.querySelector(".hero");
  const hideZones = [document.getElementById("pricing")].filter(Boolean);
  if (!bar || !hero || !("IntersectionObserver" in window)) return;
  let pastHero = false; const inZone = new Set();
  const update = () => {
    const on = pastHero && inZone.size === 0;
    bar.classList.toggle("is-on", on);
    bar.setAttribute("aria-hidden", String(!on));
    bar.querySelector("a").tabIndex = on ? 0 : -1;
  };
  new IntersectionObserver(([en]) => { pastHero = !en.isIntersecting; update(); }).observe(hero);
  const zio = new IntersectionObserver((ens) => { ens.forEach((en) => en.isIntersecting ? inZone.add(en.target) : inZone.delete(en.target)); update(); });
  hideZones.forEach((z) => zio.observe(z));
})();

/* ---- Analytics hooks (Microsoft Clarity custom events) ---- */
document.addEventListener("click", (e) => {
  const a = e.target.closest("[data-cta]");
  if (!a) return;
  try { window.clarity && window.clarity("event", "cta_" + a.dataset.cta); } catch (_) {}
  if (a.href === CHECKOUT_URL || a.href.startsWith(CHECKOUT_URL)) { try { window.clarity && window.clarity("event", "checkout_click"); } catch (_) {} }
});

/* ---- Kit email capture ---- */
(() => {
  const form = document.getElementById("kit-form");
  if (!form) return;
  const msg = document.getElementById("kit-msg");
  const email = document.getElementById("kit-email");
  const btn = form.querySelector("button");
  const say = (text, err) => { msg.textContent = text; msg.classList.toggle("is-error", !!err); };

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const value = email.value.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      email.setAttribute("aria-invalid", "true");
      say("Please enter a valid email address, like name@example.com.", true);
      email.focus();
      return;
    }
    email.removeAttribute("aria-invalid");
    if (!KIT_FORM_ID) { say("Sign-up is opening very soon. Please check back shortly.", true); return; }
    btn.disabled = true; const label = btn.textContent; btn.textContent = "Sending…"; say("");
    try {
      const res = await fetch(`https://app.kit.com/forms/${KIT_FORM_ID}/subscriptions`, {
        method: "POST", body: new FormData(form), headers: { Accept: "application/json" },
      });
      const data = res.ok ? await res.json() : {};
      if (data.status !== "success") throw new Error("kit");
      form.closest(".capture").classList.add("is-done");
      say("You're in. Check your inbox (and your spam folder, just in case) for your first email.");
      try { window.clarity && window.clarity("event", "lead_signup"); } catch (_) {}
    } catch (_) {
      say("Something went wrong on our side. Please try again in a moment.", true);
    } finally { btn.disabled = false; btn.textContent = label; }
  });
})();

/* ---- Screenshot wall: priority masonry + reveal the rest ----
   Items are in priority order. On tablet and desktop each one goes into the currently shortest column,
   so the order reads left to right along the top. On phones the list stays a swipeable row. */
(() => {
  const wrap = document.getElementById("wall");
  if (!wrap) return;
  const list = wrap.querySelector(".wall");
  const items = [...list.children];
  let cols = 0;
  const layout = () => {
    const w = window.innerWidth;
    const n = w >= 1040 ? 3 : w >= 700 ? 2 : 1;
    if (n === cols) return;
    cols = n;
    list.replaceChildren();
    if (n === 1) { list.classList.remove("is-masonry"); items.forEach((li) => list.appendChild(li)); return; }
    list.classList.add("is-masonry");
    const columns = Array.from({ length: n }, () => { const c = document.createElement("div"); c.className = "wall__col"; list.appendChild(c); return c; });
    const heights = new Array(n).fill(0);
    items.forEach((li) => {
      const i = heights.indexOf(Math.min(...heights));
      columns[i].appendChild(li);
      heights[i] += parseFloat(li.dataset.ar) || 1;
    });
  };
  layout();
  let t; window.addEventListener("resize", () => { clearTimeout(t); t = setTimeout(layout, 150); });
  const btn = document.querySelector(".wall__more button");
  if (btn) btn.addEventListener("click", () => { wrap.classList.add("is-open"); btn.setAttribute("aria-expanded", "true"); });

  // Tap or click a screenshot to read it full size.
  const viewer = document.getElementById("viewer");
  if (!viewer || typeof viewer.showModal !== "function") return;
  const big = viewer.querySelector("img");
  items.forEach((item) => {
    const img = item.querySelector("img");
    img.tabIndex = 0;
    img.setAttribute("role", "button");
    const open = () => { big.src = img.currentSrc || img.src; big.alt = img.alt; viewer.showModal(); };
    img.addEventListener("click", open);
    img.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); } });
  });
  viewer.querySelector(".viewer__close").addEventListener("click", () => viewer.close());
  viewer.addEventListener("click", (e) => { if (e.target === viewer) viewer.close(); });
})();

/* ---- Any image marked data-zoom opens full size in the shared viewer ---- */
(() => {
  const viewer = document.getElementById("viewer");
  if (!viewer || typeof viewer.showModal !== "function") return;
  const big = viewer.querySelector("img");
  document.querySelectorAll("img[data-zoom]").forEach((img) => {
    img.tabIndex = 0;
    img.setAttribute("role", "button");
    const open = () => { big.src = img.currentSrc || img.src; big.alt = img.alt; viewer.showModal(); };
    img.addEventListener("click", open);
    img.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); } });
  });
  // Buttons that reveal a screenshot only when asked.
  document.querySelectorAll("button[data-full]").forEach((btn) => {
    btn.addEventListener("click", () => { big.src = btn.dataset.full; big.alt = btn.dataset.alt || ""; viewer.showModal(); });
  });
})();

/* ---- Footer year ---- */
(() => { const y = document.getElementById("year"); if (y) y.textContent = new Date().getFullYear(); })();
