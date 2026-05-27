import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  theme?: "dark" | "light";
};

const themeStyles = {
  dark: "bg-slate-800/60 border-slate-700/50 shadow-md",
  light: "bg-white border-slate-200 shadow-sm",
};

export default function Card({ children, theme = "dark" }: CardProps) {
  return (
    <div className={`rounded-xl p-4 border ${themeStyles[theme]}`}>
      {children}
    </div>
  );
}
