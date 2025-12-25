interface QuestionDNAStripProps {
  co: string;
  bloom: string;
  difficulty: string;
  cognitiveLoad: string;
}

export function QuestionDNAStrip({ co, bloom, difficulty, cognitiveLoad }: QuestionDNAStripProps) {
  // Calculate segment widths based on values
  const getCoWeight = (co: string) => {
    const coNum = parseInt(co.replace('CO', ''));
    return (coNum / 6) * 25; // Max 25% width
  };

  const getBloomDepth = (bloom: string) => {
    const bloomNum = parseInt(bloom.replace('L', ''));
    return (bloomNum / 6) * 30; // Max 30% width
  };

  const getDifficultyWidth = (diff: string) => {
    const widths = { Easy: 15, Medium: 25, Hard: 30 };
    return widths[diff as keyof typeof widths] || 20;
  };

  const getCognitiveWidth = (load: string) => {
    const widths = { Low: 15, Moderate: 20, High: 25 };
    return widths[load as keyof typeof widths] || 20;
  };

  const segments = [
    { color: 'bg-[#3B82F6]', width: getCoWeight(co), label: co },
    { color: 'bg-[#8B5CF6]', width: getBloomDepth(bloom), label: bloom },
    { color: 'bg-[#F59E0B]', width: getDifficultyWidth(difficulty), label: difficulty },
    { color: 'bg-[#EC4899]', width: getCognitiveWidth(cognitiveLoad), label: cognitiveLoad },
  ];

  return (
    <div className="relative">
      <div className="flex h-2 rounded-full overflow-hidden bg-gray-100">
        {segments.map((segment, idx) => (
          <div
            key={idx}
            className={`${segment.color} transition-all duration-300 hover:opacity-80`}
            style={{ width: `${segment.width}%` }}
          />
        ))}
      </div>
      <div className="flex justify-between mt-1.5 text-xs text-gray-500">
        <span className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-[#3B82F6]"></div>
          {segments[0].label}
        </span>
        <span className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-[#8B5CF6]"></div>
          {segments[1].label}
        </span>
        <span className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-[#F59E0B]"></div>
          {segments[2].label}
        </span>
        <span className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-[#EC4899]"></div>
          {segments[3].label}
        </span>
      </div>
    </div>
  );
}
