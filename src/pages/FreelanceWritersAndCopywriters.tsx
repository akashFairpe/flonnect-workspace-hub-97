
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Download, PenTool, FileText, TrendingUp, Users, MessageSquare, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const FreelanceWritersAndCopywriters = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const useCases = [
    {
      title: "Recording Writing Process & Content Creation Workflows",
      description: "Freelance writers can record their writing process to showcase their methodology and expertise. Helps clients understand the research, planning, and revision stages that go into quality content. Can include brainstorming sessions, outline creation, and editing techniques. Useful for building credibility and attracting higher-paying clients.",
      example: "A content writer records their complete process for creating a comprehensive blog post, from keyword research to final editing.",
      icon: PenTool,
      gradient: "from-blue-500 to-indigo-600",
      image: "photo-1455390582262-044cdead277a"
    },
    {
      title: "Creating Writing Tutorials & Educational Content",
      description: "Writers can create educational content teaching writing skills, grammar tips, and copywriting techniques. Helps establish authority in the writing community and attract students or clients. Can include masterclasses on persuasive writing, content strategy, and freelance business tips. Great for generating additional income streams.",
      example: "A copywriter creates a tutorial series on 'Writing High-Converting Sales Pages' for aspiring marketers and business owners.",
      icon: FileText,
      gradient: "from-green-500 to-teal-600",
      image: "photo-1434030216411-0b793f4b4173"
    },
    {
      title: "Recording Client Consultations & Strategy Sessions",
      description: "Freelancers can record strategy sessions with clients to document content plans and project requirements. Helps maintain clear project records and ensures all stakeholders are aligned. Can include content audits, strategy presentations, and campaign planning. Essential for managing complex projects and client expectations.",
      example: "A content strategist records a planning session for a client's 6-month content marketing campaign, outlining topics and timelines.",
      icon: Users,
      gradient: "from-purple-500 to-pink-600",
      image: "photo-1600880292203-757bb62b4baf"
    },
    {
      title: "Creating Portfolio Showcases & Case Studies",
      description: "Writers can create compelling portfolio videos that showcase their best work and demonstrate results achieved for clients. Helps differentiate from competitors and win higher-value projects. Can include before-and-after content comparisons, client testimonials, and performance metrics. Crucial for building a premium freelance brand.",
      example: "A freelance copywriter creates a case study video showing how their email campaign increased a client's conversion rate by 150%.",
      icon: TrendingUp,
      gradient: "from-orange-500 to-red-600",
      image: "photo-1551836022-d5d88e9218df"
    },
    {
      title: "Recording Writing Reviews & Feedback Sessions",
      description: "Writers can record content reviews and feedback sessions to provide detailed explanations of their edits and suggestions. Helps clients understand the value of professional editing and revision. Can include grammar explanations, style improvements, and strategic content recommendations. Useful for educating clients and justifying revision costs.",
      example: "A freelance editor records a detailed review of a client's website copy, explaining tone adjustments and conversion optimization suggestions.",
      icon: MessageSquare,
      gradient: "from-teal-500 to-cyan-600",
      image: "photo-1507003211169-0a1dd7228f2d"
    }
  ];

  const faqs = [
    {
      question: "How can I showcase my writing expertise to potential clients?",
      answer: "Create videos demonstrating your writing process, share case studies with measurable results, and offer valuable writing tips. This builds trust and helps clients understand the value of professional writing services."
    },
    {
      question: "What's the best way to present content strategy to clients?",
      answer: "Use screen recordings to walk through content audits, present strategy documents with clear explanations, and show examples of successful content campaigns. Visual presentations help clients understand complex strategies better."
    },
    {
      question: "Can I monetize my writing knowledge through video content?",
      answer: "Yes! Create writing courses, offer portfolio reviews, sell templates and frameworks, and build a following through educational content. Many writers successfully generate passive income through online courses and coaching."
    },
    {
      question: "How do I create compelling case studies that win clients?",
      answer: "Focus on results and transformation - show the challenge, your solution process, and quantifiable outcomes. Include client testimonials, before-and-after examples, and specific metrics that demonstrate your impact."
    },
    {
      question: "What should I include in client feedback sessions?",
      answer: "Provide detailed explanations of your edits, strategic reasoning behind changes, and suggestions for improvement. Record these sessions to create valuable content while ensuring clients understand your expertise."
    },
    {
      question: "How can I build authority in the writing community?",
      answer: "Share your expertise through educational content, participate in writing challenges, create trend analysis videos, and offer insights on content marketing. Consistent, valuable content establishes you as a thought leader."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-6 py-16">
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Screen Recorder for Freelance Writers & Copywriters
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Build authority and attract premium clients. Showcase your writing expertise, create educational content, and demonstrate the value of professional writing services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
              <Play className="w-5 h-5 mr-2" />
              Start Content Creation
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Download className="w-5 h-5 mr-2" />
              View Writing Tools
            </Button>
          </div>
        </header>

        <section className="max-w-7xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              5 Essential Writing & Copywriting Recording Applications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From process demonstrations to client presentations, discover how successful writers are building authority and winning premium projects
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
                        alt={`Professional writing workspace for ${useCase.title.toLowerCase()}`}
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
                      <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-300">
                        <p className="text-sm font-semibold text-blue-700 mb-2">Writing Example:</p>
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
        </section>

        <section className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything freelance writers need to know about building authority and attracting premium clients through video content
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
            Transform Your Writing Career
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join successful freelance writers who are building authority, attracting premium clients, and creating multiple income streams through strategic content creation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Play className="w-5 h-5 mr-2" />
              Start Building Authority
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-primary">
              View Writer Success Stories
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FreelanceWritersAndCopywriters;
