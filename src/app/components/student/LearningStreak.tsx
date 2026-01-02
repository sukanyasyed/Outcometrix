import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Flame, Calendar, Trophy, Zap } from 'lucide-react';

interface LearningStreakProps {
  currentStreak: number;
}

export function LearningStreak({ currentStreak }: LearningStreakProps) {
  const last7Days = [
    { day: 'Mon', practiced: true, count: 8 },
    { day: 'Tue', practiced: true, count: 12 },
    { day: 'Wed', practiced: true, count: 6 },
    { day: 'Thu', practiced: true, count: 15 },
    { day: 'Fri', practiced: true, count: 10 },
    { day: 'Sat', practiced: false, count: 0 },
    { day: 'Today', practiced: false, count: 0, isToday: true },
  ];

  return (
    <Card className="bg-gradient-to-r from-orange-50 via-amber-50 to-yellow-50 border-2 border-orange-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Flame className="w-5 h-5 text-orange-600" />
          Learning Streak
        </CardTitle>
        <CardDescription>
          Keep up the great work! Practice daily to maintain your streak
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-3xl">🔥</span>
            </div>
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                {currentStreak} Days
              </div>
              <div className="text-sm text-gray-600">Current streak</div>
            </div>
          </div>
          <div className="text-right">
            <Badge className="bg-gradient-to-r from-orange-100 to-amber-100 text-orange-700 border-orange-300 mb-2">
              <Trophy className="w-3 h-3 mr-1" />
              Streak Hero
            </Badge>
            <div className="text-xs text-gray-600">Personal best: 12 days</div>
          </div>
        </div>

        {/* Weekly Calendar */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm text-gray-700 font-medium">
            <Calendar className="w-4 h-4" />
            This Week
          </div>
          <div className="grid grid-cols-7 gap-2">
            {last7Days.map((day, index) => (
              <div key={index} className="text-center">
                <div className="text-xs text-gray-600 mb-2">{day.day}</div>
                <div
                  className={`w-full aspect-square rounded-lg flex flex-col items-center justify-center transition-all ${
                    day.practiced
                      ? 'bg-gradient-to-br from-green-500 to-emerald-500 text-white shadow-md'
                      : day.isToday
                      ? 'bg-gradient-to-br from-orange-200 to-amber-200 border-2 border-dashed border-orange-400 text-orange-700'
                      : 'bg-gray-100 text-gray-400'
                  }`}
                >
                  {day.practiced ? (
                    <>
                      <Zap className="w-4 h-4 mb-1" />
                      <span className="text-xs font-bold">{day.count}</span>
                    </>
                  ) : day.isToday ? (
                    <span className="text-xs font-bold">?</span>
                  ) : (
                    <span className="text-xs">-</span>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="text-xs text-gray-500 text-center">
            Practice today to keep your streak alive! 🎯
          </div>
        </div>

        {/* Milestones */}
        <div className="mt-6 p-4 bg-white/60 rounded-lg border border-orange-100">
          <div className="text-sm font-semibold text-gray-700 mb-3">Upcoming Milestones</div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <span className="text-sm text-gray-700">7-day streak</span>
              </div>
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                <Trophy className="w-3 h-3 mr-1" />
                Completed!
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-700">10-day streak</span>
              </div>
              <span className="text-xs text-gray-500">5 more days</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                <span className="text-sm text-gray-400">30-day streak</span>
              </div>
              <span className="text-xs text-gray-400">25 more days</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
