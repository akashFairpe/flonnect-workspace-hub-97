
import React from 'react';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Download, Chrome, Monitor, Apple, Laptop, Play, FileArchive } from 'lucide-react';

const screenRecordingExtensions = [
  {
    id: 'chrome-extension',
    title: 'Chrome Extension',
    description: 'Record your browser tabs, entire screen, or application windows directly from Chrome',
    icon: Chrome,
    platform: 'Chrome',
    version: 'v2.1.0',
    size: '2.3 MB',
    downloadUrl: '#',
    features: ['Tab Recording', 'Screen Capture', 'Audio Recording', 'Easy Sharing']
  },
  {
    id: 'edge-addon',
    title: 'Microsoft Edge Add-on',
    description: 'Full-featured screen recorder for Microsoft Edge browser with advanced features',
    icon: Monitor,
    platform: 'Edge',
    version: 'v2.1.0',
    size: '2.4 MB',
    downloadUrl: '#',
    features: ['Screen Recording', 'Webcam Integration', 'Voice Recording', 'Cloud Sync']
  }
];

const stepsRecorderExtensions = [
  {
    id: 'steps-recorder-chrome',
    title: 'Steps Recorder - Chrome',
    description: 'Interactive demo creator for Chrome that captures user actions and creates step-by-step tutorials',
    icon: Chrome,
    platform: 'Chrome',
    version: 'v1.5.2',
    size: '1.8 MB',
    downloadUrl: '#',
    features: ['Action Capture', 'Auto Screenshots', 'Interactive Demos', 'Tutorial Creation']
  },
  {
    id: 'steps-recorder-edge',
    title: 'Steps Recorder - Edge',
    description: 'Interactive demo creator for Edge that captures user actions and creates step-by-step tutorials',
    icon: Monitor,
    platform: 'Edge',
    version: 'v1.5.2',
    size: '1.9 MB',
    downloadUrl: '#',
    features: ['Action Capture', 'Auto Screenshots', 'Interactive Demos', 'Tutorial Creation']
  }
];

const desktopApplications = [
  {
    id: 'mac-app',
    title: 'macOS Application',
    description: 'Native macOS app with full system integration and advanced recording capabilities',
    icon: Apple,
    platform: 'macOS',
    version: 'v3.2.1',
    size: '45.7 MB',
    downloadUrl: '#',
    features: ['System Audio', 'Retina Support', 'Touch Bar', 'Menu Bar Integration'],
    requirements: 'macOS 10.14 or later'
  },
  {
    id: 'windows-app',
    title: 'Windows Application',
    description: 'Powerful Windows desktop application with enterprise-grade features and performance',
    icon: Laptop,
    platform: 'Windows',
    version: 'v3.2.1',
    size: '52.3 MB',
    downloadUrl: '#',
    features: ['DirectX Support', 'Hardware Acceleration', 'Multi-Monitor', 'Scheduled Recording'],
    requirements: 'Windows 10 or later'
  }
];

const enterpriseSolutions = [
  {
    id: 'enterprise-chrome',
    title: 'Flonnect Enterprise - Chrome',
    description: 'Enterprise-grade Chrome extension with advanced security, compliance, and team management features',
    icon: Chrome,
    platform: 'Chrome Enterprise',
    version: 'v2.5.0',
    size: '3.2 MB',
    downloadUrl: '#',
    features: ['SSO Integration', 'Admin Dashboard', 'Compliance Reports', 'Team Analytics']
  },
  {
    id: 'enterprise-edge',
    title: 'Flonnect Enterprise - Edge',
    description: 'Enterprise-grade Edge addon with advanced security, compliance, and team management features',
    icon: Monitor,
    platform: 'Edge Enterprise',
    version: 'v2.5.0',
    size: '3.3 MB',
    downloadUrl: '#',
    features: ['SSO Integration', 'Admin Dashboard', 'Compliance Reports', 'Team Analytics']
  },
  {
    id: 'enterprise-desktop',
    title: 'Flonnect Enterprise Desktop',
    description: 'Comprehensive enterprise desktop solution for large organizations with centralized management',
    icon: FileArchive,
    platform: 'Windows/macOS',
    version: 'v4.0.1',
    size: '125 MB',
    downloadUrl: '#',
    features: ['Centralized Management', 'Policy Enforcement', 'Audit Trails', 'Custom Branding']
  }
];

export default function ResourcesPage() {
  React.useEffect(() => {
    document.title = 'Downloads & Resources | Flonnect Screen Recorder';
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Download Flonnect screen recorder for Chrome, Edge, macOS, Windows. Get browser extensions, desktop apps, and enterprise solutions. Free downloads available.');
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'screen recorder download, Chrome extension, Edge addon, macOS app, Windows software, browser recording, desktop recording, enterprise solution, free download');
    }
  }, []);

  const handleDownload = (item: any) => {
    console.log(`Downloading ${item.title}`);
  };

  const renderDownloadSection = (title: string, description: string, items: any[]) => (
    <div className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{title}</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">{description}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => {
          const IconComponent = item.icon;
          return (
            <Card key={item.id} className="hover:shadow-lg transition-all duration-200 hover:scale-105">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <Badge variant="secondary" className="text-xs">{item.platform}</Badge>
                    <div className="text-xs text-gray-500 mt-1">{item.version}</div>
                  </div>
                </div>
                <CardTitle className="text-xl font-semibold mb-2">{item.title}</CardTitle>
                <CardDescription className="text-sm text-gray-600 mb-4">
                  {item.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-sm mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-1">
                      {item.features.map((feature: string, index: number) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {item.requirements && (
                    <div className="text-xs text-gray-600">
                      <strong>Requirements:</strong> {item.requirements}
                    </div>
                  )}
                  
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <span>Size: {item.size}</span>
                    <span>Free Download</span>
                  </div>
                  
                  <Button 
                    className="w-full bg-purple-600 hover:bg-purple-700"
                    onClick={() => handleDownload(item)}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download {item.platform}
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
              <Download className="w-8 h-8 sm:w-12 sm:h-12 text-white" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            Downloads & <span className="text-purple-600">Resources</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Get the Flonnect screen recorder for your platform. Choose from browser extensions, desktop applications, and enterprise solutions.
          </p>
        </div>

        {/* Downloads Sections */}
        <div className="max-w-7xl mx-auto">
          {renderDownloadSection(
            "Screen Recording Extensions",
            "Record your browser tabs, entire screen, or application windows with our powerful browser extensions.",
            screenRecordingExtensions
          )}

          {renderDownloadSection(
            "Steps Recorder Extensions", 
            "Create interactive demos and step-by-step tutorials with our specialized recording extensions.",
            stepsRecorderExtensions
          )}

          {renderDownloadSection(
            "Desktop Applications",
            "Full-featured desktop applications with advanced recording capabilities for Windows and macOS.",
            desktopApplications
          )}

          {renderDownloadSection(
            "Enterprise Solutions",
            "Professional-grade solutions for businesses with advanced security, compliance, and team management features.",
            enterpriseSolutions
          )}
        </div>

        {/* Additional Resources */}
        <div className="max-w-4xl mx-auto mt-16">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Need Help Getting Started?</CardTitle>
              <CardDescription>
                Check out our comprehensive tutorials and documentation to make the most of Flonnect screen recorder.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                  <Play className="w-6 h-6" />
                  <span>Video Tutorials</span>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                  <FileArchive className="w-6 h-6" />
                  <span>Documentation</span>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                  <Monitor className="w-6 h-6" />
                  <span>Live Demo</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
