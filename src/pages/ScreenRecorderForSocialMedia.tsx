import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Download, Share2, Heart, Camera, TrendingUp, Users, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const ScreenRecorderForSocialMedia = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const useCases = [
    {
      title: "Creating Short-Form Content for TikTok & Instagram Reels",
      description: "Content creators can record vertical videos, quick tutorials, and trending content optimized for short-form platforms. Features vertical recording modes, quick editing tools, and trending templates.",
      example: "A lifestyle influencer records a 30-second productivity hack tutorial in vertical format for TikTok and Instagram Reels.",
      icon: Camera,
      gradient: "from-pink-600 to-purple-600",
      image: "photo-1611162617474-5b21e879e113"
    },
    {
      title: "Recording Product Demos for Instagram & Facebook",
      description: "Brands and creators can record product demonstrations, unboxing videos, and feature highlights for social media marketing. Includes tools for adding captions, stickers, and call-to-action overlays.",
      example: "A beauty brand records a makeup tutorial showcasing their new product line for Instagram Stories and Facebook posts.",
      icon: Share2,
      gradient: "from-blue-600 to-indigo-600",
      image: "photo-1556761175-4b46a572b786"
    },
    {
      title: "Creating Behind-the-Scenes Content & Live Streams",
      description: "Influencers and businesses can record behind-the-scenes footage, workspace tours, and live streaming content for authentic social media engagement. Perfect for building personal connections with audiences.",
      example: "A small business owner records their daily routine and workspace setup for authentic LinkedIn and Instagram content.",
      icon: Users,
      gradient: "from-green-600 to-teal-600",
      image: "photo-1590402494766-2c77f8b2ef90"
    },
    {
      title: "Recording Social Media Tutorials & How-To Content",
      description: "Educators and experts can record step-by-step tutorials, software walkthroughs, and educational content specifically formatted for social media consumption. Features quick cuts and engaging visuals.",
      example: "A digital marketer records a series of LinkedIn tips in bite-sized videos for their professional social media presence.",
      icon: TrendingUp,
      gradient: "from-orange-600 to-yellow-600",
      image: "photo-1542751371-adc38448a05e"
    },
    {
      title: "Creating Viral Content & Trend Participation",
      description: "Content creators can record trending challenges, memes, and viral content formats to boost engagement and reach. Includes templates for popular content formats and trending audio integration.",
      example: "A dance instructor creates content following the latest TikTok dance trends while adding their own professional choreography tips.",
      icon: Heart,
      gradient: "from-red-600 to-pink-600",
      image: "photo-1493225457124-a3eb161ffa5f"
    }
  ];

  const faqs = [
    {
      question: "What video formats work best for different social platforms?",
      answer: "We provide optimized export settings for each platform: vertical 9:16 for TikTok/Instagram Reels, square 1:1 for Instagram posts, and horizontal 16:9 for YouTube/Facebook. Our platform automatically formats content for your target platform."
    },
    {
      question: "Can I add captions and text overlays for social media?",
      answer: "Yes! Our platform includes auto-generated captions, text overlay tools, and popular social media fonts. You can also add trending hashtags, mentions, and call-to-action elements."
    },
    {
      question: "How do I create content that follows current trends?",
      answer: "We provide trending templates, popular audio tracks, and format suggestions based on current social media trends. Our content library is updated regularly with viral formats and challenges."
    },
    {
      question: "Can I schedule and auto-post my recorded content?",
      answer: "Our platform integrates with social media scheduling tools like Hootsuite and Buffer. You can plan your content calendar and automatically distribute recordings across multiple platforms."
    },
    {
      question: "What tools help with engagement and audience growth?",
      answer: "We provide analytics on video performance, engagement rates, and optimal posting times. Our platform also suggests content improvements based on successful posts in your niche."
    },
    {
      question: "How do I maintain brand consistency across platforms?",
      answer: "Our brand toolkit allows you to save logos, color schemes, fonts, and intro/outro templates. You can apply consistent branding across all your social media content automatically."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Screen Recorder for Social Media
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Create viral social media content with professional recording tools. Perfect for TikTok, Instagram, Facebook, and LinkedIn content that engages audiences and grows your following.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
              <Play className="w-5 h-5 mr-2" />
              Start Creating Content
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Download className="w-5 h-5 mr-2" />
              See Social Media Templates
            </Button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              5 Essential Social Media Recording Applications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover how successful content creators and brands use screen recording to build engaging social media presence
            </p>
          </div>

          <div className="space-y-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-0">
                <div className={`h-2 bg-gradient-to-r ${useCase.gradient}`}></div>
                <CardHeader className="pb-4">
                  <div className="flex flex-col lg:flex-row items-start gap-6">
                    <div className="lg:w-1/3">
                      <img 
                        src={`https://images.unsplash.com/${useCase.image}?auto=format&fit=crop&w=400&h=250`}
                        alt={`Social media content creation for ${useCase.title.toLowerCase()}`}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                    <div className="lg:w-2/3">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${useCase.gradient} text-white flex-shrink-0`}>
                          <useCase.icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl md:text-2xl text-gray-900 mb-2">
                            <h3>{index + 1}. {useCase.title}</h3>
                          </CardTitle>
                          <CardDescription className="text-base text-gray-600 leading-relaxed">
                            {useCase.description}
                          </CardDescription>
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-gray-300">
                        <p className="text-sm font-semibold text-gray-700 mb-2">Real-World Example:</p>
                        <p className="text-gray-600 italic">
                          {useCase.example}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything social media creators need to know about professional content recording
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader 
                  className="cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-gray-900 text-left">
                      <h3>{faq.question}</h3>
                    </CardTitle>
                    {openFaq === index ? (
                      <Minus className="w-5 h-5 text-gray-500" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-500" />
                    )}
                  </div>
                </CardHeader>
                {openFaq === index && (
                  <CardContent className="pt-0">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Go Viral with Professional Content
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join millions of creators who are building their social media presence with our professional recording tools
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Play className="w-5 h-5 mr-2" />
              Create Viral Content Now
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-primary">
              See Creator Success Stories
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreenRecorderForSocialMedia;
