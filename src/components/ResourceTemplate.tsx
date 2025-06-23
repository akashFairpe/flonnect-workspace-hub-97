
import React from 'react';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Clock, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ResourceStep {
  title: string;
  description: string;
  image?: string;
  videoUrl?: string;
  tips?: string[];
}

interface ResourceTemplateProps {
  title: string;
  description: string;
  category: string;
  estimatedReadTime: string;
  steps: ResourceStep[];
  relatedResources?: { title: string; url: string }[];
  seoKeywords: string;
  metaDescription: string;
}

export function ResourceTemplate({
  title,
  description,
  category,
  estimatedReadTime,
  steps,
  relatedResources = [],
  seoKeywords,
  metaDescription
}: ResourceTemplateProps) {
  // Set document title and meta description for SEO
  React.useEffect(() => {
    document.title = `${title} | Flonnect Resources`;
    
    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', metaDescription);
    }

    // Update keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', seoKeywords);
    }
  }, [title, metaDescription, seoKeywords]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Header />
      
      {/* Breadcrumb */}
      <nav className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center space-x-2 text-sm">
          <Link to="/" className="text-blue-600 hover:text-blue-800">Home</Link>
          <ArrowRight className="w-4 h-4 text-gray-400" />
          <Link to="/resources" className="text-blue-600 hover:text-blue-800">Resources</Link>
          <ArrowRight className="w-4 h-4 text-gray-400" />
          <span className="text-gray-600">{title}</span>
        </div>
      </nav>

      <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center gap-4 mb-6">
            <Badge variant="outline">{category}</Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {estimatedReadTime}
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <BookOpen className="w-3 h-3" />
              Resource Guide
            </Badge>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {title}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        {/* Resource Steps */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{step.title}</CardTitle>
                      <CardDescription className="text-base">
                        {step.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                {(step.image || step.videoUrl || step.tips) && (
                  <CardContent className="pt-0">
                    {step.videoUrl ? (
                      <div className="aspect-video rounded-lg overflow-hidden mb-4">
                        <video 
                          controls 
                          className="w-full h-full object-cover"
                          poster={step.image}
                        >
                          <source src={step.videoUrl} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    ) : step.image ? (
                      <div className="aspect-video rounded-lg overflow-hidden mb-4">
                        <img 
                          src={step.image} 
                          alt={step.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : null}
                    
                    {step.tips && step.tips.length > 0 && (
                      <div className="bg-blue-50 rounded-lg p-4">
                        <h4 className="font-semibold text-blue-900 mb-2">💡 Pro Tips:</h4>
                        <ul className="space-y-1">
                          {step.tips.map((tip, tipIndex) => (
                            <li key={tipIndex} className="text-blue-800 text-sm">
                              • {tip}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border">
            <h3 className="text-xl font-semibold mb-2">Ready to get started?</h3>
            <p className="text-gray-600 mb-4">
              Put this knowledge into practice with Flonnect's powerful recording tools.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
              Start Recording Now
            </Button>
          </div>
        </div>

        {/* Related Resources */}
        {relatedResources.length > 0 && (
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center">Related Resources</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedResources.map((resource, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      <Link 
                        to={resource.url}
                        className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
                      >
                        {resource.title}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
