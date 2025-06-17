
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Download, Users, BookOpen, MessageSquare, Trophy, TrendingUp, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const ScreenRecorderForFreelanceDesigners = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const useCases = [
    {
      title: "Recording Design Walkthroughs for Clients",
      description: "Freelance designers can record screen walkthroughs of their design projects to explain concepts, revisions, and final outputs. Helps communicate design decisions clearly without long emails or messages. Useful for UI/UX designers, graphic designers, and branding experts. Can highlight specific design choices with on-screen annotations and voiceovers.",
      example: "A logo designer records a video explaining different logo variations to a client, describing why each version works for their brand.",
      icon: Users,
      gradient: "from-primary to-primary/80",
      image: "photo-1581091226825-a6a2a5aee158"
    },
    {
      title: "Creating Tutorials & Design Process Videos",
      description: "Designers can record step-by-step tutorials to showcase how they create designs. Ideal for teaching design skills on YouTube, Skillshare, or Udemy. Helps attract potential clients or students by demonstrating expertise. Can be used to promote design software, templates, or resources through affiliate links.",
      example: "A freelance UI/UX designer records a video on 'How to Design a Landing Page in Figma,' using their own design templates as a lead magnet.",
      icon: BookOpen,
      gradient: "from-secondary to-secondary/80",
      image: "photo-1461749280684-dccba630e2f6"
    },
    {
      title: "Showcasing Portfolio Work for Potential Clients",
      description: "Freelancers can record case study videos explaining their past projects. Great for building a personal brand and showcasing skills. Helps designers stand out on freelance platforms like Upwork and Fiverr. Can be repurposed into Instagram Reels, LinkedIn videos, or Behance presentations.",
      example: "A branding specialist records a before-and-after transformation video of a company's rebranding process, explaining the strategy behind their work.",
      icon: Trophy,
      gradient: "from-primary/80 to-secondary/60",
      image: "photo-1488590528505-98d2b5aba04b"
    },
    {
      title: "Providing Design Feedback & Team Collaboration",
      description: "Designers can record feedback videos instead of writing long emails. Useful for collaborating with developers, clients, or other designers. Helps speed up revision cycles by visually explaining changes. Works well for design critiques, brainstorming sessions, and UI/UX audits.",
      example: "A graphic designer records a feedback video for a junior designer, pointing out areas for improvement in a social media post design.",
      icon: MessageSquare,
      gradient: "from-secondary/80 to-primary/60",
      image: "photo-1649972904349-6e44c42644a7"
    },
    {
      title: "Creating Content for Social Media & Marketing",
      description: "Designers can record design speed art videos to engage their audience. Helps grow a following on Instagram, TikTok, YouTube, and LinkedIn. Can showcase behind-the-scenes work, timelapses, and workflow hacks. Useful for promoting design services, courses, or downloadable resources.",
      example: "A freelance illustrator records a speed drawing timelapse and posts it on Instagram with a call-to-action for commissions.",
      icon: TrendingUp,
      gradient: "from-primary to-secondary",
      image: "photo-1531297484001-80022131f5a1"
    }
  ];

  const faqs = [
    {
      question: "How can screen recording help me explain design concepts to clients?",
      answer: "Visual walkthroughs are far more effective than written explanations. You can show your design process, highlight specific elements, and explain your reasoning in real-time. This reduces misunderstandings and helps clients appreciate the thought behind your work."
    },
    {
      question: "What's the best way to record design process videos for portfolio?",
      answer: "Focus on your problem-solving approach, show before-and-after comparisons, and explain your design decisions. Include both the creative process and final results. Keep videos between 2-5 minutes for optimal engagement."
    },
    {
      question: "Can I use recordings to speed up client feedback cycles?",
      answer: "Absolutely! Instead of long email chains, record quick feedback videos highlighting specific areas for revision. Clients can see exactly what you're referring to, making communication clearer and faster."
    },
    {
      question: "How do I create engaging design tutorials for social media?",
      answer: "Record speed art videos, time-lapse creation processes, and quick design tips. Use engaging thumbnails, add music, and keep content short for platforms like Instagram and TikTok. Include clear calls-to-action for your services."
    },
    {
      question: "What design software works best with your recording tool?",
      answer: "Our software works seamlessly with all major design tools including Figma, Adobe Creative Suite (Photoshop, Illustrator, After Effects), Sketch, Canva, and more. We capture high-quality screen recordings regardless of the design software you use."
    },
    {
      question: "Can I monetize my design tutorial recordings?",
      answer: "Yes! Create courses for platforms like Skillshare or Udemy, build a YouTube channel with ad revenue, offer premium tutorials, or use content to attract high-paying clients. Many designers build substantial income streams from educational content."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Screen Recorder for Freelance Designers
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Showcase your design process, communicate with clients effectively, and build your creative business. Professional screen recording software designed for freelance designers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
              <Play className="w-5 h-5 mr-2" />
              Start Design Recording
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Download className="w-5 h-5 mr-2" />
              See Portfolio Templates
            </Button>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              5 Essential Tools for Freelance Designers
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From client presentations to portfolio building, discover how designers are growing their freelance business with video
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
                        alt={`Freelance design workflow for ${useCase.title.toLowerCase()}`}
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
              Everything freelance designers need to know about professional screen recording
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
            Grow Your Design Business
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join successful freelance designers who are attracting better clients and commanding higher rates with professional video content
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Play className="w-5 h-5 mr-2" />
              Showcase Your Design Process
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-primary">
              View Designer Success Stories
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreenRecorderForFreelanceDesigners;
