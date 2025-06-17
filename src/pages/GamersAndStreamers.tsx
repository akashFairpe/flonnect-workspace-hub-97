
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Download, Gamepad2, Video, Users, Star, Zap, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const GamersAndStreamers = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const useCases = [
    {
      title: "Recording Gameplay Highlights & Best Moments",
      description: "Gamers can record and save the best moments from their gameplay for social media and YouTube. Helps in creating highlight reels, funny clips, or intense battle wins. Can include slow-motion replays, reactions, and commentary overlays. Useful for esports players, casual gamers, and streamers looking to build an audience.",
      example: "A Fortnite streamer records and edits a 'Top 10 Epic Victory Royale Moments' video and uploads it to YouTube.",
      icon: Gamepad2,
      gradient: "from-purple-500 to-pink-600",
      image: "photo-1526374965328-7f61d4dc18c5"
    },
    {
      title: "Creating Game Tutorials & Walkthroughs",
      description: "Streamers and content creators can record full gameplay walkthroughs to help players complete missions. Useful for tutorials, game reviews, speedruns, and strategy guides. Can include voiceover commentary, annotations, and tips for difficult levels. Works well for new game releases and trending game content.",
      example: "A Minecraft YouTuber records a step-by-step tutorial on 'How to Build an Automatic Farm', adding annotations for crafting materials and placement.",
      icon: Video,
      gradient: "from-blue-500 to-purple-600",
      image: "photo-1605810230434-7631ac76ec81"
    },
    {
      title: "Streaming Live Gameplay & Creating Reaction Videos",
      description: "Gamers can record live gameplay while reacting to new updates, challenges, and events. Useful for game reaction videos, patch notes discussions, and live commentary. Can capture both screen and webcam video for a more engaging experience. Great for building an audience on Twitch, YouTube Gaming, and Facebook Gaming.",
      example: "A Call of Duty streamer records a live reaction to the 'New Warzone Map Update', analyzing new weapons and strategies.",
      icon: Users,
      gradient: "from-green-500 to-blue-600",
      image: "photo-1487887235947-a955ef187fcc"
    },
    {
      title: "Recording Game Reviews & First Impressions",
      description: "Content creators can record in-depth game reviews to help players decide on purchases. Useful for breaking down graphics, gameplay mechanics, storylines, and performance. Can include side-by-side comparisons, frame rate analysis, and real-time gameplay testing. Helps build trust and engagement with an audience.",
      example: "A gaming YouTuber records a review of 'Elden Ring vs. Dark Souls 3', discussing gameplay mechanics and performance differences.",
      icon: Star,
      gradient: "from-orange-500 to-red-600",
      image: "photo-1473091534298-04dcbce3278c"
    },
    {
      title: "Recording Esports Matches & Team Strategies",
      description: "Competitive gamers can record matches to analyze gameplay and improve strategies. Useful for studying opponent playstyles, team coordination, and skill improvement. Can be used for coaching esports teams and breaking down team performances. Helps create highlights for sponsors, recruitment, and content monetization.",
      example: "A Valorant esports team records their tournament match, reviewing team rotations and clutch plays for post-game analysis.",
      icon: Zap,
      gradient: "from-yellow-500 to-orange-600",
      image: "photo-1519389950473-47ba0277781c"
    }
  ];

  const faqs = [
    {
      question: "What recording quality is best for gaming content?",
      answer: "For gaming, we recommend 1080p at 60fps minimum, with 1440p or 4K for competitive content. Our software automatically optimizes settings based on your hardware and game requirements for the best performance."
    },
    {
      question: "Can I record my gameplay without affecting performance?",
      answer: "Yes! Our optimized recording engine uses hardware acceleration and smart compression to minimize performance impact. Most modern gaming setups see less than 5% FPS reduction during recording."
    },
    {
      question: "How do I create engaging highlight videos from long streams?",
      answer: "Use our AI-powered highlight detection to automatically identify exciting moments like kills, wins, and clutch plays. You can then edit these clips with our built-in editor to create compelling montages."
    },
    {
      question: "Can I record multiple audio sources for better content?",
      answer: "Absolutely! Record game audio, microphone, system sounds, and Discord/party chat separately. This gives you full control during editing to balance audio levels and create professional-quality content."
    },
    {
      question: "What's the best way to grow my gaming channel with recordings?",
      answer: "Focus on trending games, create tutorial content for popular titles, and maintain consistent upload schedules. Our analytics help track which content performs best so you can optimize your strategy."
    },
    {
      question: "Do you support streaming platform integration?",
      answer: "Yes! Direct integration with Twitch, YouTube, Facebook Gaming, and other platforms. You can stream live while recording locally for backup, or upload recorded content directly to your channels."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Screen Recorder for Gamers & Streamers
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Level up your gaming content with professional recording tools. Capture epic gameplay moments, create engaging tutorials, and build your streaming audience with high-quality recordings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
              <Play className="w-5 h-5 mr-2" />
              Start Gaming Recording
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Download className="w-5 h-5 mr-2" />
              See Gaming Features
            </Button>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              5 Essential Gaming Recording Applications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From highlight reels to professional reviews, discover how gamers and streamers are creating compelling content and growing their audiences
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
                        alt={`Gaming setup demonstrating ${useCase.title.toLowerCase()}`}
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
              Everything gamers and streamers need to know about professional gaming content creation and recording
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
            Dominate the Gaming Scene
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join millions of gamers and streamers who are creating viral content and building massive audiences with professional recording tools
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Play className="w-5 h-5 mr-2" />
              Start Creating Epic Content
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-primary">
              View Streamer Success Stories
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamersAndStreamers;
