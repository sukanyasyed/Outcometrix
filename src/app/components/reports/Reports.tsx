import { FileDown } from 'lucide-react';
import { Card } from '../ui/card';
import { ReportDownloadPanel } from './ReportDownloadPanel';
import { OutcomeDriftTimeline } from './OutcomeDriftTimeline';
import { EvidencePackExporter } from './EvidencePackExporter';

export function Reports() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="mb-2">Reports & Accreditation</h1>
          <p className="text-gray-600">
            Generate comprehensive reports for NBA/NAAC accreditation
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <OutcomeDriftTimeline />
          </div>
          <div className="lg:col-span-1 space-y-6">
            <ReportDownloadPanel />
            <EvidencePackExporter />
          </div>
        </div>
      </div>
    </div>
  );
}
