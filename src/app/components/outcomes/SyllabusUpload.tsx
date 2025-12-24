import { FileText, CheckCircle, Upload } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { useState } from 'react';

export function SyllabusUpload() {
  const [uploadStatus, setUploadStatus] = useState<'none' | 'uploaded' | 'parsing'>('uploaded');

  return (
    <Card>
      <CardHeader>
        <CardTitle>Syllabus Document</CardTitle>
        <CardDescription>
          Upload your course syllabus to auto-extract topics and outcomes
        </CardDescription>
      </CardHeader>
      <CardContent>
        {uploadStatus === 'uploaded' ? (
          <div className="flex items-center justify-between p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <div className="font-medium text-green-900">CS301_Syllabus_2024.pdf</div>
                <div className="text-sm text-green-700">Uploaded and parsed successfully</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Badge className="bg-green-600">
                <CheckCircle className="w-3 h-3 mr-1" />
                Parsed
              </Badge>
              <Button variant="outline" size="sm">
                <Upload className="w-4 h-4 mr-2" />
                Replace
              </Button>
            </div>
          </div>
        ) : (
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
            <p className="text-sm text-gray-600 mb-4">
              Drag and drop your syllabus PDF here
            </p>
            <Button variant="outline">
              Browse Files
            </Button>
          </div>
        )}

        {uploadStatus === 'uploaded' && (
          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="text-sm font-medium text-blue-900 mb-2">
              Extracted Information
            </div>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <span className="text-blue-700">Course Code:</span>
                <span className="ml-2 font-medium">CS301</span>
              </div>
              <div>
                <span className="text-blue-700">Topics:</span>
                <span className="ml-2 font-medium">12 detected</span>
              </div>
              <div>
                <span className="text-blue-700">COs Found:</span>
                <span className="ml-2 font-medium">6 outcomes</span>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
