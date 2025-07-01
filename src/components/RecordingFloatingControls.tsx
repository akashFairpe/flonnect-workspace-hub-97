
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Play, 
  Square, 
  ChevronLeft, 
  ChevronRight,
  ChevronDown
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface RecordingFloatingControlsProps {
  isRecording: boolean;
  currentSlide: number;
  totalSlides: number;
  onStartRecording: () => void;
  onStopRecording: () => void;
  onPrevSlide: () => void;
  onNextSlide: () => void;
}

export function RecordingFloatingControls({
  isRecording,
  currentSlide,
  totalSlides,
  onStartRecording,
  onStopRecording,
  onPrevSlide,
  onNextSlide
}: RecordingFloatingControlsProps) {
  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-white rounded-full shadow-lg border p-2 flex items-center gap-3">
        {/* Slide Navigation */}
        <div className="flex items-center gap-2 px-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={onPrevSlide}
            disabled={currentSlide === 0}
            className="p-2"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          <Badge variant="outline" className="text-sm px-3">
            {currentSlide + 1} / {totalSlides}
          </Badge>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={onNextSlide}
            disabled={currentSlide === totalSlides - 1}
            className="p-2"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Divider */}
        <div className="w-px h-8 bg-gray-200" />

        {/* Recording Controls */}
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="outline" 
                size="sm" 
                className="px-3"
                disabled={isRecording}
              >
                Options
                <ChevronDown className="w-4 h-4 ml-1" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={onStartRecording}>
                Start with camera only
              </DropdownMenuItem>
              <DropdownMenuItem onClick={onStartRecording}>
                Start with audio only
              </DropdownMenuItem>
              <DropdownMenuItem onClick={onStartRecording}>
                Start with 3s countdown
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            onClick={isRecording ? onStopRecording : onStartRecording}
            className={`px-6 py-2 ${isRecording ? 'bg-red-600 hover:bg-red-700' : ''}`}
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
  );
}
