
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Download, Video, Zap, Star, Settings, Users, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const GamingContentCreators = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const useCases = [
    {
      title: "Recording Game Tutorials & Walkthroughs",
      description: "Gaming content creators can record step-by-step guides for completing missions, puzzles, and challenges in games. Helps viewers learn tips, tricks, and strategies to progress faster. Can include voiceover commentary, on-screen annotations, and slow-motion replays. Useful for story-driven games, RPGs, open-world games, and competitive multiplayer games.",
      example: "A Zelda: Tears of the Kingdom YouTuber records a walkthrough on 'How to Find the Master Sword', explaining step-by-step locations and requirements.",
      icon: Video,
      gradient: "from-blue-500 to-purple-600",
      image: "photo-1526374965328-7f61d4dc18c5"
    },
    {
      title: "Creating Speedrun & Challenge Videos",
      description: "Speedrunners and challenge gamers can record gameplay showcasing advanced mechanics. Useful for demonstrating record-breaking runs or unique game challenges. Helps players master movement, shortcuts, and glitch techniques. Can be shared on YouTube, Twitch, or speedrunning forums.",
      example: "A Minecraft content creator records a 'No Damage Challenge', showing how to beat the Ender Dragon without taking a single hit.",
      icon: Zap,
      gradient: "from-yellow-500 to-orange-600",
      image: "photo-1605810230434-7631ac76ec81"
    },
    {
      title: "Recording Game Reviews & First Impressions",
      description: "Gaming YouTubers can record reaction videos to new game releases. Helps in breaking down gameplay mechanics, graphics, story, and performance. Can include side-by-side comparisons with previous versions or similar games. Great for helping viewers decide whether to buy a game.",
      example: "A content creator records a first impression video of 'GTA VI Gameplay Trailer', analyzing graphics, mechanics, and story hints.",
      icon: Star,
      gradient: "from-purple-500 to-pink-600",
      image: "photo-1473091534298-04dcbce3278c"
    },
    {
      title: "Creating Mod & Customization Showcases",
      description: "Modding communities can record videos explaining game modifications. Useful for showcasing new mods, game customization features, and graphical improvements. Can include installation guides, gameplay comparisons, and performance benchmarks. Works well for PC games with active modding communities.",
      example: "A Skyrim content creator records a showcase of 'Top 10 Graphics Mods for 2024', demonstrating before-and-after improvements.",
      icon: Settings,
      gradient: "from-green-500 to-teal-600",
      image: "photo-1519389950473-47ba0277781c"
    },
    {
      title: "Recording Game Streaming Highlights & Reaction Clips",
      description: "Streamers can record and edit the best moments from their live streams. Useful for creating montages, funny fails, and epic in-game moments. Can add facecam overlays, reactions, and sound effects for engagement. Works well for Twitch, YouTube, Facebook Gaming, and TikTok clips.",
      example: "A Call of Duty streamer records a 'Top 5 Clutch Plays of the Week' video, showing high-action moments with slow-motion replays and commentary.",
      icon: Users,
      gradient: "from-red-500 to-pink-600",
      image: "photo-1487887235947-a955ef187fcc"
    }
  ];

  const faqs = [
    {
      question: "What's the best recording setup for gaming content creation?",
      answer: "For professional gaming content, record at 1080p 60fps minimum with separate audio tracks for game, mic, and system sounds. Our software optimizes performance while maintaining high quality for content creation."
    },
    {
      question: "How can I make my gaming tutorials more engaging?",
      answer: "Use clear narration, highlight important elements with annotations, and break content into digestible segments. Our built-in editing tools help add visual emphasis and create professional-looking tutorials."
    },
    {
      question: "Can I record different types of gaming content efficiently?",
      answer: "Yes! Use our preset profiles for different content types - tutorials, reviews, speedruns, and highlights. Each profile optimizes recording settings for specific gaming content requirements."
    },
    {
      question: "How do I create viral gaming clips from long sessions?",
      answer: "Our AI-powered highlight detection automatically identifies exciting moments, epic fails, and clutch plays. You can then quickly edit these into shareable clips for social media platforms."
    },
    {
      question: "What about recording modded games and custom content?",
      answer: "Our software handles all game modifications and custom content seamlessly. Record heavily modded games, showcase custom maps, and demonstrate community-created content without compatibility issues."
    },
    {
      question: "Can I monetize my gaming content recordings?",
      answer: "Absolutely! Many creators build successful channels with gaming content. Our platform includes features for creating thumbnails, intro/outro templates, and other elements that help monetize your gaming content."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Screen Recorder for Gaming Content Creators
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Create compelling gaming content that captivates audiences. Professional recording tools for tutorials, reviews, speedruns, and viral gaming moments that drive engagement and growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
              <Play className="w-5 h-5 mr-2" />
              Start Creating Gaming Content
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Download className="w-5 h-5 mr-2" />
              View Creator Tools
            </Button>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              5 Essential Gaming Content Creation Applications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From walkthroughs to viral clips, discover how gaming content creators are building massive audiences and successful channels
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
                        alt={`Gaming content creation setup for ${useCase.title.toLowerCase()}`}
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

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything gaming content creators need to know about professional recording and audience growth
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

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Level Up Your Content Game
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join successful gaming content creators who are building viral channels and engaged communities with professional recording tools
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Play className="w-5 h-5 mr-2" />
              Start Your Gaming Channel
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-primary">
              View Creator Success Stories
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamingContentCreators;
