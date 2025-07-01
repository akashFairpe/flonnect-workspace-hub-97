
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { EyeOff, Move } from 'lucide-react';

export function CameraControls() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm flex items-center gap-2">
          <Move className="w-4 h-4" />
          Camera
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <Button variant="outline" size="sm" className="w-full justify-start">
          <EyeOff className="w-4 h-4 mr-2" />
          Hide Camera
        </Button>
        <div className="text-xs text-gray-500">
          Drag the camera overlay to reposition it on your slide
        </div>
      </CardContent>
    </Card>
  );
}
