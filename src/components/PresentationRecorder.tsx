
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SlideViewer } from './SlideViewer';
import { AISpeakerNotes } from './AISpeakerNotes';
import { SlideNavigation } from './SlideNavigation';
import { RecordingControlTabs } from './RecordingControlTabs';
import { RecordingFloatingControls } from './RecordingFloatingControls';
import { useToast } from '@/hooks/use-toast';

interface PresentationRecorderProps {
  slides: string[];
  fileName: string;
}

export function PresentationRecorder({ slides, fileName }: PresentationRecorderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [isMicOn, setIsMicOn] = useState(true);
  const [isCameraOn, setIsCameraOn] = useState(true);
  const [selectedLayout, setSelectedLayout] = useState('picture-in-picture');
  const [selectedBackground, setSelectedBackground] = useState('none');
  const [annotations, setAnnotations] = useState<any[]>([]);
  const { toast } = useToast();

  const handleStartRecording = () => {
    setIsRecording(true);
    toast({
      title: "Recording Started",
      description: "Your presentation recording has begun!",
    });
  };

  const handleStopRecording = () => {
    setIsRecording(false);
    toast({
      title: "Recording Stopped",
      description: "Your presentation has been recorded successfully!",
    });
  };

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="h-screen w-full flex flex-col bg-gray-50 overflow-hidden">
      {/* Header */}
      <div className="bg-white border-b px-6 py-4 flex-shrink-0">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-900">{fileName}</h1>
            <p className="text-sm text-gray-600">
              Ready to record your presentation
            </p>
          </div>
          <Badge variant={isRecording ? "destructive" : "secondary"} className="px-3 py-1">
            {isRecording ? "● Recording" : "Ready"}
          </Badge>
        </div>
      </div>

      {/* AI Speaker Notes - Full Width at Top */}
      <div className="bg-white border-b px-6 py-4 flex-shrink-0">
        <AISpeakerNotes slideContent={`Slide ${currentSlide + 1}`} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden min-h-0">
        {/* Left Sidebar - Slide Navigation */}
        <SlideNavigation
          slides={slides}
          currentSlide={currentSlide}
          onSlideChange={setCurrentSlide}
        />

        {/* Main Content Area - Slide Viewer */}
        <div className="flex-1 flex flex-col min-w-0">
          <div className="flex-1 p-6 min-h-0">
            <Card className="h-full w-full">
              <CardContent className="p-0 h-full w-full">
                <SlideViewer
                  slideUrl={slides[currentSlide]}
                  annotations={annotations}
                  onAnnotationAdd={setAnnotations}
                  layout={selectedLayout}
                  background={selectedBackground}
                  isCameraOn={isCameraOn}
                />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Right Sidebar - Control Tabs */}
        <div className="w-80 flex-shrink-0">
          <RecordingControlTabs
            isMicOn={isMicOn}
            isCameraOn={isCameraOn}
            selectedLayout={selectedLayout}
            selectedBackground={selectedBackground}
            onMicToggle={() => setIsMicOn(!isMicOn)}
            onCameraToggle={() => setIsCameraOn(!isCameraOn)}
            onLayoutChange={setSelectedLayout}
            onBackgroundChange={setSelectedBackground}
          />
        </div>
      </div>

      {/* Floating Controls */}
      <RecordingFloatingControls
        isRecording={isRecording}
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onStartRecording={handleStartRecording}
        onStopRecording={handleStopRecording}
        onPrevSlide={prevSlide}
        onNextSlide={nextSlide}
      />
    </div>
  );
}
