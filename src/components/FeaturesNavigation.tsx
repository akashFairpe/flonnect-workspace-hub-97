
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { useNavigate } from 'react-router-dom';

const featureCategories = [
  {
    title: 'Meeting Recording & Collaboration',
    features: [
      { name: 'Google Meeting Recorder', path: '/features/google-meeting-recorder' },
      { name: 'Microsoft Teams Recording', path: '/features/teams-meeting-recording' },
      { name: 'Zoom Meeting Recording', path: '/features/zoom-meeting-recording' }
    ]
  },
  {
    title: 'Content Generation & Documentation',
    features: [
      { name: 'Minutes of Meeting', path: '/features/minutes-of-meeting' },
      { name: 'Transcription', path: '/features/transcription' }
    ]
  },
  {
    title: 'Screen & Camera Recording',
    features: [
      { name: 'Screen Recording', path: '/features/screen-recording' },
      { name: 'Screen + Camera Recording', path: '/features/screen-camera-recording' },
      { name: 'Presentation Recording', path: '/features/presentation-recording' },
      { name: 'Video Presentation', path: '/features/video-presentation' },
      { name: 'Camera Recording', path: '/features/camera-recording' }
    ]
  },
  {
    title: 'Specialized Recording & Enhancement',
    features: [
      { name: 'Annotation While Recording', path: '/features/annotation-recording' },
      { name: 'Step Recorder', path: '/features/step-recorder' },
      { name: 'HTML Interactive Demo Recording', path: '/features/html-demo-recording' },
      { name: 'System Audio Recording', path: '/features/system-audio-recording' },
      { name: 'Mic Recording', path: '/features/mic-recording' },
      { name: 'Movable Camera', path: '/features/movable-camera' }
    ]
  },
  {
    title: 'Sharing & Integration',
    features: [
      { name: 'Share Video with One Click', path: '/features/one-click-share' },
      { name: 'React/Comments on Videos', path: '/features/video-comments' },
      { name: 'Upload Video to YouTube', path: '/features/youtube-upload' },
      { name: 'Attach Video in Email', path: '/features/email-video' }
    ]
  },
  {
    title: 'Bug Reporting & Development Workflow',
    features: [
      { name: 'Screenshot Bug Reporting', path: '/features/screenshot-bug-reporting' },
      { name: 'Video Bug Recording', path: '/features/video-bug-recording' },
      { name: 'Push to Jira', path: '/features/push-to-jira' },
      { name: 'Bug Capture', path: '/features/bug-capture' },
      { name: 'Add Video in Bitbucket/GitHub PR', path: '/features/bitbucket-github-pr' }
    ]
  }
];

export function FeaturesNavigation() {
  const navigate = useNavigate();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-xs sm:text-sm bg-transparent hover:bg-gray-100">
            Features
            <ChevronDown className="ml-1 h-3 w-3" />
          </NavigationMenuTrigger>
          <NavigationMenuContent className="min-w-[800px] p-6 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featureCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="space-y-3">
                  <h3 className="font-semibold text-sm text-gray-900 border-b border-gray-200 pb-2">
                    {category.title}
                  </h3>
                  <div className="space-y-2">
                    {category.features.map((feature, featureIndex) => (
                      <Button
                        key={featureIndex}
                        variant="ghost"
                        size="sm"
                        onClick={() => navigate(feature.path)}
                        className="w-full text-left justify-start h-auto p-2 text-xs text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                      >
                        {feature.name}
                      </Button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
