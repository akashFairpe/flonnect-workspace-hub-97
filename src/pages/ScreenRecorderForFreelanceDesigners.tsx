
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Download, Palette, Monitor, Users, Eye, Lightbulb, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const ScreenRecorderForFreelanceDesigners = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const useCases = [
    {
      title: "Recording Design Process & Speed Design Sessions",
      description: "Freelance designers can record their creative process from concept to completion. Helps showcase design thinking and methodology to potential clients. Can include sketching, wireframing, prototyping, and final design execution. Perfect for building a design portfolio and demonstrating expertise to attract high-value clients.",
      example: "A UI/UX designer records the complete process of designing a mobile app interface, from user research to final prototype.",
      icon: Palette,
      gradient: "from-purple-500 to-pink-600",
      image: "photo-1483058712412-4245e9b90334"
    },
    {
      title: "Creating Design Tutorials & Educational Content",
      description: "Designers can record step-by-step tutorials teaching design skills and software techniques. Helps build authority in the design community and creates additional revenue streams. Can include software tutorials, design theory, and industry best practices. Useful for creating courses, YouTube content, and premium educational materials.",
      example: "A graphic designer creates a comprehensive tutorial on 'Logo Design Fundamentals', covering concept development and execution in Adobe Illustrator.",
      icon: Lightbulb,
      gradient: "from-blue-500 to-cyan-600",
      image: "photo-1486312338219-ce68d2c6f44d"
    },
    {
      title: "Recording Client Presentations & Design Reviews",
      description: "Freelancers can record design presentations to clients for better communication and documentation. Helps explain design decisions and gather structured feedback. Can include concept presentations, revision discussions, and final design walkthroughs. Essential for maintaining clear communication and project documentation.",
      example: "A web designer records a client presentation explaining the rationale behind a website redesign, including user experience improvements.",
      icon: Users,
      gradient: "from-green-500 to-teal-600",
      image: "photo-1551836022-d5d88e9218df"
    },
    {
      title: "Documenting Design Feedback & Revision Processes",
      description: "Designers can record feedback sessions and revision processes to streamline client communication. Helps reduce miscommunication and ensures design changes are clearly understood. Can include screen annotations, voice explanations, and before-after comparisons. Perfect for managing complex projects with multiple stakeholders.",
      example: "A brand designer records a feedback session, highlighting specific design elements and explaining how client suggestions will be implemented.",
      icon: Eye,
      gradient: "from-orange-500 to-red-600",
      image: "photo-1460925895917-afdab827c52f"
    },
    {
      title: "Creating Portfolio Presentations & Case Studies",
      description: "Freelance designers can record compelling portfolio presentations and case studies. Helps tell the story behind each project and demonstrate problem-solving skills. Can include project challenges, design solutions, and measurable results. Essential for winning new clients and commanding higher rates.",
      example: "A product designer creates a case study video showing how their e-commerce redesign increased conversion rates by 40%.",
      icon: Monitor,
      gradient: "from-indigo-500 to-purple-600",
      image: "photo-1563013544-824ae1b704d3"
    }
  ];

  const faqs = [
    {
      question: "How can recording my design process help attract better clients?",
      answer: "Recording your process showcases your expertise, design thinking, and professional approach. Clients can see the value they're getting beyond just the final design, helping you command premium rates and attract quality projects."
    },
    {
      question: "What's the best way to record design software like Adobe Creative Suite?",
      answer: "Our platform optimizes for creative software with high-quality screen capture, smooth playback, and minimal impact on system performance. You can record in high resolution while maintaining design software responsiveness."
    },
    {
      question: "Can I monetize design tutorial content effectively?",
      answer: "Absolutely! Many designers build successful side businesses through online courses, YouTube channels, and premium tutorials. Recording your expertise creates scalable income streams beyond client work."
    },
    {
      question: "How do I handle client confidentiality when recording design work?",
      answer: "Our platform includes privacy features like selective screen capture and content blurring. You can create portfolio pieces while protecting sensitive client information and maintaining professional confidentiality."
    },
    {
      question: "What recording setup works best for design presentations?",
      answer: "A combination of screen recording with webcam overlay works well for client presentations. Our platform supports multi-source recording, allowing you to show your screen while maintaining personal connection with clients."
    },
    {
      question: "Can recordings help with design feedback and revisions?",
      answer: "Yes! Visual feedback through recorded annotations and explanations reduces miscommunication. Clients can see exactly what you mean, leading to clearer project direction and fewer revision cycles."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-6 py-16">
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Screen Recorder for Freelance Designers
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Showcase your creative process and build your design brand. Create compelling portfolio content, educational tutorials, and professional client presentations that demonstrate your expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
              <Play className="w-5 h-5 mr-2" />
              Start Design Recording
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Download className="w-5 h-5 mr-2" />
              View Design Tools
            </Button>
          </div>
        </header>

        <section className="max-w-7xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              5 Essential Design Recording Applications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From process documentation to client presentations, discover how freelance designers are building successful careers through professional recording
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
                        alt={`Freelance designer workspace showing ${useCase.title.toLowerCase()}`}
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
                      <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-300">
                        <p className="text-sm font-semibold text-purple-700 mb-2">Design Example:</p>
                        <p className="text-purple-600 italic">
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
              Everything freelance designers need to know about professional recording and portfolio development
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
            Elevate Your Design Career
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join successful freelance designers who are building impressive portfolios and attracting premium clients through professional content creation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Play className="w-5 h-5 mr-2" />
              Start Your Design Success
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-primary">
              View Designer Portfolios
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ScreenRecorderForFreelanceDesigners;
