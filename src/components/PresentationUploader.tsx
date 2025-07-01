
import React, { useCallback } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Upload } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface PresentationUploaderProps {
  onFileUpload: (file: File) => void;
}

export function PresentationUploader({ onFileUpload }: PresentationUploaderProps) {
  const { toast } = useToast();

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    const pptFile = files.find(file => 
      file.type.includes('presentation') || 
      file.name.endsWith('.ppt') || 
      file.name.endsWith('.pptx')
    );
    
    if (pptFile) {
      onFileUpload(pptFile);
      toast({
        title: "File Uploaded",
        description: "Your presentation has been uploaded successfully!",
      });
    } else {
      toast({
        title: "Invalid File",
        description: "Please upload a PowerPoint presentation file.",
        variant: "destructive",
      });
    }
  }, [onFileUpload, toast]);

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  }, []);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onFileUpload(file);
      toast({
        title: "File Uploaded",
        description: "Your presentation has been uploaded successfully!",
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Upload Slides to Start Recording your Presentation!
        </h1>
      </div>

      <Card className="border-2 border-dashed border-gray-300 hover:border-primary transition-colors">
        <CardContent className="p-12">
          <div
            className="text-center"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            <Upload className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-lg text-gray-600 mb-4">
              Drag and Drop your file here or
            </p>
            <Button asChild className="mb-4">
              <label htmlFor="file-upload" className="cursor-pointer">
                Browse to Upload
              </label>
            </Button>
            <input
              id="file-upload"
              type="file"
              accept=".ppt,.pptx"
              onChange={handleFileSelect}
              className="hidden"
            />
            <p className="text-sm text-gray-500">
              You can upload your presentation slides in the following formats: PPT, PPTX
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
