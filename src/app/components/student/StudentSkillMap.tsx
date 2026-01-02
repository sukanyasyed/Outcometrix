import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Progress } from '../ui/progress';
import { 
  Map, 
  CheckCircle2, 
  Circle, 
  AlertCircle, 
  ArrowRight,
  Sparkles,
  Target,
  TrendingUp
} from 'lucide-react';

export function StudentSkillMap() {
  const skillPath = [
    {
      stage: 1,
      title: 'Foundation',
      skills: [
        {
          id: 'remember',
          name: 'Remember Key Concepts',
          emoji: '🎯',
          description: 'Recall facts and basic concepts',
          bloomLevel: 'L1',
          mastery: 85,
          status: 'mastered',
          questionsCompleted: 23,
          totalQuestions: 25,
          examples: ['Define terms', 'List concepts', 'Recall facts'],
        },
        {
          id: 'understand',
          name: 'Understand Ideas',
          emoji: '💡',
          description: 'Explain concepts in your own words',
          bloomLevel: 'L2',
          mastery: 72,
          status: 'strong',
          questionsCompleted: 18,
          totalQuestions: 25,
          examples: ['Explain why', 'Summarize', 'Interpret'],
        },
      ],
    },
    {
      stage: 2,
      title: 'Application',
      skills: [
        {
          id: 'apply',
          name: 'Apply Solutions',
          emoji: '⚙️',
          description: 'Use knowledge to solve problems',
          bloomLevel: 'L3',
          mastery: 68,
          status: 'developing',
          questionsCompleted: 15,
          totalQuestions: 22,
          examples: ['Solve problems', 'Use methods', 'Demonstrate'],
        },
      ],
    },
    {
      stage: 3,
      title: 'Higher-Order Thinking',
      skills: [
        {
          id: 'analyze',
          name: 'Break Down Problems',
          emoji: '🔍',
          description: 'Examine and understand relationships',
          bloomLevel: 'L4',
          mastery: 45,
          status: 'needs-practice',
          questionsCompleted: 9,
          totalQuestions: 20,
          examples: ['Compare', 'Examine', 'Categorize'],
        },
        {
          id: 'evaluate',
          name: 'Judge Solutions',
          emoji: '⚖️',
          description: 'Make decisions and justify choices',
          bloomLevel: 'L5',
          mastery: 32,
          status: 'needs-practice',
          questionsCompleted: 6,
          totalQuestions: 19,
          examples: ['Assess', 'Critique', 'Justify'],
        },
        {
          id: 'create',
          name: 'Design New Solutions',
          emoji: '🚀',
          description: 'Produce original work and ideas',
          bloomLevel: 'L6',
          mastery: 28,
          status: 'needs-practice',
          questionsCompleted: 5,
          totalQuestions: 18,
          examples: ['Design', 'Construct', 'Invent'],
        },
      ],
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'mastered':
        return { bg: 'bg-green-500', text: 'text-green-700', light: 'bg-green-50', border: 'border-green-200' };
      case 'strong':
        return { bg: 'bg-blue-500', text: 'text-blue-700', light: 'bg-blue-50', border: 'border-blue-200' };
      case 'developing':
        return { bg: 'bg-amber-500', text: 'text-amber-700', light: 'bg-amber-50', border: 'border-amber-200' };
      default:
        return { bg: 'bg-orange-500', text: 'text-orange-700', light: 'bg-orange-50', border: 'border-orange-200' };
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'mastered':
        return <CheckCircle2 className="w-5 h-5 text-green-600" />;
      case 'strong':
        return <CheckCircle2 className="w-5 h-5 text-blue-600" />;
      case 'developing':
        return <Circle className="w-5 h-5 text-amber-600" />;
      default:
        return <AlertCircle className="w-5 h-5 text-orange-600" />;
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'mastered':
        return 'Mastered! ⭐';
      case 'strong':
        return 'Strong 💪';
      case 'developing':
        return 'Developing 📈';
      default:
        return 'Keep Practicing 🎯';
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-2 bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
            Your Skill Map
          </h1>
          <p className="text-gray-600">
            See your learning journey from basic to advanced skills • Track your growth
          </p>
        </div>

        {/* Overview Card */}
        <Card className="mb-8 bg-gradient-to-r from-indigo-50 via-violet-50 to-pink-50 border-2 border-indigo-200">
          <CardContent className="py-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-violet-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <Map className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-gray-900 mb-2">
                  Understanding Your Learning Path
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  This map shows your thinking skills, from remembering basic facts to creating new solutions. 
                  Each skill builds on the previous one, like climbing stairs! 🪜
                </p>
                <div className="flex gap-2 flex-wrap">
                  <Badge className="bg-green-100 text-green-700 border-green-200">
                    <CheckCircle2 className="w-3 h-3 mr-1" />
                    Mastered: Strong foundation
                  </Badge>
                  <Badge className="bg-amber-100 text-amber-700 border-amber-200">
                    <Circle className="w-3 h-3 mr-1" />
                    Developing: Keep practicing
                  </Badge>
                  <Badge className="bg-orange-100 text-orange-700 border-orange-200">
                    <AlertCircle className="w-3 h-3 mr-1" />
                    Needs Practice: Let&apos;s work on this
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Skill Path */}
        <div className="space-y-6">
          {skillPath.map((stage, stageIndex) => (
            <div key={stage.stage}>
              {/* Stage Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 text-white font-bold">
                  {stage.stage}
                </div>
                <div>
                  <h2 className="font-semibold text-gray-900">{stage.title}</h2>
                  <p className="text-sm text-gray-600">Stage {stage.stage} of your learning journey</p>
                </div>
              </div>

              {/* Skills in Stage */}
              <div className="space-y-4 pl-12">
                {stage.skills.map((skill, skillIndex) => {
                  const colors = getStatusColor(skill.status);

                  return (
                    <Card
                      key={skill.id}
                      className={`border-2 ${colors.border} ${colors.light} hover:shadow-lg transition-all`}
                    >
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-3">
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl shadow-sm">
                              {skill.emoji}
                            </div>
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <CardTitle className="text-lg">{skill.name}</CardTitle>
                                <Badge variant="outline" className="text-xs">
                                  {skill.bloomLevel}
                                </Badge>
                              </div>
                              <CardDescription>{skill.description}</CardDescription>
                            </div>
                          </div>
                          {getStatusIcon(skill.status)}
                        </div>
                      </CardHeader>
                      <CardContent>
                        {/* Progress */}
                        <div className="mb-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-gray-700">Mastery Level</span>
                            <span className={`text-sm font-bold ${colors.text}`}>
                              {skill.mastery}%
                            </span>
                          </div>
                          <Progress value={skill.mastery} className="h-2.5" />
                          <div className="flex items-center justify-between mt-2">
                            <span className="text-xs text-gray-600">
                              {skill.questionsCompleted}/{skill.totalQuestions} questions practiced
                            </span>
                            <Badge className={`text-xs ${colors.bg} text-white border-0`}>
                              {getStatusLabel(skill.status)}
                            </Badge>
                          </div>
                        </div>

                        {/* Examples */}
                        <div className="mb-4 p-3 bg-white rounded-lg border border-gray-200">
                          <div className="text-xs font-medium text-gray-700 mb-2">
                            What you&apos;ll do:
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {skill.examples.map((example, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs bg-gray-50">
                                {example}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Action Button */}
                        {skill.status !== 'mastered' && (
                          <Button
                            size="sm"
                            className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:from-indigo-700 hover:to-violet-700"
                          >
                            <Target className="w-4 h-4 mr-2" />
                            Practice {skill.name}
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        )}
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Connector Arrow */}
              {stageIndex < skillPath.length - 1 && (
                <div className="flex items-center justify-center my-4">
                  <div className="flex flex-col items-center gap-2">
                    <ArrowRight className="w-6 h-6 text-indigo-400 transform rotate-90" />
                    <span className="text-xs text-gray-500 font-medium">Next Stage</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Motivation Card */}
        <Card className="mt-8 bg-gradient-to-r from-blue-50 via-indigo-50 to-violet-50 border-2 border-blue-200">
          <CardContent className="py-6">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-semibold text-gray-900 mb-1">
                  Your Learning Strategy 🎯
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  You&apos;re doing great with foundation skills! To move to the next level:
                </p>
                <ul className="text-sm text-gray-700 space-y-1.5">
                  <li className="flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                    Keep strengthening your understanding - it&apos;s your foundation
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-violet-600 mt-0.5 flex-shrink-0" />
                    Practice 5-10 analysis questions this week to build that skill
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-pink-600 mt-0.5 flex-shrink-0" />
                    Don&apos;t rush - mastery takes time and that&apos;s perfectly okay!
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
