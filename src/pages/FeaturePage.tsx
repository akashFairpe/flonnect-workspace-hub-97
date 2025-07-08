import React from 'react';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { 
  Video, 
  Camera, 
  Mic, 
  Monitor, 
  Users, 
  FileText, 
  Share2, 
  Bug, 
  Play, 
  Presentation,
  MousePointer,
  Volume2,
  MessageSquare,
  Upload,
  Mail,
  GitPullRequest,
  Zap
} from 'lucide-react';

const featureIcons = {
  'Google Meeting Recorder': Users,
  'Microsoft Teams Recording': Users,
  'Zoom Meeting Recording': Users,
  'Minutes of Meeting': FileText,
  'Transcription': FileText,
  'Screen Recording': Monitor,
  'Screen + Camera Recording': Video,
  'Presentation Recording': Presentation,
  'Video Presentation': Play,
  'Camera Recording': Camera,
  'Annotation While Recording': MousePointer,
  'Step Recorder': Zap,
  'HTML Interactive Demo Recording': Monitor,
  'System Audio Recording': Volume2,
  'Mic Recording': Mic,
  'Movable Camera': Camera,
  'Share Video with One Click': Share2,
  'React/Comments on Videos': MessageSquare,
  'Upload Video to YouTube': Upload,
  'Attach Video in Email': Mail,
  'Screenshot Bug Reporting': Bug,
  'Video Bug Recording': Bug,
  'Push to Jira': GitPullRequest,
  'Bug Capture': Bug,
  'Add Video in Bitbucket/GitHub PR': GitPullRequest
};

const featureCategories = [
  {
    title: 'Meeting Recording & Collaboration',
    description: 'Record and collaborate on meetings across all platforms',
    color: 'text-blue-600',
    bg: 'bg-blue-100',
    features: [
      { name: 'Google Meeting Recorder', path: '/features/google-meeting-recorder', description: 'Record Google Meet sessions with crystal clear quality' },
      { name: 'Microsoft Teams Recording', path: '/features/teams-meeting-recording', description: 'Capture Teams meetings with audio and video' },
      { name: 'Zoom Meeting Recording', path: '/features/zoom-meeting-recording', description: 'Record Zoom calls for future reference' }
    ]
  },
  {
    title: 'Content Generation & Documentation',
    description: 'Create and document content automatically',
    color: 'text-green-600',
    bg: 'bg-green-100',
    features: [
      { name: 'Minutes of Meeting', path: '/features/minutes-of-meeting', description: 'Auto-generate meeting minutes from recordings' },
      { name: 'Transcription', path: '/features/transcription', description: 'Convert audio and video to text instantly' }
    ]
  },
  {
    title: 'Screen & Camera Recording',
    description: 'Professional screen and camera recording solutions',
    color: 'text-purple-600',
    bg: 'bg-purple-100',
    features: [
      { name: 'Screen Recording', path: '/features/screen-recording', description: 'Record your screen in high definition' },
      { name: 'Screen + Camera Recording', path: '/features/screen-camera-recording', description: 'Combine screen and camera for presentations' },
      { name: 'Presentation Recording', path: '/features/presentation-recording', description: 'Create professional presentation videos' },
      { name: 'Video Presentation', path: '/features/video-presentation', description: 'Turn slides into engaging video content' },
      { name: 'Camera Recording', path: '/features/camera-recording', description: 'Record high-quality webcam videos' }
    ]
  },
  {
    title: 'Specialized Recording & Enhancement',
    description: 'Advanced recording features for specific needs',
    color: 'text-orange-600',
    bg: 'bg-orange-100',
    features: [
      { name: 'Annotation While Recording', path: '/features/annotation-recording', description: 'Add annotations during recording' },
      { name: 'Step Recorder', path: '/features/step-recorder', description: 'Record step-by-step processes automatically' },
      { name: 'HTML Interactive Demo Recording', path: '/features/html-demo-recording', description: 'Create interactive HTML demos' },
      { name: 'System Audio Recording', path: '/features/system-audio-recording', description: 'Capture system audio with recordings' },
      { name: 'Mic Recording', path: '/features/mic-recording', description: 'High-quality microphone recording' },
      { name: 'Movable Camera', path: '/features/movable-camera', description: 'Flexible camera positioning during recording' }
    ]
  },
  {
    title: 'Sharing & Integration',
    description: 'Share and integrate your recordings everywhere',
    color: 'text-cyan-600',
    bg: 'bg-cyan-100',
    features: [
      { name: 'Share Video with One Click', path: '/features/one-click-share', description: 'Instantly share videos with a single click' },
      { name: 'React/Comments on Videos', path: '/features/video-comments', description: 'Add reactions and comments to videos' },
      { name: 'Upload Video to YouTube', path: '/features/youtube-upload', description: 'Direct upload to YouTube platform' },
      { name: 'Attach Video in Email', path: '/features/email-video', description: 'Embed videos directly in emails' }
    ]
  },
  {
    title: 'Bug Reporting & Development Workflow',
    description: 'Streamline development with visual bug reporting',
    color: 'text-red-600',
    bg: 'bg-red-100',
    features: [
      { name: 'Screenshot Bug Reporting', path: '/features/screenshot-bug-reporting', description: 'Report bugs with annotated screenshots' },
      { name: 'Video Bug Recording', path: '/features/video-bug-recording', description: 'Record bugs in action for clear reproduction' },
      { name: 'Push to Jira', path: '/features/push-to-jira', description: 'Send bug reports directly to Jira' },
      { name: 'Bug Capture', path: '/features/bug-capture', description: 'Comprehensive bug capture workflows' },
      { name: 'Add Video in Bitbucket/GitHub PR', path: '/features/bitbucket-github-pr', description: 'Attach videos to pull requests' }
    ]
  }
];

export default function FeaturePage() {
  const navigate = useNavigate();

  React.useEffect(() => {
    document.title = 'All Features - Flonnect | Complete Video Recording & Collaboration Suite';
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Explore all Flonnect features including screen recording, meeting recording, bug reporting, video sharing, and more. Professional video solutions for teams and individuals.');
    } else {
      const newMetaDesc = document.createElement('meta');
      newMetaDesc.name = 'description';
      newMetaDesc.content = 'Explore all Flonnect features including screen recording, meeting recording, bug reporting, video sharing, and more. Professional video solutions for teams and individuals.';
      document.head.appendChild(newMetaDesc);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'video recording features, screen recording, meeting recording, bug reporting, video sharing, presentation recording, transcription, video collaboration');
    } else {
      const newMetaKeywords = document.createElement('meta');
      newMetaKeywords.name = 'keywords';
      newMetaKeywords.content = 'video recording features, screen recording, meeting recording, bug reporting, video sharing, presentation recording, transcription, video collaboration';
      document.head.appendChild(newMetaKeywords);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-200">
            Complete Feature Suite
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            All Flonnect Features
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Discover our comprehensive suite of video recording, collaboration, and sharing tools designed for modern teams and professionals.
          </p>
        </div>

        {/* Features by Category */}
        {featureCategories.map((category, categoryIndex) => (
          <section key={categoryIndex} className="mb-16">
            <div className="text-center mb-8">
              <div className={`inline-flex items-center justify-center w-12 h-12 ${category.bg} rounded-full mb-4`}>
                <div className={`w-6 h-6 ${category.color}`}>●</div>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                {category.title}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {category.description}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.features.map((feature, featureIndex) => {
                const FeatureIcon = featureIcons[feature.name as keyof typeof featureIcons] || Video;
                return (
                  <Card key={featureIndex} className="hover:shadow-lg transition-shadow group cursor-pointer" onClick={() => navigate(feature.path)}>
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`p-2 ${category.bg} rounded-lg group-hover:scale-110 transition-transform`}>
                          <FeatureIcon className={`w-5 h-5 ${category.color}`} />
                        </div>
                        <CardTitle className="text-lg">{feature.name}</CardTitle>
                      </div>
                      <CardDescription className="text-gray-600">
                        {feature.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" size="sm" className="w-full">
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl text-white">Ready to Get Started?</CardTitle>
              <CardDescription className="text-purple-100">
                Choose any feature to begin your video recording journey with Flonnect
              </CardDescription>
            </CardHeader>
            <CardContent className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                View Pricing
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}