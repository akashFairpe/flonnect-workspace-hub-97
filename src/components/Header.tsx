
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Sparkles, Image as ImageIcon, Video } from 'lucide-react';
import { FeaturesNavigation } from './FeaturesNavigation';
import { ResourcesNavigation } from './ResourcesNavigation';

export function Header() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleFeatureClick = (feature: string) => {
    setSearchParams({ feature });
  };

  return (
    <header className="bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 border-b border-purple-500/30 sticky top-0 z-50 shadow-2xl backdrop-blur-md bg-opacity-95">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <div className="flex items-center gap-4 md:gap-8">
            <button 
              onClick={() => navigate('/')}
              className="text-lg sm:text-xl font-bold text-white hover:text-purple-200 transition-colors flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
              <span className="hidden sm:inline">Flonnect AI</span>
              <span className="sm:hidden">Flonnect</span>
            </button>
            
            <div className="flex items-center gap-2 sm:gap-4">
              <FeaturesNavigation />
              <ResourcesNavigation />
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => handleFeatureClick('image-generator')}
                className="text-xs sm:text-sm text-white hover:bg-white/15 hover:text-purple-200 border-0"
              >
                <ImageIcon className="w-4 h-4 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">Image Generator</span>
                <span className="sm:hidden">Images</span>
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => handleFeatureClick('video-generator')}
                className="text-xs sm:text-sm text-white hover:bg-white/15 hover:text-purple-200 border-0"
              >
                <Video className="w-4 h-4 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">Video Generator</span>
                <span className="sm:hidden">Videos</span>
              </Button>
            </div>
          </div>
          
          <div className="flex items-center gap-2 sm:gap-4">
            <Button variant="outline" size="sm" className="text-xs sm:text-sm px-2 sm:px-4 border-purple-400/40 text-purple-200 hover:bg-purple-500/15 hover:border-purple-400/60 hover:text-white">
              Sign In
            </Button>
            <Button size="sm" className="text-xs sm:text-sm px-2 sm:px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 border-0 shadow-lg hover:shadow-purple-500/30">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
