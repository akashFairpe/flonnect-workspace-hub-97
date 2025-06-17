
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Download, Target, Users, Eye, TrendingUp, BookOpen, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const EsportsCoaches = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const useCases = [
    {
      title: "Recording Gameplay Analysis & Player Reviews",
      description: "Esports coaches can record gameplay breakdowns to review player decisions, strategies, and mistakes. Helps players understand what they did right and where they need improvement. Useful for highlighting positioning, reaction time, decision-making, and mechanics. Can include screen annotations, slow-motion replays, and voiceover explanations.",
      example: "A League of Legends coach records a review of a player's ranked match, explaining how better map awareness could have prevented a loss.",
      icon: Target,
      gradient: "from-red-500 to-orange-600",
      image: "photo-1526374965328-7f61d4dc18c5"
    },
    {
      title: "Creating Training Videos for Team Strategy & Tactics",
      description: "Coaches can record strategy guides tailored to specific teams or games. Useful for teaching advanced tactics, team coordination, and game-specific meta strategies. Helps new and experienced players understand optimal strategies before matches. Can be used for team meetings, scrim reviews, and pre-tournament preparations.",
      example: "A CS:GO coach records a tutorial on 'Best Smoke & Flashbang Setups for Mirage', helping players master utility usage for competitive play.",
      icon: Users,
      gradient: "from-blue-500 to-purple-600",
      image: "photo-1605810230434-7631ac76ec81"
    },
    {
      title: "Reviewing Opponent Gameplay & Preparing Counter-Strategies",
      description: "Coaches can record analysis sessions of opposing teams to develop counter-strategies. Useful for identifying enemy weaknesses, common patterns, and predictable plays. Helps teams anticipate enemy tactics and prepare appropriate responses. Can include side-by-side comparisons of past matches to showcase trends.",
      example: "A Valorant coach records a breakdown of a rival team's playstyle, explaining how they execute site pushes and how to counter them in an upcoming match.",
      icon: Eye,
      gradient: "from-green-500 to-blue-600",
      image: "photo-1473091534298-04dcbce3278c"
    },
    {
      title: "Documenting Player Progress & Skill Development",
      description: "Coaches can record player development sessions to track progress over time. Helps identify mechanical improvements, communication skills, and consistency. Useful for creating personalized training plans based on past performances. Can be shared with players, recruiters, or organizations to showcase improvement.",
      example: "A Fortnite coach records gameplay footage every month, tracking how a player improves in building speed, aim accuracy, and decision-making.",
      icon: TrendingUp,
      gradient: "from-purple-500 to-pink-600",
      image: "photo-1519389950473-47ba0277781c"
    },
    {
      title: "Creating Esports Coaching Courses & Educational Content",
      description: "Coaches can record advanced training sessions and sell them as esports coaching programs. Useful for teaching game mechanics, mindset coaching, and professional esports strategies. Helps coaches monetize their expertise through online platforms like YouTube, Udemy, or Twitch. Can attract aspiring esports players looking to improve.",
      example: "A Rocket League coach creates a video series on 'How to Rank Up from Diamond to Grand Champion', explaining mechanics, rotations, and game sense.",
      icon: BookOpen,
      gradient: "from-orange-500 to-red-600",
      image: "photo-1487887235947-a955ef187fcc"
    }
  ];

  const faqs = [
    {
      question: "How can video analysis improve my team's performance?",
      answer: "Video analysis allows coaches to break down complex plays frame-by-frame, identify patterns, and demonstrate improvements clearly. Teams using video review typically see 25-40% faster skill development compared to verbal feedback alone."
    },
    {
      question: "What's the best way to review gameplay with players?",
      answer: "Focus on 2-3 key areas per review session. Use slow-motion, annotations, and split-screen comparisons to highlight decision points. Our platform includes tools specifically designed for esports analysis and player development."
    },
    {
      question: "Can I create training content for multiple games?",
      answer: "Yes! Our software works with all major esports titles including League of Legends, CS:GO, Valorant, Dota 2, Overwatch, and more. Create game-specific training libraries for different teams and skill levels."
    },
    {
      question: "How do I track player improvement over time?",
      answer: "Create progress portfolios with before/after gameplay comparisons. Our analytics track improvement metrics and help visualize player development across different skills and game aspects."
    },
    {
      question: "Can I monetize my coaching expertise through recordings?",
      answer: "Absolutely! Many coaches create successful online courses, YouTube channels, and coaching programs. Our platform helps you create professional-quality educational content that can generate significant revenue."
    },
    {
      question: "Do you support team collaboration and sharing?",
      answer: "Yes! Share analysis videos with team members, create private team libraries, and collaborate on strategy development. Perfect for remote teams and distributed coaching scenarios."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Screen Recorder for Esports Coaches
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Elevate your coaching game with professional analysis tools. Record gameplay reviews, create strategy guides, and develop winning teams with comprehensive esports recording solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
              <Play className="w-5 h-5 mr-2" />
              Start Coaching Analysis
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Download className="w-5 h-5 mr-2" />
              See Coaching Tools
            </Button>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              5 Essential Esports Coaching Applications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From gameplay analysis to strategy development, discover how esports coaches are building championship teams and developing elite players
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
                        alt={`Esports coaching setup for ${useCase.title.toLowerCase()}`}
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
              Everything esports coaches need to know about professional gameplay analysis and team development tools
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
            Build Championship Teams
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join elite esports coaches who are developing world-class players and winning teams with professional analysis and training tools
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Play className="w-5 h-5 mr-2" />
              Start Professional Coaching
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-primary">
              View Success Stories
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EsportsCoaches;
