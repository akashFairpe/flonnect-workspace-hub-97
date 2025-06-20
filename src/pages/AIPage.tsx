
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

const aiModels = [
  { id: 'gpt-4o', name: 'GPT-4o', description: 'Most advanced reasoning', category: 'OpenAI', icon: Brain },
  { id: 'claude-3.5-sonnet', name: 'Claude 3.5 Sonnet', description: 'Best for coding & analysis', category: 'Anthropic', icon: Brain },
  { id: 'gemini-pro', name: 'Gemini Pro', description: 'Google\'s multimodal AI', category: 'Google', icon: Brain },
  { id: 'llama-3', name: 'Llama 3', description: 'Open source powerhouse', category: 'Meta', icon: Brain },
  { id: 'claude-3-opus', name: 'Claude 3 Opus', description: 'Creative writing expert', category: 'Anthropic', icon: Brain },
  { id: 'gpt-3.5-turbo', name: 'GPT-3.5 Turbo', description: 'Fast and efficient', category: 'OpenAI', icon: Zap },
  { id: 'palm-2', name: 'PaLM 2', description: 'Google\'s foundation model', category: 'Google', icon: Brain },
  { id: 'claude-3-haiku', name: 'Claude 3 Haiku', description: 'Quick responses', category: 'Anthropic', icon: Zap },
  { id: 'mistral-large', name: 'Mistral Large', description: 'European AI excellence', category: 'Mistral', icon: Brain },
  { id: 'cohere-command', name: 'Cohere Command', description: 'Business-focused AI', category: 'Cohere', icon: Cpu },
  { id: 'ai21-jurassic', name: 'AI21 Jurassic', description: 'Advanced language model', category: 'AI21', icon: Brain },
  { id: 'falcon-180b', name: 'Falcon 180B', description: 'Open source giant', category: 'TII', icon: Brain },
  { id: 'vicuna-33b', name: 'Vicuna 33B', description: 'Fine-tuned excellence', category: 'LMSYS', icon: Brain },
  { id: 'alpaca-7b', name: 'Alpaca 7B', description: 'Lightweight and fast', category: 'Stanford', icon: Zap },
  { id: 'stable-diffusion', name: 'Stable Diffusion', description: 'Image generation', category: 'Stability AI', icon: ImageIcon },
  { id: 'dalle-3', name: 'DALL-E 3', description: 'Advanced image creation', category: 'OpenAI', icon: ImageIcon }
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
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
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
      setSelectedModel('stable-diffusion');
    } else if (feature === 'video-generator') {
      setSelectedModel('dalle-3');
    }
  }, [searchParams]);

  const handleModelSelect = (modelId: string) => {
    setSelectedModel(modelId);
    setGeneratedImages([]);
    setSelectedImage(null);
    setGeneratedVideo(null);
    setPrompt('');
    setShowPromptChange(false);

    // Update URL based on model type
    if (modelId === 'stable-diffusion' || modelId === 'dalle-3') {
      setSearchParams({ feature: modelId === 'dalle-3' ? 'video-generator' : 'image-generator' });
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

  const isImageModel = selectedModel === 'stable-diffusion' || selectedModel === 'dalle-3';
  const isVideoModel = selectedModel === 'dalle-3';

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
            Choose from our curated collection of AI models to transform your ideas
          </p>
        </div>

        {/* AI Models Grid */}
        {!selectedModel && (
          <div className="max-w-6xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">Choose Your AI Model</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {aiModels.map((model) => {
                const IconComponent = model.icon;
                return (
                  <Card 
                    key={model.id} 
                    className="cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-105"
                    onClick={() => handleModelSelect(model.id)}
                  >
                    <CardHeader className="text-center pb-4">
                      <div className="flex justify-center mb-3">
                        <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <CardTitle className="text-lg font-semibold">{model.name}</CardTitle>
                      <Badge variant="secondary" className="w-fit mx-auto">{model.category}</Badge>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-sm text-gray-600 text-center">{model.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        )}

        {/* Selected Model Interface */}
        {selectedModel && (
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <h2 className="text-2xl font-bold">
                  {aiModels.find(m => m.id === selectedModel)?.name}
                </h2>
                <Badge>{aiModels.find(m => m.id === selectedModel)?.category}</Badge>
              </div>
              <Button variant="outline" onClick={() => setSelectedModel(null)}>
                Change Model
              </Button>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {isImageModel ? <ImageIcon className="w-6 h-6" /> : <Brain className="w-6 h-6" />}
                  {isVideoModel ? 'AI Video Generator' : 'AI Image Generator'}
                </CardTitle>
                <CardDescription>
                  {isVideoModel ? 'Create videos from your text prompts' : 'Generate images from your imagination'}
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
                        Generate Images
                      </>
                    )}
                  </Button>

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
                    <h3 className="text-lg font-semibold">Generated Images:</h3>
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

                {/* Video Generation for Video Models */}
                {isVideoModel && selectedImage && (
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
      </main>
    </div>
  );
}
