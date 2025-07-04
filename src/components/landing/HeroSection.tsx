
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  CheckCircle,
  Chrome,
  Sparkles,
  Camera,
  MousePointer
} from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const mainExtensions = [
    {
      icon: Camera,
      title: "Video Recording Extension", 
      description: "Record high-quality videos from your screen, webcam, or both with professional editing features.",
      features: ["Screen & Camera Recording", "AI-Powered Editing", "Professional Voiceovers", "Instant Sharing"],
      link: "/screenrecorder",
      color: "from-blue-500 to-indigo-600",
      ctaText: "Get Video Recorder"
    },
    {
      icon: MousePointer,
      title: "Step Recording Guide Maker",
      description: "Create interactive step-by-step guides and demos with automatic screenshot capture and annotations.",
      features: ["Interactive Guides", "Auto Screenshots", "Step-by-Step Flows", "Demo Mode"],
      link: "/interactive-demo-capture", 
      color: "from-purple-500 to-pink-600",
      ctaText: "Get Guide Maker"
    }
  ];

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-blue-100 to-purple-100"></div>
      <div className="absolute inset-0 bg-white/40"></div>
      <div className="relative container mx-auto px-6 py-24">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-6 bg-indigo-100 text-indigo-700 hover:bg-indigo-200 border-indigo-200">
            <Sparkles className="w-4 h-4 mr-2" />
            Join 200K+ Users Worldwide
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight text-gray-900">
            Two Powerful Extensions for 
            <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Every Video Need
            </span>
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Professional Video Recording & Interactive Step-by-Step Guide Creation
          </p>
          
          {/* Main Extensions Showcase */}
          <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-5xl mx-auto">
            {mainExtensions.map((extension, index) => (
              <Card key={index} className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 group bg-white/90 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <div className={`w-20 h-20 bg-gradient-to-r ${extension.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                    <extension.icon className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl mb-3">{extension.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed mb-6">
                    {extension.description}
                  </CardDescription>
                  <ul className="text-sm space-y-2 mb-6">
                    {extension.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center justify-center gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardHeader>
                <CardContent className="text-center pt-0">
                  <Link to={extension.link}>
                    <Button size="lg" className={`bg-gradient-to-r ${extension.color} hover:scale-105 transition-all duration-300 text-white px-6 py-3 w-full`}>
                      <Chrome className="w-5 h-5 mr-2" />
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
