
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  CheckCircle,
  Chrome,
  Sparkles,
  Camera,
  MousePointer,
  Brain
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
      color: "from-blue-500 to-indigo-600",
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
      color: "from-purple-500 to-pink-600",
      ctaText: "Get Guide Maker"
    }
  ];

  return (
    <section className="relative overflow-hidden" role="banner">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-blue-100 to-purple-100"></div>
      <div className="absolute inset-0 bg-white/40"></div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 max-w-7xl">
        <div className="text-center">
          <Badge className="mb-4 sm:mb-6 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 hover:bg-indigo-200 border-indigo-200 text-xs sm:text-sm">
            <Brain className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            ✨ Flonnect AI: Instantly turn meetings, text & ideas into videos, images & summaries.
          </Badge>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight text-gray-900">
            Create Videos & Guides Effortlessly
            <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mt-1 sm:mt-2">
              — Supercharged with Flonnect AI
            </span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl mb-6 sm:mb-8 text-gray-700 max-w-4xl mx-auto leading-relaxed px-2">
            Everything you need for pro videos & guides — faster, clearer & 10x smarter with Flonnect AI.
          </p>
          
          {/* Main Extensions Showcase */}
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 mb-8 sm:mb-12 max-w-6xl mx-auto">
            {mainExtensions.map((extension, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group bg-white/90 backdrop-blur-sm">
                <CardHeader className="text-center pb-4 px-4 sm:px-6">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-r ${extension.color} rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                    <extension.icon className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl lg:text-2xl mb-2 sm:mb-3 leading-tight">{extension.title}</CardTitle>
                  <CardDescription className="text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 px-2">
                    {extension.description}
                  </CardDescription>
                  <ul className="text-xs sm:text-sm space-y-1 sm:space-y-2 mb-4 sm:mb-6">
                    {extension.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center justify-center gap-2">
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-500 flex-shrink-0" />
                        <span className="text-gray-600 flex items-center gap-1">
                          {typeof feature === 'object' ? feature.text : feature}
                          {typeof feature === 'object' && feature.hasAI && (
                            <Sparkles className="w-3 h-3 text-purple-500" />
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                  {extension.aiFeature && (
                    <p className="text-xs sm:text-sm text-purple-600 font-medium mb-4 bg-purple-50 rounded-lg py-2 px-3 border border-purple-100">
                      {extension.aiFeature}
                    </p>
                  )}
                  {extension.aiFeatures && (
                    <div className="space-y-2 mb-4">
                      {extension.aiFeatures.map((aiFeature, idx) => (
                        <p key={idx} className="text-xs sm:text-sm text-purple-600 font-medium bg-purple-50 rounded-lg py-2 px-3 border border-purple-100">
                          {aiFeature}
                        </p>
                      ))}
                    </div>
                  )}
                </CardHeader>
                <CardContent className="text-center pt-0 px-4 sm:px-6 pb-6">
                  <Link to={extension.link}>
                    <Button size="lg" className={`bg-gradient-to-r ${extension.color} hover:scale-105 transition-all duration-300 text-white px-4 sm:px-6 py-2 sm:py-3 w-full text-sm sm:text-base`}>
                      <Chrome className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
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
