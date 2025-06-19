
import React from 'react';
import { Button } from '@/components/ui/button';
import { UseCaseNavigation } from './UseCaseNavigation';
import { SolutionsNavigation } from './SolutionsNavigation';
import { ServiceNavigation } from './ServiceNavigation';
import { FeaturesNavigation } from './FeaturesNavigation';
import { useNavigate } from 'react-router-dom';

export function Header() {
  const navigate = useNavigate();

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4 md:gap-8">
            <button 
              onClick={() => navigate('/')}
              className="text-xl font-bold text-primary hover:text-primary/80 transition-colors"
            >
              ScreenRecorder
            </button>
            
            <div className="flex items-center gap-2 md:gap-6 overflow-x-auto">
              <Button variant="ghost" onClick={() => navigate('/')} className="whitespace-nowrap">
                Home
              </Button>
              <SolutionsNavigation />
              <ServiceNavigation />
              <FeaturesNavigation />
              <UseCaseNavigation />
              <Button variant="ghost" className="whitespace-nowrap">
                Blogs
              </Button>
              <Button variant="ghost" className="whitespace-nowrap">
                Pricing
              </Button>
              <Button variant="ghost" className="whitespace-nowrap hidden sm:inline-flex">
                Community
              </Button>
            </div>
          </div>
          
          <div className="flex items-center gap-2 md:gap-4">
            <Button variant="outline" className="text-xs md:text-sm px-2 md:px-4">
              Sign In
            </Button>
            <Button className="text-xs md:text-sm px-2 md:px-4">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
