
import React, { useState, useRef } from 'react';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Loader2, Upload, Video, Play, Download, Check, RotateCcw } from 'lucide-react';
import { toast } from 'sonner';

const placeholderVideos = [
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'
];

export default function AIVideoEditorPage() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [editPrompt, setEditPrompt] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editedVideos, setEditedVideos] = useState<string[]>([]);
  const [selectedEditedVideo, setSelectedEditedVideo] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [videoInfo, setVideoInfo] = useState<{duration: string, size: string} | null>(null);
  const [showPromptChange, setShowPromptChange] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleVideoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.type.startsWith('video/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setSelectedVideo(e.target?.result as string);
          setEditedVideos([]);
          setSelectedEditedVideo(null);
          setVideoInfo({
            duration: '0:30',
            size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`
          });
          setShowPromptChange(false);
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
    setShowPromptChange(false);
    
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
      
      // Simulate edited videos (in real implementation, this would be the AI-edited results)
      const shuffled = [...placeholderVideos].sort(() => 0.5 - Math.random());
      const selectedVideos = shuffled.slice(0, 4);
      setEditedVideos(selectedVideos);
      setProgress(100);
      setShowPromptChange(true);
      toast.success('Videos edited successfully!');
    } catch (error) {
      toast.error('Failed to edit video. Please try again.');
    } finally {
      setIsEditing(false);
      setTimeout(() => setProgress(0), 1000);
    }
  };

  const handleVideoSelect = (videoUrl: string) => {
    setSelectedEditedVideo(videoUrl);
    toast.success('Video selected!');
  };

  const handlePromptChange = () => {
    setEditedVideos([]);
    setSelectedEditedVideo(null);
    setShowPromptChange(false);
  };

  const resetEditor = () => {
    setSelectedVideo(null);
    setEditedVideos([]);
    setSelectedEditedVideo(null);
    setEditPrompt('');
    setProgress(0);
    setVideoInfo(null);
    setShowPromptChange(false);
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

        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Video className="w-6 h-6" />
                AI Video Editor
              </CardTitle>
              <CardDescription>
                Upload your video and describe the edits you want to make
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Video Upload Section */}
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
                    <div className="aspect-video rounded-lg overflow-hidden border bg-black max-w-md mx-auto">
                      <video 
                        src={selectedVideo} 
                        controls 
                        className="w-full h-full"
                      />
                    </div>
                    <div className="flex justify-center gap-2">
                      <Badge variant="secondary">Duration: {videoInfo.duration}</Badge>
                      <Badge variant="secondary">Size: {videoInfo.size}</Badge>
                    </div>
                  </div>
                )}
              </div>

              {/* Edit Prompt */}
              <div className="space-y-4">
                <label htmlFor="prompt" className="block text-sm font-medium text-gray-700">
                  Enter your edit instructions
                </label>
                <Textarea
                  id="prompt"
                  placeholder="Describe what you want to edit... (e.g., 'Trim to first 30 seconds', 'Add background music', 'Remove pauses and filler words', 'Apply color correction')"
                  value={editPrompt}
                  onChange={(e) => setEditPrompt(e.target.value)}
                  className="min-h-[100px] resize-none"
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
                      <Video className="w-4 h-4 mr-2" />
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

              {/* Show prompt change option after generation */}
              {showPromptChange && editedVideos.length > 0 && (
                <div className="flex justify-center">
                  <Button variant="outline" onClick={handlePromptChange}>
                    Change Prompt
                  </Button>
                </div>
              )}

              {/* Generated Videos */}
              {editedVideos.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Edited Results:</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {editedVideos.map((videoUrl, index) => (
                      <div key={index} className="relative group">
                        <div className={`aspect-video rounded-lg overflow-hidden border bg-black cursor-pointer transition-all ${
                          selectedEditedVideo === videoUrl 
                            ? 'ring-4 ring-purple-500 scale-105' 
                            : 'hover:scale-105'
                        }`}
                        onClick={() => handleVideoSelect(videoUrl)}>
                          <video 
                            src={videoUrl}
                            className="w-full h-full object-cover"
                            muted
                            loop
                            onMouseEnter={(e) => e.currentTarget.play()}
                            onMouseLeave={(e) => e.currentTarget.pause()}
                          />
                        </div>
                        {selectedEditedVideo === videoUrl && (
                          <div className="absolute top-2 right-2 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                            <Check className="w-4 h-4 text-white" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Selected Video Download */}
              {selectedEditedVideo && (
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-green-600">Video Ready for Download!</h4>
                  <div className="flex justify-center">
                    <Button className="bg-green-600 hover:bg-green-700">
                      <Download className="w-4 h-4 mr-2" />
                      Download Video
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
