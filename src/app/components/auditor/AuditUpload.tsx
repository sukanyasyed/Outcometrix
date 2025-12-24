import { Upload, FileText } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { useState } from 'react';

interface AuditUploadProps {
  onFileUpload: (file: File) => void;
}

export function AuditUpload({ onFileUpload }: AuditUploadProps) {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files[0];
    if (file && file.type === 'application/pdf') {
      onFileUpload(file);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onFileUpload(file);
    }
  };

  return (
    <Card
      className={`border-2 border-dashed transition-colors cursor-pointer ${
        isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-gray-400'
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <CardContent className="py-20">
        <label className="flex flex-col items-center justify-center cursor-pointer">
          <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-4 ${
            isDragging ? 'bg-blue-100' : 'bg-gray-100'
          }`}>
            {isDragging ? (
              <FileText className="w-10 h-10 text-blue-600" />
            ) : (
              <Upload className="w-10 h-10 text-gray-400" />
            )}
          </div>
          <h3 className="mb-2">Upload Question Paper</h3>
          <p className="text-gray-600 text-center max-w-md mb-6">
            Drag and drop your PDF file here, or click to browse
          </p>
          <div className="text-sm text-gray-500">
            Supports: PDF format • Max size: 10MB
          </div>
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileInput}
            className="hidden"
          />
        </label>
      </CardContent>
    </Card>
  );
}
