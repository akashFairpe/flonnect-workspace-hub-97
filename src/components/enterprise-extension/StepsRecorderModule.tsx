
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  Presentation, 
  MousePointer, 
  Camera,
  Play,
  Square
} from 'lucide-react';

interface StepsRecorderModuleProps {
  onRecordingChange: (recording: boolean) => void;
  onStatusChange: (status: string) => void;
}

const StepsRecorderModule: React.FC<StepsRecorderModuleProps> = ({ onRecordingChange, onStatusChange }) => {
  const [selectedMode, setSelectedMode] = useState('guide');
  const [isRecording, setIsRecording] = useState(false);

  const recordingModes = [
    { 
      id: 'guide', 
      label: 'New Guide', 
      icon: BookOpen, 
      color: 'bg-emerald-500',
      description: 'Step-by-step tutorial'
    },
    { 
      id: 'demo', 
      label: 'New Demo', 
      icon: Presentation, 
      color: 'bg-purple-500',
      description: 'Interactive demo'
    }
  ];

  const handleStartRecording = () => {
    setIsRecording(true);
    onRecordingChange(true);
    onStatusChange('Recording steps...');
  };

  const handleStopRecording = () => {
    setIsRecording(false);
    onRecordingChange(false);
    onStatusChange('Generating guide...');
    
    // Simulate processing
    setTimeout(() => {
      onStatusChange('');
    }, 3000);
  };

  return (
    <div className="space-y-4">
      <div>
        <h3 className="font-medium mb-3 text-sm">Select Recording Mode</h3>
        <div className="space-y-2">
          {recordingModes.map((mode) => (
            <Card 
              key={mode.id}
              className={`cursor-pointer transition-all hover:shadow-md ${
                selectedMode === mode.id ? 'ring-2 ring-indigo-500' : ''
              }`}
              onClick={() => setSelectedMode(mode.id)}
            >
              <CardContent className="p-3 flex items-center space-x-3">
                <div className={`w-8 h-8 ${mode.color} rounded-lg flex items-center justify-center`}>
                  <mode.icon className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">{mode.label}</p>
                  <p className="text-xs text-gray-500">{mode.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-600">Auto Screenshots</span>
          <Badge variant="outline" className="text-xs">Enabled</Badge>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-600">Mouse Tracking</span>
          <Badge variant="outline" className="text-xs">On</Badge>
        </div>
      </div>

      <div className="bg-blue-50 p-3 rounded-lg">
        <div className="flex items-center space-x-2 mb-1">
          <MousePointer className="w-4 h-4 text-blue-600" />
          <span className="text-xs font-medium text-blue-800">Ready to Capture</span>
        </div>
        <p className="text-xs text-blue-600">
          Every click and action will be automatically documented
        </p>
      </div>

      <Button 
        className={`w-full ${isRecording ? 'bg-red-500 hover:bg-red-600' : 'bg-indigo-600 hover:bg-indigo-700'}`}
        onClick={isRecording ? handleStopRecording : handleStartRecording}
      >
        {isRecording ? (
          <>
            <Square className="w-4 h-4 mr-2" />
            Stop & Generate Guide
          </>
        ) : (
          <>
            <Play className="w-4 h-4 mr-2" />
            Start Steps Recording
          </>
        )}
      </Button>
    </div>
  );
};

export default StepsRecorderModule;
