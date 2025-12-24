import { FileText, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

export function PracticeQuestionList() {
  const questions = [
    {
      id: '1',
      text: 'Explain the difference between a stack and a queue data structure.',
      skill: 'Understand',
      difficulty: 'Easy',
      topic: 'Data Structures',
    },
    {
      id: '2',
      text: 'Implement a binary search algorithm for a sorted array.',
      skill: 'Apply',
      difficulty: 'Medium',
      topic: 'Algorithms',
    },
    {
      id: '3',
      text: 'Analyze the time complexity of merge sort and explain why it\'s O(n log n).',
      skill: 'Analyze',
      difficulty: 'Hard',
      topic: 'Algorithms',
      recommended: true,
    },
    {
      id: '4',
      text: 'Design a class hierarchy for a vehicle management system.',
      skill: 'Create',
      difficulty: 'Hard',
      topic: 'OOP Concepts',
      recommended: true,
    },
    {
      id: '5',
      text: 'Compare and contrast different sorting algorithms.',
      skill: 'Evaluate',
      difficulty: 'Medium',
      topic: 'Algorithms',
      recommended: true,
    },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy':
        return 'bg-green-100 text-green-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'hard':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getSkillColor = (skill: string) => {
    const skillMap: { [key: string]: string } = {
      'Remember': 'bg-blue-100 text-blue-800',
      'Understand': 'bg-indigo-100 text-indigo-800',
      'Apply': 'bg-purple-100 text-purple-800',
      'Analyze': 'bg-pink-100 text-pink-800',
      'Evaluate': 'bg-rose-100 text-rose-800',
      'Create': 'bg-orange-100 text-orange-800',
    };
    return skillMap[skill] || 'bg-gray-100 text-gray-800';
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Practice Questions</CardTitle>
          <Badge variant="outline">5 new questions</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {questions.map((question) => (
          <div
            key={question.id}
            className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer border border-transparent hover:border-blue-200"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <FileText className="w-5 h-5 text-blue-600" />
              </div>
              
              <div className="flex-1 min-w-0">
                {question.recommended && (
                  <Badge className="mb-2 bg-gradient-to-r from-blue-600 to-purple-600">
                    ⭐ Recommended for you
                  </Badge>
                )}
                <p className="text-sm font-medium text-gray-900 mb-3">
                  {question.text}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  <Badge className={`text-xs ${getSkillColor(question.skill)}`}>
                    {question.skill}
                  </Badge>
                  <Badge className={`text-xs ${getDifficultyColor(question.difficulty)}`}>
                    {question.difficulty}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {question.topic}
                  </Badge>
                </div>
              </div>

              <Button variant="ghost" size="sm" className="flex-shrink-0">
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
