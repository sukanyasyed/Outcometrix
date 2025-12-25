import { useState } from 'react';
import { Brain, ChevronLeft, ChevronRight, Activity, AlertTriangle, CheckCircle2, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';

export function OutcomeIntelligenceHUD() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const aiStatus = {
    status: 'Analyzing Outcomes',
    isActive: true,
    outcomeHealth: 87,
    bloomBalance: 'Good',
    risks: [
      { type: 'warning', message: 'CO4 coverage at 45%' },
      { type: 'info', message: 'L5-L6 questions below 20%' },
    ],
  };

  return (
    <div
      className={`fixed right-0 top-20 z-40 transition-all duration-300 ${
        isCollapsed ? 'translate-x-[calc(100%-3rem)]' : 'translate-x-0'
      }`}
    >
      <Card className="w-80 shadow-2xl border-l-4 border-l-indigo-500 rounded-l-2xl rounded-r-none bg-gradient-to-br from-white to-indigo-50/30">
        <CardHeader className="pb-3 relative">
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="absolute -left-10 top-4 bg-indigo-500 text-white p-2 rounded-l-lg hover:bg-indigo-600 transition-colors shadow-lg"
            aria-label={isCollapsed ? 'Expand panel' : 'Collapse panel'}
          >
            {isCollapsed ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </button>
          
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2 text-base">
              <Brain className="w-5 h-5 text-indigo-600" />
              AI Intelligence
            </CardTitle>
            {aiStatus.isActive && (
              <div className="relative">
                <div className="w-2 h-2 bg-indigo-500 rounded-full animate-ping absolute"></div>
                <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
              </div>
            )}
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* AI Status */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Status</span>
              <Badge variant="outline" className="bg-indigo-50 text-indigo-700 border-indigo-200">
                <Activity className="w-3 h-3 mr-1" />
                {aiStatus.status}
              </Badge>
            </div>
          </div>

          {/* Outcome Health Score */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Outcome Health</span>
              <span className="font-semibold text-indigo-600">{aiStatus.outcomeHealth}%</span>
            </div>
            <Progress value={aiStatus.outcomeHealth} className="h-2" />
          </div>

          {/* Bloom Balance */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Bloom Balance</span>
              <Badge className="bg-green-100 text-green-700 border-green-200">
                <CheckCircle2 className="w-3 h-3 mr-1" />
                {aiStatus.bloomBalance}
              </Badge>
            </div>
          </div>

          {/* Risk Signals */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <AlertTriangle className="w-4 h-4 text-amber-500" />
              Risk Signals
            </div>
            <div className="space-y-2">
              {aiStatus.risks.map((risk, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 p-2 rounded-lg bg-amber-50 border border-amber-100"
                >
                  <div className={`w-1.5 h-1.5 rounded-full mt-1.5 ${
                    risk.type === 'warning' ? 'bg-amber-500' : 'bg-blue-500'
                  }`}></div>
                  <span className="text-xs text-gray-700">{risk.message}</span>
                </div>
              ))}
            </div>
          </div>

          {/* AI Confidence Meter */}
          <div className="pt-3 border-t border-gray-200">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-gray-600 flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5" />
                AI Confidence
              </span>
              <span className="font-semibold text-indigo-600">94%</span>
            </div>
            <div className="h-1.5 bg-gradient-to-r from-indigo-500 via-violet-500 to-pink-500 rounded-full relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
