"use client";

import { useEffect, useState } from "react";
import Icon from "./Icon";
import { profile } from "@/lib/data";

const links = [
  ["home", "Home"],
  ["about", "About"],
  ["skills", "Skills"],
  ["projects", "Projects"],
  ["experience", "Experience"],
  ["contact", "Contact"],
] as const;

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = scrollY + 140;
      let cur = "home";
      for (const [id] of links) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) cur = id;
      }
      setActive(cur);
      const h = document.documentElement.scrollHeight - innerHeight;
      setProgress(h > 0 ? (scrollY / h) * 100 : 0);
      setShowTop(scrollY > 700);
    };
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="progress" style={{ width: `${progress}%` }} />
      <nav className="top glass">
        <a href="#home" className="logo"><span>&lt;</span>{profile.firstName}<span> /&gt;</span></a>
        <div className="nav-links">
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} className={active === id ? "active" : undefined}>{label}</a>
          ))}
        </div>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <a href={profile.resume} download className="cv-btn">Download CV <Icon name="download" size={13} /></a>
          <button className="menu-btn" onClick={() => setOpen(true)} aria-label="Open menu"><Icon name="menu" /></button>
        </div>
      </nav>

      <div className={`scrim${open ? " open" : ""}`} onClick={() => setOpen(false)} />
      <aside className={`drawer glass${open ? " open" : ""}`} aria-label="Mobile menu">
        <button className="menu-btn close" onClick={() => setOpen(false)} aria-label="Close menu"><Icon name="x" /></button>
        {links.map(([id, label]) => (
          <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>
        ))}
        <a href={profile.resume} download className="cv-btn" style={{ display: "inline-flex", justifyContent: "center", marginTop: 18, borderBottom: "1px solid #a685ff99" }}>
          Download CV
        </a>
      </aside>

      <button className={`to-top glass${showTop ? " show" : ""}`} onClick={() => scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top">
        <Icon name="chevronUp" />
      </button>
    </>
  );
}
