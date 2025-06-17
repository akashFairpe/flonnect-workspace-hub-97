
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Download, TrendingUp, DollarSign, Users, BarChart, Target, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const ScreenRecorderForAffiliateMarketing = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const useCases = [
    {
      title: "Recording Product Reviews & Demonstrations for Affiliate Links",
      description: "Affiliate marketers can record detailed product reviews and demonstrations to showcase the benefits and features of products they're promoting. Helps build trust with audiences by providing honest, in-depth reviews. Can include software tutorials, physical product unboxings, and comparison videos. Useful for driving higher conversion rates and building a loyal following.",
      example: "An affiliate marketer records a comprehensive review of a project management tool, showing its features and how it solves common problems.",
      icon: TrendingUp,
      gradient: "from-green-500 to-emerald-600",
      image: "photo-1556742049-0cfed4f6a45d"
    },
    {
      title: "Creating Tutorial Content to Drive Affiliate Sales",
      description: "Marketers can create educational tutorials that naturally incorporate affiliate products as solutions. Helps provide value to audiences while subtly promoting relevant products. Can include step-by-step guides, problem-solving tutorials, and how-to content. Perfect for building authority and trust before making affiliate recommendations.",
      example: "A marketing expert creates a tutorial on 'Building an Email List' and recommends specific email marketing tools as affiliate links.",
      icon: Users,
      gradient: "from-blue-500 to-cyan-600",
      image: "photo-1551836022-d5d88e9218df"
    },
    {
      title: "Recording Webinars & Live Sessions for Affiliate Promotion",
      description: "Affiliate marketers can host and record live webinars to demonstrate products and services to engaged audiences. Helps create urgency and allows for real-time interaction with potential buyers. Can include Q&A sessions, live demonstrations, and special offers. Useful for promoting high-ticket affiliate products.",
      example: "An affiliate marketer hosts a live webinar on 'Scaling Your Online Business' and promotes relevant business tools and courses.",
      icon: BarChart,
      gradient: "from-purple-500 to-indigo-600",
      image: "photo-1542744173-8e7e53415bb0"
    },
    {
      title: "Creating Case Studies & Success Stories for Social Proof",
      description: "Marketers can record case studies showing real results achieved using affiliate products. Helps provide social proof and demonstrates the actual value of promoted products. Can include before-and-after comparisons, testimonials, and results breakdowns. Essential for building credibility and trust with audiences.",
      example: "An affiliate marketer records a case study showing how a specific SEO tool helped increase website traffic by 300% in 3 months.",
      icon: Target,
      gradient: "from-orange-500 to-red-600",
      image: "photo-1460925895917-afdab827c52f"
    },
    {
      title: "Recording Sales Funnels & Email Sequences for High-Converting Campaigns",
      description: "Affiliate marketers can record the creation of sales funnels and email sequences that promote affiliate products. Helps document proven strategies and workflows for future campaigns. Can include landing page creation, email writing, and conversion optimization. Useful for scaling successful affiliate campaigns.",
      example: "An affiliate marketer records the complete process of building a high-converting sales funnel for a digital marketing course.",
      icon: DollarSign,
      gradient: "from-teal-500 to-green-600",
      image: "photo-1563013544-824ae1b704d3"
    }
  ];

  const faqs = [
    {
      question: "How can I create compelling affiliate product reviews?",
      answer: "Focus on honest, detailed demonstrations showing real use cases. Our platform helps you create professional reviews with multiple camera angles, screen recordings, and clear narration that builds trust with your audience."
    },
    {
      question: "What's the best way to disclose affiliate relationships in videos?",
      answer: "Always include clear affiliate disclosures at the beginning of your videos and in descriptions. Our platform includes template overlays and graphics to help you maintain transparency and comply with FTC guidelines."
    },
    {
      question: "Can I track the performance of my affiliate marketing videos?",
      answer: "Yes! We provide detailed analytics showing engagement rates, click-through rates, and conversion tracking. This helps you optimize your content strategy and focus on the most profitable affiliate partnerships."
    },
    {
      question: "How do I create educational content that naturally incorporates affiliate links?",
      answer: "Focus on solving real problems and providing genuine value first. Our content planning tools help you structure tutorials and guides that naturally introduce affiliate solutions as helpful recommendations."
    },
    {
      question: "What formats work best for affiliate marketing content?",
      answer: "Mix different formats including product demonstrations, comparison videos, tutorials, and case studies. Our platform supports various content types and helps you repurpose content across multiple channels for maximum reach."
    },
    {
      question: "How can I scale my affiliate marketing video production?",
      answer: "Create templates and workflows for consistent content production. Our platform includes batch processing, content templates, and automation features to help you efficiently create and distribute affiliate marketing content."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="container mx-auto px-6 py-16">
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Screen Recorder for Affiliate Marketing
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Boost your affiliate commissions with compelling video content. Create product reviews, tutorials, and demonstrations that drive conversions and build trust with your audience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
              <Play className="w-5 h-5 mr-2" />
              Start Creating Affiliate Content
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Download className="w-5 h-5 mr-2" />
              View Marketing Tools
            </Button>
          </div>
        </header>

        <section className="max-w-7xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              5 Powerful Affiliate Marketing Video Strategies
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From product reviews to case studies, discover how successful affiliate marketers are building profitable video content
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
                        alt={`Affiliate marketing workspace for ${useCase.title.toLowerCase()}`}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                    <div className="lg:w-2/3">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${useCase.gradient} text-white flex-shrink-0`}>
                          <useCase.icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl md:text-2xl text-gray-900 mb-2 font-semibold">
                            {index + 1}. {useCase.title}
                          </h3>
                          <CardDescription className="text-base text-gray-600 leading-relaxed">
                            {useCase.description}
                          </CardDescription>
                        </div>
                      </div>
                      <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-300">
                        <p className="text-sm font-semibold text-green-700 mb-2">Marketing Example:</p>
                        <p className="text-green-600 italic">
                          {useCase.example}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section className="max-w-4xl mx-auto mb-16">
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
                    <h3 className="text-lg text-gray-900 text-left font-medium">
                      {faq.question}
                    </h3>
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
        </section>

        <section className="text-center bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Maximize Your Affiliate Earnings
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join successful affiliate marketers who are building profitable businesses through compelling video content and strategic promotion
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Play className="w-5 h-5 mr-2" />
              Start Your Affiliate Success
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-primary">
              View Success Stories
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ScreenRecorderForAffiliateMarketing;
