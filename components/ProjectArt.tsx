import type { Project } from "@/lib/data";

/** Animated SVG illustrations for each project card. */
export default function ProjectArt({ kind }: { kind: Project["art"] }) {
  const common = { viewBox: "0 0 600 190", preserveAspectRatio: "xMidYMid slice", "aria-hidden": true } as const;

  if (kind === "graph")
    return (
      <svg {...common}>
        <defs>
          <radialGradient id="g1" cx="70%" cy="40%" r="70%"><stop offset="0" stopColor="#8d54ff" stopOpacity=".35" /><stop offset="1" stopColor="#060b18" stopOpacity="0" /></radialGradient>
        </defs>
        <rect width="600" height="190" fill="url(#g1)" />
        <path d="M300 95 L160 45 M300 95 L160 145 M300 95 L450 40 M300 95 L470 100 M300 95 L430 160 M160 45 L80 95 M160 145 L80 95" stroke="#74d89a" strokeOpacity=".35" fill="none" />
        <g fill="#030611" stroke="#74d89a" strokeWidth="1.5">
          <circle cx="300" cy="95" r="26" /><circle cx="160" cy="45" r="13" /><circle cx="160" cy="145" r="13" /><circle cx="450" cy="40" r="13" /><circle cx="470" cy="100" r="13" /><circle cx="430" cy="160" r="13" /><circle cx="80" cy="95" r="10" />
        </g>
        <text x="300" y="99" textAnchor="middle" fill="#a9f5c1" fontSize="11">AI</text>
        <circle r="3" fill="#a9f5c1"><animateMotion dur="3s" repeatCount="indefinite" path="M160 45 L300 95 L470 100" /></circle>
        <circle r="3" fill="#c4b4ff"><animateMotion dur="3.6s" repeatCount="indefinite" path="M80 95 L160 145 L300 95 L430 160" /></circle>
      </svg>
    );

  if (kind === "micro") {
    const boxes = [[320, 28, "go/auth"], [440, 28, "go/orders"], [320, 77, "go/billing"], [440, 77, "go/search"], [320, 126, "gRPC"], [440, 126, "Kafka"]] as const;
    return (
      <svg {...common}>
        <defs>
          <radialGradient id="g2" cx="30%" cy="50%" r="70%"><stop offset="0" stopColor="#74d89a" stopOpacity=".25" /><stop offset="1" stopColor="#060b18" stopOpacity="0" /></radialGradient>
        </defs>
        <rect width="600" height="190" fill="url(#g2)" />
        <rect x="60" y="45" width="150" height="100" rx="12" fill="#0b1326" stroke="#c4b4ff" strokeOpacity=".6" />
        <text x="135" y="100" textAnchor="middle" fill="#c4b4ff" fontSize="13">Rails monolith</text>
        <path d="M210 95 H300" stroke="#74d89a" strokeOpacity=".5" strokeDasharray="4 5" />
        {boxes.map(([x, y, label]) => (
          <g key={label}>
            <rect x={x} y={y} width="96" height="36" rx="9" fill="#0b1326" stroke="#74d89a" strokeOpacity=".8" />
            <text x={x + 48} y={y + 22} textAnchor="middle" fill="#a9f5c1" fontSize="11">{label}</text>
          </g>
        ))}
        <circle r="3" fill="#a9f5c1"><animateMotion dur="2.4s" repeatCount="indefinite" path="M210 95 H310" /></circle>
      </svg>
    );
  }

  if (kind === "rag") {
    const steps = [[40, 90, "docs", "#c4b4ff", "#c4b4ff"], [170, 100, "embed", "#74d89a", "#a9f5c1"], [310, 100, "vector db", "#14d8ff", "#a2f4fd"], [450, 110, "LLM + RAG", "#74d89a", "#a9f5c1"]] as const;
    return (
      <svg {...common}>
        <defs>
          <radialGradient id="g3" cx="50%" cy="50%" r="60%"><stop offset="0" stopColor="#14d8ff" stopOpacity=".22" /><stop offset="1" stopColor="#060b18" stopOpacity="0" /></radialGradient>
        </defs>
        <rect width="600" height="190" fill="url(#g3)" />
        {steps.map(([x, w, label, stroke, fill]) => (
          <g key={label}>
            <rect x={x} y="70" width={w} height="50" rx="10" fill="#0b1326" stroke={stroke} strokeOpacity=".75" />
            <text x={x + w / 2} y="99" textAnchor="middle" fill={fill} fontSize="11">{label}</text>
          </g>
        ))}
        <path d="M130 95 H170 M270 95 H310 M410 95 H450" stroke="#74d89a" strokeOpacity=".5" />
        <circle r="3" fill="#a9f5c1"><animateMotion dur="3s" repeatCount="indefinite" path="M130 95 H450" /></circle>
      </svg>
    );
  }

  return (
    <svg {...common}>
      <defs>
        <linearGradient id="g4" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#74d89a" stopOpacity=".45" /><stop offset="1" stopColor="#74d89a" stopOpacity="0" /></linearGradient>
      </defs>
      <path d="M0 40H600M0 80H600M0 120H600M0 160H600" stroke="#ffffff" strokeOpacity=".05" />
      <path d="M0 150 C60 140 90 120 140 125 S230 80 280 90 S370 50 420 58 S520 30 600 34 V190 H0 Z" fill="url(#g4)" />
      <path d="M0 150 C60 140 90 120 140 125 S230 80 280 90 S370 50 420 58 S520 30 600 34" fill="none" stroke="#74d89a" strokeWidth="2" />
      <path d="M0 110 C80 115 140 100 200 120 S320 140 380 128 S500 150 600 140" fill="none" stroke="#8d54ff" strokeWidth="1.5" strokeDasharray="5 6" opacity=".8" />
      <circle cx="420" cy="58" r="5" fill="#030611" stroke="#a9f5c1" strokeWidth="2" />
    </svg>
  );
}
