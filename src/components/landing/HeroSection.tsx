
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  CheckCircle,
  Chrome,
  Sparkles,
  Camera,
  MousePointer,
  Brain,
  Play
} from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const mainExtensions = [
    {
      icon: Camera,
      title: "Video Recording Extension", 
      description: "Record high-quality videos from your screen, webcam, or both with professional editing features.",
      features: [
        "Screen & Camera Recording", 
        { text: "AI-Powered Editing", hasAI: true }, 
        "Professional Voiceovers", 
        "Instant Sharing"
      ],
      aiFeature: "✨ New: AI tools turn hours of editing into minutes.",
      link: "/screenrecorder",
      color: "from-blue-600 to-cyan-500",
      ctaText: "Get Video Recorder"
    },
    {
      icon: MousePointer,
      title: "Step Recording Guide Maker",
      description: "Create interactive step-by-step guides and demos with automatic screenshot capture and annotations.",
      features: ["Interactive Guides", "Auto Screenshots", "Step-by-Step Flows", "Demo Mode"],
      aiFeatures: [
        "✨ New: Smart AI summaries for your guides.",
        "✨ New: Generate visuals with AI instantly."
      ],
      link: "/interactive-demo-capture", 
      color: "from-purple-600 to-pink-500",
      ctaText: "Get Guide Maker"
    }
  ];

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center" role="banner">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-purple-100/20"></div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 max-w-7xl">
        <div className="text-center">
          {/* Updated badge with better styling */}
          <Badge className="mb-6 sm:mb-8 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 hover:from-blue-100 hover:to-purple-100 border-blue-200 text-sm px-4 py-2 shadow-sm">
            <Brain className="w-4 h-4 mr-2" />
            ✨ Flonnect AI: Instantly turn meetings, text & ideas into videos & images.
          </Badge>
          
          {/* Improved typography hierarchy */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 leading-tight text-gray-900 tracking-tight">
            Create Videos & Guides Effortlessly
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mt-2 sm:mt-3">
              with Flonnect AI
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 sm:mb-12 text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Record, edit & share — smarter & 10x faster with AI-powered tools.
          </p>
          
          {/* Redesigned cards with better visual hierarchy */}
          <div className="grid gap-8 lg:grid-cols-2 mb-12 sm:mb-16 max-w-5xl mx-auto">
            {mainExtensions.map((extension, index) => (
              <Card key={index} className="group relative border-0 bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500 rounded-2xl overflow-hidden">
                {/* Subtle gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${extension.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <CardHeader className="relative text-center pb-4 px-6 pt-8">
                  {/* Enhanced icon design */}
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${extension.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-xl`}>
                    <extension.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  
                  <CardTitle className="text-xl sm:text-2xl mb-3 text-gray-900 font-bold leading-tight">
                    {extension.title}
                  </CardTitle>
                  
                  <CardDescription className="text-base sm:text-lg leading-relaxed mb-6 text-gray-600 px-2">
                    {extension.description}
                  </CardDescription>
                  
                  {/* Enhanced feature list */}
                  <ul className="text-sm sm:text-base space-y-3 mb-6">
                    {extension.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center justify-center gap-3">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 flex-shrink-0" />
                        <span className="text-gray-700 flex items-center gap-2 font-medium">
                          {typeof feature === 'object' ? feature.text : feature}
                          {typeof feature === 'object' && feature.hasAI && (
                            <Sparkles className="w-4 h-4 text-purple-500" />
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* AI feature highlights */}
                  {extension.aiFeature && (
                    <div className="text-sm text-purple-700 font-semibold mb-6 bg-purple-50 rounded-xl py-3 px-4 border border-purple-100">
                      {extension.aiFeature}
                    </div>
                  )}
                  {extension.aiFeatures && (
                    <div className="space-y-3 mb-6">
                      {extension.aiFeatures.map((aiFeature, idx) => (
                        <div key={idx} className="text-sm text-purple-700 font-semibold bg-purple-50 rounded-xl py-3 px-4 border border-purple-100">
                          {aiFeature}
                        </div>
                      ))}
                    </div>
                  )}
                </CardHeader>
                
                <CardContent className="relative text-center px-6 pb-8">
                  <Link to={extension.link}>
                    <Button 
                      size="lg" 
                      className={`bg-gradient-to-r ${extension.color} hover:shadow-lg hover:scale-105 transition-all duration-300 text-white px-6 sm:px-8 py-3 sm:py-4 w-full text-base sm:text-lg font-semibold rounded-xl border-0`}
                    >
                      <Play className="w-5 h-5 mr-2" />
                      {extension.ctaText}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
