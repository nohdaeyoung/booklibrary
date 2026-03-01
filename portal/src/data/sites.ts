export interface FamilySite {
  id: string;
  subdomain: string;
  name: string;
  description: string;
  status: "live" | "dev" | "soon";
  tags: string[];
  size: "lg" | "md" | "sm";
  emoji: string;
  gradient: string;
}

export const sites: FamilySite[] = [
  {
    id: "photo",
    subdomain: "324.ing",
    name: "Photo Portfolio",
    description: "사진 포트폴리오 사이트",
    status: "live",
    tags: ["Photography", "Portfolio"],
    size: "lg",
    emoji: "📸",
    gradient: "from-violet-600 to-fuchsia-500",
  },
  {
    id: "ing",
    subdomain: "ing.324.ing",
    name: "OpenClaw Live",
    description: "실시간 대화 모니터링",
    status: "live",
    tags: ["AI", "Real-time"],
    size: "lg",
    emoji: "⚡",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    id: "camera",
    subdomain: "c.324.ing",
    name: "Camera Archive",
    description: "카메라 아카이브",
    status: "live",
    tags: ["Camera", "Archive"],
    size: "md",
    emoji: "🎞️",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    id: "frame",
    subdomain: "f.324.ing",
    name: "Frame Maker",
    description: "사진 프레임 메이커",
    status: "live",
    tags: ["Tool", "Design"],
    size: "md",
    emoji: "🖼️",
    gradient: "from-emerald-500 to-teal-600",
  },
];
