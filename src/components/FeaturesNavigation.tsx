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
  Video, 
  Bug,
  Users,
  Presentation,
  FileText,
  Wand2,
  BookOpen,
  Youtube,
  Share2,
  Upload
} from 'lucide-react';

const featuresItems = [
  {
    title: 'Screen Recording',
    description: 'Record your screen with professional quality',
    icon: Video,
    href: '/features/screen-recording'
  },
  {
    title: 'Bug Capture',
    description: 'Capture and report bugs efficiently',
    icon: Bug,
    href: '/features/bug-capture'
  },
  {
    title: 'Teams Meeting Recording',
    description: 'Record Microsoft Teams meetings',
    icon: Users,
    href: '/features/teams-meeting-recording'
  },
  {
    title: 'Video Presentation',
    description: 'Create engaging video presentations',
    icon: Presentation,
    href: '/features/video-presentation'
  },
  {
    title: 'Transcription',
    description: 'Convert speech to text automatically',
    icon: FileText,
    href: '/features/transcription'
  },
  {
    title: 'AI Video Generation',
    description: 'Generate videos using artificial intelligence',
    icon: Wand2,
    href: '/features/ai-video-generation'
  },
  {
    title: 'Step by Step Guide Creation',
    description: 'Create interactive tutorials and guides',
    icon: BookOpen,
    href: '/features/step-by-step-guide'
  },
  {
    title: 'Google Meet Recording',
    description: 'Record Google Meet sessions',
    icon: Video,
    href: '/features/google-meet-recording'
  },
  {
    title: 'Zoom Meeting Recording',
    description: 'Record Zoom meetings seamlessly',
    icon: Video,
    href: '/features/zoom-meeting-recording'
  },
  {
    title: 'Embedding a Video',
    description: 'Embed videos in websites and platforms',
    icon: Share2,
    href: '/features/embedding-video'
  },
  {
    title: 'Video Sharing',
    description: 'Share videos across multiple platforms',
    icon: Share2,
    href: '/features/video-sharing'
  },
  {
    title: 'Submit Bug to Jira',
    description: 'Integrate bug reports with Jira',
    icon: Bug,
    href: '/features/submit-bug-jira'
  },
  {
    title: 'GitHub PR',
    description: 'Create GitHub pull requests with videos',
    icon: FileText,
    href: '/features/github-pr'
  },
  {
    title: 'Video Engagement Metrics',
    description: 'Track video performance and analytics',
    icon: FileText,
    href: '/features/video-engagement-metrics'
  },
  {
    title: 'React and Comment on Shared Video',
    description: 'Interactive feedback on shared videos',
    icon: Share2,
    href: '/features/react-comment-video'
  },
  {
    title: 'How to Upload Video to YouTube',
    description: 'Guide for YouTube video uploads',
    icon: Youtube,
    href: '/features/upload-video-youtube'
  }
];

export function FeaturesNavigation() {
  const navigate = useNavigate();

  const handleFeatureClick = (href: string) => {
    navigate(href);
  };

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-xs md:text-sm font-medium">
            Features
          </NavigationMenuTrigger>
          <NavigationMenuContent className="w-[800px] bg-white border border-gray-200 shadow-lg rounded-md p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {featuresItems.map((item) => (
                <Card 
                  key={item.title}
                  className="cursor-pointer hover:shadow-md transition-all duration-200 hover:bg-gray-50 border-gray-200 group min-w-0"
                  onClick={() => handleFeatureClick(item.href)}
                >
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3">
                      <div className="p-1.5 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white group-hover:scale-110 transition-transform flex-shrink-0">
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
