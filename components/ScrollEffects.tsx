"use client";

import { useEffect } from "react";

/** Fades in every `.reveal` element on scroll and animates `[data-count]` numbers. */
export default function ScrollEffects() {
  useEffect(() => {
    const count = (el: HTMLElement) => {
      const end = Number(el.dataset.count);
      const dec = Number(el.dataset.dec || 0);
      const suf = el.dataset.suffix || "";
      const t0 = performance.now();
      const step = (now: number) => {
        const p = Math.min((now - t0) / 1600, 1);
        const e = 1 - Math.pow(1 - p, 3);
        el.textContent = (end * e).toFixed(dec) + suf;
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add("in");
          io.unobserve(e.target);
          const n = e.target.querySelector<HTMLElement>("[data-count]");
          if (n) count(n);
        }),
      { threshold: 0.12 }
    );
    document.querySelectorAll<HTMLElement>(".reveal").forEach((el, i) => {
      el.style.transitionDelay = (i % 4) * 70 + "ms";
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return null;
}
