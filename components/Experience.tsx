"use client";

import { useState } from "react";
import { experience } from "@/lib/data";

const VISIBLE = 3;

/** Renders `**bold**` spans inside bullet text. */
function Rich({ text }: { text: string }) {
  return <>{text.split(/\*\*(.+?)\*\*/g).map((part, i) => (i % 2 ? <strong key={i}>{part}</strong> : part))}</>;
}

function Job({ job }: { job: (typeof experience)[number] }) {
  const [expanded, setExpanded] = useState(false);
  const bullets = expanded ? job.bullets : job.bullets.slice(0, VISIBLE);
  return (
    <div className="t-item reveal">
      <div className="t-card glass">
        <div className="t-top">
          <div>
            <h3>{job.role}</h3>
            <div className="co">{job.company}</div>
            <div className="t-loc">{job.location}</div>
          </div>
          <span className="when">{job.period}</span>
        </div>
        <ul>{bullets.map((b) => <li key={b}><span><Rich text={b} /></span></li>)}</ul>
        {job.bullets.length > VISIBLE && (
          <button className="t-more" type="button" onClick={() => setExpanded((v) => !v)}>
            {expanded ? "Show less ↑" : "Show more ↓"}
          </button>
        )}
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <div className="timeline">
      {experience.map((job) => <Job key={job.company} job={job} />)}
    </div>
  );
}
