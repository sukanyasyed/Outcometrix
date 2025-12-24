import { useState } from 'react';
import { FileSearch } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { AuditUpload } from './AuditUpload';
import { AuditSummary } from './AuditSummary';
import { AuditIssueList } from './AuditIssueList';
import { AutoFixPanel } from './AutoFixPanel';

export function Auditor() {
  const [hasAudit, setHasAudit] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleFileUpload = (file: File) => {
    setIsAnalyzing(true);
    
    // Simulate analysis
    setTimeout(() => {
      setIsAnalyzing(false);
      setHasAudit(true);
    }, 3000);
  };

  if (!hasAudit) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="mb-2">Question Paper Auditor</h1>
            <p className="text-gray-600">
              Upload an existing question paper for AI-powered quality analysis
            </p>
          </div>

          {isAnalyzing ? (
            <Card>
              <CardContent className="py-20">
                <div className="flex flex-col items-center justify-center">
                  <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
                  <h3 className="mb-2">Analyzing Question Paper...</h3>
                  <p className="text-gray-600 text-center max-w-md">
                    AI is examining outcome coverage, Bloom distribution, and identifying potential issues.
                  </p>
                </div>
              </CardContent>
            </Card>
          ) : (
            <AuditUpload onFileUpload={handleFileUpload} />
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="mb-2">Audit Report</h1>
            <p className="text-gray-600">
              Comprehensive analysis of uploaded question paper
            </p>
          </div>
          <Button variant="outline" onClick={() => setHasAudit(false)}>
            <FileSearch className="w-4 h-4 mr-2" />
            Analyze New Paper
          </Button>
        </div>

        <div className="space-y-6">
          <AuditSummary />
          
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <AuditIssueList />
            </div>
            <div className="lg:col-span-1">
              <AutoFixPanel />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
