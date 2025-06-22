
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Sparkles, Image as ImageIcon, Video } from 'lucide-react';
import { FeaturesNavigation } from './FeaturesNavigation';

export function Header() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleFeatureClick = (feature: string) => {
    setSearchParams({ feature });
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <div className="flex items-center gap-4 md:gap-8">
            <button 
              onClick={() => navigate('/')}
              className="text-lg sm:text-xl font-bold text-primary hover:text-primary/80 transition-colors flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="hidden sm:inline">Flonnect AI</span>
              <span className="sm:hidden">Flonnect</span>
            </button>
            
            <div className="flex items-center gap-2 sm:gap-4">
              <FeaturesNavigation />
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => handleFeatureClick('image-generator')}
                className="text-xs sm:text-sm"
              >
                <ImageIcon className="w-4 h-4 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">Image Generator</span>
                <span className="sm:hidden">Images</span>
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => handleFeatureClick('video-generator')}
                className="text-xs sm:text-sm"
              >
                <Video className="w-4 h-4 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">Video Generator</span>
                <span className="sm:hidden">Videos</span>
              </Button>
            </div>
          </div>
          
          <div className="flex items-center gap-2 sm:gap-4">
            <Button variant="outline" size="sm" className="text-xs sm:text-sm px-2 sm:px-4">
              Sign In
            </Button>
            <Button size="sm" className="text-xs sm:text-sm px-2 sm:px-4">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
