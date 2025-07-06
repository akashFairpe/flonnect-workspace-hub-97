
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Brain,
  FileText,
  Video,
  Image as ImageIcon,
  Mic,
  BarChart3,
  Sparkles,
  Zap,
  Users
} from 'lucide-react';

const FlonnectAISection = () => {
  const aiFeatures = [
    {
      icon: FileText,
      title: "Minutes of Meetings",
      description: "Instantly get accurate meeting summaries",
      emoji: "📋",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Video,
      title: "Text to Video",
      description: "Turn written ideas into engaging videos",
      emoji: "🎬",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: ImageIcon,
      title: "Text to Image",
      description: "Bring your ideas to life with AI-generated visuals",
      emoji: "🖼️",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: Mic,
      title: "Speech to Text",
      description: "Auto-transcribe video and audio content",
      emoji: "🗣️",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: BarChart3,
      title: "Smart Summarisation",
      description: "Auto-generate video summaries for faster collaboration",
      emoji: "📈",
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-blue-50/50 to-purple-50/50" aria-labelledby="flonnect-ai-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center">
          <Badge className="mb-4 sm:mb-6 bg-gradient-to-r from-purple-100/80 to-pink-100/80 text-purple-700 hover:bg-purple-200/80 border-purple-200/50 text-xs sm:text-sm backdrop-blur-sm font-medium">
            <Zap className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            🔮 Powered by the latest AI models
          </Badge>
          
          <h2 id="flonnect-ai-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-gray-900 leading-tight">
            Introducing 
            <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mt-1 sm:mt-2">
              Flonnect AI
            </span>
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl mb-6 sm:mb-8 text-gray-700 max-w-4xl mx-auto leading-relaxed px-2">
            Work smarter with Flonnect AI — automate, generate, and create like never before.
          </p>
          
          <p className="text-sm sm:text-base lg:text-lg mb-8 sm:mb-12 text-gray-600 max-w-5xl mx-auto leading-relaxed px-2">
            Flonnect AI brings you powerful tools like automated Meeting Minutes, Text to Video, Text to Image, and Speech to Text. Save hours, boost output, and turn text into stunning visuals and videos in seconds.
          </p>

          {/* Social Proof */}
          <div className="flex items-center justify-center gap-2 mb-8 sm:mb-12">
            <Users className="w-5 h-5 text-purple-600" />
            <span className="text-purple-700 text-sm font-semibold">Trusted by 200K+ content creators worldwide</span>
          </div>

          {/* AI Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 max-w-6xl mx-auto">
            {aiFeatures.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group bg-white/90 backdrop-blur-sm hover:bg-white hover:scale-105">
                <CardHeader className="text-center pb-4 px-4 sm:px-6">
                  <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <span className="text-xl sm:text-2xl">{feature.emoji}</span>
                    <div className={`p-2.5 bg-gradient-to-r ${feature.gradient} rounded-xl group-hover:scale-110 transition-all duration-300 shadow-md`}>
                      <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-base sm:text-lg mb-2 text-gray-900 leading-tight font-bold">{feature.title}</CardTitle>
                  <CardDescription className="text-xs sm:text-sm text-gray-600 leading-relaxed px-1 sm:px-2">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-md sm:max-w-none mx-auto">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 w-full sm:w-auto ring-2 ring-purple-400/20 hover:ring-purple-400/40"
            >
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Try Flonnect AI Free
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg border-2 border-indigo-200 text-indigo-700 hover:bg-indigo-50 hover:border-indigo-300 w-full sm:w-auto font-medium"
            >
              See Flonnect AI in Action
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlonnectAISection;
