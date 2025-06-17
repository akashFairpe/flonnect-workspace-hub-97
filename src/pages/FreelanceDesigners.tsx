
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Download, Palette, Monitor, Users, FileText, Camera, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const FreelanceDesigners = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const useCases = [
    {
      title: "Recording Design Process & Creative Workflows",
      description: "Freelance designers can record their design process from concept to completion, showcasing their creative methodology. Helps clients understand the value of professional design work and builds trust through transparency. Can include sketching, wireframing, prototyping, and final design creation. Useful for portfolio building and client education.",
      example: "A graphic designer records the complete process of creating a brand identity, from initial sketches to final logo delivery.",
      icon: Palette,
      gradient: "from-purple-500 to-pink-600",
      image: "photo-1586717791821-3f44a563fa4c"
    },
    {
      title: "Creating Design Tutorials & Educational Content",
      description: "Designers can create step-by-step tutorials teaching design techniques, software skills, and creative principles. Helps build authority in the design community and attract potential clients. Can include Adobe Creative Suite tutorials, design theory lessons, and portfolio reviews. Great for generating passive income through course sales.",
      example: "A UX designer creates a tutorial series on 'Designing Mobile Apps with Figma', teaching interface design principles.",
      icon: Monitor,
      gradient: "from-blue-500 to-cyan-600",
      image: "photo-1581291518857-4e27b48ff24e"
    },
    {
      title: "Presenting Design Concepts & Client Proposals",
      description: "Freelancers can record design presentations to explain concepts, rationale, and design decisions to clients. Helps communicate ideas more effectively than static presentations. Can include mockup walkthroughs, interactive prototypes, and design system explanations. Essential for remote client relationships and project approvals.",
      example: "A web designer records a presentation explaining the user experience strategy for an e-commerce website redesign.",
      icon: Users,
      gradient: "from-green-500 to-emerald-600",
      image: "photo-1507003211169-0a1dd7228f2d"
    },
    {
      title: "Building Portfolio Showcases & Case Studies",
      description: "Designers can create compelling portfolio videos that showcase their best work and design thinking. Helps differentiate from competitors and demonstrate problem-solving skills. Can include project walkthroughs, before-and-after comparisons, and client testimonials. Crucial for winning high-value design projects.",
      example: "A brand designer creates a case study video showing how their rebrand increased a client's sales by 40%.",
      icon: FileText,
      gradient: "from-orange-500 to-red-600",
      image: "photo-1517077304055-6e89abbf09b0"
    },
    {
      title: "Recording Client Feedback Sessions & Design Reviews",
      description: "Freelancers can record design review sessions with clients to document feedback and decisions. Helps maintain clear project records and avoid miscommunication. Can include annotation of designs, discussion of revisions, and approval processes. Useful for project management and client accountability.",
      example: "A freelance designer records a client review session for a website design, documenting requested changes and timeline adjustments.",
      icon: Camera,
      gradient: "from-teal-500 to-blue-600",
      image: "photo-1600880292203-757bb62b4baf"
    }
  ];

  const faqs = [
    {
      question: "How can I showcase my design process effectively to clients?",
      answer: "Record time-lapse videos of your design work, create step-by-step explanations of your methodology, and document decision-making processes. This builds trust and helps clients understand the value of professional design work."
    },
    {
      question: "What's the best way to present design concepts remotely?",
      answer: "Use screen recording to walk through interactive prototypes, explain design rationale with voice narration, and create engaging presentations that clients can review at their own pace. Include annotations and callouts for key design decisions."
    },
    {
      question: "Can I monetize my design knowledge through video content?",
      answer: "Absolutely! Create comprehensive design courses, sell tutorial packages, offer portfolio reviews, and build a following through educational content. Many designers successfully generate passive income through online courses and memberships."
    },
    {
      question: "How do I create compelling portfolio videos that win clients?",
      answer: "Focus on storytelling - show the problem, your solution process, and the results achieved. Include client testimonials, metrics, and before-and-after comparisons. Keep videos concise but comprehensive, highlighting your unique design approach."
    },
    {
      question: "What should I include in client feedback sessions?",
      answer: "Record design walkthroughs, document all feedback and decisions, explain revision processes, and confirm project timelines. This creates clear communication records and helps manage project scope and expectations."
    },
    {
      question: "How can I build authority in the design community?",
      answer: "Share your expertise through educational content, participate in design challenges, create trend analysis videos, and offer insights on design best practices. Consistent value-driven content helps establish you as a thought leader."
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
            Showcase your creativity and build a thriving design business. Create compelling portfolio content, educate clients, and demonstrate your design expertise with professional recording tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
              <Play className="w-5 h-5 mr-2" />
              Start Showcasing Designs
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
              From portfolio showcases to client presentations, discover how successful freelance designers are building their businesses
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
                        alt={`Creative design workspace for ${useCase.title.toLowerCase()}`}
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
              Everything freelance designers need to know about building successful design businesses through video content
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
            Join successful freelance designers who are building thriving businesses through compelling portfolio content and client education
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Play className="w-5 h-5 mr-2" />
              Start Your Design Journey
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-primary">
              View Designer Success Stories
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FreelanceDesigners;
