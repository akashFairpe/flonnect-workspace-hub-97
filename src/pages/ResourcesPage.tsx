import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Header } from '@/components/Header';
import { Users, Download, BookOpen, Video, Bug, Share2 } from 'lucide-react';

const ResourcesPage = () => {
  const navigate = useNavigate();

  // SEO Setup
  React.useEffect(() => {
    document.title = 'Resources & Downloads - Flonnect | Video Recording Tools & Guides';
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Access Flonnect resources including use cases, downloads, guides, and tutorials for screen recording, bug reporting, and video collaboration tools.');
    } else {
      const newMetaDesc = document.createElement('meta');
      newMetaDesc.name = 'description';
      newMetaDesc.content = 'Access Flonnect resources including use cases, downloads, guides, and tutorials for screen recording, bug reporting, and video collaboration tools.';
      document.head.appendChild(newMetaDesc);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'video recording resources, screen recording guides, bug reporting tutorials, Flonnect downloads, video collaboration tools, use cases');
    } else {
      const newMetaKeywords = document.createElement('meta');
      newMetaKeywords.name = 'keywords';
      newMetaKeywords.content = 'video recording resources, screen recording guides, bug reporting tutorials, Flonnect downloads, video collaboration tools, use cases';
      document.head.appendChild(newMetaKeywords);
    }

    // Structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Resources & Downloads - Flonnect",
      "description": "Access comprehensive resources for Flonnect video recording tools including use cases, downloads, and tutorials.",
      "url": "https://flonnect.com/resources",
      "mainEntity": {
        "@type": "ItemList",
        "itemListElement": [
          {
            "@type": "CreativeWork",
            "name": "Use Cases",
            "description": "Industry-specific use cases for video recording and collaboration"
          },
          {
            "@type": "SoftwareApplication", 
            "name": "Downloads",
            "description": "Latest Flonnect tools and browser extensions"
          }
        ]
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript && existingScript.textContent?.includes('Resources & Downloads')) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  const mainResources = [
    {
      title: 'Use Cases',
      description: 'Discover how different industries and professionals use Flonnect for screen recording, bug reporting, and demo creation',
      icon: Users,
      path: '/resources/usecases',
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Downloads',
      description: 'Get the latest versions of Flonnect tools, browser extensions, and desktop applications',
      icon: Download,
      path: '/resources/downloads',
      color: 'from-green-500 to-teal-600'
    }
  ];

  const quickLinks = [
    {
      title: 'Getting Started Guide',
      description: 'New to Flonnect? Learn the basics',
      icon: BookOpen,
      path: '/how-to-record'
    },
    {
      title: 'Video Tutorials',
      description: 'Watch step-by-step tutorials',
      icon: Video,
      path: '/how-to-share'
    },
    {
      title: 'Bug Reporting Guide',
      description: 'Learn to capture bugs effectively',
      icon: Bug,
      path: '/how-to-record-bugs'
    },
    {
      title: 'Sharing & Collaboration',
      description: 'Share recordings with your team',
      icon: Share2,
      path: '/one-click-share'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent mb-4 sm:mb-6">
            Resources & Downloads
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Everything you need to get the most out of Flonnect. Explore use cases, download tools, and learn best practices.
          </p>
        </div>

        {/* Main Resources */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {mainResources.map((resource) => (
            <Card 
              key={resource.title}
              className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20"
              onClick={() => navigate(resource.path)}
            >
              <CardHeader className="pb-3 sm:pb-4">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className={`p-3 sm:p-4 rounded-xl bg-gradient-to-r ${resource.color} text-white group-hover:scale-110 transition-transform flex-shrink-0`}>
                    <resource.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <div>
                    <CardTitle className="text-xl sm:text-2xl group-hover:text-primary transition-colors">
                      {resource.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm sm:text-base mb-4 sm:mb-6">
                  {resource.description}
                </CardDescription>
                <Button className="w-full group-hover:bg-primary/90 transition-colors text-sm sm:text-base">
                  Explore {resource.title}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Links */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Quick Links</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {quickLinks.map((link) => (
              <Card 
                key={link.title}
                className="group cursor-pointer hover:shadow-lg transition-all duration-200"
                onClick={() => navigate(link.path)}
              >
                <CardHeader className="text-center pb-2">
                  <div className="mx-auto p-2 sm:p-3 rounded-lg bg-gradient-to-r from-primary/10 to-primary/5 group-hover:from-primary group-hover:to-primary/80 group-hover:text-white transition-all">
                    <link.icon className="w-5 h-5 sm:w-6 sm:h-6 mx-auto" />
                  </div>
                  <CardTitle className="text-base sm:text-lg group-hover:text-primary transition-colors">
                    {link.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center pt-0">
                  <CardDescription className="text-xs sm:text-sm">
                    {link.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary to-primary/80 rounded-xl sm:rounded-2xl p-8 sm:p-12 text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
            Need Help Getting Started?
          </h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto px-4">
            Our team is here to help you make the most of Flonnect's powerful recording and collaboration features.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
            <Button size="lg" variant="secondary" onClick={() => navigate('/workspace')} className="text-sm sm:text-base">
              Start Recording
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-sm sm:text-base">
              Contact Support
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;