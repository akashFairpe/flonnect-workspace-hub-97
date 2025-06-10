
import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Video, VideoOff, Share } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const VideoWorkspace = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  const [steps, setSteps] = useState<string[]>([]);
  const [currentStep, setCurrentStep] = useState('');
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const { toast } = useToast();

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
        audio: true
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        streamRef.current = stream;
        setIsRecording(true);
        
        toast({
          title: "Recording Started",
          description: "Screen recording is now active",
        });
      }
    } catch (error) {
      toast({
        title: "Recording Failed",
        description: "Could not start screen recording",
        variant: "destructive",
      });
    }
  };

  const stopRecording = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
      setIsRecording(false);
      
      toast({
        title: "Recording Stopped",
        description: "Screen recording has ended",
      });
    }
  };

  const shareVideo = () => {
    if (videoUrl) {
      navigator.clipboard.writeText(videoUrl);
      toast({
        title: "Video Link Copied",
        description: "Video URL has been copied to clipboard",
      });
    }
  };

  const addStep = () => {
    if (currentStep.trim()) {
      setSteps([...steps, currentStep.trim()]);
      setCurrentStep('');
    }
  };

  const removeStep = (index: number) => {
    setSteps(steps.filter((_, i) => i !== index));
  };

  return (
    <div className="flex-1 p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Video Workspace</h1>
        <div className="flex gap-2">
          <Button
            onClick={isRecording ? stopRecording : startRecording}
            variant={isRecording ? "destructive" : "default"}
          >
            {isRecording ? <VideoOff className="w-4 h-4 mr-2" /> : <Video className="w-4 h-4 mr-2" />}
            {isRecording ? 'Stop Recording' : 'Start Recording'}
          </Button>
          <Button onClick={shareVideo} variant="outline" disabled={!videoUrl}>
            <Share className="w-4 h-4 mr-2" />
            Share Video
          </Button>
        </div>
      </div>

      <Tabs defaultValue="video" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="video">Video Sharing</TabsTrigger>
          <TabsTrigger value="steps">Steps Capture</TabsTrigger>
        </TabsList>

        <TabsContent value="video" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Video Recording & Sharing</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center">
                <video
                  ref={videoRef}
                  autoPlay
                  muted
                  className="w-full h-full object-cover rounded-lg"
                  style={{ display: isRecording ? 'block' : 'none' }}
                />
                {!isRecording && (
                  <p className="text-muted-foreground">No active recording</p>
                )}
              </div>
              
              <div className="flex gap-2">
                <Input
                  placeholder="Enter video URL to share"
                  value={videoUrl}
                  onChange={(e) => setVideoUrl(e.target.value)}
                />
                <Button onClick={shareVideo} disabled={!videoUrl}>
                  Share
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="steps" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Steps Capture</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Add a new step..."
                  value={currentStep}
                  onChange={(e) => setCurrentStep(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && addStep()}
                />
                <Button onClick={addStep}>Add Step</Button>
              </div>
              
              <div className="space-y-2">
                {steps.map((step, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <span className="flex items-center gap-2">
                      <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm">
                        {index + 1}
                      </span>
                      {step}
                    </span>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => removeStep(index)}
                    >
                      Remove
                    </Button>
                  </div>
                ))}
                {steps.length === 0 && (
                  <p className="text-muted-foreground text-center py-8">
                    No steps captured yet. Add your first step above.
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default VideoWorkspace;
