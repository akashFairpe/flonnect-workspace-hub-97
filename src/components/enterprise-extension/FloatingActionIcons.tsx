import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Bug, 
  Video, 
  Camera, 
  Plus,
  CheckSquare,
  Target
} from 'lucide-react';

interface FloatingActionIconsProps {
  isRecording: boolean;
  activeModule: string;
  onCreateSubTask: () => void;
}

const FloatingActionIcons: React.FC<FloatingActionIconsProps> = ({
  isRecording,
  activeModule,
  onCreateSubTask
}) => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Bug Counter */}
      <div className="relative">
        <Button
          size="lg"
          className="h-14 w-14 rounded-full bg-white hover:bg-gray-50 text-gray-600 shadow-lg border"
        >
          <Bug className="h-6 w-6" />
        </Button>
        <Badge className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0 flex items-center justify-center bg-purple-600 hover:bg-purple-600 text-white text-xs">
          0
        </Badge>
      </div>

      {/* Video Recording Icon */}
      <Button
        size="lg"
        className="h-14 w-14 rounded-full bg-white hover:bg-gray-50 text-gray-600 shadow-lg border"
      >
        <Video className="h-6 w-6" />
      </Button>

      {/* Screenshot Icon */}
      <Button
        size="lg"
        className="h-14 w-14 rounded-full bg-white hover:bg-gray-50 text-gray-600 shadow-lg border"
      >
        <Camera className="h-6 w-6" />
      </Button>

      {/* Dynamic Main Action Button */}
      {isRecording && activeModule === 'record' ? (
        // Create Sub Task when recording
        <Button
          size="lg"
          onClick={onCreateSubTask}
          className="h-16 w-16 rounded-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white shadow-xl transform hover:scale-105 transition-all duration-200"
        >
          <CheckSquare className="h-7 w-7" />
        </Button>
      ) : (
        // Default Action Button
        <Button
          size="lg"
          className="h-16 w-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-xl transform hover:scale-105 transition-all duration-200"
        >
          <Target className="h-7 w-7" />
        </Button>
      )}

      {/* Pulse animation for recording state */}
      {isRecording && (
        <div className="absolute bottom-0 right-0 h-16 w-16 rounded-full bg-red-400 opacity-75 animate-ping"></div>
      )}
    </div>
  );
};

export default FloatingActionIcons;