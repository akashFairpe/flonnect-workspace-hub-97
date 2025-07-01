
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Palette } from 'lucide-react';

interface BackgroundSelectorProps {
  selectedBackground: string;
  onBackgroundChange: (background: string) => void;
}

export function BackgroundSelector({ selectedBackground, onBackgroundChange }: BackgroundSelectorProps) {
  const backgrounds = [
    { id: 'none', name: 'None', color: 'transparent' },
    { id: 'blur', name: 'Blur', color: 'rgba(255,255,255,0.1)' },
    { id: 'green', name: 'Green', color: '#10b981' },
    { id: 'blue', name: 'Blue', color: '#3b82f6' },
    { id: 'gradient', name: 'Gradient', color: 'linear-gradient(45deg, #8b5cf6, #ec4899)' }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm flex items-center gap-2">
          <Palette className="w-4 h-4" />
          Background
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {backgrounds.map((bg) => (
          <Button
            key={bg.id}
            variant={selectedBackground === bg.id ? "default" : "outline"}
            size="sm"
            className="w-full justify-between"
            onClick={() => onBackgroundChange(bg.id)}
          >
            <span>{bg.name}</span>
            <div 
              className="w-4 h-4 rounded border"
              style={{ 
                background: bg.color === 'transparent' ? 'none' : bg.color,
                border: bg.color === 'transparent' ? '1px solid #ccc' : 'none'
              }}
            />
          </Button>
        ))}
      </CardContent>
    </Card>
  );
}
