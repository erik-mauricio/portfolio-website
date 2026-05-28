import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  theme?: "dark" | "light";
  className?: string;
};

const themeStyles = {
  dark: "bg-[#1a1a1a] border-[#2a2a2a] shadow-md",
  light: "bg-white border-slate-200 shadow-sm",
};

export default function Card({
  children,
  theme = "dark",
  className = "",
}: CardProps) {
  return (
    <div className={`rounded-xl p-4 border ${themeStyles[theme]} ${className}`}>
      {children}
    </div>
  );
}
