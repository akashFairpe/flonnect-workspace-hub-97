
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Video, 
  VideoOff, 
  Mic, 
  MicOff, 
  Layout,
  Pen,
  FileText,
  Settings,
  Monitor,
  Users,
  User,
  PictureInPicture
} from 'lucide-react';

interface RecordingControlTabsProps {
  isMicOn: boolean;
  isCameraOn: boolean;
  selectedLayout: string;
  selectedBackground: string;
  onMicToggle: () => void;
  onCameraToggle: () => void;
  onLayoutChange: (layout: string) => void;
  onBackgroundChange: (background: string) => void;
}

export function RecordingControlTabs({
  isMicOn,
  isCameraOn,
  selectedLayout,
  selectedBackground,
  onMicToggle,
  onCameraToggle,
  onLayoutChange,
  onBackgroundChange
}: RecordingControlTabsProps) {
  const layouts = [
    { id: 'picture-in-picture', name: 'Picture in Picture', icon: PictureInPicture },
    { id: 'side-by-side', name: 'Side by Side', icon: Users },
    { id: 'presenter-focus', name: 'Presenter Focus', icon: User },
    { id: 'slide-only', name: 'Slide Only', icon: Monitor }
  ];

  const backgrounds = [
    { id: 'none', name: 'None', color: 'transparent' },
    { id: 'blur', name: 'Blur', color: 'rgba(255,255,255,0.1)' },
    { id: 'green', name: 'Green', color: '#10b981' },
    { id: 'blue', name: 'Blue', color: '#3b82f6' }
  ];

  return (
    <Card className="h-full">
      <CardContent className="p-4 h-full">
        <Tabs defaultValue="recording" className="h-full flex flex-col">
          <TabsList className="grid w-full grid-cols-4 mb-4">
            <TabsTrigger value="recording" className="text-xs">
              <Video className="w-4 h-4 mr-1" />
              Recording
            </TabsTrigger>
            <TabsTrigger value="tools" className="text-xs">
              <Pen className="w-4 h-4 mr-1" />
              Tools
            </TabsTrigger>
            <TabsTrigger value="notes" className="text-xs">
              <FileText className="w-4 h-4 mr-1" />
              Notes
            </TabsTrigger>
            <TabsTrigger value="settings" className="text-xs">
              <Settings className="w-4 h-4 mr-1" />
              Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="recording" className="flex-1 space-y-4">
            <div className="space-y-3">
              <h4 className="font-medium text-sm">Audio & Camera</h4>
              <div className="flex gap-2">
                <Button
                  variant={isMicOn ? "default" : "destructive"}
                  size="sm"
                  onClick={onMicToggle}
                  className="flex-1"
                >
                  {isMicOn ? <Mic className="w-4 h-4 mr-2" /> : <MicOff className="w-4 h-4 mr-2" />}
                  {isMicOn ? 'Mic On' : 'Mic Off'}
                </Button>
                <Button
                  variant={isCameraOn ? "default" : "destructive"}
                  size="sm"
                  onClick={onCameraToggle}
                  className="flex-1"
                >
                  {isCameraOn ? <Video className="w-4 h-4 mr-2" /> : <VideoOff className="w-4 h-4 mr-2" />}
                  {isCameraOn ? 'Camera On' : 'Camera Off'}
                </Button>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-medium text-sm">Layout</h4>
              <div className="grid grid-cols-2 gap-2">
                {layouts.map((layout) => (
                  <Button
                    key={layout.id}
                    variant={selectedLayout === layout.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => onLayoutChange(layout.id)}
                    className="flex flex-col gap-1 h-auto py-3"
                  >
                    <layout.icon className="w-4 h-4" />
                    <span className="text-xs">{layout.name}</span>
                  </Button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-medium text-sm">Background</h4>
              <div className="grid grid-cols-2 gap-2">
                {backgrounds.map((bg) => (
                  <Button
                    key={bg.id}
                    variant={selectedBackground === bg.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => onBackgroundChange(bg.id)}
                    className="justify-between"
                  >
                    <span className="text-xs">{bg.name}</span>
                    <div 
                      className="w-3 h-3 rounded border"
                      style={{ 
                        background: bg.color === 'transparent' ? 'none' : bg.color,
                        border: bg.color === 'transparent' ? '1px solid #ccc' : 'none'
                      }}
                    />
                  </Button>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="tools" className="flex-1 space-y-4">
            <div className="space-y-3">
              <h4 className="font-medium text-sm">Annotation Tools</h4>
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" size="sm">Draw</Button>
                <Button variant="outline" size="sm">Arrow</Button>
                <Button variant="outline" size="sm">Highlight</Button>
                <Button variant="outline" size="sm">Pointer</Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="notes" className="flex-1">
            <div className="text-sm text-gray-600">
              AI Speaker Notes will appear here when generated from the top panel.
            </div>
          </TabsContent>

          <TabsContent value="settings" className="flex-1 space-y-4">
            <div className="space-y-3">
              <h4 className="font-medium text-sm">Recording Quality</h4>
              <Button variant="outline" size="sm" className="w-full justify-start">
                1080p HD
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
