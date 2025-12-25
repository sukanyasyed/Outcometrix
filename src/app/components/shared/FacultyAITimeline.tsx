import { Bot, User, Edit3, CheckCircle2, Sparkles } from 'lucide-react';

interface TimelineStep {
  id: string;
  action: string;
  actor: 'ai' | 'faculty';
  timestamp: string;
  details?: string;
}

interface FacultyAITimelineProps {
  steps?: TimelineStep[];
}

const defaultSteps: TimelineStep[] = [
  {
    id: '1',
    action: 'AI generated question',
    actor: 'ai',
    timestamp: '2 mins ago',
    details: 'Applied CO3, Bloom L4 based on syllabus analysis',
  },
  {
    id: '2',
    action: 'Faculty edited wording',
    actor: 'faculty',
    timestamp: '1 min ago',
    details: 'Improved clarity and added context',
  },
  {
    id: '3',
    action: 'Bloom level adjusted',
    actor: 'faculty',
    timestamp: '30 secs ago',
    details: 'Changed from L4 to L3 for better alignment',
  },
  {
    id: '4',
    action: 'Final approval',
    actor: 'faculty',
    timestamp: 'Just now',
    details: 'Question approved for question bank',
  },
];

export function FacultyAITimeline({ steps = defaultSteps }: FacultyAITimelineProps) {
  return (
    <div className="space-y-1">
      <h4 className="text-sm font-semibold text-gray-700 mb-4 flex items-center gap-2">
        <Sparkles className="w-4 h-4 text-indigo-500" />
        Co-Creation Timeline
      </h4>
      
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-200 via-violet-200 to-pink-200"></div>

        {/* Timeline Steps */}
        <div className="space-y-6">
          {steps.map((step, index) => (
            <div key={step.id} className="relative pl-12">
              {/* Icon */}
              <div
                className={`absolute left-0 w-10 h-10 rounded-full flex items-center justify-center shadow-md ${
                  step.actor === 'ai'
                    ? 'bg-gradient-to-br from-indigo-500 to-violet-500 text-white'
                    : 'bg-gradient-to-br from-blue-500 to-cyan-500 text-white'
                }`}
              >
                {step.actor === 'ai' ? (
                  <Bot className="w-5 h-5" />
                ) : index === steps.length - 1 ? (
                  <CheckCircle2 className="w-5 h-5" />
                ) : (
                  <User className="w-5 h-5" />
                )}
              </div>

              {/* Content */}
              <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-sm text-gray-900">
                      {step.action}
                    </span>
                    {step.actor === 'ai' && (
                      <span className="px-2 py-0.5 bg-indigo-100 text-indigo-700 text-xs rounded-full">
                        AI
                      </span>
                    )}
                    {step.actor === 'faculty' && (
                      <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">
                        Faculty
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-gray-500">{step.timestamp}</span>
                </div>
                {step.details && (
                  <p className="text-xs text-gray-600 mt-1">{step.details}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
