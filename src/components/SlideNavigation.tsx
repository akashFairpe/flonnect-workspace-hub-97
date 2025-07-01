
import React from 'react';
import { Badge } from '@/components/ui/badge';

interface SlideNavigationProps {
  slides: string[];
  currentSlide: number;
  onSlideChange: (index: number) => void;
}

export function SlideNavigation({ slides, currentSlide, onSlideChange }: SlideNavigationProps) {
  return (
    <div className="bg-white border-r p-4 flex-shrink-0 w-64">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-sm">Slides</h3>
        <Badge variant="secondary" className="text-xs">
          {currentSlide + 1} of {slides.length}
        </Badge>
      </div>
      <div className="space-y-2 overflow-y-auto h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`p-3 rounded cursor-pointer transition-colors border ${
              index === currentSlide 
                ? 'bg-primary text-primary-foreground border-primary' 
                : 'bg-gray-50 hover:bg-gray-100 border-gray-200'
            }`}
            onClick={() => onSlideChange(index)}
          >
            <div className="text-sm font-medium">
              Slide {index + 1}
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              Click to preview
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
