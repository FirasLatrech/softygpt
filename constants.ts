import {
  BookTemplate,
  Code,
  ImageIcon,
  Languages,
  MessageSquare,
  Music,
  VideoIcon,
} from "lucide-react";

export const MAX_FREE_COUNTS = 10;

export const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    label: "Music Generation",
    icon: Music,
    href: "/music",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
    href: "/image",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    color: "text-orange-700",
    bgColor: "bg-orange-700/10",
    href: "/video",
  },
  {
    label: "Arabe",
    icon: Languages,
    color: "text-red-500",
    bgColor: "bg-red-300/20",
    href: "/arabe",
  },
  {
    label: "Translate",
    icon: BookTemplate,
    color: "text-blue-700",
    bgColor: "bg-blue-300/10",
    href: "/translate",
  },
  {
    label: "Code Generation",
    icon: Code,
    color: "text-green-700",
    bgColor: "bg-green-700/10",
    href: "/code",
  },
];
