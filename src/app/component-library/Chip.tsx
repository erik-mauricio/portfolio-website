type ChipProps = {
  skill: string;
  variant: "tech" | "class" | "org" | "programming" | "framework" | "tool" | "";
  theme?: "dark" | "light";
};

const darkVariantStyles: Record<string, string> = {
  tech:         "border-blue-700/60  text-blue-300   bg-blue-900/40   hover:bg-blue-800/60  hover:text-blue-100",
  class:        "border-rose-700/60  text-rose-300   bg-rose-900/40   hover:bg-rose-800/60  hover:text-rose-100",
  org:          "border-emerald-700/60 text-emerald-300 bg-emerald-900/40 hover:bg-emerald-800/60 hover:text-emerald-100",
  programming:  "border-sky-700/60   text-sky-300    bg-sky-900/40    hover:bg-sky-800/60   hover:text-sky-100",
  framework:    "border-violet-700/60 text-violet-300 bg-violet-900/40 hover:bg-violet-800/60 hover:text-violet-100",
  tool:         "border-amber-700/60  text-amber-300  bg-amber-900/40  hover:bg-amber-800/60  hover:text-amber-100",
  "":           "border-slate-600/60  text-slate-300  bg-slate-800/40  hover:bg-slate-700/60  hover:text-slate-100",
};

const lightVariantStyles: Record<string, string> = {
  tech:         "border-[#1a5fa8] text-[#0F4D92] bg-blue-50   hover:bg-[#0F4D92] hover:text-white",
  class:        "border-rose-400   text-rose-700   bg-rose-50    hover:bg-rose-600   hover:text-white",
  org:          "border-emerald-400 text-emerald-700 bg-emerald-50 hover:bg-emerald-600 hover:text-white",
  programming:  "border-sky-400    text-sky-700    bg-sky-50    hover:bg-sky-600    hover:text-white",
  framework:    "border-violet-400 text-violet-700 bg-violet-50 hover:bg-violet-600 hover:text-white",
  tool:         "border-amber-400  text-amber-700  bg-amber-50  hover:bg-amber-600  hover:text-white",
  "":           "border-slate-300  text-slate-700  bg-slate-100 hover:bg-slate-200  hover:text-slate-900",
};

export default function Chip({ skill, variant, theme = "dark" }: ChipProps) {
  const styles = theme === "light" ? lightVariantStyles : darkVariantStyles;
  const colorClasses = styles[variant] ?? styles[""];
  const ringOffset = theme === "light" ? "focus-visible:ring-offset-white" : "focus-visible:ring-offset-slate-900";
  return (
    <span
      className={`inline-block text-xs px-3 py-1 rounded-lg border font-mono transition-colors cursor-default focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 ${ringOffset} ${colorClasses}`}
    >
      {skill}
    </span>
  );
}
