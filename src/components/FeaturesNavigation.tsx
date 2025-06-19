
import React from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Video, 
  Edit, 
  Wand2, 
  FileText,
  User,
  Camera,
  Image,
  Palette,
  Share2,
  Presentation,
  Instagram,
  Megaphone
} from 'lucide-react';

const featuresItems = [
  {
    title: 'AI Video Generator',
    description: 'Generate videos with AI',
    icon: Video,
    href: '/ai-video-generator'
  },
  {
    title: 'AI Video Editor',
    description: 'Edit videos using AI',
    icon: Edit,
    href: '/ai-video-editor'
  },
  {
    title: 'AI Animated Video Maker',
    description: 'Create animated videos',
    icon: Wand2,
    href: '/ai-animated-video-maker'
  },
  {
    title: 'AI Text To Video Generator',
    description: 'Convert text to video',
    icon: FileText,
    href: '/ai-text-to-video'
  },
  {
    title: 'AI Avatar Video Creator',
    description: 'Create avatar videos',
    icon: User,
    href: '/ai-avatar-video-creator'
  },
  {
    title: 'AI Face Swap Video Tool',
    description: 'Swap faces in videos',
    icon: Camera,
    href: '/ai-face-swap-video'
  },
  {
    title: 'AI Short Video Creator',
    description: 'Create short form videos',
    icon: Video,
    href: '/ai-short-video-creator'
  },
  {
    title: 'AI Image Generator',
    description: 'Generate images with AI',
    icon: Image,
    href: '/ai-image-generator'
  },
  {
    title: 'AI Photo Editor',
    description: 'Edit photos using AI',
    icon: Palette,
    href: '/ai-photo-editor'
  },
  {
    title: 'AI Art Generator',
    description: 'Generate artistic content',
    icon: Palette,
    href: '/ai-art-generator'
  },
  {
    title: 'AI Background Remover',
    description: 'Remove backgrounds automatically',
    icon: Image,
    href: '/ai-background-remover'
  },
  {
    title: 'AI Ad Generator',
    description: 'Create ads automatically',
    icon: Megaphone,
    href: '/ai-ad-generator'
  },
  {
    title: 'AI Social Media Post Creator',
    description: 'Create social media content',
    icon: Share2,
    href: '/ai-social-media-post-creator'
  },
  {
    title: 'AI Thumbnail Generator',
    description: 'Generate video thumbnails',
    icon: Image,
    href: '/ai-thumbnail-generator'
  },
  {
    title: 'AI Presentation Maker',
    description: 'Create presentations with AI',
    icon: Presentation,
    href: '/ai-presentation-maker'
  }
];

export function FeaturesNavigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-base font-medium">
            Features
          </NavigationMenuTrigger>
          <NavigationMenuContent className="w-screen max-w-4xl">
            <div className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {featuresItems.map((item) => (
                  <Card 
                    key={item.title}
                    className="cursor-pointer hover:shadow-md transition-all duration-200 hover:bg-gray-50 border-gray-200 group"
                  >
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <div className="p-1.5 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white group-hover:scale-110 transition-transform">
                          <item.icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <CardTitle className="text-sm font-medium group-hover:text-primary transition-colors truncate">
                            {item.title}
                          </CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0 pb-3">
                      <p className="text-xs text-gray-600 line-clamp-2">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
