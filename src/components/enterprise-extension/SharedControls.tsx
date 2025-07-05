
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Mic, 
  MicOff, 
  Camera, 
  CameraOff, 
  Settings, 
  Cloud,
  CloudOff
} from 'lucide-react';

interface SharedControlsProps {
  activeModule: string;
}

const SharedControls: React.FC<SharedControlsProps> = ({ activeModule }) => {
  const [micEnabled, setMicEnabled] = useState(true);
  const [cameraEnabled, setCameraEnabled] = useState(false);
  const [cloudEnabled, setCloudEnabled] = useState(true);

  return (
    <div className="border-t bg-gray-50 p-3 space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-gray-700">Controls</span>
        <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
          <Settings className="w-3 h-3" />
        </Button>
      </div>
      
      <div className="flex items-center justify-between space-x-2">
        <div className="flex space-x-1">
          <Button
            variant="ghost"
            size="sm"
            className={`h-8 w-8 p-0 ${micEnabled ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}
            onClick={() => setMicEnabled(!micEnabled)}
          >
            {micEnabled ? <Mic className="w-3 h-3" /> : <MicOff className="w-3 h-3" />}
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            className={`h-8 w-8 p-0 ${cameraEnabled ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-400'}`}
            onClick={() => setCameraEnabled(!cameraEnabled)}
            disabled={activeModule === 'bug'}
          >
            {cameraEnabled ? <Camera className="w-3 h-3" /> : <CameraOff className="w-3 h-3" />}
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            className={`h-8 w-8 p-0 ${cloudEnabled ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-100 text-gray-400'}`}
            onClick={() => setCloudEnabled(!cloudEnabled)}
          >
            {cloudEnabled ? <Cloud className="w-3 h-3" /> : <CloudOff className="w-3 h-3" />}
          </Button>
        </div>
        
        <div className="flex space-x-1">
          <Badge variant="outline" className="text-xs">
            1080p
          </Badge>
          <Badge variant="outline" className="text-xs">
            60fps
          </Badge>
        </div>
      </div>
      
      <div className="text-xs text-gray-500 text-center">
        {micEnabled && '🎤 '}
        {cameraEnabled && '📹 '}
        {cloudEnabled && '☁️ '}
        Ready • Auto-save enabled
      </div>
    </div>
  );
};

export default SharedControls;
