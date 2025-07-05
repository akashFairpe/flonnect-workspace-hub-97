
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Camera, 
  Video, 
  Bug,
  Zap,
  FileText
} from 'lucide-react';

interface BugReporterModuleProps {
  onRecordingChange: (recording: boolean) => void;
  onStatusChange: (status: string) => void;
}

const BugReporterModule: React.FC<BugReporterModuleProps> = ({ onRecordingChange, onStatusChange }) => {
  const [selectedType, setSelectedType] = useState('image');
  const [isCapturing, setIsCapturing] = useState(false);

  const bugTypes = [
    { 
      id: 'image', 
      label: 'Screenshot Bug', 
      icon: Camera, 
      color: 'bg-red-500',
      description: 'Quick screenshot with annotations'
    },
    { 
      id: 'video', 
      label: 'Video Bug', 
      icon: Video, 
      color: 'bg-orange-500',
      description: 'Record bug in action'
    }
  ];

  const handleStartCapture = () => {
    setIsCapturing(true);
    onRecordingChange(true);
    
    if (selectedType === 'image') {
      onStatusChange('Taking screenshot...');
      // Simulate screenshot
      setTimeout(() => {
        setIsCapturing(false);
        onRecordingChange(false);
        onStatusChange('');
      }, 1500);
    } else {
      onStatusChange('Recording bug...');
    }
  };

  const handleStopCapture = () => {
    setIsCapturing(false);
    onRecordingChange(false);
    onStatusChange('Creating bug report...');
    
    setTimeout(() => {
      onStatusChange('');
    }, 2000);
  };

  return (
    <div className="space-y-4">
      <div>
        <h3 className="font-medium mb-3 text-sm">Select Bug Report Type</h3>
        <div className="space-y-2">
          {bugTypes.map((type) => (
            <Card 
              key={type.id}
              className={`cursor-pointer transition-all hover:shadow-md ${
                selectedType === type.id ? 'ring-2 ring-indigo-500' : ''
              }`}
              onClick={() => setSelectedType(type.id)}
            >
              <CardContent className="p-3 flex items-center space-x-3">
                <div className={`w-8 h-8 ${type.color} rounded-lg flex items-center justify-center`}>
                  <type.icon className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">{type.label}</p>
                  <p className="text-xs text-gray-500">{type.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-600">Auto Context</span>
          <Badge variant="outline" className="text-xs">Browser Info</Badge>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-600">Console Logs</span>
          <Badge variant="outline" className="text-xs">Included</Badge>
        </div>
      </div>

      <div className="bg-red-50 p-3 rounded-lg">
        <div className="flex items-center space-x-2 mb-1">
          <Bug className="w-4 h-4 text-red-600" />
          <span className="text-xs font-medium text-red-800">Bug Report Ready</span>
        </div>
        <p className="text-xs text-red-600">
          Technical details will be automatically captured
        </p>
      </div>

      <Button 
        className={`w-full ${isCapturing ? 'bg-red-500 hover:bg-red-600' : 'bg-red-600 hover:bg-red-700'}`}
        onClick={isCapturing && selectedType === 'video' ? handleStopCapture : handleStartCapture}
        disabled={isCapturing && selectedType === 'image'}
      >
        {isCapturing ? (
          selectedType === 'image' ? (
            <>
              <Camera className="w-4 h-4 mr-2" />
              Capturing...
            </>
          ) : (
            <>
              <Zap className="w-4 h-4 mr-2" />
              Stop & Report Bug
            </>
          )
        ) : (
          <>
            <FileText className="w-4 h-4 mr-2" />
            Capture Bug Report
          </>
        )}
      </Button>
    </div>
  );
};

export default BugReporterModule;
