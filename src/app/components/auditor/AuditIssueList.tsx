import { AlertTriangle, XCircle, Target, Brain, Copy, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

export function AuditIssueList() {
  const issues = [
    {
      id: '1',
      type: 'Missing COs',
      severity: 'fail',
      icon: Target,
      title: 'CO4 and CO6 Not Covered',
      description: 'Two course outcomes have zero questions mapped to them.',
      details: 'Course Outcomes CO4 (Database Normalization) and CO6 (Web Security) have no questions. This creates gaps in assessment coverage.',
      impact: 'High - Accreditation Risk',
      affected: ['Q12-Q45 range'],
    },
    {
      id: '2',
      type: 'Bloom Imbalance',
      severity: 'warning',
      icon: Brain,
      title: 'Over-reliance on L1-L2 Questions',
      description: '68% of questions are at Remember/Understand level.',
      details: 'Higher-order thinking (L4-L6) represents only 18% of total questions. NBA/NAAC guidelines recommend at least 40% higher-order questions.',
      impact: 'Medium - Quality Concern',
      affected: ['Multiple questions'],
    },
    {
      id: '3',
      type: 'Redundant Questions',
      severity: 'warning',
      icon: Copy,
      title: '3 Similar Questions Detected',
      description: 'Questions Q12, Q15, and Q18 are semantically similar.',
      details: 'These questions test the same concept with minor wording variations, reducing assessment variety.',
      impact: 'Low - Efficiency Issue',
      affected: ['Q12', 'Q15', 'Q18'],
    },
    {
      id: '4',
      type: 'Rote Learning',
      severity: 'fail',
      icon: AlertCircle,
      title: 'High Rote Learning Risk',
      description: '15 questions can be answered through memorization alone.',
      details: 'Questions lack application context or scenario-based elements. Students can score well without understanding.',
      impact: 'High - Pedagogical Concern',
      affected: ['Q1-Q8', 'Q22-Q28'],
    },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'fail':
        return 'text-red-600 bg-red-100';
      case 'warning':
        return 'text-yellow-600 bg-yellow-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getSeverityIcon = (severity: string) => {
    return severity === 'fail' ? XCircle : AlertTriangle;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Issues Detected</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {issues.map((issue) => {
            const SeverityIcon = getSeverityIcon(issue.severity);
            
            return (
              <AccordionItem key={issue.id} value={issue.id}>
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-start gap-3 text-left">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${getSeverityColor(issue.severity)}`}>
                      <issue.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium">{issue.title}</span>
                        <Badge
                          variant={issue.severity === 'fail' ? 'destructive' : 'secondary'}
                          className="text-xs"
                        >
                          {issue.severity === 'fail' ? 'Critical' : 'Warning'}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600">{issue.description}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pl-[52px] space-y-3 pt-2">
                    <div>
                      <div className="text-sm font-medium mb-1">Details</div>
                      <p className="text-sm text-gray-700">{issue.details}</p>
                    </div>
                    <div>
                      <div className="text-sm font-medium mb-1">Impact</div>
                      <p className="text-sm text-gray-700">{issue.impact}</p>
                    </div>
                    <div>
                      <div className="text-sm font-medium mb-1">Affected Questions</div>
                      <div className="flex flex-wrap gap-1">
                        {issue.affected.map((q, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {q}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </CardContent>
    </Card>
  );
}
