
import React from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { 
  BookOpen,
  Video,
  Upload,
  Bug,
  Play,
  FileText,
  Download,
  Share2
} from 'lucide-react';

const resourcesItems = [
  {
    title: 'How to Record Bug Reports',
    description: 'Step-by-step guide to capture and document bugs effectively',
    icon: Bug,
    href: '/resources/how-to-record-bugs'
  },
  {
    title: 'How to Upload Videos',
    description: 'Learn how to upload and share your video recordings',
    icon: Upload,
    href: '/resources/how-to-upload-videos'
  },
  {
    title: 'How to Create Videos',
    description: 'Complete guide to creating professional video content',
    icon: Video,
    href: '/resources/how-to-create-videos'
  },
  {
    title: 'Getting Started Guide',
    description: 'New to screen recording? Start here for the basics',
    icon: Play,
    href: '/resources/getting-started'
  },
  {
    title: 'Best Practices',
    description: 'Tips and tricks for professional recordings',
    icon: BookOpen,
    href: '/resources/best-practices'
  },
  {
    title: 'Video Editing Basics',
    description: 'Learn to edit your recordings like a pro',
    icon: FileText,
    href: '/resources/video-editing'
  },
  {
    title: 'Download & Setup',
    description: 'Installation guides and system requirements',
    icon: Download,
    href: '/resources/download-setup'
  },
  {
    title: 'Sharing & Collaboration',
    description: 'How to share videos and collaborate with teams',
    icon: Share2,
    href: '/resources/sharing-collaboration'
  }
];

export function ResourcesNavigation() {
  const navigate = useNavigate();

  const handleResourceClick = (href: string) => {
    navigate(href);
  };

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-xs md:text-sm font-medium">
            Resources
          </NavigationMenuTrigger>
          <NavigationMenuContent className="min-w-[600px] max-w-4xl bg-white border border-gray-200 shadow-lg rounded-md p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {resourcesItems.map((item) => (
                <Card 
                  key={item.title}
                  className="cursor-pointer hover:shadow-md transition-all duration-200 hover:bg-gray-50 border-gray-200 group min-w-0"
                  onClick={() => handleResourceClick(item.href)}
                >
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3">
                      <div className="p-1.5 rounded-lg bg-gradient-to-r from-blue-500 to-green-500 text-white group-hover:scale-110 transition-transform flex-shrink-0">
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
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
