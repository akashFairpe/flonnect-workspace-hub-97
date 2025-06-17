
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Download, Figma, Eye, MousePointer, Video, Palette, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const UXUIDesigners = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const useCases = [
    {
      title: "Recording Design Prototype Walkthroughs for Clients & Developers",
      description: "UX/UI designers can record detailed walkthroughs of prototypes created in Figma, Adobe XD, or Sketch. Helps clients and developers understand the design intent, interactions, and animations. Can include on-screen annotations and voiceover explanations to highlight key elements. Reduces miscommunication and back-and-forth emails between designers and developers.",
      example: "A UX designer records a video walkthrough of a new mobile app UI, explaining how users will navigate different screens and interactions.",
      icon: Figma,
      gradient: "from-pink-500 to-purple-600",
      image: "photo-1461749280684-dccba630e2f6"
    },
    {
      title: "Providing UX Design Feedback & Design Reviews",
      description: "Designers can record design critique sessions for team members or clients. Helps in providing structured feedback on usability, layout, and visual hierarchy. Useful for reviewing wireframes, high-fidelity designs, and user flows. Can replace live meetings by allowing teams to watch feedback asynchronously.",
      example: "A lead designer records a UI review video, highlighting improvements needed in button placement and typography for better usability.",
      icon: Eye,
      gradient: "from-blue-500 to-cyan-600",
      image: "photo-1487058792275-0ad4aaf24ca7"
    },
    {
      title: "Documenting User Testing & Usability Issues",
      description: "Designers can record usability testing sessions to showcase how real users interact with a product. Helps in analyzing pain points, confusion, and friction in user flows. Can capture mouse movements, click patterns, and user struggles during a test. Useful for persuading stakeholders to invest in UX improvements.",
      example: "A UX researcher records a usability test session, showing where users get stuck while booking an appointment on a healthcare app.",
      icon: MousePointer,
      gradient: "from-green-500 to-teal-600",
      image: "photo-1498050108023-c5249f4df085"
    },
    {
      title: "Creating Tutorials & How-To Guides for Design Tools",
      description: "Designers can record tutorials on using design software, like Figma, Sketch, or Photoshop. Great for educating junior designers, freelancers, and online communities. Helps in building a personal brand on platforms like YouTube, LinkedIn, and Udemy. Can include step-by-step guides for prototyping, wireframing, and UI animations.",
      example: "A UI designer records a tutorial on 'How to Create Interactive Prototypes in Figma', explaining smart animations and component variants.",
      icon: Video,
      gradient: "from-orange-500 to-red-600",
      image: "photo-1531297484001-80022131f5a1"
    },
    {
      title: "Showcasing Portfolio Work & Case Studies",
      description: "Designers can record case study videos, explaining their design thinking process. Helps in demonstrating the problem-solving approach behind UI/UX decisions. Can be used on portfolio websites, LinkedIn, and job applications. Useful for freelancers pitching to potential clients by visually presenting their past work.",
      example: "A freelance UX designer records a case study on 'Redesigning an E-commerce Checkout Flow', showing before-and-after improvements and results.",
      icon: Palette,
      gradient: "from-purple-500 to-pink-600",
      image: "photo-1483058712412-4245e9b90334"
    }
  ];

  const faqs = [
    {
      question: "How can I record high-quality design walkthroughs?",
      answer: "Use our HD recording with clear audio. Practice your presentation beforehand and use our annotation tools to highlight key design elements. Keep recordings focused and under 10 minutes for better engagement."
    },
    {
      question: "Can I record design reviews with multiple stakeholders?",
      answer: "Yes! Our software captures multi-participant sessions including voice, screen sharing, and video feeds. You can record Figma collaborations, design critiques, and client feedback sessions seamlessly."
    },
    {
      question: "What's the best way to document usability testing?",
      answer: "Record both the screen and user's reactions. Our software can capture mouse movements, clicks, and facial expressions simultaneously. Add timestamps and annotations to highlight key usability issues."
    },
    {
      question: "Can I create design tutorial content for monetization?",
      answer: "Absolutely! Many designers create successful courses on Udemy, Skillshare, and YouTube. Our software includes features for creating professional tutorial content with clear explanations and visual demonstrations."
    },
    {
      question: "How do I protect client work in recordings?",
      answer: "We offer privacy controls including watermarks, access restrictions, and confidential viewing links. You can blur sensitive information and control who can view your design recordings."
    },
    {
      question: "What design tools work best with your recording software?",
      answer: "Our software works seamlessly with Figma, Adobe XD, Sketch, Photoshop, and all major design tools. We capture high-quality recordings regardless of your design environment and screen resolution."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Screen Recorder for UX/UI Designers
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Create compelling design presentations and user testing videos. Perfect for prototype walkthroughs, design reviews, and building your design portfolio with professional recording tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
              <Play className="w-5 h-5 mr-2" />
              Start Design Recording
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Download className="w-5 h-5 mr-2" />
              View Design Templates
            </Button>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              5 Essential Design Recording Applications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From prototype presentations to usability testing, discover how UX/UI designers are enhancing their workflow and client communication
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
                        alt={`UX/UI design workflow showing ${useCase.title.toLowerCase()}`}
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
              Everything UX/UI designers need to know about professional design recording and presentation tools
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
            Elevate Your Design Presentations
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of UX/UI designers who are creating impactful design presentations and building their portfolios with professional recording tools
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Play className="w-5 h-5 mr-2" />
              Start Creating Design Videos
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-primary">
              View Designer Portfolio Examples
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UXUIDesigners;
