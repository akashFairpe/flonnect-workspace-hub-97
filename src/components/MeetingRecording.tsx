
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Video, VideoOff, Square, Play, Pause } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface MeetingRecordingProps {
  meetingId: string;
  meetingTitle: string;
  isRecording: boolean;
}

const MeetingRecording = ({ meetingId, meetingTitle, isRecording: initialRecording }: MeetingRecordingProps) => {
  const [isRecording, setIsRecording] = useState(initialRecording);
  const [isPaused, setIsPaused] = useState(false);
  const [recordingDuration, setRecordingDuration] = useState(0);
  const { toast } = useToast();

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isRecording && !isPaused) {
      interval = setInterval(() => {
        setRecordingDuration(prev => prev + 1);
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRecording, isPaused]);

  const startRecording = () => {
    setIsRecording(true);
    setIsPaused(false);
    toast({
      title: "Recording Started",
      description: `Recording started for "${meetingTitle}"`,
    });
  };

  const stopRecording = () => {
    setIsRecording(false);
    setIsPaused(false);
    toast({
      title: "Recording Stopped",
      description: `Recording saved for "${meetingTitle}"`,
    });
  };

  const pauseRecording = () => {
    setIsPaused(!isPaused);
    toast({
      title: isPaused ? "Recording Resumed" : "Recording Paused",
      description: `Recording ${isPaused ? 'resumed' : 'paused'} for "${meetingTitle}"`,
    });
  };

  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  if (!isRecording) {
    return (
      <Button onClick={startRecording} size="sm" variant="outline">
        <Video className="w-4 h-4 mr-1" />
        Record
      </Button>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <Badge className={`${isPaused ? 'bg-yellow-500' : 'bg-red-500'} text-white`}>
        {!isPaused && <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse" />}
        {isPaused ? 'Paused' : 'Recording'} {formatDuration(recordingDuration)}
      </Badge>
      
      <div className="flex gap-1">
        <Button onClick={pauseRecording} size="sm" variant="ghost">
          {isPaused ? <Play className="w-3 h-3" /> : <Pause className="w-3 h-3" />}
        </Button>
        <Button onClick={stopRecording} size="sm" variant="ghost">
          <Square className="w-3 h-3" />
        </Button>
      </div>
    </div>
  );
};

export default MeetingRecording;
