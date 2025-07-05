
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Monitor, 
  Camera, 
  Globe, 
  Square, 
  Play, 
  Square as StopIcon,
  VideoIcon
} from 'lucide-react';

interface RecordModuleProps {
  onRecordingChange: (recording: boolean) => void;
  onStatusChange: (status: string) => void;
}

const RecordModule: React.FC<RecordModuleProps> = ({ onRecordingChange, onStatusChange }) => {
  const [selectedSource, setSelectedSource] = useState('screen');
  const [isRecording, setIsRecording] = useState(false);

  const recordingSources = [
    { id: 'screen', label: 'Full Screen', icon: Monitor, color: 'bg-blue-500' },
    { id: 'camera', label: 'Webcam Only', icon: Camera, color: 'bg-green-500' },
    { id: 'tab', label: 'Browser Tab', icon: Globe, color: 'bg-purple-500' },
    { id: 'area', label: 'Custom Area', icon: Square, color: 'bg-orange-500' }
  ];

  const handleStartRecording = () => {
    setIsRecording(true);
    onRecordingChange(true);
    onStatusChange('Recording...');
  };

  const handleStopRecording = () => {
    setIsRecording(false);
    onRecordingChange(false);
    onStatusChange('Processing...');
    
    // Simulate processing
    setTimeout(() => {
      onStatusChange('');
    }, 2000);
  };

  return (
    <div className="space-y-4">
      <div>
        <h3 className="font-medium mb-3 text-sm">Select Recording Source</h3>
        <div className="grid grid-cols-2 gap-2">
          {recordingSources.map((source) => (
            <Card 
              key={source.id}
              className={`cursor-pointer transition-all hover:shadow-md ${
                selectedSource === source.id ? 'ring-2 ring-indigo-500' : ''
              }`}
              onClick={() => setSelectedSource(source.id)}
            >
              <CardContent className="p-3 text-center">
                <div className={`w-8 h-8 ${source.color} rounded-lg flex items-center justify-center mx-auto mb-2`}>
                  <source.icon className="w-4 h-4 text-white" />
                </div>
                <p className="text-xs font-medium">{source.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-600">Quality</span>
          <Badge variant="outline" className="text-xs">1080p HD</Badge>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-600">Format</span>
          <Badge variant="outline" className="text-xs">MP4</Badge>
        </div>
      </div>

      <Button 
        className={`w-full ${isRecording ? 'bg-red-500 hover:bg-red-600' : 'bg-indigo-600 hover:bg-indigo-700'}`}
        onClick={isRecording ? handleStopRecording : handleStartRecording}
      >
        {isRecording ? (
          <>
            <StopIcon className="w-4 h-4 mr-2" />
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
  );
};

export default RecordModule;
