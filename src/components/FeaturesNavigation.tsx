
import React, { useState } from 'react';
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
  Users,
  FileText,
  Monitor,
  Camera,
  Wand2,
  Share2,
  Bug,
  Mic,
  Upload,
  MessageSquare,
  Youtube,
  Mail,
  Eye,
  MousePointer,
  Code,
  Speaker,
  Move
} from 'lucide-react';

const featuresData = {
  'Meeting Recording & Collaboration': [
    {
      title: 'Google Meeting Recorder',
      description: 'Effortlessly capture your Google Meet sessions with high-quality recordings',
      icon: Video,
      href: '/features/google-meeting-recorder'
    },
    {
      title: 'Microsoft Teams Meet Recording',
      description: 'Securely record your Microsoft Teams meetings',
      icon: Users,
      href: '/features/teams-meeting-recording'
    },
    {
      title: 'Zoom Meeting Recording',
      description: 'Capture your Zoom meetings effortlessly',
      icon: Video,
      href: '/features/zoom-meeting-recording'
    }
  ],
  'Content Generation & Documentation': [
    {
      title: 'Minutes of Meeting',
      description: 'Automate the creation of accurate meeting minutes',
      icon: FileText,
      href: '/features/minutes-of-meeting'
    },
    {
      title: 'Transcription',
      description: 'Convert spoken words into accurate, searchable text',
      icon: FileText,
      href: '/features/transcription'
    }
  ],
  'Screen & Camera Recording': [
    {
      title: 'Screen Recording',
      description: 'Capture your screen activity with professional quality',
      icon: Monitor,
      href: '/features/screen-recording'
    },
    {
      title: 'Screen + Camera Recording',
      description: 'Record your screen and webcam simultaneously',
      icon: Camera,
      href: '/features/screen-camera-recording'
    },
    {
      title: 'Presentation Recording',
      description: 'Transform presentations into engaging video content',
      icon: Video,
      href: '/features/presentation-recording'
    },
    {
      title: 'Video Presentation',
      description: 'Elevate communication with professional video presentations',
      icon: Video,
      href: '/features/video-presentation'
    },
    {
      title: 'Camera Recording',
      description: 'Record high-quality video directly from your webcam',
      icon: Camera,
      href: '/features/camera-recording'
    }
  ],
  'Specialized Recording & Enhancement': [
    {
      title: 'Annotation While Recording',
      description: 'Enhance recordings with real-time annotations',
      icon: Wand2,
      href: '/features/annotation-while-recording'
    },
    {
      title: 'Step Recorder',
      description: 'Automatically document every click and action',
      icon: MousePointer,
      href: '/features/step-recorder'
    },
    {
      title: 'HTML Interactive Demo Recording',
      description: 'Create interactive demos of web applications',
      icon: Code,
      href: '/features/html-interactive-demo'
    },
    {
      title: 'System Audio Recording',
      description: 'Capture all audio playing from your computer',
      icon: Speaker,
      href: '/features/system-audio-recording'
    },
    {
      title: 'Mic Recording',
      description: 'Record crisp audio directly from your microphone',
      icon: Mic,
      href: '/features/mic-recording'
    },
    {
      title: 'Movable Camera',
      description: 'Flexibly position your webcam feed anywhere on screen',
      icon: Move,
      href: '/features/movable-camera'
    }
  ],
  'Sharing & Integration': [
    {
      title: 'Share Video with One Click',
      description: 'Instantly share recorded videos with colleagues and clients',
      icon: Share2,
      href: '/features/share-video-one-click'
    },
    {
      title: 'React/Comments on Videos',
      description: 'Foster engaging discussions with in-line reactions',
      icon: MessageSquare,
      href: '/features/react-comments-videos'
    },
    {
      title: 'Upload Video to YouTube',
      description: 'Directly upload videos to YouTube from Flonnect',
      icon: Youtube,
      href: '/features/upload-video-youtube'
    },
    {
      title: 'Attach Video in Email',
      description: 'Embed videos directly within email communications',
      icon: Mail,
      href: '/features/attach-video-email'
    }
  ],
  'Bug Reporting & Development Workflow': [
    {
      title: 'Screenshot Bug Reporting',
      description: 'Capture and annotate screenshots for clear bug reports',
      icon: Eye,
      href: '/features/screenshot-bug-reporting'
    },
    {
      title: 'Video Bug Recording',
      description: 'Record detailed video demonstrations of bugs',
      icon: Bug,
      href: '/features/video-bug-recording'
    },
    {
      title: 'Push to Jira',
      description: 'Integrate bug reports directly with Jira',
      icon: Upload,
      href: '/features/push-to-jira'
    }
  ]
};

export function FeaturesNavigation() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleFeatureClick = (href: string) => {
    navigate(href);
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-xs md:text-sm font-medium">
            Features
          </NavigationMenuTrigger>
          <NavigationMenuContent className="w-[900px] bg-white border border-gray-200 shadow-lg rounded-md p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Categories List */}
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
                {Object.keys(featuresData).map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryClick(category)}
                    onMouseEnter={() => setSelectedCategory(category)}
                    className={`w-full text-left p-3 rounded-lg transition-colors duration-200 ${
                      selectedCategory === category
                        ? 'bg-purple-50 text-purple-700 border border-purple-200'
                        : 'hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <span className="text-sm font-medium">{category}</span>
                    <span className="block text-xs text-gray-500 mt-1">
                      {featuresData[category].length} features
                    </span>
                  </button>
                ))}
              </div>

              {/* Features List */}
              <div className="lg:col-span-2">
                {selectedCategory && (
                  <>
                    <h3 className="font-semibold text-gray-900 mb-4">{selectedCategory}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-96 overflow-y-auto">
                      {featuresData[selectedCategory].map((feature) => (
                        <Card 
                          key={feature.title}
                          className="cursor-pointer hover:shadow-md transition-all duration-200 hover:bg-gray-50 border-gray-200 group"
                          onClick={() => handleFeatureClick(feature.href)}
                        >
                          <CardHeader className="pb-2">
                            <div className="flex items-start gap-3">
                              <div className="p-1.5 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white group-hover:scale-110 transition-transform flex-shrink-0">
                                <feature.icon className="w-4 h-4" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <CardTitle className="text-sm font-medium group-hover:text-primary transition-colors line-clamp-2">
                                  {feature.title}
                                </CardTitle>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent className="pt-0 pb-3">
                            <p className="text-xs text-gray-600 line-clamp-2">
                              {feature.description}
                            </p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </>
                )}
                
                {!selectedCategory && (
                  <div className="flex items-center justify-center h-48 text-gray-500">
                    <div className="text-center">
                      <Monitor className="w-8 h-8 mx-auto mb-2 text-purple-400" />
                      <p className="text-sm">Hover over a category to see features</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
