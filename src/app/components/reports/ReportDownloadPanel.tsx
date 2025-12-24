import { FileText, Download } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { toast } from 'sonner';

export function ReportDownloadPanel() {
  const reports = [
    {
      id: '1',
      title: 'CO-PO Matrix Report',
      description: 'Detailed correlation matrix with strength indicators',
      format: 'PDF',
    },
    {
      id: '2',
      title: 'Bloom Distribution Analysis',
      description: 'Taxonomy-wise question distribution with charts',
      format: 'PDF',
    },
    {
      id: '3',
      title: 'Outcome Coverage Report',
      description: 'Complete CO coverage with heatmaps',
      format: 'PDF',
    },
    {
      id: '4',
      title: 'Outcome Drift Analysis',
      description: 'Semester-wise outcome tracking trends',
      format: 'PDF',
    },
  ];

  const handleDownload = (reportTitle: string) => {
    toast.success(`Downloading ${reportTitle}...`);
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <FileText className="w-5 h-5 text-blue-600" />
          <CardTitle>Available Reports</CardTitle>
        </div>
        <CardDescription>
          Download individual analysis reports
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {reports.map((report) => (
          <div
            key={report.id}
            className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-start justify-between gap-3 mb-2">
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium mb-1">{report.title}</div>
                <p className="text-xs text-gray-600">{report.description}</p>
              </div>
            </div>
            <Button
              size="sm"
              variant="outline"
              className="w-full"
              onClick={() => handleDownload(report.title)}
            >
              <Download className="w-4 h-4 mr-2" />
              Download {report.format}
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
