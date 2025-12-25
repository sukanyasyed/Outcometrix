import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';

interface OutcomeDriftCompassProps {
  driftLevel?: 'stable' | 'drifting' | 'at-risk';
  deviation?: number;
}

export function OutcomeDriftCompass({ driftLevel = 'stable', deviation = 12 }: OutcomeDriftCompassProps) {
  const getRotation = () => {
    if (driftLevel === 'stable') return -90;
    if (driftLevel === 'drifting') return -30;
    return 30;
  };

  const getColor = () => {
    if (driftLevel === 'stable') return '#10B981';
    if (driftLevel === 'drifting') return '#F59E0B';
    return '#EF4444';
  };

  const getLabel = () => {
    if (driftLevel === 'stable') return 'Stable';
    if (driftLevel === 'drifting') return 'Drifting';
    return 'At Risk';
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Outcome Drift Compass</CardTitle>
        <CardDescription>
          Semester-wise deviation from ideal outcome coverage
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        {/* Compass Circle */}
        <div className="relative w-48 h-48">
          {/* Background Circle */}
          <svg className="w-full h-full" viewBox="0 0 200 200">
            {/* Outer Ring */}
            <circle
              cx="100"
              cy="100"
              r="90"
              fill="none"
              stroke="#E5E7EB"
              strokeWidth="2"
            />
            
            {/* Colored Arcs for Zones */}
            {/* Stable (Green) - Left */}
            <path
              d="M 10 100 A 90 90 0 0 1 100 10"
              fill="none"
              stroke="#10B981"
              strokeWidth="8"
              opacity="0.3"
            />
            {/* Drifting (Amber) - Top Right */}
            <path
              d="M 100 10 A 90 90 0 0 1 190 100"
              fill="none"
              stroke="#F59E0B"
              strokeWidth="8"
              opacity="0.3"
            />
            {/* At Risk (Red) - Bottom Right */}
            <path
              d="M 190 100 A 90 90 0 0 1 100 190"
              fill="none"
              stroke="#EF4444"
              strokeWidth="8"
              opacity="0.3"
            />

            {/* Center Circle */}
            <circle cx="100" cy="100" r="12" fill="#6366F1" />

            {/* Needle */}
            <line
              x1="100"
              y1="100"
              x2="100"
              y2="30"
              stroke={getColor()}
              strokeWidth="3"
              strokeLinecap="round"
              style={{
                transformOrigin: '100px 100px',
                transform: `rotate(${getRotation()}deg)`,
                transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            />

            {/* Needle Tip */}
            <circle
              cx="100"
              cy="30"
              r="5"
              fill={getColor()}
              style={{
                transformOrigin: '100px 100px',
                transform: `rotate(${getRotation()}deg)`,
                transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            />
          </svg>

          {/* Labels */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 text-xs font-medium text-gray-500">
            Ideal
          </div>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs font-medium text-gray-500">
            Drift
          </div>
        </div>

        {/* Status Display */}
        <div className="mt-6 text-center space-y-2">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
            style={{ backgroundColor: `${getColor()}20`, color: getColor() }}
          >
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: getColor() }}
            ></div>
            <span className="font-semibold">{getLabel()}</span>
          </div>
          <p className="text-sm text-gray-600">
            {deviation}% deviation from baseline
          </p>
        </div>

        {/* Legend */}
        <div className="mt-6 flex gap-4 text-xs">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-gray-600">Stable</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-amber-500"></div>
            <span className="text-gray-600">Drifting</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <span className="text-gray-600">At Risk</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
