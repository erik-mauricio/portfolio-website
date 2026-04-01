type ChipProps = {
  skill: string;
  variant: string;
};

export default function Chip({ skill, variant }: ChipProps) {
    return (
        <span className="inline-block text-xs px-3 py-1 rounded-lg border border-gray-200 text-gray-600 bg-gray-50 font-mono">
        {skill}
      </span>);
}
