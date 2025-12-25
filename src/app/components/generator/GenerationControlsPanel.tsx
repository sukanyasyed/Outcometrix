import { useState } from 'react';
import { Sparkles, Settings, Sliders } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Slider } from '../ui/slider';
import { Checkbox } from '../ui/checkbox';
import { Badge } from '../ui/badge';

interface GenerationControlsPanelProps {
  onGenerate: (params: any) => void;
  isGenerating: boolean;
}

export function GenerationControlsPanel({ onGenerate, isGenerating }: GenerationControlsPanelProps) {
  const [selectedTopic, setSelectedTopic] = useState('all');
  const [selectedBloomLevels, setSelectedBloomLevels] = useState<string[]>(['L1', 'L2', 'L3', 'L4', 'L5', 'L6']);
  const [difficulty, setDifficulty] = useState([50]);
  const [studentPersona, setStudentPersona] = useState('regular');
  const [questionCount, setQuestionCount] = useState('5');

  const topics = [
    'All Topics',
    'Data Structures',
    'Algorithms',
    'OOP Concepts',
    'Database Design',
    'Web Technologies',
  ];

  const bloomLevels = [
    { id: 'L1', label: 'Remember', color: 'bg-blue-100 text-blue-700 border-blue-200' },
    { id: 'L2', label: 'Understand', color: 'bg-cyan-100 text-cyan-700 border-cyan-200' },
    { id: 'L3', label: 'Apply', color: 'bg-green-100 text-green-700 border-green-200' },
    { id: 'L4', label: 'Analyze', color: 'bg-violet-100 text-violet-700 border-violet-200' },
    { id: 'L5', label: 'Evaluate', color: 'bg-purple-100 text-purple-700 border-purple-200' },
    { id: 'L6', label: 'Create', color: 'bg-pink-100 text-pink-700 border-pink-200' },
  ];

  const handleBloomToggle = (levelId: string) => {
    setSelectedBloomLevels(prev =>
      prev.includes(levelId)
        ? prev.filter(id => id !== levelId)
        : [...prev, levelId]
    );
  };

  const handleGenerate = () => {
    onGenerate({
      topic: selectedTopic,
      bloomLevels: selectedBloomLevels,
      difficulty: difficulty[0],
      studentPersona,
      questionCount,
    });
  };

  const getDifficultyLabel = (value: number) => {
    if (value < 33) return 'Easy';
    if (value < 67) return 'Medium';
    return 'Hard';
  };

  const getDifficultyColor = (value: number) => {
    if (value < 33) return 'text-green-600';
    if (value < 67) return 'text-amber-600';
    return 'text-red-600';
  };

  return (
    <Card className="sticky top-20 border-t-4 border-t-indigo-500 shadow-xl">
      <CardHeader className="bg-gradient-to-r from-indigo-50 to-violet-50">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-violet-500 rounded-xl flex items-center justify-center shadow-lg">
            <Sliders className="w-5 h-5 text-white" />
          </div>
          <div>
            <CardTitle className="flex items-center gap-2">
              Generation Controls
              <Badge className="bg-gradient-to-r from-indigo-100 to-violet-100 text-indigo-700 border-indigo-200">
                <Sparkles className="w-3 h-3 mr-1" />
                AI
              </Badge>
            </CardTitle>
            <CardDescription className="mt-1">
              Configure parameters for question generation
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6 pt-6">
        {/* Topic Selector */}
        <div className="space-y-2">
          <Label className="text-gray-700">Topic</Label>
          <Select value={selectedTopic} onValueChange={setSelectedTopic}>
            <SelectTrigger className="bg-white border-gray-300 focus:border-indigo-500 focus:ring-indigo-500">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {topics.map((topic, index) => (
                <SelectItem key={index} value={index === 0 ? 'all' : topic.toLowerCase().replace(/\s+/g, '-')}>
                  {topic}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Question Count */}
        <div className="space-y-2">
          <Label className="text-gray-700">Number of Questions</Label>
          <Select value={questionCount} onValueChange={setQuestionCount}>
            <SelectTrigger className="bg-white border-gray-300 focus:border-indigo-500 focus:ring-indigo-500">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="3">3 questions</SelectItem>
              <SelectItem value="5">5 questions</SelectItem>
              <SelectItem value="10">10 questions</SelectItem>
              <SelectItem value="15">15 questions</SelectItem>
              <SelectItem value="20">20 questions</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Bloom Level Checkboxes */}
        <div className="space-y-3">
          <Label className="text-gray-700">Bloom&apos;s Taxonomy Levels</Label>
          <div className="space-y-2">
            {bloomLevels.map((level) => (
              <div key={level.id} className="flex items-center space-x-2">
                <Checkbox
                  id={level.id}
                  checked={selectedBloomLevels.includes(level.id)}
                  onCheckedChange={() => handleBloomToggle(level.id)}
                  className="data-[state=checked]:bg-indigo-600 data-[state=checked]:border-indigo-600"
                />
                <label
                  htmlFor={level.id}
                  className="flex-1 cursor-pointer"
                >
                  <Badge className={`text-xs ${level.color}`}>
                    {level.id}: {level.label}
                  </Badge>
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Difficulty Slider */}
        <div className="space-y-3">
          <Label className="text-gray-700">Difficulty Level</Label>
          <div className="pt-2">
            <Slider
              value={difficulty}
              onValueChange={setDifficulty}
              max={100}
              step={1}
              className="w-full"
            />
          </div>
          <div className="flex justify-between items-center text-xs">
            <span className="text-gray-500">Easy</span>
            <Badge className={`${getDifficultyColor(difficulty[0])}`}>
              {getDifficultyLabel(difficulty[0])} ({difficulty[0]}%)
            </Badge>
            <span className="text-gray-500">Hard</span>
          </div>
        </div>

        {/* Student Persona */}
        <div className="space-y-2">
          <Label className="text-gray-700">Student Persona</Label>
          <Select value={studentPersona} onValueChange={setStudentPersona}>
            <SelectTrigger className="bg-white border-gray-300 focus:border-indigo-500 focus:ring-indigo-500">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="remedial">Remedial (Extra Support)</SelectItem>
              <SelectItem value="regular">Regular (Standard)</SelectItem>
              <SelectItem value="advanced">Advanced (Challenge)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Generate Button */}
        <Button
          className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 shadow-lg shadow-indigo-200"
          onClick={handleGenerate}
          disabled={isGenerating || selectedBloomLevels.length === 0}
        >
          {isGenerating ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
              Generating...
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4 mr-2" />
              Generate Questions
            </>
          )}
        </Button>

        {selectedBloomLevels.length === 0 && (
          <p className="text-xs text-red-600 text-center">
            Please select at least one Bloom level
          </p>
        )}
      </CardContent>
    </Card>
  );
}