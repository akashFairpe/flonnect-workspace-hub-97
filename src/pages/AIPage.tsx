
import React, { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Loader2, Sparkles, Image as ImageIcon, Video, Play, Download, Check, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';
import { useSearchParams } from 'react-router-dom';

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
  const [activeTab, setActiveTab] = useState(searchParams.get('feature') || 'image-generator');
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImages, setGeneratedImages] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isGeneratingVideo, setIsGeneratingVideo] = useState(false);
  const [generatedVideo, setGeneratedVideo] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [captchaVerified, setCaptchaVerified] = useState(false);

  useEffect(() => {
    const feature = searchParams.get('feature');
    if (feature && ['image-generator', 'video-generator'].includes(feature)) {
      setActiveTab(feature);
    }
  }, [searchParams]);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setSearchParams({ feature: value });
  };

  const handleImageGeneration = async () => {
    if (!prompt.trim()) {
      toast.error('Please enter a prompt');
      return;
    }

    if (!captchaVerified) {
      toast.error('Please verify the captcha');
      return;
    }

    setIsGenerating(true);
    setProgress(0);
    
    try {
      // Simulate progress
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
      
      // Generate multiple images
      const shuffled = [...placeholderImages].sort(() => 0.5 - Math.random());
      const selectedImages = shuffled.slice(0, 4);
      setGeneratedImages(selectedImages);
      setProgress(100);
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
      // Simulate video generation progress
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
      
      // For demo, using a video placeholder
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

  const handleCaptchaVerification = () => {
    const result = window.confirm('Are you human? Click OK to verify.');
    setCaptchaVerified(result);
    if (result) {
      toast.success('Captcha verified successfully!');
    }
  };

  const resetVideoGenerator = () => {
    setGeneratedImages([]);
    setSelectedImage(null);
    setGeneratedVideo(null);
    setPrompt('');
  };

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
            Transform your ideas into stunning visuals and videos with our AI-powered tools
          </p>
        </div>

        {/* AI Tools Tabs */}
        <div className="max-w-6xl mx-auto">
          <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="image-generator" className="flex items-center gap-2">
                <ImageIcon className="w-4 h-4" />
                <span className="hidden sm:inline">AI Image Generator</span>
                <span className="sm:hidden">Images</span>
              </TabsTrigger>
              <TabsTrigger value="video-generator" className="flex items-center gap-2">
                <Video className="w-4 h-4" />
                <span className="hidden sm:inline">AI Video Generator</span>
                <span className="sm:hidden">Videos</span>
              </TabsTrigger>
            </TabsList>

            {/* Image Generator Tab */}
            <TabsContent value="image-generator">
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center justify-center gap-3">
                    <ImageIcon className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
                    AI Image Generator
                  </CardTitle>
                  <CardDescription className="text-base sm:text-lg">
                    Create stunning images from your imagination
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
                        placeholder="Describe the image you want to generate... e.g., 'A beautiful sunset over a mountain lake with flying birds'"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        className="min-h-[80px] sm:min-h-[100px] resize-none"
                        disabled={isGenerating}
                      />
                    </div>
                    
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                      <Button 
                        onClick={handleCaptchaVerification}
                        variant={captchaVerified ? "default" : "outline"}
                        disabled={isGenerating}
                        className={`w-full sm:w-auto ${captchaVerified ? "bg-green-600 hover:bg-green-700" : ""}`}
                      >
                        {captchaVerified ? "✓ Verified" : "Verify Captcha"}
                      </Button>
                      
                      <Button 
                        onClick={handleImageGeneration}
                        disabled={isGenerating || !captchaVerified}
                        className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700"
                      >
                        {isGenerating ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Generating...
                          </>
                        ) : (
                          <>
                            <Sparkles className="w-4 h-4 mr-2" />
                            Generate Images
                          </>
                        )}
                      </Button>
                    </div>

                    {(isGenerating || progress > 0) && (
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Generating images...</span>
                          <span>{progress}%</span>
                        </div>
                        <Progress value={progress} className="w-full" />
                      </div>
                    )}
                  </div>

                  {generatedImages.length > 0 && (
                    <div className="mt-8">
                      <h3 className="text-lg font-semibold mb-4">Generated Images:</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {generatedImages.map((imageUrl, index) => (
                          <div key={index} className="relative group">
                            <img 
                              src={`${imageUrl}?w=300&h=300&fit=crop`}
                              alt={`Generated ${index + 1}`}
                              className="w-full h-48 object-cover rounded-lg shadow-md cursor-pointer transition-transform hover:scale-105"
                              onClick={() => handleImageSelect(imageUrl)}
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all rounded-lg flex items-center justify-center">
                              <Button 
                                size="sm" 
                                className="opacity-0 group-hover:opacity-100 transition-opacity"
                                onClick={() => handleImageSelect(imageUrl)}
                              >
                                Select
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Video Generator Tab */}
            <TabsContent value="video-generator">
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center justify-center gap-3">
                    <Video className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
                    AI Video Generator
                  </CardTitle>
                  <CardDescription className="text-base sm:text-lg">
                    Convert your ideas into dynamic videos
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Step 1: Generate Images */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <div className="w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs">1</div>
                      Generate Images from Text
                    </div>
                    
                    <div>
                      <label htmlFor="video-prompt" className="block text-sm font-medium text-gray-700 mb-2">
                        Enter your prompt
                      </label>
                      <Textarea
                        id="video-prompt"
                        placeholder="Describe what you want to see in your video... e.g., 'A serene ocean wave crashing on a rocky shore at sunset'"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        className="min-h-[80px] sm:min-h-[100px] resize-none"
                        disabled={isGenerating || isGeneratingVideo}
                      />
                    </div>
                    
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                      <Button 
                        onClick={handleCaptchaVerification}
                        variant={captchaVerified ? "default" : "outline"}
                        disabled={isGenerating || isGeneratingVideo}
                        className={`w-full sm:w-auto ${captchaVerified ? "bg-green-600 hover:bg-green-700" : ""}`}
                      >
                        {captchaVerified ? "✓ Verified" : "Verify Captcha"}
                      </Button>
                      
                      <Button 
                        onClick={handleImageGeneration}
                        disabled={isGenerating || !captchaVerified || isGeneratingVideo}
                        className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700"
                      >
                        {isGenerating ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Generating...
                          </>
                        ) : (
                          <>
                            <Sparkles className="w-4 h-4 mr-2" />
                            Generate Images
                          </>
                        )}
                      </Button>
                    </div>

                    {(isGenerating || (progress > 0 && !isGeneratingVideo)) && (
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Generating images...</span>
                          <span>{progress}%</span>
                        </div>
                        <Progress value={progress} className="w-full" />
                      </div>
                    )}
                  </div>

                  {/* Step 2: Select Image */}
                  {generatedImages.length > 0 && (
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-sm font-medium">
                        <div className="w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs">2</div>
                        Select an Image
                      </div>
                      
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
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all rounded-lg flex items-center justify-center">
                              <Button 
                                size="sm" 
                                className="opacity-0 group-hover:opacity-100 transition-opacity"
                                onClick={() => handleImageSelect(imageUrl)}
                              >
                                {selectedImage === imageUrl ? 'Selected' : 'Select'}
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 3: Generate Video */}
                  {selectedImage && (
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-sm font-medium">
                        <div className="w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs">3</div>
                        Create Video
                      </div>
                      
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <Button 
                          onClick={handleVideoGeneration}
                          disabled={isGeneratingVideo}
                          className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
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
                        
                        <Button 
                          onClick={resetVideoGenerator}
                          variant="outline"
                          disabled={isGeneratingVideo}
                          className="w-full sm:w-auto"
                        >
                          Start Over
                        </Button>
                      </div>

                      {(isGeneratingVideo || (progress > 0 && selectedImage)) && (
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Creating video...</span>
                            <span>{progress}%</span>
                          </div>
                          <Progress value={progress} className="w-full" />
                        </div>
                      )}
                    </div>
                  )}

                  {/* Step 4: Video Result */}
                  {generatedVideo && (
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-sm font-medium">
                        <div className="w-6 h-6 rounded-full bg-green-600 text-white flex items-center justify-center text-xs">✓</div>
                        Video Generated Successfully!
                      </div>
                      
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
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl p-8 sm:p-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Create Amazing Content?</h2>
          <p className="text-lg sm:text-xl mb-8 opacity-90">
            Join thousands of creators using our AI tools to bring their ideas to life
          </p>
          <Button 
            size="lg" 
            className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-6 sm:px-8 py-3"
            onClick={() => {
              const promptElement = document.getElementById('prompt') || document.getElementById('video-prompt');
              promptElement?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Start Creating Now
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </main>
    </div>
  );
}
