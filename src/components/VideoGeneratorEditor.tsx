import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Play, 
  Pause, 
  Download, 
  Settings, 
  Mic, 
  MicOff,
  Volume2,
  VolumeX,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  FileText,
  Palette,
  Type,
  Film,
  Edit3
} from 'lucide-react';
import { EditableSlideCanvas } from './EditableSlideCanvas';
import { useToast } from '@/hooks/use-toast';

interface VideoGeneratorEditorProps {
  slides: string[];
  fileName: string;
}

export function VideoGeneratorEditor({ slides, fileName }: VideoGeneratorEditorProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMicOn, setIsMicOn] = useState(true);
  const [isSoundOn, setIsSoundOn] = useState(true);
  const [selectedTheme, setSelectedTheme] = useState('modern');
  const [isEditMode, setIsEditMode] = useState(false);
  const [slideElements, setSlideElements] = useState<{[key: number]: any[]}>({});
  const { toast } = useToast();

  const themes = [
    { id: 'modern', name: 'Modern', color: 'bg-blue-500' },
    { id: 'creative', name: 'Creative', color: 'bg-purple-500' },
    { id: 'professional', name: 'Professional', color: 'bg-gray-500' },
    { id: 'vibrant', name: 'Vibrant', color: 'bg-orange-500' }
  ];

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    toast({
      title: isPlaying ? "Video Paused" : "Video Playing",
      description: isPlaying ? "Preview paused" : "Playing video preview",
    });
  };

  const handleExport = () => {
    toast({
      title: "Exporting Video",
      description: "Your video is being generated. This may take a few minutes.",
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

  const handleElementsChange = (elements: any[]) => {
    setSlideElements(prev => ({
      ...prev,
      [currentSlide]: elements
    }));
  };

  return (
    <div className="h-screen w-full flex flex-col bg-gray-50 overflow-hidden">
      {/* Header */}
      <div className="bg-white border-b px-6 py-4 flex-shrink-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Film className="w-6 h-6 text-blue-600" />
              <h1 className="text-xl font-bold text-gray-900">{fileName}</h1>
            </div>
            <Badge variant="secondary" className="px-3 py-1">
              {slides.length} slides
            </Badge>
          </div>
          
          <div className="flex items-center gap-3">
            <Button
              variant={isEditMode ? "default" : "outline"}
              size="sm"
              onClick={() => setIsEditMode(!isEditMode)}
            >
              <Edit3 className="w-4 h-4 mr-2" />
              {isEditMode ? 'Exit Edit' : 'Edit Mode'}
            </Button>
            <Button variant="outline" size="sm">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
            <Button onClick={handleExport} className="bg-gradient-to-r from-blue-600 to-purple-600">
              <Download className="w-4 h-4 mr-2" />
              Export Video
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden min-h-0">
        {/* Left Sidebar - Slide Navigator */}
        <div className="w-64 bg-white border-r flex-shrink-0 overflow-y-auto">
          <div className="p-4">
            <h3 className="font-semibold text-gray-900 mb-4">Slides</h3>
            <div className="space-y-3">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`cursor-pointer p-3 rounded-lg border-2 transition-all ${
                    currentSlide === index 
                      ? 'border-blue-500 bg-blue-50' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img 
                    src={slide} 
                    alt={`Slide ${index + 1}`}
                    className="w-full aspect-video object-cover rounded mb-2"
                  />
                  <p className="text-sm font-medium text-gray-700">Slide {index + 1}</p>
                  {slideElements[index] && slideElements[index].length > 0 && (
                    <p className="text-xs text-blue-600">{slideElements[index].length} elements</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Editor Area */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Video Preview */}
          <div className="flex-1 p-6 bg-gray-100">
            <Card className="h-full">
              <CardContent className="p-0 h-full relative">
                {isEditMode ? (
                  <EditableSlideCanvas
                    slideUrl={slides[currentSlide]}
                    onElementsChange={handleElementsChange}
                  />
                ) : (
                  <>
                    <img
                      src={slides[currentSlide]}
                      alt={`Slide ${currentSlide + 1}`}
                      className="w-full h-full object-contain"
                    />
                    
                    {/* Play/Pause Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-20 transition-all group">
                      <Button
                        size="lg"
                        onClick={handlePlayPause}
                        className="opacity-0 group-hover:opacity-100 transition-opacity bg-white text-gray-900 hover:bg-gray-100 rounded-full w-16 h-16"
                      >
                        {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
                      </Button>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Controls */}
          <div className="bg-white border-t px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button variant="outline" size="sm" onClick={prevSlide} disabled={currentSlide === 0}>
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <span className="text-sm text-gray-600">
                  {currentSlide + 1} / {slides.length}
                </span>
                <Button variant="outline" size="sm" onClick={nextSlide} disabled={currentSlide === slides.length - 1}>
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>

              <div className="flex items-center gap-3">
                <Button
                  variant={isMicOn ? "default" : "outline"}
                  size="sm"
                  onClick={() => setIsMicOn(!isMicOn)}
                >
                  {isMicOn ? <Mic className="w-4 h-4" /> : <MicOff className="w-4 h-4" />}
                </Button>
                <Button
                  variant={isSoundOn ? "default" : "outline"}
                  size="sm"
                  onClick={() => setIsSoundOn(!isSoundOn)}
                >
                  {isSoundOn ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar - Tools */}
        <div className="w-80 bg-white border-l flex-shrink-0">
          <Tabs defaultValue="themes" className="h-full">
            <TabsList className="grid w-full grid-cols-4 m-4">
              <TabsTrigger value="themes" className="text-xs">
                <Palette className="w-4 h-4" />
              </TabsTrigger>
              <TabsTrigger value="text" className="text-xs">
                <Type className="w-4 h-4" />
              </TabsTrigger>
              <TabsTrigger value="ai" className="text-xs">
                <Sparkles className="w-4 h-4" />
              </TabsTrigger>
              <TabsTrigger value="notes" className="text-xs">
                <FileText className="w-4 h-4" />
              </TabsTrigger>
            </TabsList>

            <TabsContent value="themes" className="px-4 pb-4">
              <h4 className="font-semibold mb-4">Video Themes</h4>
              <div className="space-y-3">
                {themes.map((theme) => (
                  <Button
                    key={theme.id}
                    variant={selectedTheme === theme.id ? "default" : "outline"}
                    className="w-full justify-start"
                    onClick={() => setSelectedTheme(theme.id)}
                  >
                    <div className={`w-4 h-4 rounded-full ${theme.color} mr-2`} />
                    {theme.name}
                  </Button>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="text" className="px-4 pb-4">
              <h4 className="font-semibold mb-4">Text & Typography</h4>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  Add Title Text
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Add Subtitle
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Add Caption
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="ai" className="px-4 pb-4">
              <h4 className="font-semibold mb-4">AI Enhancement</h4>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Auto Transitions
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Smart Animations
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Voice Over
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="notes" className="px-4 pb-4">
              <h4 className="font-semibold mb-4">Slide Notes</h4>
              <div className="text-sm text-gray-600 text-center py-8">
                Add speaker notes for this slide to enhance your video presentation.
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
