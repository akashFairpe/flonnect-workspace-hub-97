
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
          <div className="flex items-center gap-8">
            <button 
              onClick={() => navigate('/')}
              className="text-xl font-bold text-primary hover:text-primary/80 transition-colors"
            >
              ScreenRecorder
            </button>
            
            <div className="hidden md:flex items-center gap-6">
              <Button variant="ghost" onClick={() => navigate('/')}>
                Home
              </Button>
              <SolutionsNavigation />
              <ServiceNavigation />
              <FeaturesNavigation />
              <UseCaseNavigation />
              <Button variant="ghost">
                Blogs
              </Button>
              <Button variant="ghost">
                Pricing
              </Button>
              <Button variant="ghost">
                Community
              </Button>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="outline">
              Sign In
            </Button>
            <Button>
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
