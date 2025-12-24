import { Upload, Save } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { SyllabusUpload } from './SyllabusUpload';
import { CourseOutcomeEditor } from './CourseOutcomeEditor';
import { ProgramOutcomeMapper } from './ProgramOutcomeMapper';

export function Outcomes() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="mb-2">Course & Program Outcomes</h1>
            <p className="text-gray-600">
              Manage syllabus, course outcomes, and CO-PO mapping
            </p>
          </div>
          <Button>
            <Save className="w-4 h-4 mr-2" />
            Save Changes
          </Button>
        </div>

        <div className="space-y-6">
          <SyllabusUpload />
          <CourseOutcomeEditor />
          <ProgramOutcomeMapper />
        </div>
      </div>
    </div>
  );
}
