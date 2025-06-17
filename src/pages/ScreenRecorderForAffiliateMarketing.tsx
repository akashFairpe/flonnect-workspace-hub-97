
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Download, Users, BookOpen, MessageSquare, Trophy, TrendingUp, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const ScreenRecorderForAffiliateMarketing = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const useCases = [
    {
      title: "Recording Product Walkthroughs & Reviews",
      description: "Affiliate marketers can record screen-sharing product demos to showcase how a product works. Great for promoting software, apps, online tools, and tech gadgets. Helps build trust with audiences by giving an in-depth look at the product's features. Can include annotations, voiceovers, and highlights to emphasize key selling points.",
      example: "An affiliate promoting a web hosting service records a video tutorial showing how to set up a website step by step, adding their affiliate link in the video description.",
      icon: Users,
      gradient: "from-primary to-primary/80",
      image: "photo-1581091226825-a6a2a5aee158"
    },
    {
      title: "Unboxing & Hands-On Product Reviews",
      description: "Marketers can record unboxing videos to show the packaging, build quality, and first impressions. Helps drive sales by demonstrating why the product is worth buying. Works well for Amazon Associates and e-commerce affiliate programs. Can be combined with facecam + screen recording for a more engaging review.",
      example: "An affiliate promoting a new smartphone on Amazon records an unboxing and hands-on test, highlighting key specs and their affiliate link.",
      icon: BookOpen,
      gradient: "from-secondary to-secondary/80",
      image: "photo-1461749280684-dccba630e2f6"
    },
    {
      title: "Creating Comparison & 'Best Product' Videos",
      description: "Affiliates can record comparison videos to showcase multiple products side by side. Helps viewers choose the best option, increasing trust and conversions. Useful for 'Best X for Y' videos, like 'Best Laptops for Video Editing'. Can include on-screen annotations to list pros & cons.",
      example: "A marketer compares three different VPN services, recording speed tests, pricing breakdowns, and ease of use to help viewers make a decision.",
      icon: Trophy,
      gradient: "from-primary/80 to-secondary/60",
      image: "photo-1488590528505-98d2b5aba04b"
    },
    {
      title: "Recording Step-by-Step Guides for Affiliate Products",
      description: "Can create tutorials on how to use a product or service they're promoting. Increases engagement and retention, making people more likely to purchase. Ideal for promoting tools like Shopify, email marketing software, or digital courses. Can be repurposed for YouTube, blogs, and social media ads.",
      example: "An affiliate marketer promoting an SEO tool records a step-by-step guide on 'How to Find High-Traffic Keywords' using the tool, encouraging sign-ups through their affiliate link.",
      icon: MessageSquare,
      gradient: "from-secondary/80 to-primary/60",
      image: "photo-1649972904349-6e44c42644a7"
    },
    {
      title: "Recording Social Media & Ads Content for Promotions",
      description: "Can record short-form videos for Instagram Reels, TikTok, and Facebook Ads. Helps create engaging ad creatives showcasing product benefits. Works well for promoting digital products, courses, and SaaS tools. Can use AI-powered video editing to quickly refine and optimize content.",
      example: "An affiliate promoting an online fitness course records a quick tutorial on '3 Best Weight Loss Tips', ending with a call-to-action to sign up using their affiliate link.",
      icon: TrendingUp,
      gradient: "from-primary to-secondary",
      image: "photo-1531297484001-80022131f5a1"
    }
  ];

  const faqs = [
    {
      question: "How can screen recording boost my affiliate commissions?",
      answer: "Video content converts 10-30x better than text reviews. By showing products in action, you build trust and help viewers make purchasing decisions faster. Screen recordings allow you to demonstrate value clearly, leading to higher click-through rates and conversions."
    },
    {
      question: "What's the best way to disclose affiliate relationships in videos?",
      answer: "Always include clear disclosures both verbally in your video and in the description. Our software includes customizable overlay templates for FTC-compliant affiliate disclosures. Transparency builds trust and is legally required."
    },
    {
      question: "Can I track which videos drive the most affiliate sales?",
      answer: "Yes! Use UTM parameters in your affiliate links and track video performance through Google Analytics. We also integrate with affiliate networks to help you identify your highest-converting content."
    },
    {
      question: "How do I create authentic product reviews that convert?",
      answer: "Focus on real problems the product solves, show actual usage, and be honest about pros and cons. Our software includes annotation tools to highlight key features and benefits naturally within your demonstrations."
    },
    {
      question: "What types of products work best for video affiliate marketing?",
      answer: "Software, online courses, physical tech products, and services work exceptionally well. Anything that benefits from demonstration or has visual appeal performs better in video format than static reviews."
    },
    {
      question: "Can I repurpose one recording for multiple affiliate programs?",
      answer: "Absolutely! Create one comprehensive review and edit multiple versions with different affiliate links. Our editing tools make it easy to swap out links, logos, and calls-to-action for different programs."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Screen Recorder for Affiliate Marketing
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Maximize your affiliate commissions with compelling product demonstrations. Create authentic reviews, comparisons, and tutorials that convert viewers into buyers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
              <Play className="w-5 h-5 mr-2" />
              Start Affiliate Videos
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Download className="w-5 h-5 mr-2" />
              See Review Templates
            </Button>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              5 High-Converting Affiliate Marketing Strategies
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From product demos to comparison videos, discover how top affiliates are maximizing their earnings with video content
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
                        alt={`Affiliate marketing content creation for ${useCase.title.toLowerCase()}`}
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
              Everything affiliate marketers need to know about creating high-converting video content
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
            Start Earning More from Affiliate Marketing
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join successful affiliate marketers who are doubling their commissions with authentic, engaging video reviews
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Play className="w-5 h-5 mr-2" />
              Boost Affiliate Income Now
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-primary">
              View Success Case Studies
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreenRecorderForAffiliateMarketing;
