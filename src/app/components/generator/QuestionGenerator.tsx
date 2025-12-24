import { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { GenerationControlsPanel } from './GenerationControlsPanel';
import { QuestionList } from './QuestionList';
import { QuestionDetailDrawer } from './QuestionDetailDrawer';
import { toast } from 'sonner';

export interface Question {
  id: string;
  text: string;
  co: string;
  bloom: string;
  difficulty: string;
  cognitiveLoad: string;
  topic: string;
  justification: string;
}

export function QuestionGenerator() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = (params: any) => {
    setIsGenerating(true);
    
    // Simulate API call
    setTimeout(() => {
      const newQuestions: Question[] = [
        {
          id: '1',
          text: 'Explain the concept of polymorphism in object-oriented programming and demonstrate with a real-world example.',
          co: 'CO3',
          bloom: 'L2',
          difficulty: 'Medium',
          cognitiveLoad: 'Moderate',
          topic: 'OOP Concepts',
          justification: 'This question requires students to understand (L2) the concept and apply it to real-world scenarios, aligning with CO3 which focuses on OOP principles.',
        },
        {
          id: '2',
          text: 'Design a class hierarchy for a library management system including books, members, and transactions.',
          co: 'CO5',
          bloom: 'L6',
          difficulty: 'Hard',
          cognitiveLoad: 'High',
          topic: 'OOP Concepts',
          justification: 'This question requires students to create (L6) a new design, demonstrating mastery of OOP design principles aligned with CO5.',
        },
        {
          id: '3',
          text: 'List the four pillars of object-oriented programming.',
          co: 'CO1',
          bloom: 'L1',
          difficulty: 'Easy',
          cognitiveLoad: 'Low',
          topic: 'OOP Concepts',
          justification: 'This recall-based question (L1) tests basic knowledge of OOP fundamentals as outlined in CO1.',
        },
        {
          id: '4',
          text: 'Analyze the time complexity of the quicksort algorithm in best, average, and worst cases.',
          co: 'CO4',
          bloom: 'L4',
          difficulty: 'Hard',
          cognitiveLoad: 'High',
          topic: 'Algorithms',
          justification: 'This question requires students to analyze (L4) algorithm behavior across different scenarios, aligning with CO4 on algorithm analysis.',
        },
        {
          id: '5',
          text: 'Implement a binary search tree with insert and search operations.',
          co: 'CO2',
          bloom: 'L3',
          difficulty: 'Medium',
          cognitiveLoad: 'Moderate',
          topic: 'Data Structures',
          justification: 'This question requires students to apply (L3) their knowledge of tree structures to implement basic operations, aligned with CO2.',
        },
      ];
      
      setQuestions(newQuestions);
      setIsGenerating(false);
      toast.success(`Generated ${newQuestions.length} questions successfully!`);
    }, 2000);
  };

  const handleRegenerateQuestion = (id: string) => {
    toast.success('Question regenerated successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-2">Question Bank Generator</h1>
          <p className="text-gray-600">
            Generate outcome-aligned questions with AI-powered controls
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Controls Panel */}
          <div className="lg:col-span-1">
            <GenerationControlsPanel
              onGenerate={handleGenerate}
              isGenerating={isGenerating}
            />
          </div>

          {/* Question List */}
          <div className="lg:col-span-2">
            {questions.length === 0 ? (
              <Card className="h-full">
                <CardContent className="flex flex-col items-center justify-center py-20">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mb-4">
                    <Sparkles className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="mb-2">No Questions Generated Yet</h3>
                  <p className="text-gray-600 text-center max-w-md mb-6">
                    Configure your generation parameters on the left and click "Generate Questions" to create your AI-powered question bank.
                  </p>
                  <Button
                    onClick={() => handleGenerate({})}
                    disabled={isGenerating}
                  >
                    {isGenerating ? 'Generating...' : 'Generate Sample Questions'}
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <QuestionList
                questions={questions}
                onSelectQuestion={setSelectedQuestion}
                onRegenerateQuestion={handleRegenerateQuestion}
              />
            )}
          </div>
        </div>
      </div>

      {/* Question Detail Drawer */}
      <QuestionDetailDrawer
        question={selectedQuestion}
        onClose={() => setSelectedQuestion(null)}
        onRegenerate={handleRegenerateQuestion}
      />
    </div>
  );
}
