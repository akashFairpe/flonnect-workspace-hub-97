
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Download, Home, Camera, Users, TrendingUp, Clipboard, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const RealEstateAgents = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const useCases = [
    {
      title: "Recording Virtual Property Tours & Walkthroughs",
      description: "Real estate agents can record immersive property tours to showcase homes, offices, and commercial spaces. Helps potential buyers view properties remotely, saving time and increasing reach. Can include room-by-room walkthroughs, drone footage, and interactive 360-degree views. Useful for luxury real estate, rental listings, and international buyers.",
      example: "A real estate agent records a guided tour of a beachfront villa, highlighting key features like ocean views and smart home technology.",
      icon: Home,
      gradient: "from-blue-500 to-cyan-600",
      image: "photo-1560518883-ce09059eeffa"
    },
    {
      title: "Creating Client Presentations & Investment Guides",
      description: "Agents can record personalized presentations for clients, explaining pricing, market trends, and investment potential. Helps in educating first-time buyers, property investors, and sellers. Can include comparative market analysis, financing options, and ROI projections. Useful for high-end buyers, foreign investors, and corporate real estate transactions.",
      example: "A real estate agent records a video on 'Why Now is the Best Time to Invest in Downtown Condos', using market data and price trends.",
      icon: TrendingUp,
      gradient: "from-green-500 to-emerald-600",
      image: "photo-1497366216548-37526070297c"
    },
    {
      title: "Hosting & Recording Live Q&A Sessions & Webinars",
      description: "Agents can record live virtual open houses and Q&A sessions for potential buyers. Helps in addressing common questions about properties, neighborhoods, and market conditions. Can include guest appearances from mortgage lenders, home inspectors, or interior designers. Useful for expanding reach through Facebook Live, YouTube, and Instagram Stories.",
      example: "A real estate broker records a live webinar on 'Home Buying Tips for First-Time Buyers', answering audience questions in real-time.",
      icon: Users,
      gradient: "from-purple-500 to-violet-600",
      image: "photo-1554224155-6726b3ff858f"
    },
    {
      title: "Documenting Before & After Home Staging & Renovation Projects",
      description: "Agents can record home improvement and staging transformation videos to showcase added value. Helps sellers understand how minor upgrades can increase property value. Can include comparisons of empty vs. staged homes, renovation time-lapses, and budget breakdowns. Useful for real estate investors, house flippers, and home sellers looking for higher returns.",
      example: "A real estate agent records a before-and-after video of a renovated kitchen, showing how modern updates increased the home's value.",
      icon: Camera,
      gradient: "from-orange-500 to-red-600",
      image: "photo-1484154218962-a197022b5858"
    },
    {
      title: "Capturing & Reviewing Property Inspections & Legal Disclosures",
      description: "Agents can record video documentation of property conditions for transparency with buyers and sellers. Helps in explaining inspection reports, legal disclosures, and necessary repairs. Can include walkthroughs with inspectors, structural assessments, and compliance checks. Useful for avoiding disputes and ensuring full disclosure before closing a deal.",
      example: "A real estate agent records a property inspection video, highlighting minor fixes needed before listing the home on the market.",
      icon: Clipboard,
      gradient: "from-teal-500 to-blue-600",
      image: "photo-1575908539629-7fe89fcfb60a"
    }
  ];

  const faqs = [
    {
      question: "How can I create compelling virtual property tours?",
      answer: "Use professional-quality video with smooth camera movements, good lighting, and clear narration. Our platform includes stabilization features and annotation tools to highlight key property features and create engaging virtual experiences."
    },
    {
      question: "What's the best way to showcase property value and market trends?",
      answer: "Combine property footage with market data visualizations, comparison charts, and neighborhood insights. Our screen recording tools help you create professional presentations that educate and persuade potential buyers."
    },
    {
      question: "Can I host live virtual open houses effectively?",
      answer: "Absolutely! Our live streaming features include chat integration, screen sharing for documents, and recording capabilities so attendees can review the session later. Perfect for reaching remote buyers and busy schedules."
    },
    {
      question: "How do I document property conditions and inspections?",
      answer: "Use detailed video walkthroughs with timestamp annotations and voice narration. This creates transparent documentation that protects all parties and helps explain complex inspection reports to clients."
    },
    {
      question: "Can I create educational content to build my real estate brand?",
      answer: "Yes! Record market analysis videos, home buying guides, and neighborhood spotlights. Our platform helps you create professional content that establishes expertise and attracts new clients through social media."
    },
    {
      question: "How do I showcase renovation potential and staging benefits?",
      answer: "Create before-and-after comparison videos, time-lapse renovations, and staging transformations. These visual demonstrations help sellers understand value-add opportunities and justify pricing strategies."
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
            Screen Recorder for Real Estate Agents
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Elevate your real estate practice and close more deals. Create stunning virtual tours, market analysis presentations, and client education content that builds trust and drives sales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
              <Play className="w-5 h-5 mr-2" />
              Start Real Estate Recording
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Download className="w-5 h-5 mr-2" />
              View Property Tools
            </Button>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              5 Essential Real Estate Recording Applications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From virtual tours to market presentations, discover how real estate professionals are winning more clients and closing more deals
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
                        alt={`Real estate professional workspace for ${useCase.title.toLowerCase()}`}
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
                        <p className="text-sm font-semibold text-blue-700 mb-2">Real Estate Example:</p>
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
              Everything real estate agents need to know about creating professional content and growing their business through recording solutions
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
            Transform Your Real Estate Business
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join successful real estate agents who are closing more deals, reaching more clients, and building stronger businesses through professional recording solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Play className="w-5 h-5 mr-2" />
              Start Your Success Story
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-primary">
              View Agent Success Stories
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealEstateAgents;
