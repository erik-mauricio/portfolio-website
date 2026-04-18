type ChipProps = {
  skill: string;
  variant: "tech" | "class" | "org" | "programming" | "framework" | "tool" | "";
};

const variantStyles: Record<string, string> = {
  tech: "border-blue-300 text-blue-700 bg-blue-50",
  class: "border-red-400 text-red-800 bg-red-50",
  org: "border-green-400 text-green-700 bg-green-50",
  programming: "border-sky-400 text-sky-700 bg-sky-50",
  framework: "border-purple-400 text-purple-700 bg-purple-50",
  tool: "border-amber-400 text-amber-700 bg-amber-50",
  "": "border-gray-200 text-gray-600 bg-gray-50",
};

export default function Chip({ skill, variant }: ChipProps) {
  const colorClasses = variantStyles[variant] ?? variantStyles[""];
  return (
    <span
      className={`inline-block text-xs px-3 py-1 rounded-lg border font-mono ${colorClasses}`}
    >
      {skill}
    </span>
  );
}
