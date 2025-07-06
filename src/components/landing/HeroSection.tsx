
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
  Play,
  ArrowRight,
  Zap
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
      gradient: "from-violet-500 to-purple-600",
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
      gradient: "from-blue-500 to-cyan-500",
      ctaText: "Get Guide Maker"
    }
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" role="banner">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-400/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-400/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
      </div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <Badge className="mb-6 bg-gradient-to-r from-purple-500/10 to-blue-500/10 text-purple-200 hover:from-purple-500/20 hover:to-blue-500/20 border-purple-400/30 text-sm px-4 py-2 backdrop-blur-sm">
              <Brain className="w-4 h-4 mr-2" />
              ✨ Flonnect AI: Instantly turn meetings, text & ideas into videos & images.
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">Create Videos & Guides</span>
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mt-2">
                Effortlessly
              </span>
              <span className="block text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mt-2">
                with Flonnect AI
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl mb-8 text-gray-300 leading-relaxed font-light">
              Record, edit & share — smarter & 10x faster with AI-powered tools.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12 lg:mb-0">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300 border-0"
              >
                <Play className="w-5 h-5 mr-2" />
                Start Creating Now
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-purple-400/30 text-purple-200 hover:bg-purple-500/10 hover:border-purple-400/50 px-8 py-4 text-lg backdrop-blur-sm bg-white/5"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                See AI in Action
              </Button>
            </div>
          </div>

          {/* Right Cards */}
          <div className="order-1 lg:order-2">
            <div className="space-y-6">
              {mainExtensions.map((extension, index) => (
                <Card key={index} className="group relative border-0 bg-white/5 backdrop-blur-xl shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 rounded-3xl overflow-hidden hover:bg-white/10">
                  {/* Gradient Border Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${extension.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl`}></div>
                  <div className="absolute inset-[1px] bg-slate-900/90 rounded-3xl"></div>
                  
                  <div className="relative p-6">
                    <CardHeader className="pb-4 px-0">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-14 h-14 bg-gradient-to-r ${extension.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg`}>
                          <extension.icon className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-xl text-white font-bold leading-tight mb-1">
                            {extension.title}
                          </CardTitle>
                          <CardDescription className="text-gray-400 text-sm">
                            {extension.description}
                          </CardDescription>
                        </div>
                      </div>
                      
                      {/* Feature Pills */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {extension.features.slice(0, 2).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 bg-white/5 rounded-full px-3 py-1 border border-white/10">
                            <CheckCircle className="w-3 h-3 text-emerald-400" />
                            <span className="text-xs text-gray-300 font-medium">
                              {typeof feature === 'object' ? feature.text : feature}
                            </span>
                            {typeof feature === 'object' && feature.hasAI && (
                              <Sparkles className="w-3 h-3 text-purple-400" />
                            )}
                          </div>
                        ))}
                      </div>
                      
                      {/* AI Feature Highlight */}
                      {extension.aiFeature && (
                        <div className="text-xs text-purple-300 font-semibold mb-4 bg-purple-900/30 rounded-xl py-2 px-3 border border-purple-500/20">
                          {extension.aiFeature}
                        </div>
                      )}
                      {extension.aiFeatures && (
                        <div className="space-y-2 mb-4">
                          {extension.aiFeatures.slice(0, 1).map((aiFeature, idx) => (
                            <div key={idx} className="text-xs text-purple-300 font-semibold bg-purple-900/30 rounded-xl py-2 px-3 border border-purple-500/20">
                              {aiFeature}
                            </div>
                          ))}
                        </div>
                      )}
                    </CardHeader>
                    
                    <CardContent className="px-0 pb-0">
                      <Link to={extension.link}>
                        <Button 
                          size="sm" 
                          className={`bg-gradient-to-r ${extension.gradient} hover:shadow-lg hover:scale-105 transition-all duration-300 text-white px-4 py-2 w-full text-sm font-semibold rounded-xl border-0 group`}
                        >
                          {extension.ctaText}
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
