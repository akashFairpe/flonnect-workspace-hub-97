
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Download, Users, BookOpen, MessageSquare, Trophy, TrendingUp, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const FreelanceWritersAndCopywriters = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const useCases = [
    {
      title: "Recording Content Strategy Discussions for Clients",
      description: "Freelance writers and copywriters can record screen walkthroughs explaining their content plans, keyword research, and article outlines. Helps clients understand the content structure, tone, and messaging before finalizing a project. Reduces back-and-forth emails by visually demonstrating key content ideas. Can include SEO research, competitor analysis, and content distribution strategies.",
      example: "A blog content writer records a walkthrough explaining their SEO strategy and keyword selection for a client's website content plan.",
      icon: Users,
      gradient: "from-primary to-primary/80",
      image: "photo-1581091226825-a6a2a5aee158"
    },
    {
      title: "Creating Writing Tutorials & Educational Content",
      description: "Writers can record step-by-step writing tutorials for YouTube, online courses, or coaching programs. Great for teaching copywriting techniques, storytelling, and SEO writing. Can help establish authority in the writing industry and attract new clients. Useful for selling writing courses, memberships, or e-books.",
      example: "A copywriter records a video tutorial on 'How to Write High-Converting Sales Pages', using real-world examples and case studies.",
      icon: BookOpen,
      gradient: "from-secondary to-secondary/80",
      image: "photo-1461749280684-dccba630e2f6"
    },
    {
      title: "Reviewing & Editing Client Content with Annotations",
      description: "Writers can record content reviews for clients, explaining edits and suggestions. Helps speed up the revision process by visually showing what needs to be improved. Useful for proofreading, copy edits, and structural improvements in blog posts, sales pages, and social media content. Can provide voiceover explanations with on-screen annotations for clarity.",
      example: "A freelance editor records a content review video, highlighting grammar issues, readability improvements, and tone adjustments in a client's website copy.",
      icon: Trophy,
      gradient: "from-primary/80 to-secondary/60",
      image: "photo-1488590528505-98d2b5aba04b"
    },
    {
      title: "Collaborating with Designers & Marketers on Content Creation",
      description: "Writers often work with graphic designers, SEO specialists, and marketing teams. They can record discussions on content flow, structure, and visual elements to ensure alignment. Can be used to explain content briefs, wireframes, and ad copy ideas for social media campaigns. Helps ensure that written content and visuals work cohesively.",
      example: "A social media copywriter records a video explaining how captions should match visual branding for an Instagram marketing campaign.",
      icon: MessageSquare,
      gradient: "from-secondary/80 to-primary/60",
      image: "photo-1649972904349-6e44c42644a7"
    },
    {
      title: "Recording Case Studies & Portfolio Showcases",
      description: "Writers can record video case studies explaining their past work and client successes. Helps attract more clients by demonstrating expertise and writing process. Can showcase before-and-after improvements in website copy, ad campaigns, and sales funnels. Can be used on LinkedIn, Upwork, personal websites, and YouTube.",
      example: "A freelance SaaS writer records a portfolio breakdown video, explaining how they improved a client's landing page conversion rate by 30% through better copy.",
      icon: TrendingUp,
      gradient: "from-primary to-secondary",
      image: "photo-1531297484001-80022131f5a1"
    }
  ];

  const faqs = [
    {
      question: "How can screen recording help me explain my writing process to clients?",
      answer: "Video explanations are much clearer than written briefs. You can walk clients through your research, outline your content strategy, and show how you approach their specific goals. This builds trust and helps clients understand the value of your work."
    },
    {
      question: "What's the best way to record content reviews and feedback?",
      answer: "Use our annotation tools to highlight specific areas while providing voiceover explanations. This makes it easy for clients to understand exactly what needs to be changed and why, speeding up the revision process significantly."
    },
    {
      question: "Can I create educational content to attract new clients?",
      answer: "Absolutely! Recording writing tutorials, case studies, and tips helps establish you as an expert in your field. This content can be shared on YouTube, LinkedIn, and your website to attract higher-paying clients."
    },
    {
      question: "How do I showcase my writing portfolio effectively with video?",
      answer: "Create case study videos explaining your process, the challenges you solved, and the results achieved. Show before-and-after examples and explain your strategic thinking. This is much more engaging than static portfolio pieces."
    },
    {
      question: "Can I collaborate better with design teams using recordings?",
      answer: "Yes! Record content briefs explaining how copy should work with visuals, tone of voice guidelines, and content flow. This ensures everyone is aligned and creates more cohesive marketing materials."
    },
    {
      question: "What tools integrate with your software for writers?",
      answer: "We integrate with Google Docs, Microsoft Word, Grammarly, and popular project management tools. You can easily record your screen while working in these applications and share the videos with clients or team members."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Screen Recorder for Freelance Writers & Copywriters
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Enhance your writing business with professional video content. Create client presentations, tutorials, and showcase your expertise to attract higher-paying projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
              <Play className="w-5 h-5 mr-2" />
              Start Writing Videos
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Download className="w-5 h-5 mr-2" />
              See Writing Templates
            </Button>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              5 Essential Tools for Freelance Writers
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From client communication to portfolio building, discover how writers are growing their freelance business with video
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
                        alt={`Freelance writing workflow for ${useCase.title.toLowerCase()}`}
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
              Everything freelance writers need to know about professional screen recording
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
            Elevate Your Writing Business
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join successful freelance writers who are attracting premium clients and growing their business with professional video content
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Play className="w-5 h-5 mr-2" />
              Showcase Your Writing Expertise
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-primary">
              View Writer Success Stories
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreelanceWritersAndCopywriters;
