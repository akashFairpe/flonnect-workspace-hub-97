import React, { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Loader2, Sparkles, Image as ImageIcon, Video, Play, Download, Check, ArrowRight, Brain, Cpu, Zap } from 'lucide-react';
import { toast } from 'sonner';
import { useSearchParams } from 'react-router-dom';

const aiTools = [
  { id: 'ai-video-generator', name: 'AI Video Generator', description: 'Create videos from text prompts', category: 'Video', icon: Video },
  { id: 'ai-video-editor', name: 'AI Video Editor', description: 'Edit videos with AI assistance', category: 'Video', icon: Video },
  { id: 'ai-animated-video-maker', name: 'AI Animated Video Maker', description: 'Create animated videos', category: 'Video', icon: Video },
  { id: 'ai-text-to-video-generator', name: 'AI Text To Video Generator', description: 'Convert text to video', category: 'Video', icon: Video },
  { id: 'ai-avatar-video-creator', name: 'AI Avatar Video Creator', description: 'Create avatar-based videos', category: 'Video', icon: Video },
  { id: 'ai-face-swap-video-tool', name: 'AI Face Swap Video Tool', description: 'Swap faces in videos', category: 'Video', icon: Video },
  { id: 'ai-short-video-creator', name: 'AI Short Video Creator', description: 'Create short-form videos', category: 'Video', icon: Video },
  { id: 'ai-image-generator', name: 'AI Image Generator', description: 'Generate images from text', category: 'Image', icon: ImageIcon },
  { id: 'ai-photo-editor', name: 'AI Photo Editor', description: 'Edit photos with AI', category: 'Image', icon: ImageIcon },
  { id: 'ai-art-generator', name: 'AI Art Generator', description: 'Create artistic images', category: 'Image', icon: ImageIcon },
  { id: 'ai-background-remover', name: 'AI Background Remover', description: 'Remove backgrounds from images', category: 'Image', icon: ImageIcon },
  { id: 'ai-ad-generator', name: 'AI Ad Generator', description: 'Create advertisement content', category: 'Marketing', icon: Sparkles },
  { id: 'ai-social-media-post-creator', name: 'AI Social Media Post Creator', description: 'Create social media content', category: 'Marketing', icon: Sparkles },
  { id: 'ai-thumbnail-generator', name: 'AI Thumbnail Generator', description: 'Generate video thumbnails', category: 'Marketing', icon: ImageIcon },
  { id: 'ai-presentation-maker', name: 'AI Presentation Maker', description: 'Create presentations with AI', category: 'Business', icon: Brain }
];

const placeholderImages = [
  'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
  'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
  'https://images.unsplash.com/photo-1518770660439-4636190af475',
  'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
  'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
  'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
  'https://images.unsplash.com/photo-1605810230434-7631ac76ec81'
];

export default function AIPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedTool, setSelectedTool] = useState<string | null>(null);
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImages, setGeneratedImages] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isGeneratingVideo, setIsGeneratingVideo] = useState(false);
  const [generatedVideo, setGeneratedVideo] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [showPromptChange, setShowPromptChange] = useState(false);

  useEffect(() => {
    const feature = searchParams.get('feature');
    if (feature === 'image-generator') {
      setSelectedTool('ai-image-generator');
    } else if (feature === 'video-generator') {
      setSelectedTool('ai-video-generator');
    }
  }, [searchParams]);

  const handleToolSelect = (toolId: string) => {
    // Handle navigation to specific editor pages
    if (toolId === 'ai-background-remover' || toolId === 'ai-photo-editor') {
      window.location.href = '/ai/image-editor';
      return;
    }
    if (toolId === 'ai-video-editor') {
      window.location.href = '/ai/video-editor';
      return;
    }
    if (toolId === 'ai-thumbnail-generator') {
      window.location.href = '/ai/thumbnail';
      return;
    }

    setSelectedTool(toolId);
    setGeneratedImages([]);
    setSelectedImage(null);
    setGeneratedVideo(null);
    setPrompt('');
    setShowPromptChange(false);

    // Update URL based on tool type
    if (toolId === 'ai-image-generator') {
      setSearchParams({ feature: 'image-generator' });
    } else if (toolId === 'ai-video-generator') {
      setSearchParams({ feature: 'video-generator' });
    }
  };

  const handleImageGeneration = async () => {
    if (!prompt.trim()) {
      toast.error('Please enter a prompt');
      return;
    }

    setIsGenerating(true);
    setProgress(0);
    setShowPromptChange(false);
    
    try {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 90) {
            clearInterval(interval);
            return 90;
          }
          return prev + 10;
        });
      }, 300);

      await new Promise(resolve => setTimeout(resolve, 3000));
      
      const shuffled = [...placeholderImages].sort(() => 0.5 - Math.random());
      const selectedImages = shuffled.slice(0, 4);
      setGeneratedImages(selectedImages);
      setProgress(100);
      setShowPromptChange(true);
      toast.success('Images generated successfully!');
    } catch (error) {
      toast.error('Failed to generate images. Please try again.');
    } finally {
      setIsGenerating(false);
      setTimeout(() => setProgress(0), 1000);
    }
  };

  const handleImageSelect = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    toast.success('Image selected! Ready to create video.');
  };

  const handleVideoGeneration = async () => {
    if (!selectedImage) {
      toast.error('Please select an image first');
      return;
    }

    setIsGeneratingVideo(true);
    setProgress(0);
    
    try {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 90) {
            clearInterval(interval);
            return 90;
          }
          return prev + 5;
        });
      }, 500);

      await new Promise(resolve => setTimeout(resolve, 6000));
      
      setGeneratedVideo('https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4');
      setProgress(100);
      toast.success('Video generated successfully!');
    } catch (error) {
      toast.error('Failed to generate video. Please try again.');
    } finally {
      setIsGeneratingVideo(false);
      setTimeout(() => setProgress(0), 1000);
    }
  };

  const handlePromptChange = () => {
    setGeneratedImages([]);
    setSelectedImage(null);
    setGeneratedVideo(null);
    setShowPromptChange(false);
  };

  const isImageTool = selectedTool === 'ai-image-generator' || selectedTool === 'ai-art-generator' || selectedTool === 'ai-photo-editor';
  const isVideoTool = selectedTool === 'ai-video-generator' || selectedTool === 'ai-text-to-video-generator';

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
              <Sparkles className="w-8 h-8 sm:w-12 sm:h-12 text-white" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            AI Solutions by <span className="text-purple-600">Flonnect</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Choose from our curated collection of AI tools to transform your ideas
          </p>
        </div>

        {/* Selected Tool Interface */}
        {selectedTool && (
          <div className="max-w-4xl mx-auto mb-16">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <h2 className="text-2xl font-bold">
                  {aiTools.find(t => t.id === selectedTool)?.name}
                </h2>
                <Badge>{aiTools.find(t => t.id === selectedTool)?.category}</Badge>
              </div>
              <Button variant="outline" onClick={() => setSelectedTool(null)}>
                Change Tool
              </Button>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {isImageTool ? <ImageIcon className="w-6 h-6" /> : <Video className="w-6 h-6" />}
                  {aiTools.find(t => t.id === selectedTool)?.name}
                </CardTitle>
                <CardDescription>
                  {aiTools.find(t => t.id === selectedTool)?.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="prompt" className="block text-sm font-medium text-gray-700 mb-2">
                      Enter your prompt
                    </label>
                    <Textarea
                      id="prompt"
                      placeholder="Describe what you want to create..."
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      className="min-h-[100px] resize-none"
                      disabled={isGenerating || isGeneratingVideo}
                    />
                  </div>
                  
                  <Button 
                    onClick={handleImageGeneration}
                    disabled={isGenerating || isGeneratingVideo}
                    className="w-full bg-purple-600 hover:bg-purple-700"
                  >
                    {isGenerating ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Generating...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4 mr-2" />
                        Generate
                      </>
                    )}
                  </Button>

                  {(isGenerating || (progress > 0 && !isGeneratingVideo)) && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Generating...</span>
                        <span>{progress}%</span>
                      </div>
                      <Progress value={progress} className="w-full" />
                    </div>
                  )}
                </div>

                {/* Show prompt change option after generation */}
                {showPromptChange && generatedImages.length > 0 && (
                  <div className="flex justify-center">
                    <Button variant="outline" onClick={handlePromptChange}>
                      Change Prompt
                    </Button>
                  </div>
                )}

                {/* Generated Images */}
                {generatedImages.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Generated Results:</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {generatedImages.map((imageUrl, index) => (
                        <div key={index} className="relative group">
                          <img 
                            src={`${imageUrl}?w=300&h=300&fit=crop`}
                            alt={`Generated ${index + 1}`}
                            className={`w-full h-48 object-cover rounded-lg shadow-md cursor-pointer transition-all ${
                              selectedImage === imageUrl 
                                ? 'ring-4 ring-purple-500 scale-105' 
                                : 'hover:scale-105'
                            }`}
                            onClick={() => handleImageSelect(imageUrl)}
                          />
                          {selectedImage === imageUrl && (
                            <div className="absolute top-2 right-2 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                              <Check className="w-4 h-4 text-white" />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Video Generation for Video Tools */}
                {isVideoTool && selectedImage && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Create Video</h3>
                    <Button 
                      onClick={handleVideoGeneration}
                      disabled={isGeneratingVideo}
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                    >
                      {isGeneratingVideo ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Creating Video...
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4 mr-2" />
                          Create Video
                        </>
                      )}
                    </Button>

                    {(isGeneratingVideo || (progress > 0 && selectedImage)) && (
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Creating video...</span>
                          <span>{progress}%</span>
                        </div>
                        <Progress value={progress} className="w-full" />
                      </div>
                    )}

                    {generatedVideo && (
                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-green-600">Video Generated Successfully!</h4>
                        <div className="w-full max-w-2xl mx-auto">
                          <video 
                            controls 
                            className="w-full h-auto rounded-lg shadow-lg"
                            poster={selectedImage}
                          >
                            <source src={generatedVideo} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div className="flex justify-center">
                          <Button className="bg-green-600 hover:bg-green-700">
                            <Download className="w-4 h-4 mr-2" />
                            Download Video
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        )}

        {/* AI Tools Grid - Now at the bottom */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
            {selectedTool ? 'Explore Other AI Tools' : 'Choose Your AI Tool'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {aiTools.map((tool) => {
              const IconComponent = tool.icon;
              return (
                <Card 
                  key={tool.id} 
                  className="cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-105"
                  onClick={() => handleToolSelect(tool.id)}
                >
                  <CardHeader className="text-center pb-4">
                    <div className="flex justify-center mb-3">
                      <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <CardTitle className="text-lg font-semibold">{tool.name}</CardTitle>
                    <Badge variant="secondary" className="w-fit mx-auto">{tool.category}</Badge>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-gray-600 text-center">{tool.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
