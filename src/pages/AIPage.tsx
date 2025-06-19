
import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Loader2, Sparkles, Image as ImageIcon, Video, Edit, Wand2, FileText, User, Camera, Palette, Share2, Presentation, Megaphone } from 'lucide-react';
import { toast } from 'sonner';

const aiSolutions = [
  {
    title: 'AI Image Generator',
    description: 'Generate stunning images from text prompts',
    icon: ImageIcon,
    status: 'available',
    href: '#image-generator'
  },
  {
    title: 'AI Video Generator',
    description: 'Create videos with AI technology',
    icon: Video,
    status: 'coming-soon',
    href: '#'
  },
  {
    title: 'AI Video Editor',
    description: 'Edit videos using advanced AI',
    icon: Edit,
    status: 'coming-soon',
    href: '#'
  },
  {
    title: 'AI Animated Video Maker',
    description: 'Create animated videos effortlessly',
    icon: Wand2,
    status: 'coming-soon',
    href: '#'
  },
  {
    title: 'AI Text To Video Generator',
    description: 'Convert text to engaging videos',
    icon: FileText,
    status: 'coming-soon',
    href: '#'
  },
  {
    title: 'AI Avatar Video Creator',
    description: 'Create personalized avatar videos',
    icon: User,
    status: 'coming-soon',
    href: '#'
  },
  {
    title: 'AI Face Swap Video Tool',
    description: 'Advanced face swapping technology',
    icon: Camera,
    status: 'coming-soon',
    href: '#'
  },
  {
    title: 'AI Photo Editor',
    description: 'Professional photo editing with AI',
    icon: Palette,
    status: 'coming-soon',
    href: '#'
  },
  {
    title: 'AI Social Media Post Creator',
    description: 'Create engaging social media content',
    icon: Share2,
    status: 'coming-soon',
    href: '#'
  },
  {
    title: 'AI Presentation Maker',
    description: 'Build presentations with AI assistance',
    icon: Presentation,
    status: 'coming-soon',
    href: '#'
  },
  {
    title: 'AI Ad Generator',
    description: 'Create compelling advertisements',
    icon: Megaphone,
    status: 'coming-soon',
    href: '#'
  }
];

export default function AIPage() {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [captchaVerified, setCaptchaVerified] = useState(false);

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
    
    try {
      // Simulate API call - replace with actual backend integration
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // For demo purposes, using a placeholder image
      const placeholderImage = `https://images.unsplash.com/photo-1518770660439-4636190af475?w=512&h=512&fit=crop`;
      setGeneratedImage(placeholderImage);
      toast.success('Image generated successfully!');
    } catch (error) {
      toast.error('Failed to generate image. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCaptchaVerification = () => {
    // Simple captcha simulation - replace with actual captcha service
    const result = window.confirm('Are you human? Click OK to verify.');
    setCaptchaVerified(result);
    if (result) {
      toast.success('Captcha verified successfully!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <Header />
      
      <main className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
              <Sparkles className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            AI Solutions by <span className="text-purple-600">Flonnect</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our suite of AI-powered tools designed to enhance your creativity and productivity
          </p>
        </div>

        {/* Image Generator Section */}
        <div className="mb-16">
          <Card className="max-w-4xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-3">
                <ImageIcon className="w-8 h-8 text-purple-600" />
                AI Image Generator
              </CardTitle>
              <CardDescription className="text-lg">
                Create stunning images from your imagination with our AI-powered image generator
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
                    className="min-h-[100px] resize-none"
                    disabled={isGenerating}
                  />
                </div>
                
                <div className="flex items-center gap-4">
                  <Button 
                    onClick={handleCaptchaVerification}
                    variant={captchaVerified ? "default" : "outline"}
                    disabled={isGenerating}
                    className={captchaVerified ? "bg-green-600 hover:bg-green-700" : ""}
                  >
                    {captchaVerified ? "✓ Verified" : "Verify Captcha"}
                  </Button>
                  
                  <Button 
                    onClick={handleImageGeneration}
                    disabled={isGenerating || !captchaVerified}
                    className="bg-purple-600 hover:bg-purple-700"
                  >
                    {isGenerating ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Generating...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4 mr-2" />
                        Generate Image
                      </>
                    )}
                  </Button>
                </div>
              </div>

              {generatedImage && (
                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-4">Generated Image:</h3>
                  <div className="flex justify-center">
                    <img 
                      src={generatedImage} 
                      alt="Generated" 
                      className="max-w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* All AI Solutions Grid */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">All AI Solutions</h2>
            <p className="text-lg text-gray-600">
              Discover our comprehensive suite of AI-powered tools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {aiSolutions.map((solution, index) => (
              <Card 
                key={index}
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                  solution.status === 'available' 
                    ? 'border-purple-200 hover:border-purple-300' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => {
                  if (solution.status === 'available' && solution.href === '#image-generator') {
                    document.getElementById('prompt')?.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    toast.info('This feature is coming soon!');
                  }
                }}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className={`p-2 rounded-lg ${
                      solution.status === 'available' 
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' 
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      <solution.icon className="w-6 h-6" />
                    </div>
                    <Badge 
                      variant={solution.status === 'available' ? 'default' : 'secondary'}
                      className={solution.status === 'available' ? 'bg-green-100 text-green-800' : ''}
                    >
                      {solution.status === 'available' ? 'Available' : 'Coming Soon'}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-semibold">
                    {solution.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-sm">
                    {solution.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Ideas?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of users who are already creating amazing content with our AI tools
          </p>
          <Button 
            size="lg" 
            className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-3"
            onClick={() => document.getElementById('prompt')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Try Image Generator Now
          </Button>
        </div>
      </main>
    </div>
  );
}
