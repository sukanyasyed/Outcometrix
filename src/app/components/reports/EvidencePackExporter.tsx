import { Package, FileText, File } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Checkbox } from '../ui/checkbox';
import { Label } from '../ui/label';
import { useState } from 'react';
import { toast } from 'sonner';

export function EvidencePackExporter() {
  const [selectedItems, setSelectedItems] = useState<string[]>([
    'co-po-matrix',
    'bloom-distribution',
    'question-bank',
    'audit-reports',
  ]);

  const items = [
    { id: 'co-po-matrix', label: 'CO-PO Matrix' },
    { id: 'bloom-distribution', label: 'Bloom Distribution Charts' },
    { id: 'question-bank', label: 'Complete Question Bank' },
    { id: 'audit-reports', label: 'Audit Reports' },
    { id: 'outcome-drift', label: 'Outcome Drift Analysis' },
    { id: 'coverage-heatmaps', label: 'Coverage Heatmaps' },
  ];

  const handleToggle = (id: string) => {
    setSelectedItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const handleExport = (format: 'pdf' | 'docx') => {
    toast.success(`Exporting evidence pack as ${format.toUpperCase()}...`);
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Package className="w-5 h-5 text-purple-600" />
          <CardTitle>Evidence Pack</CardTitle>
        </div>
        <CardDescription>
          Export comprehensive accreditation evidence
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          {items.map((item) => (
            <div key={item.id} className="flex items-center space-x-2">
              <Checkbox
                id={item.id}
                checked={selectedItems.includes(item.id)}
                onCheckedChange={() => handleToggle(item.id)}
              />
              <Label
                htmlFor={item.id}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
              >
                {item.label}
              </Label>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t space-y-2">
          <Button
            className="w-full"
            onClick={() => handleExport('pdf')}
            disabled={selectedItems.length === 0}
          >
            <FileText className="w-4 h-4 mr-2" />
            Export as PDF
          </Button>
          <Button
            variant="outline"
            className="w-full"
            onClick={() => handleExport('docx')}
            disabled={selectedItems.length === 0}
          >
            <File className="w-4 h-4 mr-2" />
            Export as DOCX
          </Button>
        </div>

        <p className="text-xs text-gray-500 text-center">
          {selectedItems.length} of {items.length} items selected
        </p>
      </CardContent>
    </Card>
  );
}
