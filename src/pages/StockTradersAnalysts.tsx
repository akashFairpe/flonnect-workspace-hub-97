
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Download, Video, Users, FileText, GraduationCap, Search, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const StockTradersAnalysts = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const useCases = [
    {
      title: "Recording Live Market Analysis & Trend Reports",
      description: "Stock traders and analysts can record real-time market analysis to help investors make informed decisions. Helps in tracking stock movements, chart patterns, and economic indicators. Can include technical and fundamental analysis, market sentiment breakdowns, and key news updates. Useful for day traders, swing traders, and long-term investors.",
      example: "A trading analyst records a daily market update video, explaining how inflation data affects stock performance.",
      icon: Video,
      gradient: "from-red-500 to-orange-600",
      image: "photo-1611974789855-9c2a0a7236a3"
    },
    {
      title: "Creating Trading Strategy & Technical Analysis Tutorials",
      description: "Traders can record step-by-step guides on different trading strategies. Helps beginners and experienced traders learn risk management, price action, and chart reading techniques. Can include candlestick pattern analysis, moving averages, Fibonacci retracements, and trendline strategies. Useful for building a YouTube channel, online course, or premium trading community.",
      example: "A trader records a tutorial on 'How to Use RSI & MACD for Swing Trading', showing live chart examples and entry-exit points.",
      icon: GraduationCap,
      gradient: "from-blue-500 to-indigo-600",
      image: "photo-1559526324-4b87b5e36e44"
    },
    {
      title: "Recording Trade Recaps & Performance Reviews",
      description: "Stock traders can record their trades to review and analyze performance. Helps in identifying mistakes, improving decision-making, and refining trading strategies. Can include win-loss analysis, psychological reflections, and lessons learned from trades. Useful for documenting trading progress and mentoring other traders.",
      example: "A day trader records a trade recap of the week, breaking down successful and failed trades with key insights.",
      icon: FileText,
      gradient: "from-green-500 to-emerald-600",
      image: "photo-1590479773265-7464e5d48118"
    },
    {
      title: "Hosting & Recording Webinars on Market Insights & Investment Strategies",
      description: "Analysts can host and record live webinars covering in-depth financial topics. Helps in educating investors about stock picking, portfolio diversification, and economic trends. Can include Q&A sessions, expert panels, and market forecast discussions. Useful for financial education companies, trading groups, and online investment communities.",
      example: "A market strategist records a webinar on 'How to Build a Recession-Proof Portfolio', explaining defensive stocks and hedging strategies.",
      icon: Users,
      gradient: "from-purple-500 to-violet-600",
      image: "photo-1556761175-b413da4baf72"
    },
    {
      title: "Creating Online Trading Courses & Subscription-Based Content",
      description: "Traders and analysts can record structured trading courses for beginners and advanced traders. Helps in teaching trading psychology, options trading, risk-reward management, and algorithmic trading. Can include interactive case studies, backtesting strategies, and live trading simulations. Useful for selling courses on Udemy, Teachable, or premium trading communities.",
      example: "A technical analyst creates a course on 'Mastering Price Action Trading', covering trend reversals, market structure, and entry-exit techniques.",
      icon: Search,
      gradient: "from-orange-500 to-red-600",
      image: "photo-1434025425743-4ef37ca75ad1"
    }
  ];

  const faqs = [
    {
      question: "How can recorded market analysis help build a trading audience?",
      answer: "Consistent market analysis videos establish credibility and attract followers who value your insights. Our platform helps you create professional daily/weekly market updates that build trust and grow your trading community or client base."
    },
    {
      question: "What's the best way to record trading tutorials and chart analysis?",
      answer: "Screen recording with chart annotation tools is essential for trading education. Our platform provides high-quality screen capture, drawing tools for highlighting key areas, and clear audio recording perfect for explaining complex trading concepts."
    },
    {
      question: "Can I monetize trading education content effectively?",
      answer: "Absolutely! Many successful traders build revenue streams through courses, premium analysis, and subscription content. Our platform supports course creation, membership sites, and content monetization that can complement your trading income."
    },
    {
      question: "How do I create effective trade recap and performance analysis videos?",
      answer: "Our platform includes trade journaling features, performance tracking, and review tools. You can create detailed trade analysis that helps you improve while providing valuable educational content for other traders."
    },
    {
      question: "What features support live market analysis and webinars?",
      answer: "We offer live streaming, interactive chat, and real-time screen sharing perfect for market analysis sessions. You can host live trading rooms, market update sessions, and educational webinars that engage your trading community."
    },
    {
      question: "How can I protect my trading strategies while sharing educational content?",
      answer: "Our platform provides flexible privacy controls and watermarking options. You can share educational concepts and general strategies while protecting your specific trading methods and maintaining competitive advantages."
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
            Screen Recorder for Stock Traders & Analysts
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Share market insights and build your trading brand. Create market analysis, educational content, and trading tutorials with professional recording tools designed for financial market professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
              <Play className="w-5 h-5 mr-2" />
              Start Trading Recording
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Download className="w-5 h-5 mr-2" />
              View Trading Tools
            </Button>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              5 Essential Trading Recording Applications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From market analysis to education, discover how traders and analysts are building successful brands and sharing market expertise
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
                        alt={`Stock trading and analysis environment for ${useCase.title.toLowerCase()}`}
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
                      <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-300">
                        <p className="text-sm font-semibold text-red-700 mb-2">Trading Example:</p>
                        <p className="text-red-600 italic">
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
              Everything stock traders and analysts need to know about creating compelling market content and building successful trading brands
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
            Master the Markets & Share Your Expertise
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join successful traders and analysts who are building influential brands and educating the next generation of market participants through professional content creation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Play className="w-5 h-5 mr-2" />
              Build Your Trading Brand
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-primary">
              View Trader Success Stories
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockTradersAnalysts;
