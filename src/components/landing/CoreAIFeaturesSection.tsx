
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  MousePointer,
  Video,
  Bug,
  Users,
  FileText,
  Image as ImageIcon,
  Sparkles,
  ArrowRight,
  Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';

const CoreAIFeaturesSection = () => {
  const coreFeatures = [
    {
      icon: MousePointer,
      title: "Step Recorder / Demos",
      description: "Create interactive step-by-step guides and demos with automatic screenshots and AI-powered annotations.",
      link: "/interactive-demo-capture",
      gradient: "from-blue-500 to-cyan-500",
      aiFeatures: ["Smart AI summaries", "Auto-generated visuals"]
    },
    {
      icon: Video,
      title: "Video Recorder",
      description: "Record high-quality videos from screen, webcam, or both with professional AI-powered editing features.",
      link: "/screenrecorder",
      gradient: "from-violet-500 to-purple-600",
      aiFeatures: ["AI-powered editing", "Auto transcription"]
    },
    {
      icon: Bug,
      title: "Bug Reporting",
      description: "Efficiently capture and report bugs with visual evidence and automatic context generation.",
      link: "/bug-capture",
      gradient: "from-red-500 to-pink-500",
      aiFeatures: ["Auto bug analysis", "Context generation"]
    },
    {
      icon: Users,
      title: "Meeting Recorder",
      description: "Record meetings with automatic transcription, summaries, and action item extraction.",
      link: "/meeting-recorder",
      gradient: "from-emerald-500 to-teal-500",
      aiFeatures: ["Meeting minutes", "Action items"]
    },
    {
      icon: ImageIcon,
      title: "Text to Video & Image AI",
      description: "Transform written ideas into engaging videos and stunning visuals using advanced AI technology.",
      link: "/ai-generator",
      gradient: "from-orange-500 to-yellow-500",
      aiFeatures: ["Text to video", "Image generation"]
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-slate-50 via-blue-50/50 to-purple-50/50" aria-labelledby="core-ai-features-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <Badge className="mb-4 sm:mb-6 bg-gradient-to-r from-purple-100/80 to-pink-100/80 text-purple-700 hover:bg-purple-200/80 border-purple-200/50 text-sm backdrop-blur-sm font-medium">
            <Zap className="w-4 h-4 mr-2" />
            🔮 Powered by Advanced AI
          </Badge>
          
          <h2 id="core-ai-features-heading" className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-gray-900 leading-tight">
            Flonnect AI — 
            <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mt-1 sm:mt-2">
              One Suite, Endless Creation
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 sm:mb-12 text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Everything you need to create, collaborate, and communicate — powered by cutting-edge AI technology.
          </p>
        </div>

        {/* Core Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {coreFeatures.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group bg-white/90 backdrop-blur-sm hover:bg-white hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg mb-2 text-gray-900 leading-tight font-bold">{feature.title}</CardTitle>
                <CardDescription className="text-sm text-gray-600 leading-relaxed mb-4">
                  {feature.description}
                </CardDescription>
                
                {/* AI Features */}
                <div className="space-y-2 mb-4">
                  {feature.aiFeatures.map((aiFeature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-purple-600 bg-purple-50 rounded-full px-3 py-1">
                      <Sparkles className="w-3 h-3" />
                      <span className="font-medium">{aiFeature}</span>
                    </div>
                  ))}
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <Link to={feature.link}>
                  <Button 
                    size="sm" 
                    className={`bg-gradient-to-r ${feature.gradient} hover:shadow-lg hover:scale-105 transition-all duration-300 text-white px-4 py-2 w-full text-sm font-semibold rounded-xl border-0 group shadow-md`}
                  >
                    Explore
                    <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 ring-2 ring-purple-400/20 hover:ring-purple-400/40"
          >
            <Sparkles className="w-5 h-5 mr-2" />
            Try All Features Free
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoreAIFeaturesSection;
