
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Circle,
  Upload,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

interface StatusNotificationsProps {
  isRecording: boolean;
  status: string;
}

const StatusNotifications: React.FC<StatusNotificationsProps> = ({ isRecording, status }) => {
  if (!status && !isRecording) return null;

  const getStatusConfig = () => {
    if (status.includes('Recording') || status.includes('Capturing')) {
      return {
        color: 'bg-red-500',
        icon: Circle,
        text: status,
        progress: null
      };
    }
    
    if (status.includes('Processing') || status.includes('Generating') || status.includes('Creating')) {
      return {
        color: 'bg-blue-500',
        icon: Upload,
        text: status,
        progress: 65
      };
    }
    
    if (status.includes('Complete') || status.includes('Ready')) {
      return {
        color: 'bg-green-500',
        icon: CheckCircle,
        text: status,
        progress: 100
      };
    }
    
    return {
      color: 'bg-orange-500',
      icon: AlertCircle,
      text: status,
      progress: null
    };
  };

  const config = getStatusConfig();
  const Icon = config.icon;

  return (
    <div className="bg-gray-50 border-b p-3">
      <div className="flex items-center space-x-2">
        <div className={`w-2 h-2 ${config.color} rounded-full ${isRecording ? 'animate-pulse' : ''}`} />
        <Icon className="w-3 h-3 text-gray-600" />
        <span className="text-xs font-medium text-gray-700 flex-1">{config.text}</span>
        {isRecording && (
          <Badge variant="outline" className="text-xs h-4 px-1">
            <Circle className="w-2 h-2 mr-1 text-red-500 animate-pulse" />
            LIVE
          </Badge>
        )}
      </div>
      
      {config.progress !== null && (
        <div className="mt-2">
          <Progress value={config.progress} className="h-1" />
        </div>
      )}
    </div>
  );
};

export default StatusNotifications;
