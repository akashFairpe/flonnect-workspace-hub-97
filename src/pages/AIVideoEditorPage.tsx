
import React, { useState, useRef } from 'react';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Loader2, Upload, Video, Scissors, Download, RotateCcw, Play } from 'lucide-react';
import { toast } from 'sonner';

export default function AIVideoEditorPage() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [editPrompt, setEditPrompt] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editedVideo, setEditedVideo] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [videoInfo, setVideoInfo] = useState<{duration: string, size: string} | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleVideoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.type.startsWith('video/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setSelectedVideo(e.target?.result as string);
          setEditedVideo(null);
          setVideoInfo({
            duration: '0:30',
            size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`
          });
          toast.success('Video uploaded successfully!');
        };
        reader.readAsDataURL(file);
      } else {
        toast.error('Please upload a valid video file');
      }
    }
  };

  const handleEditVideo = async () => {
    if (!selectedVideo || !editPrompt.trim()) {
      toast.error('Please upload a video and enter edit instructions');
      return;
    }

    setIsEditing(true);
    setProgress(0);
    
    try {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 90) {
            clearInterval(interval);
            return 90;
          }
          return prev + 8;
        });
      }, 500);

      await new Promise(resolve => setTimeout(resolve, 6000));
      
      // Simulate edited video (in real implementation, this would be the AI-edited result)
      setEditedVideo('https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4');
      setProgress(100);
      toast.success('Video edited successfully!');
    } catch (error) {
      toast.error('Failed to edit video. Please try again.');
    } finally {
      setIsEditing(false);
      setTimeout(() => setProgress(0), 1000);
    }
  };

  const resetEditor = () => {
    setSelectedVideo(null);
    setEditedVideo(null);
    setEditPrompt('');
    setProgress(0);
    setVideoInfo(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
              <Video className="w-8 h-8 sm:w-12 sm:h-12 text-white" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            AI Video <span className="text-purple-600">Editor</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Edit your videos with AI assistance. Upload, describe your editing needs, and let AI handle the rest.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Upload & Controls Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="w-6 h-6" />
                  Upload & Edit Controls
                </CardTitle>
                <CardDescription>
                  Upload your video and describe the edits you want to make
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Video Upload */}
                <div className="space-y-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Upload Video
                  </label>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="video/*"
                    onChange={handleVideoUpload}
                    className="hidden"
                  />
                  <Button 
                    onClick={() => fileInputRef.current?.click()}
                    variant="outline"
                    className="w-full h-32 border-dashed border-2 hover:border-purple-500"
                    disabled={isEditing}
                  >
                    <div className="text-center">
                      <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                      <span className="text-sm text-gray-600">
                        Click to upload video
                      </span>
                    </div>
                  </Button>
                  
                  {selectedVideo && videoInfo && (
                    <div className="space-y-3">
                      <div className="aspect-video rounded-lg overflow-hidden border bg-black">
                        <video 
                          src={selectedVideo} 
                          controls 
                          className="w-full h-full"
                        />
                      </div>
                      <div className="flex gap-2">
                        <Badge variant="secondary">Duration: {videoInfo.duration}</Badge>
                        <Badge variant="secondary">Size: {videoInfo.size}</Badge>
                      </div>
                    </div>
                  )}
                </div>

                {/* Edit Prompt */}
                <div className="space-y-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Edit Instructions
                  </label>
                  <Textarea
                    placeholder="Describe what you want to edit... (e.g., 'Trim to first 30 seconds', 'Add background music', 'Remove pauses and filler words', 'Apply color correction')"
                    value={editPrompt}
                    onChange={(e) => setEditPrompt(e.target.value)}
                    className="min-h-[120px] resize-none"
                    disabled={isEditing}
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <Button 
                    onClick={handleEditVideo}
                    disabled={isEditing || !selectedVideo || !editPrompt.trim()}
                    className="flex-1 bg-purple-600 hover:bg-purple-700"
                  >
                    {isEditing ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Editing...
                      </>
                    ) : (
                      <>
                        <Scissors className="w-4 h-4 mr-2" />
                        Edit Video
                      </>
                    )}
                  </Button>
                  
                  <Button 
                    onClick={resetEditor}
                    variant="outline"
                    disabled={isEditing}
                  >
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Reset
                  </Button>
                </div>

                {/* Progress */}
                {(isEditing || progress > 0) && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Processing video...</span>
                      <span>{progress}%</span>
                    </div>
                    <Progress value={progress} className="w-full" />
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Preview Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Play className="w-6 h-6" />
                  Preview
                </CardTitle>
                <CardDescription>
                  {editedVideo ? 'Your edited video is ready!' : 'Edited video will appear here'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {editedVideo ? (
                  <div className="space-y-4">
                    <div className="aspect-video rounded-lg overflow-hidden border bg-black">
                      <video 
                        src={editedVideo} 
                        controls 
                        className="w-full h-full"
                      />
                    </div>
                    
                    <div className="flex gap-4">
                      <Button className="flex-1 bg-green-600 hover:bg-green-700">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                      <Button variant="outline" className="flex-1">
                        Share
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="aspect-video rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <Video className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                      <p className="text-lg font-medium">No edited video yet</p>
                      <p className="text-sm">Upload a video and add edit instructions to get started</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
