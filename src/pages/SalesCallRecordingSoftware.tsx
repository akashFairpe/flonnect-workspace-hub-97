import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Download, Users, Phone, Target, TrendingUp, MessageSquare, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const SalesCallRecordingSoftware = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const useCases = [
    {
      title: "Recording Client Calls for Training & Coaching",
      description: "Sales teams can record client calls to analyze performance and improve techniques. Helps sales managers provide targeted coaching and identify areas for improvement. Can be used for onboarding new sales reps and creating best practice libraries.",
      example: "A sales manager records a successful product demo call to train new team members on effective presentation techniques.",
      icon: Phone,
      gradient: "from-blue-600 to-purple-600",
      image: "photo-1556761175-4b46a572b786"
    },
    {
      title: "Capturing Product Demos & Presentations",
      description: "Sales professionals can record product demonstrations and sales presentations for prospects who couldn't attend live sessions. Helps maintain consistent messaging and allows prospects to review details at their convenience.",
      example: "A sales rep records a software demo for a potential client's technical team to review before making a decision.",
      icon: Users,
      gradient: "from-green-600 to-blue-600",
      image: "photo-1551836022-d5d88e9218df"
    },
    {
      title: "Documenting Sales Processes & Pipeline Management",
      description: "Teams can record sales process walkthroughs and pipeline reviews to maintain consistency across the sales organization. Helps in standardizing approaches and ensuring all team members follow best practices.",
      example: "A sales director records a pipeline review session, showing how to qualify leads and move them through the sales funnel.",
      icon: Target,
      gradient: "from-purple-600 to-pink-600",
      image: "photo-1507003211169-0a1dd7228f2d"
    },
    {
      title: "Creating Customer Success Stories & Case Studies",
      description: "Sales teams can record customer testimonials and success stories to use in future sales presentations. Helps build credibility and provides social proof for prospective clients.",
      example: "A sales team records a client sharing their positive experience with the product for use in future presentations.",
      icon: MessageSquare,
      gradient: "from-orange-600 to-red-600",
      image: "photo-1600880292089-90a7e086ee0c"
    },
    {
      title: "Recording Sales Meetings & Strategy Sessions",
      description: "Sales leadership can record team meetings, strategy sessions, and training workshops for team members who couldn't attend. Ensures all sales staff stay aligned with company goals and strategies.",
      example: "A sales VP records a quarterly strategy meeting outlining new pricing and competitive positioning for the team.",
      icon: TrendingUp,
      gradient: "from-teal-600 to-green-600",
      image: "photo-1552664730-d307ca884978"
    }
  ];

  const faqs = [
    {
      question: "Is it legal to record sales calls?",
      answer: "Recording laws vary by location. Our software includes consent management features and compliance tools to help you follow local regulations. Always obtain proper consent before recording."
    },
    {
      question: "How does call recording integrate with our CRM?",
      answer: "We integrate seamlessly with popular CRM systems like Salesforce, HubSpot, and Pipedrive. Recordings are automatically linked to contact records and deal stages."
    },
    {
      question: "Can we analyze recorded calls for insights?",
      answer: "Yes! Our AI-powered analytics can identify key moments, track talk time ratios, detect sentiment, and provide coaching recommendations based on successful call patterns."
    },
    {
      question: "What's the audio quality like for phone calls?",
      answer: "We provide crystal-clear audio recording for both VoIP and traditional phone systems. Our noise reduction technology ensures professional-quality recordings every time."
    },
    {
      question: "How do we share recordings with team members?",
      answer: "Recordings can be shared via secure links, embedded in presentations, or accessed through team dashboards. You can also create highlight reels for training purposes."
    },
    {
      question: "What security measures protect our sales recordings?",
      answer: "All recordings are encrypted in transit and at rest, with role-based access controls and audit trails. We comply with SOC 2, GDPR, and other security standards."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Sales Call Recording Software
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Boost sales performance with professional call recording solutions. Capture client conversations, analyze performance, and create winning sales strategies that drive revenue growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
              <Play className="w-5 h-5 mr-2" />
              Start Sales Trial
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Download className="w-5 h-5 mr-2" />
              See CRM Integration
            </Button>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              5 Key Sales Recording Use Cases
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how top-performing sales teams leverage call recording to close more deals and improve performance
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
                        alt={useCase.title}
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
                            {index + 1}. {useCase.title}
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
              Everything sales teams need to know about call recording for better performance
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
                      {faq.question}
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
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Accelerate Your Sales Success
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join top-performing sales teams who are using call recording to improve their results and exceed targets
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Play className="w-5 h-5 mr-2" />
              Boost Sales Performance Today
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-primary">
              View Sales Analytics Features
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesCallRecordingSoftware;
