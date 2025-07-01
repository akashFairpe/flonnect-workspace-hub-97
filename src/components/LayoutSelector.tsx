
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Layout } from 'lucide-react';

interface LayoutSelectorProps {
  selectedLayout: string;
  onLayoutChange: (layout: string) => void;
}

export function LayoutSelector({ selectedLayout, onLayoutChange }: LayoutSelectorProps) {
  const layouts = [
    { id: 'picture-in-picture', name: 'Picture in Picture' },
    { id: 'side-by-side', name: 'Side by Side' },
    { id: 'full-screen', name: 'Full Screen' },
    { id: 'presenter-focus', name: 'Presenter Focus' }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm flex items-center gap-2">
          <Layout className="w-4 h-4" />
          Layout
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {layouts.map((layout) => (
          <Button
            key={layout.id}
            variant={selectedLayout === layout.id ? "default" : "outline"}
            size="sm"
            className="w-full justify-start"
            onClick={() => onLayoutChange(layout.id)}
          >
            {layout.name}
          </Button>
        ))}
      </CardContent>
    </Card>
  );
}
