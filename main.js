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
  { feature: true, q: "After completing the Illuminate programme I felt like it was necessary for me to retake my Shahada", n: "Sahar", c: "United Kingdom", tp: true, hl: ["retake my Shahada"] },
  { q: "Muslim Lighthouse gave me direction, helped me make constant progress and make friends along the way.", n: "Omar", c: "France", tp: true, hl: ["gave me direction"] },
  { q: "Learning Fiqh has helped me improve my prayer, and lighthouse habits is honestly life-changing. The weekly classes and the variety of lessons which Ustadh teaches really clearly and in depth Allahumma barik.", n: "Jumainah", hl: ["improve my prayer"] },
  { q: "They take complex, scholarly-level knowledge and make it accessible to everyone", n: "Abrar", c: "United Arab Emirates", tp: true, hl: ["accessible to everyone"] },
  { q: "The learning structure, the guidance on how to go about actually learning, not just the information itself. You address many misconceptions and take Islam back to its core.", n: "Nicolai", hl: ["how to go about actually learning"], feature: true },
  { q: "The teaching style by Ustadh Rhyad is very clear and effective, Allahumma Barik.", n: "Samah", c: "United Kingdom", tp: true, hl: ["very clear and effective"] },
  { q: "In this program the knowledge is organised in areas and you are given a guide map", n: "Rahal", c: "Spain", tp: true, hl: ["guide map"] },
  { q: "The most compelling thing about Muslim Lighthouse is that it's a community. People are always doing something to benefit the other students. The classes are well-structured, and it makes it easy to listen and learn.", n: "Yaseen", hl: ["it's a community"] },
  { q: "It truly opened my eyes to how important it is to have an Islamic teacher.", n: "Sumayyah", c: "United Kingdom", tp: true, hl: ["have an Islamic teacher"] },
  { q: "I found more than what I was expecting, not just knowledge but life lessons and practical guidance which has transformed the way I live my life.", n: "Samah", hl: ["transformed the way I live my life"] },
  { q: "You have a great teacher that you can go to for advice at any time.", n: "Deepak", c: "United Kingdom", tp: true, hl: ["advice at any time"] },
  { q: "You cover sciences and examples that always feel relevant but unspoken of. No matter where you are it is catered for everyone from beginner to advanced. Everyone can learn without feeling left out.", n: "Asmaa", hl: ["relevant but unspoken of"] },
  { q: "It helped me build solid foundations, and as result my knowledge has increased and is now deeply rooted inside me.", n: "Nizar", c: "Spain", tp: true, hl: ["deeply rooted"] },
  { q: "I found more than what was promised because I suspected there would only be classes without knowing there is a whole community. The most compelling aspects are the live class sessions.", n: "Aisha", hl: ["a whole community"] },
  { q: "Brother Rhyad is a teacher who helps to bring ease to the student’s life.", n: "Seher", c: "United Kingdom", tp: true, hl: ["bring ease"] },
  { q: "I’ve also gained a supportive and motivating community of like-minded individuals on this same journey.", n: "Rozanna", c: "United States", tp: true, hl: ["supportive and motivating community"] },
  { q: "I'm continuously gaining connection with my maker in a way I never thought I would've with the help of your great illustration skills.", n: "Muhammed", hl: ["connection with my maker"] },
  { q: "with an expert teacher you can genuinely trust to inspire and impart masses of knowledge", n: "Hanna", c: "United Kingdom", tp: true, hl: ["genuinely trust"] },
  { q: "Joining Muslim Lighthouse has truly been one of the most transformative decisions of my life.", n: "Ella", c: "United Kingdom", tp: true, hl: ["most transformative decisions"] },
  { q: "It truly enhances your relationship with Allah as you explore and delve into various aspects of the deen", n: "Laiba", c: "United Kingdom", tp: true, hl: ["relationship with Allah"] },
  { q: "I guarantee you’ll love both the community and the courses.", n: "Renwar", c: "United Kingdom", tp: true, hl: [] },
  { q: "You will come out of the program, with a different perspective on life.", n: "Rayyan", c: "Canada", tp: true, hl: ["different perspective on life"] },
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

/* ---- Footer year ---- */
(() => { const y = document.getElementById("year"); if (y) y.textContent = new Date().getFullYear(); })();
