
import React, { useCallback } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Upload, FileText, Video, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface VideoGeneratorUploaderProps {
  onFileUpload: (file: File) => void;
}

export function VideoGeneratorUploader({ onFileUpload }: VideoGeneratorUploaderProps) {
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
        title: "Template Uploaded",
        description: "Your PowerPoint template is ready for video generation!",
      });
    } else {
      toast({
        title: "Invalid File",
        description: "Please upload a PowerPoint presentation file (.ppt or .pptx)",
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
        title: "Template Uploaded",
        description: "Your PowerPoint template is ready for video generation!",
      });
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl">
            <Video className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900">
            AI Video Generator
          </h1>
          <Sparkles className="w-8 h-8 text-purple-500" />
        </div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Transform your PowerPoint presentations into engaging videos with AI-powered narration, 
          animations, and professional editing tools.
        </p>
      </div>

      {/* Features Preview */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <Card className="text-center p-6 border-2 hover:border-blue-300 transition-colors">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <FileText className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="font-semibold mb-2">PowerPoint Templates</h3>
          <p className="text-sm text-gray-600">Import your existing presentations as templates</p>
        </Card>
        
        <Card className="text-center p-6 border-2 hover:border-purple-300 transition-colors">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Sparkles className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="font-semibold mb-2">AI Enhancement</h3>
          <p className="text-sm text-gray-600">Automatic animations and transitions</p>
        </Card>
        
        <Card className="text-center p-6 border-2 hover:border-green-300 transition-colors">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Video className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="font-semibold mb-2">Professional Output</h3>
          <p className="text-sm text-gray-600">Export high-quality video presentations</p>
        </Card>
      </div>

      {/* Upload Area */}
      <Card className="border-2 border-dashed border-gray-300 hover:border-blue-400 transition-colors">
        <CardContent className="p-12">
          <div
            className="text-center"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Upload className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Upload Your PowerPoint Template
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Drag and drop your presentation file here, or click to browse
            </p>
            
            <Button size="lg" asChild className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <label htmlFor="file-upload" className="cursor-pointer">
                <Upload className="w-5 h-5 mr-2" />
                Choose PowerPoint File
              </label>
            </Button>
            
            <input
              id="file-upload"
              type="file"
              accept=".ppt,.pptx"
              onChange={handleFileSelect}
              className="hidden"
            />
            
            <div className="flex items-center justify-center gap-4 text-sm text-gray-500 mt-6">
              <div className="flex items-center gap-1">
                <FileText className="w-4 h-4" />
                Supports PPT & PPTX
              </div>
              <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
              <div>Up to 50MB</div>
              <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
              <div>Unlimited slides</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <p className="text-gray-600 mb-4">
          No PowerPoint file? Start with our templates
        </p>
        <Button variant="outline" size="lg">
          Browse Templates
        </Button>
      </div>
    </div>
  );
}
