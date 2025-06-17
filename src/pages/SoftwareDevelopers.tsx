
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Download, Code, Terminal, Cpu, Monitor, GitBranch, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const SoftwareDevelopers = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const useCases = [
    {
      title: "Recording Coding Tutorials & Programming Walkthroughs",
      description: "Software developers can record step-by-step coding tutorials for YouTube, Udemy, or internal company training. Great for teaching programming languages, frameworks, and best coding practices. Can include live coding, screen annotations, and explanations of algorithms. Helps in building a personal brand or monetizing knowledge through online courses.",
      example: "A developer records a tutorial on 'How to Build a Full-Stack React & Node.js App', explaining each step of the coding process.",
      icon: Code,
      gradient: "from-blue-500 to-blue-600",
      image: "photo-1461749280684-dccba630e2f6"
    },
    {
      title: "Debugging & Troubleshooting Code Issues",
      description: "Developers can record debugging sessions to analyze and fix code errors. Useful for team collaboration, as other developers can review and understand the debugging approach. Helps document common errors and solutions for future reference. Can be shared in developer communities, GitHub discussions, and internal Slack channels.",
      example: "A backend engineer records a session debugging an API issue in Python Flask, showing how to identify and fix the bug.",
      icon: Terminal,
      gradient: "from-green-500 to-green-600",
      image: "photo-1498050108023-c5249f4df085"
    },
    {
      title: "Explaining New Features & Software Updates",
      description: "Developers can record feature walkthroughs when launching new software updates. Helps product managers, designers, and QA testers understand the implementation. Useful for documenting changes for open-source contributors or internal teams. Can include code breakdowns, UI/UX changes, and backend improvements.",
      example: "A developer records a video explaining how they implemented a 'Dark Mode' feature in a mobile app, discussing code structure and UI modifications.",
      icon: Monitor,
      gradient: "from-purple-500 to-purple-600",
      image: "photo-1487058792275-0ad4aaf24ca7"
    },
    {
      title: "Reviewing Code & Providing Feedback in Teams",
      description: "Developers can record code reviews instead of writing long comments in pull requests. Speeds up collaboration in remote teams and open-source projects. Helps junior developers understand best practices and improve code quality. Can include highlighting security risks, optimization tips, and refactoring suggestions.",
      example: "A senior developer records a review of a junior developer's React component, explaining how to improve performance and follow clean code principles.",
      icon: GitBranch,
      gradient: "from-orange-500 to-orange-600",
      image: "photo-1555949963-aa79dcee981c"
    },
    {
      title: "Creating Technical Documentation & Internal Training",
      description: "Developers can record technical documentation videos explaining APIs, database schemas, and system architecture. Helps new team members get up to speed faster. Useful for onboarding engineers in startups and large enterprises. Can replace traditional written documentation with more engaging video formats.",
      example: "A DevOps engineer records a tutorial on setting up a CI/CD pipeline using GitHub Actions, explaining step-by-step configurations and best practices.",
      icon: Cpu,
      gradient: "from-red-500 to-red-600",
      image: "photo-1516321318423-f06f85e504b3"
    }
  ];

  const faqs = [
    {
      question: "How can screen recording help me become a better developer?",
      answer: "Recording your coding sessions helps you review your problem-solving approach, identify areas for improvement, and create valuable documentation. It's also great for building a portfolio and sharing knowledge with the development community."
    },
    {
      question: "What's the best way to record coding tutorials that people actually watch?",
      answer: "Keep tutorials focused on solving specific problems, use clear narration, and include real-world examples. Show the entire process including mistakes and how you fix them. Our software includes features for highlighting code and adding annotations."
    },
    {
      question: "Can I record debugging sessions to help my team learn?",
      answer: "Absolutely! Recording debugging sessions creates valuable learning resources for your team. Junior developers can see how experienced developers approach problems, and it helps document solutions for future reference."
    },
    {
      question: "How do I create effective code review videos?",
      answer: "Focus on explaining your thought process, highlight specific areas of concern, and provide constructive feedback. Use our annotation tools to point out specific lines of code and explain best practices clearly."
    },
    {
      question: "What coding environments work best with your recording software?",
      answer: "Our software works seamlessly with all major IDEs and code editors including VS Code, IntelliJ IDEA, Sublime Text, Vim, and web-based editors. We capture high-quality recordings regardless of your development environment."
    },
    {
      question: "Can I monetize my developer tutorial recordings?",
      answer: "Yes! Many developers create successful courses on platforms like Udemy, Coursera, and YouTube. You can also use recordings to build your personal brand, attract consulting opportunities, or create premium educational content."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-50">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Screen Recorder for Software Developers
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Level up your development workflow with professional screen recording. Create coding tutorials, document your process, and share knowledge with the developer community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
              <Play className="w-5 h-5 mr-2" />
              Start Developer Recording
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Download className="w-5 h-5 mr-2" />
              See Code Templates
            </Button>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              5 Essential Developer Recording Applications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From coding tutorials to code reviews, discover how developers are enhancing their workflow and sharing knowledge
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
                        alt={`Software development workflow for ${useCase.title.toLowerCase()}`}
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
              Everything software developers need to know about professional screen recording
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
            Enhance Your Development Workflow
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join developers worldwide who are improving their skills, sharing knowledge, and building their careers with professional recording tools
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Play className="w-5 h-5 mr-2" />
              Start Coding Tutorials
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-primary">
              View Developer Community
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareDevelopers;
