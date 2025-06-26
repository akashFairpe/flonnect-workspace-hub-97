
import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2, Image as ImageIcon, Download, Check, RotateCcw } from 'lucide-react';
import { toast } from 'sonner';

const aspectRatios = [
  { id: '16:9', label: '16:9 (YouTube)', width: 1280, height: 720 },
  { id: '4:3', label: '4:3 (Traditional)', width: 1024, height: 768 },
  { id: '1:1', label: '1:1 (Square)', width: 1080, height: 1080 },
  { id: '9:16', label: '9:16 (Vertical)', width: 720, height: 1280 },
  { id: '3:2', label: '3:2 (Photo)', width: 1200, height: 800 },
  { id: '21:9', label: '21:9 (Cinematic)', width: 1920, height: 823 }
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

export default function AIThumbnailGeneratorPage() {
  const [prompt, setPrompt] = useState('');
  const [selectedAspectRatio, setSelectedAspectRatio] = useState('16:9');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedThumbnails, setGeneratedThumbnails] = useState<string[]>([]);
  const [selectedThumbnail, setSelectedThumbnail] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [showPromptChange, setShowPromptChange] = useState(false);

  const handleThumbnailGeneration = async () => {
    if (!prompt.trim()) {
      toast.error('Please enter a prompt for your thumbnail');
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
      setGeneratedThumbnails(selectedImages);
      setProgress(100);
      setShowPromptChange(true);
      toast.success('Thumbnails generated successfully!');
    } catch (error) {
      toast.error('Failed to generate thumbnails. Please try again.');
    } finally {
      setIsGenerating(false);
      setTimeout(() => setProgress(0), 1000);
    }
  };

  const handleThumbnailSelect = (imageUrl: string) => {
    setSelectedThumbnail(imageUrl);
    toast.success('Thumbnail selected!');
  };

  const handlePromptChange = () => {
    setGeneratedThumbnails([]);
    setSelectedThumbnail(null);
    setShowPromptChange(false);
  };

  const resetGenerator = () => {
    setPrompt('');
    setSelectedAspectRatio('16:9');
    setGeneratedThumbnails([]);
    setSelectedThumbnail(null);
    setProgress(0);
    setShowPromptChange(false);
  };

  const selectedRatio = aspectRatios.find(ratio => ratio.id === selectedAspectRatio);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
              <ImageIcon className="w-8 h-8 sm:w-12 sm:h-12 text-white" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            AI Thumbnail <span className="text-purple-600">Generator</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Create eye-catching thumbnails with AI. Choose your aspect ratio and describe what you want.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ImageIcon className="w-6 h-6" />
                AI Thumbnail Generator
              </CardTitle>
              <CardDescription>
                Generate custom thumbnails with your preferred aspect ratio
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Aspect Ratio Selection */}
              <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-700">
                  Aspect Ratio
                </label>
                <Select value={selectedAspectRatio} onValueChange={setSelectedAspectRatio}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select aspect ratio" />
                  </SelectTrigger>
                  <SelectContent>
                    {aspectRatios.map((ratio) => (
                      <SelectItem key={ratio.id} value={ratio.id}>
                        <div className="flex items-center justify-between w-full">
                          <span>{ratio.label}</span>
                          <Badge variant="outline" className="ml-2">
                            {ratio.width}×{ratio.height}
                          </Badge>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {selectedRatio && (
                  <div className="text-sm text-gray-500">
                    Selected: {selectedRatio.width}×{selectedRatio.height} pixels
                  </div>
                )}
              </div>

              {/* Prompt Input */}
              <div className="space-y-4">
                <label htmlFor="prompt" className="block text-sm font-medium text-gray-700">
                  Describe your thumbnail
                </label>
                <Textarea
                  id="prompt"
                  placeholder="Describe your thumbnail... (e.g., 'Gaming thumbnail with neon colors and explosion effects', 'Tech review thumbnail with smartphone and blue background')"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="min-h-[100px] resize-none"
                  disabled={isGenerating}
                />
              </div>
              
              {/* Action Buttons */}
              <div className="flex gap-4">
                <Button 
                  onClick={handleThumbnailGeneration}
                  disabled={isGenerating || !prompt.trim()}
                  className="flex-1 bg-purple-600 hover:bg-purple-700"
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <ImageIcon className="w-4 h-4 mr-2" />
                      Generate Thumbnails
                    </>
                  )}
                </Button>
                
                <Button 
                  onClick={resetGenerator}
                  variant="outline"
                  disabled={isGenerating}
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Reset
                </Button>
              </div>

              {/* Progress */}
              {(isGenerating || progress > 0) && (
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Generating thumbnails...</span>
                    <span>{progress}%</span>
                  </div>
                  <Progress value={progress} className="w-full" />
                </div>
              )}

              {/* Show prompt change option after generation */}
              {showPromptChange && generatedThumbnails.length > 0 && (
                <div className="flex justify-center">
                  <Button variant="outline" onClick={handlePromptChange}>
                    Change Prompt
                  </Button>
                </div>
              )}

              {/* Generated Thumbnails */}
              {generatedThumbnails.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Generated Thumbnails:</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {generatedThumbnails.map((imageUrl, index) => {
                      const ratio = aspectRatios.find(r => r.id === selectedAspectRatio);
                      const aspectRatioStyle = ratio ? { aspectRatio: `${ratio.width}/${ratio.height}` } : {};
                      
                      return (
                        <div key={index} className="relative group">
                          <img 
                            src={`${imageUrl}?w=${ratio?.width || 1280}&h=${ratio?.height || 720}&fit=crop`}
                            alt={`Generated thumbnail ${index + 1}`}
                            className={`w-full object-cover rounded-lg shadow-md cursor-pointer transition-all ${
                              selectedThumbnail === imageUrl 
                                ? 'ring-4 ring-purple-500 scale-105' 
                                : 'hover:scale-105'
                            }`}
                            style={aspectRatioStyle}
                            onClick={() => handleThumbnailSelect(imageUrl)}
                          />
                          {selectedThumbnail === imageUrl && (
                            <div className="absolute top-2 right-2 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                              <Check className="w-4 h-4 text-white" />
                            </div>
                          )}
                          <div className="absolute bottom-2 left-2">
                            <Badge variant="secondary" className="text-xs">
                              {selectedAspectRatio}
                            </Badge>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Selected Thumbnail Download */}
              {selectedThumbnail && (
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-green-600">Thumbnail Ready for Download!</h4>
                  <div className="flex justify-center">
                    <Button className="bg-green-600 hover:bg-green-700">
                      <Download className="w-4 h-4 mr-2" />
                      Download Thumbnail
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
