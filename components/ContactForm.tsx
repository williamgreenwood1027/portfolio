"use client";

import type { FormEvent } from "react";
import Icon from "./Icon";
import { profile } from "@/lib/data";

/** Opens the visitor's mail client with the message prefilled. */
export default function ContactForm() {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const subject = String(f.get("subject") || `Hello from ${f.get("name")}`);
    const body = `${f.get("message")}\n\n— ${f.get("name")} (${f.get("email")})`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form className="cform" onSubmit={onSubmit}>
      <div className="row2">
        <label>Your name<input name="name" required placeholder="Jane Doe" /></label>
        <label>Your email<input name="email" type="email" required placeholder="jane@company.com" /></label>
      </div>
      <label>Subject<input name="subject" placeholder="Senior Backend role at …" /></label>
      <label>Message<textarea name="message" required placeholder="Tell me a bit about the project or role…" /></label>
      <button className="btn btn-primary" type="submit" style={{ justifyContent: "center" }}>
        Send Message <Icon name="send" size={16} />
      </button>
      <small className="muted" style={{ fontSize: ".72rem" }}>Opens your email app with the message filled in.</small>
    </form>
  );
}
