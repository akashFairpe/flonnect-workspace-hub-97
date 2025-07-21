import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Header } from '@/components/Header';
import { ArrowLeft } from 'lucide-react';
import { 
  GraduationCap, 
  Building2, 
  Megaphone, 
  Palette, 
  Code2, 
  Gamepad2, 
  Scale, 
  Heart, 
  DollarSign, 
  Microscope, 
  Factory, 
  Home, 
  Car, 
  Users 
} from 'lucide-react';

const useCaseCategories = [
  {
    title: 'Education & Learning',
    description: 'Tools for educators, students, and learning professionals',
    icon: GraduationCap,
    useCases: 5,
    color: 'from-blue-500 to-blue-600',
    category: 'education'
  },
  {
    title: 'Business & Corporate',
    description: 'Solutions for businesses, teams, and corporate environments',
    icon: Building2,
    useCases: 5,
    color: 'from-purple-500 to-purple-600',
    category: 'business'
  },
  {
    title: 'Marketing & Content',
    description: 'Tools for marketers, content creators, and social media professionals',
    icon: Megaphone,
    useCases: 5,
    color: 'from-green-500 to-green-600',
    category: 'marketing'
  },
  {
    title: 'Freelance & Creative',
    description: 'Solutions for freelancers, designers, and creative professionals',
    icon: Palette,
    useCases: 7,
    color: 'from-orange-500 to-red-500',
    category: 'freelance'
  },
  {
    title: 'Technology & Development',
    description: 'Tools for developers, tech teams, and IT professionals',
    icon: Code2,
    useCases: 5,
    color: 'from-cyan-500 to-blue-500',
    category: 'technology'
  },
  {
    title: 'Gaming & Entertainment',
    description: 'Solutions for gamers, streamers, and entertainment professionals',
    icon: Gamepad2,
    useCases: 3,
    color: 'from-purple-500 to-pink-500',
    category: 'gaming'
  },
  {
    title: 'Legal & Compliance',
    description: 'Tools for legal professionals, compliance officers, and law enforcement',
    icon: Scale,
    useCases: 4,
    color: 'from-gray-600 to-gray-700',
    category: 'legal'
  },
  {
    title: 'Healthcare & Wellness',
    description: 'Solutions for healthcare professionals and wellness experts',
    icon: Heart,
    useCases: 4,
    color: 'from-pink-500 to-rose-500',
    category: 'healthcare'
  },
  {
    title: 'Finance & Investment',
    description: 'Tools for financial professionals, advisors, and analysts',
    icon: DollarSign,
    useCases: 3,
    color: 'from-green-500 to-emerald-600',
    category: 'finance'
  },
  {
    title: 'Research & Science',
    description: 'Solutions for researchers, scientists, and academic professionals',
    icon: Microscope,
    useCases: 3,
    color: 'from-teal-500 to-cyan-600',
    category: 'research'
  },
  {
    title: 'Manufacturing & Industrial',
    description: 'Tools for manufacturing, engineering, and industrial professionals',
    icon: Factory,
    useCases: 3,
    color: 'from-orange-500 to-amber-600',
    category: 'manufacturing'
  },
  {
    title: 'Real Estate & Property',
    description: 'Solutions for real estate professionals and property managers',
    icon: Home,
    useCases: 2,
    color: 'from-green-500 to-lime-600',
    category: 'realestate'
  },
  {
    title: 'Automotive & Transportation',
    description: 'Tools for automotive professionals and transportation workers',
    icon: Car,
    useCases: 2,
    color: 'from-red-500 to-orange-500',
    category: 'automotive'
  },
  {
    title: 'Community & Public Service',
    description: 'Solutions for community leaders, public servants, and social organizations',
    icon: Users,
    useCases: 4,
    color: 'from-purple-500 to-indigo-600',
    category: 'community'
  }
];

const ResourcesUseCasesPage = () => {
  const navigate = useNavigate();

  // SEO Setup
  React.useEffect(() => {
    document.title = 'Use Cases by Industry - Flonnect | Video Recording Solutions for Every Profession';
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Discover how professionals across 14+ industries use Flonnect for screen recording, bug reporting, demos, and collaboration. Find your industry-specific use cases.');
    } else {
      const newMetaDesc = document.createElement('meta');
      newMetaDesc.name = 'description';
      newMetaDesc.content = 'Discover how professionals across 14+ industries use Flonnect for screen recording, bug reporting, demos, and collaboration. Find your industry-specific use cases.';
      document.head.appendChild(newMetaDesc);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'video recording use cases, industry-specific screen recording, business video solutions, education recording, healthcare video tools, legal recording software');
    } else {
      const newMetaKeywords = document.createElement('meta');
      newMetaKeywords.name = 'keywords';
      newMetaKeywords.content = 'video recording use cases, industry-specific screen recording, business video solutions, education recording, healthcare video tools, legal recording software';
      document.head.appendChild(newMetaKeywords);
    }

    // Structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Use Cases by Industry - Flonnect",
      "description": "Industry-specific video recording and collaboration use cases across 14+ professional sectors.",
      "url": "https://flonnect.com/resources/usecases",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Resources",
            "item": "https://flonnect.com/resources"
          },
          {
            "@type": "ListItem", 
            "position": 2,
            "name": "Use Cases",
            "item": "https://flonnect.com/resources/usecases"
          }
        ]
      },
      "mainEntity": {
        "@type": "ItemList",
        "numberOfItems": 14,
        "itemListElement": useCaseCategories.map((category, index) => ({
          "@type": "CreativeWork",
          "position": index + 1,
          "name": category.title,
          "description": category.description
        }))
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript && existingScript.textContent?.includes('Use Cases by Industry')) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Navigation */}
        <Button 
          variant="ghost" 
          onClick={() => navigate('/resources')}
          className="mb-6 sm:mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Resources
        </Button>

        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent mb-4 sm:mb-6">
            Use Cases by Industry
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Discover how professionals across different industries use Flonnect for screen recording, bug reporting, and creating engaging demos.
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {useCaseCategories.map((category) => (
            <Card 
              key={category.title}
              className="group cursor-pointer hover:shadow-xl transition-all duration-300 border hover:border-primary/20"
              onClick={() => navigate(`/use-cases/${category.category}`)}
            >
              <CardHeader className="pb-2 sm:pb-3">
                <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                  <div className={`p-1.5 sm:p-2 rounded-lg bg-gradient-to-r ${category.color} text-white group-hover:scale-110 transition-transform flex-shrink-0`}>
                    <category.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-xs sm:text-sm font-semibold group-hover:text-primary transition-colors line-clamp-2">
                      {category.title}
                    </CardTitle>
                  </div>
                </div>
                <CardDescription className="text-xs line-clamp-3">
                  {category.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-xs text-muted-foreground mb-2 sm:mb-3">
                  {category.useCases} use cases
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors text-xs sm:text-sm"
                >
                  View Use Cases
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">14</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Industries Covered</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">50+</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Professional Use Cases</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">100K+</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Users Worldwide</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">24/7</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Support Available</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary to-primary/80 rounded-xl sm:rounded-2xl p-8 sm:p-12 text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
            Don't See Your Industry?
          </h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto px-4">
            Flonnect works for any profession that needs screen recording, bug reporting, or demo creation. Contact us to learn more.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
            <Button size="lg" variant="secondary" onClick={() => navigate('/workspace')} className="text-sm sm:text-base">
              Try Flonnect Free
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-sm sm:text-base">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesUseCasesPage;