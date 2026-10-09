"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import { assistantKB, assistantSuggestions, profile } from "@/lib/data";

type Msg = { who: "bot" | "me"; text: string };

function answer(q: string) {
  const s = q.toLowerCase();
  let best: (typeof assistantKB)[number] | null = null;
  let score = 0;
  for (const entry of assistantKB) {
    const sc = entry.keys.reduce((n, k) => n + (new RegExp("\\b" + k).test(s) ? k.length : 0), 0);
    if (sc > score) { score = sc; best = entry; }
  }
  return best
    ? best.answer
    : `Good question! I'd suggest asking William directly at ${profile.email}. You can also ask me about skills, experience, AI work, projects or availability.`;
}

/** Rule-based portfolio assistant: answers from résumé data, no external API. */
export default function Assistant() {
  const [msgs, setMsgs] = useState<Msg[]>([
    { who: "bot", text: "Hi! 👋 I'm William's assistant. Ask me about William's skills, experience, projects, availability, or how to get in touch." },
  ]);
  const [typing, setTyping] = useState(false);
  const [input, setInput] = useState("");
  const box = useRef<HTMLDivElement>(null);

  useEffect(() => {
    box.current?.scrollTo({ top: box.current.scrollHeight, behavior: "smooth" });
  }, [msgs, typing]);

  const ask = (q: string) => {
    q = q.trim();
    if (!q || typing) return;
    setMsgs((m) => [...m, { who: "me", text: q }]);
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMsgs((m) => [...m, { who: "bot", text: answer(q) }]);
    }, 650 + Math.random() * 500);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    ask(input);
    setInput("");
  };

  return (
    <div className="assistant-wrap reveal">
      <div className="code-screen">
        <div className="screen-in">
          <div className="as-head">
            <div className="as-ico"><Icon name="bot" size={20} /></div>
            <div>
              <p className="as-title">Portfolio Assistant</p>
              <p className="as-sub"><span className="pulse" />Online · ask me anything</p>
            </div>
            <div className="lights">
              <i style={{ background: "#fb2c36" }} /><i style={{ background: "#ffd236" }} /><i style={{ background: "#05df72" }} />
            </div>
          </div>
          <div className="msgs" ref={box} aria-live="polite">
            {msgs.map((m, i) => <div key={i} className={`msg ${m.who}`}>{m.text}</div>)}
            {typing && <div className="msg bot typing"><i /><i /><i /></div>}
          </div>
          <div className="sugs">
            {assistantSuggestions.map((s) => <button key={s} type="button" onClick={() => ask(s)}>{s}</button>)}
          </div>
          <form className="ask" onSubmit={onSubmit}>
            <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask a question..." aria-label="Ask the portfolio assistant" autoComplete="off" />
            <button type="submit" aria-label="Send question"><Icon name="send" size={16} /></button>
          </form>
        </div>
      </div>
    </div>
  );
}
