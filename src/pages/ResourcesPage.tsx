
import React from 'react';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Download, Chrome, Monitor, Apple, Laptop, Play, FileArchive } from 'lucide-react';

const screenRecordingOptions = [
  {
    platform: 'Chrome',
    icon: Chrome,
    version: 'v2.1.0',
    size: '2.3 MB'
  },
  {
    platform: 'Edge',
    icon: Monitor,
    version: 'v2.1.0',
    size: '2.4 MB'
  }
];

const stepsRecorderOptions = [
  {
    platform: 'Chrome',
    icon: Chrome,
    version: 'v1.5.2',
    size: '1.8 MB'
  },
  {
    platform: 'Edge',
    icon: Monitor,
    version: 'v1.5.2',
    size: '1.9 MB'
  }
];

const desktopOptions = [
  {
    platform: 'macOS',
    icon: Apple,
    version: 'v3.2.1',
    size: '45.7 MB',
    requirements: 'macOS 10.14 or later'
  },
  {
    platform: 'Windows',
    icon: Laptop,
    version: 'v3.2.1',
    size: '52.3 MB',
    requirements: 'Windows 10 or later'
  }
];

const enterpriseOptions = [
  {
    platform: 'Chrome',
    icon: Chrome,
    version: 'v2.5.0',
    size: '3.2 MB'
  },
  {
    platform: 'Edge',
    icon: Monitor,
    version: 'v2.5.0',
    size: '3.3 MB'
  },
  {
    platform: 'macOS',
    icon: Apple,
    version: 'v4.0.1',
    size: '62 MB'
  },
  {
    platform: 'Windows',
    icon: Laptop,
    version: 'v4.0.1',
    size: '68 MB'
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

  const handleDownload = (platform: string, type: string) => {
    console.log(`Downloading ${type} for ${platform}`);
  };

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

        {/* Main Download Cards */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            
            {/* Screen Recording Card */}
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold mb-2">Screen Recording</CardTitle>
                <CardDescription className="text-gray-600">
                  Record your browser tabs, entire screen, or application windows with our powerful extensions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {screenRecordingOptions.map((option) => {
                    const IconComponent = option.icon;
                    return (
                      <div key={option.platform} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <div className="flex items-center gap-3">
                          <IconComponent className="w-6 h-6 text-gray-700" />
                          <div>
                            <div className="font-medium">{option.platform} Extension</div>
                            <div className="text-sm text-gray-500">{option.version} • {option.size}</div>
                          </div>
                        </div>
                        <Button 
                          size="sm" 
                          className="bg-blue-600 hover:bg-blue-700"
                          onClick={() => handleDownload(option.platform, 'Screen Recorder')}
                        >
                          <Download className="w-4 h-4 mr-1" />
                          Download
                        </Button>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Steps Recorder Card */}
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-green-500 to-teal-500 rounded-full">
                    <FileArchive className="w-8 h-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold mb-2">Steps Recorder</CardTitle>
                <CardDescription className="text-gray-600">
                  Create interactive demos and step-by-step tutorials with our specialized recording extensions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {stepsRecorderOptions.map((option) => {
                    const IconComponent = option.icon;
                    return (
                      <div key={option.platform} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <div className="flex items-center gap-3">
                          <IconComponent className="w-6 h-6 text-gray-700" />
                          <div>
                            <div className="font-medium">{option.platform} Extension</div>
                            <div className="text-sm text-gray-500">{option.version} • {option.size}</div>
                          </div>
                        </div>
                        <Button 
                          size="sm" 
                          className="bg-green-600 hover:bg-green-700"
                          onClick={() => handleDownload(option.platform, 'Steps Recorder')}
                        >
                          <Download className="w-4 h-4 mr-1" />
                          Download
                        </Button>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Desktop Applications Card */}
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full">
                    <Laptop className="w-8 h-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold mb-2">Desktop Applications</CardTitle>
                <CardDescription className="text-gray-600">
                  Full-featured desktop applications with advanced recording capabilities for Windows and macOS
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {desktopOptions.map((option) => {
                    const IconComponent = option.icon;
                    return (
                      <div key={option.platform} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <IconComponent className="w-6 h-6 text-gray-700" />
                            <div>
                              <div className="font-medium">{option.platform} App</div>
                              <div className="text-sm text-gray-500">{option.version} • {option.size}</div>
                            </div>
                          </div>
                          <Button 
                            size="sm" 
                            className="bg-orange-600 hover:bg-orange-700"
                            onClick={() => handleDownload(option.platform, 'Desktop App')}
                          >
                            <Download className="w-4 h-4 mr-1" />
                            Download
                          </Button>
                        </div>
                        {option.requirements && (
                          <div className="text-xs text-gray-600 ml-9">
                            <strong>Requirements:</strong> {option.requirements}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Enterprise Solutions Card */}
            <Card className="hover:shadow-xl transition-all duration-300 relative">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full">
                    <FileArchive className="w-8 h-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold mb-2">Enterprise Solutions</CardTitle>
                <CardDescription className="text-gray-600">
                  Professional-grade solutions for businesses with advanced security, compliance, and team management
                </CardDescription>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 font-semibold">
                    Coming Soon
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {enterpriseOptions.map((option) => {
                    const IconComponent = option.icon;
                    return (
                      <div key={option.platform} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg opacity-75">
                        <div className="flex items-center gap-3">
                          <IconComponent className="w-6 h-6 text-gray-700" />
                          <div>
                            <div className="font-medium">{option.platform} Enterprise</div>
                            <div className="text-sm text-gray-500">{option.version} • {option.size}</div>
                          </div>
                        </div>
                        <Button 
                          size="sm" 
                          variant="outline"
                          disabled
                          className="cursor-not-allowed"
                        >
                          Coming Soon
                        </Button>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

          </div>
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
