import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Video, VideoOff, Share, Play, Trash2, Plus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import VideoPlayer from './VideoPlayer';

interface VideoItem {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
  duration: string;
  createdAt: string;
}

const VideoWorkspace = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  const [steps, setSteps] = useState<string[]>([]);
  const [currentStep, setCurrentStep] = useState('');
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const { toast } = useToast();

  // Sample video library data - this would come from your actual library
  const [videoLibrary] = useState<VideoItem[]>([
    {
      id: '1',
      title: 'Product Demo Tutorial',
      url: 'https://example.com/video1',
      thumbnail: '/placeholder.svg',
      duration: '5:32',
      createdAt: '2024-01-15'
    },
    {
      id: '2',
      title: 'User Onboarding Flow',
      url: 'https://example.com/video2',
      thumbnail: '/placeholder.svg',
      duration: '3:45',
      createdAt: '2024-01-14'
    },
    {
      id: '3',
      title: 'Feature Walkthrough',
      url: 'https://example.com/video3',
      thumbnail: '/placeholder.svg',
      duration: '7:20',
      createdAt: '2024-01-13'
    },
    {
      id: '4',
      title: 'Bug Report Steps',
      url: 'https://example.com/video4',
      thumbnail: '/placeholder.svg',
      duration: '2:15',
      createdAt: '2024-01-12'
    },
    {
      id: '5',
      title: 'Team Meeting Recording',
      url: 'https://example.com/video5',
      thumbnail: '/placeholder.svg',
      duration: '45:30',
      createdAt: '2024-01-11'
    }
  ]);

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
    const urlToShare = selectedVideo?.url || videoUrl;
    if (urlToShare) {
      navigator.clipboard.writeText(urlToShare);
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

  const selectVideo = (video: VideoItem) => {
    setSelectedVideo(video);
    setVideoUrl(video.url);
  };

  const removeFromLibrary = (videoId: string) => {
    toast({
      title: "Video Removed",
      description: "Video has been removed from your library",
    });
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
          <Button onClick={shareVideo} variant="outline" disabled={!videoUrl && !selectedVideo}>
            <Share className="w-4 h-4 mr-2" />
            Share Video
          </Button>
        </div>
      </div>

      <Tabs defaultValue="library" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="library">Video Library</TabsTrigger>
          <TabsTrigger value="record">Record New</TabsTrigger>
          <TabsTrigger value="steps">Steps Capture</TabsTrigger>
        </TabsList>

        <TabsContent value="library" className="space-y-4">
          {/* Video Player Section */}
          {selectedVideo && (
            <VideoPlayer
              videoUrl={selectedVideo.url}
              title={selectedVideo.title}
              onError={() => {
                toast({
                  title: "Video Error",
                  description: "Could not load the selected video",
                  variant: "destructive",
                });
              }}
            />
          )}

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Video Library
                <span className="text-sm font-normal text-muted-foreground">
                  {videoLibrary.length} videos
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {videoLibrary.map((video) => (
                  <Card 
                    key={video.id} 
                    className={`cursor-pointer transition-all hover:shadow-md ${
                      selectedVideo?.id === video.id ? 'ring-2 ring-primary' : ''
                    }`}
                    onClick={() => selectVideo(video)}
                  >
                    <CardContent className="p-4">
                      <div className="relative mb-3">
                        <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                          <Play className="w-8 h-8 text-muted-foreground" />
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                          {video.duration}
                        </div>
                      </div>
                      <h3 className="font-medium text-sm mb-2 line-clamp-2">{video.title}</h3>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{video.createdAt}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            removeFromLibrary(video.id);
                          }}
                          className="h-6 w-6 p-0 text-muted-foreground hover:text-destructive"
                        >
                          <Trash2 className="w-3 h-3" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                
                <Card className="cursor-pointer border-dashed border-2 hover:border-primary transition-colors">
                  <CardContent className="p-4 flex flex-col items-center justify-center h-full min-h-[200px]">
                    <Plus className="w-8 h-8 text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground text-center">
                      Add new video from library
                    </p>
                  </CardContent>
                </Card>
              </div>

              {selectedVideo && (
                <div className="mt-6 p-4 bg-muted rounded-lg">
                  <h3 className="font-medium mb-2">Selected Video: {selectedVideo.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Duration: {selectedVideo.duration} • Created: {selectedVideo.createdAt}
                  </p>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" onClick={shareVideo}>
                      <Share className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="record" className="space-y-4">
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
