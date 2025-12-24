import { useState } from 'react';
import { Sparkles, Settings } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Slider } from '../ui/slider';
import { Checkbox } from '../ui/checkbox';

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
    { id: 'L1', label: 'Remember' },
    { id: 'L2', label: 'Understand' },
    { id: 'L3', label: 'Apply' },
    { id: 'L4', label: 'Analyze' },
    { id: 'L5', label: 'Evaluate' },
    { id: 'L6', label: 'Create' },
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

  return (
    <Card className="sticky top-20">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Settings className="w-5 h-5 text-blue-600" />
          <CardTitle>Generation Controls</CardTitle>
        </div>
        <CardDescription>
          Configure parameters for AI question generation
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Topic Selector */}
        <div className="space-y-2">
          <Label>Topic</Label>
          <Select value={selectedTopic} onValueChange={setSelectedTopic}>
            <SelectTrigger>
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
          <Label>Number of Questions</Label>
          <Select value={questionCount} onValueChange={setQuestionCount}>
            <SelectTrigger>
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
          <Label>Bloom&apos;s Taxonomy Levels</Label>
          <div className="space-y-2">
            {bloomLevels.map((level) => (
              <div key={level.id} className="flex items-center space-x-2">
                <Checkbox
                  id={level.id}
                  checked={selectedBloomLevels.includes(level.id)}
                  onCheckedChange={() => handleBloomToggle(level.id)}
                />
                <label
                  htmlFor={level.id}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                >
                  {level.id}: {level.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Difficulty Slider */}
        <div className="space-y-3">
          <Label>Difficulty Level</Label>
          <Slider
            value={difficulty}
            onValueChange={setDifficulty}
            max={100}
            step={1}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-gray-500">
            <span>Easy</span>
            <span className="font-medium text-gray-900">{difficulty[0]}%</span>
            <span>Hard</span>
          </div>
        </div>

        {/* Student Persona */}
        <div className="space-y-2">
          <Label>Student Persona</Label>
          <Select value={studentPersona} onValueChange={setStudentPersona}>
            <SelectTrigger>
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
          className="w-full"
          onClick={handleGenerate}
          disabled={isGenerating || selectedBloomLevels.length === 0}
        >
          <Sparkles className="w-4 h-4 mr-2" />
          {isGenerating ? 'Generating...' : 'Generate Questions'}
        </Button>
      </CardContent>
    </Card>
  );
}
