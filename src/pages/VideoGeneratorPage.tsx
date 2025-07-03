
import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { VideoGeneratorUploader } from '@/components/VideoGeneratorUploader';
import { VideoGeneratorEditor } from '@/components/VideoGeneratorEditor';

export default function VideoGeneratorPage() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [slides, setSlides] = useState<string[]>([]);

  const handleFileUpload = (file: File) => {
    setUploadedFile(file);
    // Mock slide extraction - in real app, this would process the PPT
    const mockSlides = [
      '/lovable-uploads/6fd10858-5aac-43fb-81f3-106e964979b4.png',
      '/lovable-uploads/f5cc212f-e439-44cc-8d5a-65da7361d56e.png'
    ];
    setSlides(mockSlides);
  };

  return (
    <div className="min-h-screen bg-gray-50 w-full overflow-hidden">
      {!uploadedFile && <Header />}
      {!uploadedFile ? (
        <div className="container mx-auto px-4 py-8">
          <VideoGeneratorUploader onFileUpload={handleFileUpload} />
        </div>
      ) : (
        <VideoGeneratorEditor slides={slides} fileName={uploadedFile.name} />
      )}
    </div>
  );
}
