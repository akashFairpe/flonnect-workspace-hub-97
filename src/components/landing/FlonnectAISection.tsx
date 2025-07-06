
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  FileText, 
  Video, 
  Image, 
  Mic, 
  BarChart3, 
  Sparkles,
  ArrowRight,
  Clock,
  Zap,
  Brain
} from 'lucide-react';

const FlonnectAISection = () => {
  const aiFeatures = [
    {
      icon: FileText,
      title: "Minutes of Meetings",
      description: "Instantly get accurate meeting summaries.",
      color: "from-blue-400 to-blue-500",
      emoji: "📋"
    },
    {
      icon: Video,
      title: "Text to Video",
      description: "Turn written ideas into engaging videos.",
      color: "from-purple-400 to-purple-500",
      emoji: "🎬"
    },
    {
      icon: Image,
      title: "Text to Image",
      description: "Bring your ideas to life with AI-generated visuals.",
      color: "from-pink-400 to-pink-500",
      emoji: "🖼️"
    },
    {
      icon: Mic,
      title: "Speech to Text",
      description: "Auto-transcribe video and audio content.",
      color: "from-emerald-400 to-emerald-500",
      emoji: "🗣️"
    },
    {
      icon: BarChart3,
      title: "Smart Summarisation",
      description: "Auto-generate video summaries for faster collaboration.",
      color: "from-orange-400 to-orange-500",
      emoji: "📈"
    }
  ];

  const benefits = [
    {
      icon: Clock,
      text: "Save Hours Daily"
    },
    {
      icon: Zap,
      text: "Boost Productivity"
    },
    {
      icon: Brain,
      text: "Turn Ideas into Visuals"
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50" role="region" aria-label="Flonnect AI Features">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <Badge className="mb-4 sm:mb-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 text-sm sm:text-lg px-4 sm:px-6 py-2 sm:py-3">
            <Sparkles className="w-4 h-4 mr-2" />
            Introducing Flonnect AI
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
            Work Smarter, Not Harder
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4 mb-6 sm:mb-8">
            Harness the power of AI across your Flonnect workflows. From automated Meeting Minutes to AI-powered Text to Video, Text to Image, and Speech to Text, Flonnect AI brings the future of content creation and productivity to your fingertips.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8 sm:mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-md">
                <benefit.icon className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-medium text-gray-700">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto mb-12 sm:mb-16">
          {aiFeatures.map((feature, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 group border-0 h-full hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <span className="text-2xl sm:text-3xl">{feature.emoji}</span>
                </div>
                <CardTitle className="text-lg sm:text-xl leading-tight flex items-center justify-center gap-2">
                  <feature.icon className="w-5 h-5 text-gray-600" />
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 sm:p-12 shadow-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to Experience the Future?
            </h3>
            <p className="text-lg text-purple-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Join thousands of teams already using Flonnect AI to transform their productivity and creativity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6 bg-white text-purple-600 hover:bg-gray-50 shadow-lg">
                <Sparkles className="w-5 h-5 mr-2" />
                Try Flonnect AI
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white/10 hover:border-white">
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlonnectAISection;
