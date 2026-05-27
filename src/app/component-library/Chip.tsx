type ChipProps = {
  skill: string;
  variant: "tech" | "class" | "org" | "programming" | "framework" | "tool" | "";
  theme?: "dark" | "light";
};

const darkVariantStyles: Record<string, string> = {
  tech:         "border-[#1e3a5f] text-[#7ab4f0] bg-[#0f1e30] hover:bg-[#152840] hover:text-[#a8d0ff]",
  class:        "border-[#5f1e1e] text-[#f09090] bg-[#300f0f] hover:bg-[#401515] hover:text-[#ffc0c0]",
  org:          "border-[#1a4a2e] text-[#70c090] bg-[#0e2818] hover:bg-[#143520] hover:text-[#a0ddb8]",
  programming:  "border-[#1a3f5c] text-[#6ab2e8] bg-[#0e1f30] hover:bg-[#132a40] hover:text-[#9ed0ff]",
  framework:    "border-[#3a1f5c] text-[#b08ae0] bg-[#1e1030] hover:bg-[#2a1540] hover:text-[#cdb0ff]",
  tool:         "border-[#4a3510] text-[#d4a85a] bg-[#261a08] hover:bg-[#33230a] hover:text-[#f0c880]",
  "":           "border-[#2a2a2a] text-[#999999] bg-[#181818] hover:bg-[#222222] hover:text-[#cccccc]",
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
  const ringOffset = theme === "light" ? "focus-visible:ring-offset-white" : "focus-visible:ring-offset-[#111111]";
  return (
    <span
      className={`inline-block text-xs px-3 py-1 rounded-lg border font-mono transition-colors cursor-default focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 ${ringOffset} ${colorClasses}`}
    >
      {skill}
    </span>
  );
}
