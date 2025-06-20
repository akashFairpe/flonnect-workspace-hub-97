
import React from 'react';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Clock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TutorialStep {
  title: string;
  description: string;
  image?: string;
  videoUrl?: string;
}

interface TutorialTemplateProps {
  title: string;
  description: string;
  estimatedTime: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
  steps: TutorialStep[];
  relatedTutorials?: { title: string; url: string }[];
  seoKeywords: string;
  metaDescription: string;
}

export function TutorialTemplate({
  title,
  description,
  estimatedTime,
  difficulty,
  category,
  steps,
  relatedTutorials = [],
  seoKeywords,
  metaDescription
}: TutorialTemplateProps) {
  // Set document title and meta description for SEO
  React.useEffect(() => {
    document.title = `${title} | Flonnect Screen Recorder Tutorial`;
    
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

  const getDifficultyColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <Header />
      
      {/* Breadcrumb */}
      <nav className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center space-x-2 text-sm">
          <Link to="/" className="text-purple-600 hover:text-purple-800">Home</Link>
          <ArrowRight className="w-4 h-4 text-gray-400" />
          <Link to="/tutorials" className="text-purple-600 hover:text-purple-800">Tutorials</Link>
          <ArrowRight className="w-4 h-4 text-gray-400" />
          <span className="text-gray-600">{title}</span>
        </div>
      </nav>

      <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center gap-4 mb-6">
            <Badge className={getDifficultyColor(difficulty)}>{difficulty}</Badge>
            <Badge variant="outline">{category}</Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {estimatedTime}
            </Badge>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {title}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        {/* Tutorial Steps */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-bold mb-8 text-center">Step-by-Step Guide</h2>
          <div className="space-y-8">
            {steps.map((step, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-semibold">
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
                {(step.image || step.videoUrl) && (
                  <CardContent className="pt-0">
                    {step.videoUrl ? (
                      <div className="aspect-video rounded-lg overflow-hidden">
                        <video 
                          controls 
                          className="w-full h-full object-cover"
                          poster={step.image}
                        >
                          <source src={step.videoUrl} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    ) : step.image && (
                      <div className="aspect-video rounded-lg overflow-hidden">
                        <img 
                          src={step.image} 
                          alt={step.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Completion Message */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="p-6 bg-green-50 rounded-lg border border-green-200">
            <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-green-800 mb-2">
              Congratulations! You've completed this tutorial.
            </h3>
            <p className="text-green-700">
              You now know how to {title.toLowerCase()}. Practice these steps to become more proficient.
            </p>
          </div>
        </div>

        {/* Related Tutorials */}
        {relatedTutorials.length > 0 && (
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center">Related Tutorials</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedTutorials.map((tutorial, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      <Link 
                        to={tutorial.url}
                        className="text-purple-600 hover:text-purple-800 flex items-center gap-2"
                      >
                        {tutorial.title}
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
