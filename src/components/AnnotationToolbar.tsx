
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Mic, 
  MicOff, 
  Video, 
  VideoOff, 
  MousePointer, 
  Pen, 
  Type, 
  Square, 
  Circle, 
  ArrowRight, 
  Highlighter, 
  Eraser, 
  Pause,
  X,
  Square as Stop,
  Palette
} from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

interface AnnotationToolbarProps {
  onToolSelect?: (tool: string) => void;
  isRecording?: boolean;
}

export function AnnotationToolbar({ onToolSelect, isRecording = false }: AnnotationToolbarProps) {
  const [selectedTool, setSelectedTool] = useState('pointer');
  const [selectedColor, setSelectedColor] = useState('#000000');
  const [micEnabled, setMicEnabled] = useState(true);
  const [videoEnabled, setVideoEnabled] = useState(false);

  const handleToolSelect = (tool: string) => {
    setSelectedTool(tool);
    onToolSelect?.(tool);
  };

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
    onToolSelect?.(`color-${color}`);
  };

  const tools = [
    { id: 'pointer', icon: MousePointer, label: 'Pointer' },
    { id: 'pen', icon: Pen, label: 'Draw' },
    { id: 'highlighter', icon: Highlighter, label: 'Highlight' },
    { id: 'text', icon: Type, label: 'Text' },
    { id: 'arrow', icon: ArrowRight, label: 'Arrow' },
    { id: 'rectangle', icon: Square, label: 'Rectangle' },
    { id: 'circle', icon: Circle, label: 'Circle' },
    { id: 'eraser', icon: Eraser, label: 'Eraser' },
  ];

  const colorPalette = [
    '#000000', '#ffffff', '#ff0000', '#00ff00', '#0000ff', '#ffff00', 
    '#ff00ff', '#00ffff', '#ffa500', '#800080', '#ffc0cb', '#a52a2a'
  ];

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-white/95 backdrop-blur-sm rounded-full shadow-xl border border-gray-200 px-4 py-2">
        <div className="flex items-center gap-1">
          {/* Recording Controls */}
          <div className="flex items-center gap-1 pr-2">
            <Button
              variant={micEnabled ? "default" : "outline"}
              size="sm"
              className="h-8 w-8 rounded-full p-0"
              onClick={() => setMicEnabled(!micEnabled)}
            >
              {micEnabled ? <Mic className="w-4 h-4" /> : <MicOff className="w-4 h-4" />}
            </Button>
            <Button
              variant={videoEnabled ? "default" : "outline"}
              size="sm"
              className="h-8 w-8 rounded-full p-0"
              onClick={() => setVideoEnabled(!videoEnabled)}
            >
              {videoEnabled ? <Video className="w-4 h-4" /> : <VideoOff className="w-4 h-4" />}
            </Button>
          </div>

          <Separator orientation="vertical" className="h-6" />

          {/* Annotation Tools */}
          <div className="flex items-center gap-1 px-2">
            {tools.map((tool) => (
              <Button
                key={tool.id}
                variant={selectedTool === tool.id ? "default" : "ghost"}
                size="sm"
                className="h-8 w-8 rounded-full p-0"
                onClick={() => handleToolSelect(tool.id)}
                title={tool.label}
              >
                <tool.icon className="w-4 h-4" />
              </Button>
            ))}
          </div>

          <Separator orientation="vertical" className="h-6" />

          {/* Colors */}
          <div className="flex items-center gap-1 px-2">
            <Popover>
              <PopoverTrigger asChild>
                <button
                  className="w-6 h-6 rounded-full border-2 border-gray-300 hover:border-gray-400 transition-colors"
                  style={{ backgroundColor: selectedColor }}
                  title="Select Color"
                />
              </PopoverTrigger>
              <PopoverContent className="w-48 p-3">
                <div className="grid grid-cols-6 gap-2">
                  {colorPalette.map((color) => (
                    <button
                      key={color}
                      className="w-6 h-6 rounded-full border-2 border-gray-300 hover:border-gray-400 transition-colors"
                      style={{ backgroundColor: color }}
                      onClick={() => handleColorSelect(color)}
                    />
                  ))}
                </div>
              </PopoverContent>
            </Popover>
          </div>

          <Separator orientation="vertical" className="h-6" />

          {/* Actions */}
          <div className="flex items-center gap-1 pl-2">
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 rounded-full p-0"
              title="Pause"
            >
              <Pause className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 rounded-full p-0"
              title="Cancel"
            >
              <X className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 rounded-full p-0"
              title="Stop"
            >
              <Stop className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
