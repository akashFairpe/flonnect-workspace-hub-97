import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Download, Target, TrendingUp, Users, BarChart, MessageSquare, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const ScreenRecorderForMarketing = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const useCases = [
    {
      title: "Creating Product Demo Videos & Sales Materials",
      description: "Marketing teams can record compelling product demonstrations, feature walkthroughs, and sales presentations that convert prospects into customers. Includes tools for highlighting key features and adding persuasive call-to-actions.",
      example: "A SaaS marketing team records a product demo showing how their software solves common customer pain points for use in email campaigns.",
      icon: Target,
      gradient: "from-blue-600 to-purple-600",
      image: "photo-1460925895917-afdab827c52f"
    },
    {
      title: "Recording Customer Testimonials & Case Studies",
      description: "Marketers can record customer success stories, testimonials, and case study presentations to build trust and social proof. Perfect for landing pages, sales decks, and marketing campaigns.",
      example: "A marketing manager records a customer sharing their success story for use in the company's website testimonials section.",
      icon: Users,
      gradient: "from-green-600 to-emerald-600",
      image: "photo-1600880292089-90a7e086ee0c"
    },
    {
      title: "Creating Educational Content & Thought Leadership",
      description: "Marketing professionals can record webinars, industry insights, and educational content to establish thought leadership and attract qualified leads through valuable content marketing.",
      example: "A digital marketing expert records a webinar on 'Latest Social Media Trends' to generate leads and establish industry authority.",
      icon: TrendingUp,
      gradient: "from-orange-600 to-red-600",
      image: "photo-1557804506-669a67965ba0"
    },
    {
      title: "Recording Campaign Analytics & Performance Reviews",
      description: "Marketing teams can record campaign performance reviews, analytics walkthroughs, and strategy presentations for stakeholders and team alignment. Helps communicate results and plan future campaigns.",
      example: "A marketing director records a quarterly campaign review showing ROI metrics and performance data for the executive team.",
      icon: BarChart,
      gradient: "from-purple-600 to-pink-600",
      image: "photo-1551836022-d5d88e9218df"
    },
    {
      title: "Creating Internal Training & Process Documentation",
      description: "Marketing departments can record training videos for new team members, process documentation, and best practice sharing to standardize marketing operations and improve team efficiency.",
      example: "A senior marketer records a tutorial on using the company's marketing automation platform for new team members.",
      icon: MessageSquare,
      gradient: "from-teal-600 to-blue-600",
      image: "photo-1522202176988-66273c2fd55f"
    }
  ];

  const faqs = [
    {
      question: "How can video content improve our marketing ROI?",
      answer: "Video content typically sees 80% higher conversion rates than text-based content. Our platform helps you create compelling videos that engage audiences, build trust, and drive more qualified leads through your marketing funnel."
    },
    {
      question: "Can we integrate with our marketing automation tools?",
      answer: "Yes! We integrate with popular marketing platforms like HubSpot, Marketo, and Salesforce. You can automatically add recorded videos to email campaigns, landing pages, and lead nurturing sequences."
    },
    {
      question: "What analytics help measure video marketing performance?",
      answer: "Our platform provides detailed analytics including view rates, engagement metrics, click-through rates, and conversion tracking. You can see which videos drive the most leads and optimize your content strategy."
    },
    {
      question: "How do we maintain brand consistency across marketing videos?",
      answer: "Our brand management tools allow you to create templates with your logo, colors, fonts, and messaging. You can ensure all marketing videos maintain consistent branding and professional appearance."
    },
    {
      question: "Can we create personalized video content for different segments?",
      answer: "Absolutely! Our platform supports variable content insertion, allowing you to create personalized videos for different customer segments, industries, or geographic regions while maintaining efficiency."
    },
    {
      question: "What support do you provide for marketing team adoption?",
      answer: "We offer comprehensive onboarding, training sessions, and best practice guides specifically for marketing teams. Our customer success team helps you optimize video content for maximum marketing impact."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Screen Recorder for Marketing Teams
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Drive marketing success with powerful video content creation tools. Create compelling product demos, customer testimonials, and educational content that converts prospects and builds brand authority.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
              <Play className="w-5 h-5 mr-2" />
              Start Marketing Videos
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Download className="w-5 h-5 mr-2" />
              View Marketing Templates
            </Button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              5 Essential Marketing Recording Applications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how successful marketing teams use video content to drive engagement, generate leads, and accelerate growth
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
                        alt={`Marketing content creation for ${useCase.title.toLowerCase()}`}
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
              Everything marketers need to know about creating high-converting video content
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
            Boost Your Marketing Performance
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join successful marketing teams who are driving better results with engaging video content and professional recording tools
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Play className="w-5 h-5 mr-2" />
              Start Converting with Video
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-primary">
              See Marketing ROI Data
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreenRecorderForMarketing;
