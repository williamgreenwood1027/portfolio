import Galaxy from "@/components/Galaxy";
import Nav from "@/components/Nav";
import TypedRole from "@/components/TypedRole";
import Assistant from "@/components/Assistant";
import ScrollEffects from "@/components/ScrollEffects";
import ProjectArt from "@/components/ProjectArt";
import Experience from "@/components/Experience";
import ContactForm from "@/components/ContactForm";
import Icon from "@/components/Icon";
import { expertise, heroChips, profile, profileFacts, projects, services, stack, stats } from "@/lib/data";

const stackIcons: Record<string, string> = {
  Languages: "code",
  Backend: "server",
  Frontend: "monitor",
  "Data & Messaging": "database",
  "Cloud & DevOps": "cloud",
  "AI & Automation": "bot",
};

function SectionHead({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return (
    <div className="sec-head reveal">
      <div>
        <div className="eyebrow">{eyebrow}</div>
        <div className="sec-title" style={{ marginTop: 6 }}><span className="dot" /><h2>{title}</h2></div>
      </div>
      {children}
    </div>
  );
}

export default function Home() {
  const allTech = [...new Set(Object.values(stack).flat())];
  const half = Math.ceil(allTech.length / 2);
  const rows = [allTech.slice(0, half), allTech.slice(half)];

  return (
    <main className="portfolio-bg">
      <Galaxy />
      <ScrollEffects />

      <div className="wrap">
        <Nav />

        {/* ================= HERO ================= */}
        <section id="home" className="hero">
          <div className="reveal">
            <p className="hello">Hi, I&apos;m <span className="status"><span className="pulse" />OPEN TO OPPORTUNITIES</span></p>
            <h1 className="name"><span className="text-gradient">William<br />Greenwood</span></h1>
            <TypedRole />
            <p className="lead">
              I architect <b>high-performance</b> distributed systems, resilient cloud infrastructure and production-ready <b>AI workflows</b>, turning ambiguous product requirements into secure, scalable software.
            </p>
            <div className="chips">{heroChips.map((c) => <span key={c} className="chip">{c}</span>)}</div>
            <div className="cta">
              <a href="#projects" className="btn btn-primary">View My Work <Icon name="arrowRight" size={16} /></a>
              <a href="#contact" className="btn btn-ghost">Contact Me</a>
            </div>
            <div className="follow">
              <small>Follow me</small>
              <div className="icons">
                <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub"><Icon name="github" size={19} /></a>
                <a href={`mailto:${profile.email}`} aria-label="Email" title="Email"><Icon name="mail" size={19} /></a>
                <a href={profile.phoneHref} aria-label="Phone" title="Phone"><Icon name="phone" size={19} /></a>
                <a href={profile.resume} download aria-label="Download résumé" title="Download résumé"><Icon name="file" size={19} /></a>
              </div>
              <small className="mono">📍 Albuquerque, NM</small>
            </div>
          </div>
          <Assistant />
        </section>

        {/* ================= STATS ================= */}
        <section className="stats" aria-label="Impact highlights">
          {stats.map((s) => (
            <div key={s.label} className="stat glass reveal">
              <div className="num text-gradient" data-count={s.value} data-suffix={s.suffix} data-dec={s.decimals ?? 0}>0</div>
              <div className="lbl">{s.label}</div>
            </div>
          ))}
        </section>

        {/* ================= ABOUT ================= */}
        <section id="about" className="sec">
          <div className="about glass neon reveal">
            <div>
              <div className="sec-title" style={{ marginBottom: 18 }}><span className="dot" /><h2>About Me</h2></div>
              <p>I&apos;m a Senior Backend &amp; Full-Stack Engineer with over <strong style={{ color: "#fff" }}>11 years</strong> of experience architecting high-performance distributed systems, robust cloud infrastructure and modern full-stack web applications.</p>
              <p>I&apos;ve scaled enterprise backend architectures with Ruby on Rails, Go, Java and Python, while driving rapid feature iteration in startup environments with TypeScript, Next.js and Tailwind CSS. Lately I&apos;ve been engineering production AI workflows with FastAPI and RAG architectures that automate complex operational work.</p>
              <p>I&apos;m a product-minded technical leader who thrives in fast-paced engineering cultures: I take ambiguous requirements and turn them into secure, scalable and resilient solutions.</p>
              <h3 className="text-gradient">Key Areas of Expertise</h3>
              <ul className="exp-list">
                {expertise.map((e, i) => (
                  <li key={e.title}><span className="n">{String(i + 1).padStart(2, "0")}</span><div><b>{e.title}</b>: {e.text}</div></li>
                ))}
              </ul>
            </div>
            <div className="profile glass">
              <div className="avatar"><span className="text-gradient">WG</span></div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontWeight: 800, fontSize: "1.1rem" }}>{profile.name}</div>
                <div className="mono" style={{ fontSize: ".74rem", color: "var(--mint)", marginTop: 4 }}>{profile.subtitle}</div>
              </div>
              <div className="kv">
                {profileFacts.map(([k, v]) => (
                  <div key={k}><span>{k}</span><span style={k === "Status" ? { color: "#5ee9b5" } : undefined}>{v}</span></div>
                ))}
              </div>
              <a href={profile.resume} download className="btn btn-primary" style={{ justifyContent: "center" }}>
                Download Résumé <Icon name="download" size={15} />
              </a>
            </div>
          </div>
        </section>

        {/* ================= WHAT I DO ================= */}
        <section className="sec" style={{ paddingTop: 8 }}>
          <SectionHead eyebrow="Services" title="What I Do" />
          <div className="services">
            {services.map((s) => (
              <article key={s.title} className="svc glass reveal">
                <div className="ic"><Icon name={s.icon} size={22} /></div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <div className="tags">{s.tags.map((t) => <span key={t}>{t}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        {/* ================= SKILLS ================= */}
        <section id="skills" className="sec">
          <SectionHead eyebrow="Toolbox" title="Technology Stack">
            <span className="chip mono" style={{ color: "var(--mint-3)" }}>{allTech.length}+ technologies</span>
          </SectionHead>
          {rows.map((row, r) => (
            <div key={r} className="marquee reveal">
              <div className={`track${r ? " rev" : ""}`}>
                {[...row, ...row].map((t, i) => <span key={i} className="pill"><i />{t}</span>)}
              </div>
            </div>
          ))}
          <div className="stack-grid">
            {Object.entries(stack).map(([group, items]) => (
              <div key={group} className="stack glass reveal">
                <h4>
                  <Icon name={stackIcons[group]} size={16} stroke="#74d89a" />
                  {group}
                  <span className="mono">{String(items.length).padStart(2, "0")}</span>
                </h4>
                <div className="items">{items.map((t) => <span key={t}>{t}</span>)}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= PROJECTS ================= */}
        <section id="projects" className="sec">
          <SectionHead eyebrow="Selected Work" title="Featured Projects">
            <a href={profile.github} target="_blank" rel="noreferrer" className="chip" style={{ color: "var(--mint-3)" }}>
              <Icon name="github" size={14} /> View GitHub
            </a>
          </SectionHead>
          <div className="projects">
            {projects.map((p) => (
              <article key={p.title} className="proj glass reveal">
                <div className="proj-art">
                  <ProjectArt kind={p.art} />
                  <span className="badge">{p.badge}</span>
                  <div className="metric"><b className="text-gradient">{p.metric}</b><small>{p.metricLabel}</small></div>
                </div>
                <div className="proj-body">
                  <h3>{p.title}</h3>
                  <p>{p.summary}</p>
                  <ul>{p.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
                  <div className="tags">{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ================= EXPERIENCE ================= */}
        <section id="experience" className="sec">
          <SectionHead eyebrow="Journey" title="Career Timeline">
            <span className="open-badge"><span className="pulse" />OPEN TO WORK</span>
          </SectionHead>
          <Experience />
        </section>

        {/* ================= EDUCATION ================= */}
        <section className="sec" style={{ paddingTop: 8 }}>
          <SectionHead eyebrow="Foundation" title="Education" />
          <div className="edu">
            <div className="card glass reveal">
              <div className="ic"><Icon name="cap" size={24} /></div>
              <div>
                <h3>Bachelor of Science in Software Engineering</h3>
                <p>New Mexico State University · Las Cruces, NM</p>
                <span className="yr">Aug 2011 — May 2015</span>
              </div>
            </div>
            <div className="card glass reveal">
              <div className="ic"><Icon name="shield" size={24} /></div>
              <div>
                <h3>Engineering Practices</h3>
                <p>Microservices, event-driven architecture, CI/CD (GitHub Actions, Azure DevOps), automated testing, observability, Agile/Scrum.</p>
                <span className="yr">Applied across 11+ years</span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section id="contact" className="sec">
          <div className="contact glass neon reveal">
            <div style={{ position: "relative" }}>
              <div className="eyebrow">Contact</div>
              <h2><span className="text-gradient">Let&apos;s Work<br />Together</span></h2>
              <p className="lead2">Have a role, a hard backend problem, or an AI initiative that needs to ship? I&apos;d love to hear about it. I usually reply within a day.</p>
              <div className="c-list">
                <a className="c-item" href={`mailto:${profile.email}`}>
                  <span className="ic"><Icon name="mail" /></span>
                  <div><small>Email</small><span>{profile.email}</span></div>
                </a>
                <a className="c-item" href={profile.phoneHref}>
                  <span className="ic"><Icon name="phone" /></span>
                  <div><small>Phone</small><span>{profile.phone}</span></div>
                </a>
                <a className="c-item" href={profile.github} target="_blank" rel="noreferrer">
                  <span className="ic"><Icon name="github" /></span>
                  <div><small>GitHub</small><span>github.com/williamgreenwood1027</span></div>
                </a>
                <div className="c-item">
                  <span className="ic"><Icon name="pin" /></span>
                  <div><small>Location</small><span>{profile.location}</span></div>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>

        <footer>
          <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
          <span className="mono">Built with Next.js · <a href="#home">Back to top ↑</a></span>
        </footer>
      </div>
    </main>
  );
}
