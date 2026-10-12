type ChipProps = {
  skill: string;
};

export default function Chip({ skill }: ChipProps) {
  return (
    <span className="badge badge-ghost badge-sm font-mono text-xs text-base-content/70">
      {skill}
    </span>
  );
}
