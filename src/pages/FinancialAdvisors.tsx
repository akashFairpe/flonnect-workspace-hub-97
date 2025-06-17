
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Download, Video, Users, FileText, GraduationCap, Search, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const FinancialAdvisors = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const useCases = [
    {
      title: "Recording Investment Guides & Market Analysis Videos",
      description: "Financial advisors can record investment strategy videos to educate clients on smart financial planning. Helps clients understand stock market trends, portfolio diversification, and investment opportunities. Can include market breakdowns, economic insights, and risk management strategies. Useful for both beginner and advanced investors seeking guidance.",
      example: "A financial advisor records a weekly market update video, explaining how Federal Reserve decisions impact stock prices.",
      icon: Video,
      gradient: "from-blue-500 to-indigo-600",
      image: "photo-1611974789855-9c2a0a7236a3"
    },
    {
      title: "Creating Personalized Financial Planning & Wealth Management Videos",
      description: "Advisors can record customized financial plans for individual clients. Helps in explaining savings strategies, retirement planning, and tax-efficient investments. Can include visual breakdowns of investment allocations and risk assessments. Useful for one-on-one financial coaching and long-term wealth planning.",
      example: "A financial planner records a video explaining a 10-year investment roadmap for a client, showing recommended asset allocations and tax-saving strategies.",
      icon: Users,
      gradient: "from-green-500 to-emerald-600",
      image: "photo-1450101499163-c8848c66ca85"
    },
    {
      title: "Recording Budgeting & Money Management Tutorials",
      description: "Financial professionals can record video guides on smart budgeting, debt reduction, and financial literacy. Helps clients build strong money habits and understand cash flow management. Can include step-by-step tutorials on using budgeting tools and financial calculators. Useful for millennials, entrepreneurs, and anyone looking to improve financial stability.",
      example: "A financial coach records a tutorial on 'How to Build a Zero-Based Budget', demonstrating the 50/30/20 rule with real-life scenarios.",
      icon: FileText,
      gradient: "from-purple-500 to-violet-600",
      image: "photo-1554224155-6726b3ff858f"
    },
    {
      title: "Hosting & Recording Webinars on Wealth-Building Strategies",
      description: "Advisors can record live financial education webinars to engage clients and prospects. Helps in breaking down complex financial topics into easy-to-understand lessons. Can include guest speakers, Q&A sessions, and real-time market analysis. Useful for corporate financial wellness programs and investor education initiatives.",
      example: "A financial consultant records a webinar on 'How to Retire Early with Smart Investments', explaining index funds, passive income, and compounding.",
      icon: GraduationCap,
      gradient: "from-orange-500 to-red-600",
      image: "photo-1559757175-0eb30cd8c063"
    },
    {
      title: "Creating Online Finance Courses & Subscription Content",
      description: "Financial advisors can record structured finance courses to scale their business. Helps in teaching investment basics, tax planning, and financial independence strategies. Can include interactive lessons, real-world case studies, and step-by-step guides. Useful for building a passive income stream through platforms like Udemy, Teachable, or Patreon.",
      example: "A wealth strategist creates an online course on 'Mastering Stock Market Investing', covering fundamental and technical analysis techniques.",
      icon: Search,
      gradient: "from-teal-500 to-cyan-600",
      image: "photo-1460925895917-afdab827c52f"
    }
  ];

  const faqs = [
    {
      question: "How can video content help build trust and attract financial planning clients?",
      answer: "Video content demonstrates expertise, builds personal connections, and simplifies complex financial concepts. Our platform helps you create professional educational content that establishes credibility and attracts clients who value transparent, knowledgeable financial guidance."
    },
    {
      question: "What compliance considerations exist for financial advisor video content?",
      answer: "We provide compliance-friendly features including content approval workflows, disclosure management, and archiving capabilities. Our platform helps ensure your educational content meets FINRA and SEC guidelines while maintaining professional standards."
    },
    {
      question: "Can I create personalized financial plans and presentations for clients?",
      answer: "Absolutely! Our screen recording features are perfect for creating personalized portfolio reviews, retirement planning presentations, and investment strategy explanations. You can include charts, calculators, and visual aids that make complex plans easy to understand."
    },
    {
      question: "How do I scale my advisory practice with educational content?",
      answer: "Video education allows you to serve more clients efficiently while maintaining quality guidance. Our course creation tools help you develop structured financial education programs that complement your advisory services and create additional revenue streams."
    },
    {
      question: "What features support market analysis and investment education?",
      answer: "We offer screen recording for market charts, annotation tools for highlighting trends, and presentation features for economic analysis. Perfect for creating regular market updates, investment tutorials, and client education content."
    },
    {
      question: "Can I host virtual financial planning seminars and workshops?",
      answer: "Yes! Our platform supports live webinars, Q&A sessions, and interactive presentations. You can host financial literacy workshops, retirement planning seminars, and investment education sessions that engage prospects and serve your community."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Screen Recorder for Financial Advisors
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Build trust and grow your advisory practice. Create educational content, personalized financial plans, and wealth-building resources with professional recording tools designed for financial professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
              <Play className="w-5 h-5 mr-2" />
              Start Financial Recording
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Download className="w-5 h-5 mr-2" />
              View Financial Tools
            </Button>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              5 Essential Financial Advisory Recording Applications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From investment guidance to financial education, discover how financial advisors are building successful practices and helping clients achieve financial freedom
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
                        alt={`Financial advisory environment for ${useCase.title.toLowerCase()}`}
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
                      <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-300">
                        <p className="text-sm font-semibold text-blue-700 mb-2">Financial Example:</p>
                        <p className="text-blue-600 italic">
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
              Everything financial advisors need to know about creating compelling content and building successful advisory practices
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
            Build Wealth & Financial Freedom
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join financial advisors who are building successful practices and helping clients achieve financial independence through expert guidance and education
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Play className="w-5 h-5 mr-2" />
              Grow Your Advisory Practice
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-primary">
              View Advisor Success Stories
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialAdvisors;
