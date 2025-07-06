
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
  Sparkles
} from 'lucide-react';

const FlonnectAISection = () => {
  const aiFeatures = [
    {
      icon: FileText,
      title: "Minutes of Meetings",
      description: "Instantly get accurate meeting summaries",
      emoji: "📋"
    },
    {
      icon: Video,
      title: "Text to Video",
      description: "Turn written ideas into engaging videos",
      emoji: "🎬"
    },
    {
      icon: ImageIcon,
      title: "Text to Image",
      description: "Bring your ideas to life with AI-generated visuals",
      emoji: "🖼️"
    },
    {
      icon: Mic,
      title: "Speech to Text",
      description: "Auto-transcribe video and audio content",
      emoji: "🗣️"
    },
    {
      icon: BarChart3,
      title: "Smart Summarisation",
      description: "Auto-generate video summaries for faster collaboration",
      emoji: "📈"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-6xl mx-auto">
          <Badge className="mb-6 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 hover:bg-indigo-200 border-indigo-200 text-sm">
            <Brain className="w-4 h-4 mr-2" />
            Powered by AI
          </Badge>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            Introducing 
            <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mt-2">
              Flonnect AI
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Work smarter, not harder — harness the power of AI across your Flonnect workflows.
          </p>
          
          <p className="text-base sm:text-lg mb-12 text-gray-600 max-w-5xl mx-auto leading-relaxed">
            From automated Meeting Minutes to AI-powered Text to Video, Text to Image, and Speech to Text, 
            Flonnect AI brings the future of content creation and productivity to your fingertips. 
            Save hours, boost productivity, and turn ideas into visuals in seconds.
          </p>

          {/* AI Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {aiFeatures.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group bg-white/80 backdrop-blur-sm hover:bg-white/90">
                <CardHeader className="text-center pb-4">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <span className="text-2xl">{feature.emoji}</span>
                    <div className="p-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg group-hover:from-indigo-200 group-hover:to-purple-200 transition-colors">
                      <feature.icon className="w-5 h-5 text-indigo-600" />
                    </div>
                  </div>
                  <CardTitle className="text-lg mb-2 text-gray-900">{feature.title}</CardTitle>
                  <CardDescription className="text-sm text-gray-600 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Try Flonnect AI
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-4 text-lg border-2 border-indigo-200 text-indigo-700 hover:bg-indigo-50 hover:border-indigo-300"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlonnectAISection;
