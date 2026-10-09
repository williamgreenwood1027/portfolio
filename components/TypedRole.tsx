"use client";

import { useEffect, useState } from "react";
import { roles } from "@/lib/data";

export default function TypedRole() {
  const [text, setText] = useState("");

  useEffect(() => {
    let ri = 0, ci = 0, del = false;
    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      const word = roles[ri];
      setText(word.slice(0, ci));
      if (!del && ci < word.length) ci++;
      else if (del && ci > 0) ci--;
      else if (!del) { del = true; timer = setTimeout(tick, 1600); return; }
      else { del = false; ri = (ri + 1) % roles.length; }
      timer = setTimeout(tick, del ? 35 : 70);
    };
    tick();
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="role-line">
      <span className="muted">&gt;_ </span>
      <span>{text}</span>
      <span className="caret" />
    </div>
  );
}
