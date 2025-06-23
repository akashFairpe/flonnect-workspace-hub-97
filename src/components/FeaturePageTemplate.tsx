
import React from 'react';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FeaturePageTemplateProps {
  title: string;
  description: string;
  heroIcon: React.ElementType;
  features: {
    title: string;
    description: string;
    icon: React.ElementType;
  }[];
  benefits: string[];
  faqs?: {
    question: string;
    answer: string;
  }[];
  ctaText?: string;
  seoKeywords: string;
  metaDescription: string;
}

export function FeaturePageTemplate({
  title,
  description,
  heroIcon: HeroIcon,
  features,
  benefits,
  faqs = [],
  ctaText = "Get Started Now",
  seoKeywords,
  metaDescription
}: FeaturePageTemplateProps) {
  React.useEffect(() => {
    document.title = `${title} | Flonnect - Professional Video Solutions`;
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', metaDescription);
    } else {
      const newMetaDesc = document.createElement('meta');
      newMetaDesc.name = 'description';
      newMetaDesc.content = metaDescription;
      document.head.appendChild(newMetaDesc);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', seoKeywords);
    } else {
      const newMetaKeywords = document.createElement('meta');
      newMetaKeywords.name = 'keywords';
      newMetaKeywords.content = seoKeywords;
      document.head.appendChild(newMetaKeywords);
    }
  }, [title, seoKeywords, metaDescription]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
              <HeroIcon className="w-8 h-8 sm:w-12 sm:h-12 text-white" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            {title}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            {description}
          </p>
          <div className="mt-8">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg">
              {ctaText}
            </Button>
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const FeatureIcon = feature.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-purple-100 rounded-lg">
                        <FeatureIcon className="w-6 h-6 text-purple-600" />
                      </div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </div>
                    <CardDescription className="text-gray-600">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">Why Choose Our Solution</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  ✓
                </Badge>
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        {faqs.length > 0 && (
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        )}

        {/* CTA Section */}
        <div className="max-w-2xl mx-auto text-center">
          <Card className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl text-white">Ready to Get Started?</CardTitle>
              <CardDescription className="text-purple-100">
                Join thousands of professionals who trust Flonnect for their video needs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
                Start Free Trial
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
