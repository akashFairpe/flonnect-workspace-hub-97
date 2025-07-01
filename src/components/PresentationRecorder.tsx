
import React, { useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SlideViewer } from './SlideViewer';
import { CameraControls } from './CameraControls';
import { AnnotationToolbar } from './AnnotationToolbar';
import { LayoutSelector } from './LayoutSelector';
import { BackgroundSelector } from './BackgroundSelector';
import { AISpeakerNotes } from './AISpeakerNotes';
import { 
  Play, 
  Square, 
  Mic, 
  MicOff, 
  Video, 
  VideoOff,
  ChevronLeft,
  ChevronRight,
  Settings
} from 'lucide-react';
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
  const [showSettings, setShowSettings] = useState(false);
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
    <div className="h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-900">{fileName}</h1>
            <p className="text-sm text-gray-600">
              Slide {currentSlide + 1} of {slides.length}
            </p>
          </div>
          <Badge variant={isRecording ? "destructive" : "secondary"}>
            {isRecording ? "Recording" : "Ready"}
          </Badge>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar - Slide Navigation */}
        <div className="w-64 bg-white border-r p-4 overflow-y-auto">
          <h3 className="font-semibold mb-4 text-sm">Slides</h3>
          <div className="space-y-2">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`p-3 rounded cursor-pointer transition-colors ${
                  index === currentSlide 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
                onClick={() => setCurrentSlide(index)}
              >
                <div className="text-sm font-medium">
                  Slide {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col">
          {/* Slide Viewer - Much Larger */}
          <div className="flex-1 p-6">
            <Card className="h-full">
              <CardContent className="p-0 h-full">
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

          {/* Controls Bar */}
          <div className="bg-white border-t p-4">
            <div className="flex items-center justify-between">
              {/* Slide Navigation */}
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={prevSlide}
                  disabled={currentSlide === 0}
                >
                  <ChevronLeft className="w-4 h-4" />
                  Previous
                </Button>
                <span className="text-sm text-gray-600">
                  {currentSlide + 1} / {slides.length}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={nextSlide}
                  disabled={currentSlide === slides.length - 1}
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>

              {/* Recording Controls */}
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsMicOn(!isMicOn)}
                  className={!isMicOn ? 'bg-red-100 text-red-700' : ''}
                >
                  {isMicOn ? <Mic className="w-4 h-4" /> : <MicOff className="w-4 h-4" />}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsCameraOn(!isCameraOn)}
                  className={!isCameraOn ? 'bg-red-100 text-red-700' : ''}
                >
                  {isCameraOn ? <Video className="w-4 h-4" /> : <VideoOff className="w-4 h-4" />}
                </Button>
                <Button
                  onClick={isRecording ? handleStopRecording : handleStartRecording}
                  className={isRecording ? 'bg-red-600 hover:bg-red-700' : ''}
                  size="lg"
                >
                  {isRecording ? (
                    <>
                      <Square className="w-4 h-4 mr-2" />
                      Stop Recording
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 mr-2" />
                      Start Recording
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar - Controls */}
        <div className="w-80 bg-white border-l p-4 overflow-y-auto">
          <div className="space-y-4">
            <CameraControls />
            <AnnotationToolbar />
            <LayoutSelector 
              selectedLayout={selectedLayout}
              onLayoutChange={setSelectedLayout}
            />
            <BackgroundSelector
              selectedBackground={selectedBackground}
              onBackgroundChange={setSelectedBackground}
            />
            <AISpeakerNotes slideContent={`Slide ${currentSlide + 1}`} />
          </div>
        </div>
      </div>
    </div>
  );
}
