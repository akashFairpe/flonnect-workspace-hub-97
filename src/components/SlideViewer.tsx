
import React, { useRef, useState } from 'react';

interface SlideViewerProps {
  slideUrl: string;
  annotations: any[];
  onAnnotationAdd: (annotations: any[]) => void;
  layout: string;
  background: string;
  isCameraOn: boolean;
}

export function SlideViewer({ 
  slideUrl, 
  annotations, 
  onAnnotationAdd, 
  layout, 
  background,
  isCameraOn 
}: SlideViewerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [cameraPosition, setCameraPosition] = useState({ x: 20, y: 20 });
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Check if clicking on camera area
    if (isCameraOn && 
        x >= cameraPosition.x && x <= cameraPosition.x + 200 &&
        y >= cameraPosition.y && y <= cameraPosition.y + 150) {
      setIsDragging(true);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && isCameraOn) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = Math.max(0, Math.min(rect.width - 200, e.clientX - rect.left - 100));
      const y = Math.max(0, Math.min(rect.height - 150, e.clientY - rect.top - 75));
      setCameraPosition({ x, y });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const getBackgroundStyle = () => {
    switch (background) {
      case 'blur':
        return 'backdrop-blur-sm bg-white/10';
      case 'green':
        return 'bg-green-500';
      case 'blue':
        return 'bg-blue-500';
      case 'gradient':
        return 'bg-gradient-to-r from-purple-500 to-pink-500';
      default:
        return 'bg-transparent';
    }
  };

  return (
    <div 
      className="relative w-full h-96 bg-gray-100 rounded-lg overflow-hidden cursor-move"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Main slide content */}
      <img
        src={slideUrl}
        alt="Presentation slide"
        className="w-full h-full object-contain"
      />
      
      {/* Movable camera overlay */}
      {isCameraOn && (
        <div
          className={`absolute w-48 h-36 rounded-lg border-2 border-white shadow-lg ${getBackgroundStyle()} ${
            isDragging ? 'cursor-grabbing' : 'cursor-grab'
          }`}
          style={{
            left: cameraPosition.x,
            top: cameraPosition.y,
          }}
        >
          <div className="w-full h-full bg-gray-800 rounded-lg flex items-center justify-center text-white text-sm">
            Camera Feed
            <div className="absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      )}
      
      {/* Annotation overlay */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        width={800}
        height={600}
      />
    </div>
  );
}
