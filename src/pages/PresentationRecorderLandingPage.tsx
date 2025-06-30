
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Play, Download, Users, Share2, MessageCircle, BarChart3, Video, Mic, Edit, Chrome, Monitor, Smartphone, CheckCircle, Presentation, FileText, Eye } from 'lucide-react';
import { Header } from '@/components/Header';
import FAQ from '@/components/FAQ';

const PresentationRecorderLandingPage = () => {
  const features = [
    {
      icon: Video,
      title: "Live Video & Slides Recording",
      description: "Combine live video, slides, and annotations to create webinars that captivate your audience.",
      color: "bg-blue-500"
    },
    {
      icon: Edit,
      title: "Real-Time Annotations",
      description: "Use smooth transitions and annotations to simplify complex topics and retain viewer attention.",
      color: "bg-green-500"
    },
    {
      icon: Mic,
      title: "Professional Audio Quality",
      description: "Record crystal-clear narration and commentary for your presentations and tutorials.",
      color: "bg-purple-500"
    },
    {
      icon: Share2,
      title: "Multi-Platform Sharing",
      description: "Export to platforms like YouTube or TikTok, or share recordings via email and social media.",
      color: "bg-orange-500"
    }
  ];

  const useCases = [
    {
      icon: Users,
      title: "Professional Webinars",
      description: "Combine live video, slides, and annotations to create webinars that captivate your audience.",
      link: "Read More →"
    },
    {
      icon: Play,
      title: "Dynamic Tutorials",
      description: "Use smooth transitions and annotations to simplify complex topics and retain viewer attention.",
      link: "Read More →"
    },
    {
      icon: FileText,
      title: "Student-Friendly Presentations",
      description: "Refine delivery with playback tools and highlight important points with annotations.",
      link: "Read More →"
    },
    {
      icon: Share2,
      title: "Effortless Sharing",
      description: "Export to platforms like YouTube or TikTok, or share recordings via email and social media.",
      link: "Read More →"
    }
  ];

  const workflowFeatures = [
    {
      icon: Users,
      title: "Create Workspaces",
      description: "Invite team members for easy collaboration on presentations"
    },
    {
      icon: MessageCircle,
      title: "Annotate and Edit",
      description: "Add comments and highlights directly to recordings for quick feedback"
    },
    {
      icon: Eye,
      title: "Secure Sharing",
      description: "Control who can access your content and share securely"
    }
  ];

  const personas = [
    {
      title: "Webinar Creator",
      subtitle: "Make Webinars That Impress",
      features: [
        "Combine live video, slides, and annotations for professional-quality webinars",
        "Add callouts to emphasize key points effortlessly",
        "Share your polished webinars with ease via email or social platforms"
      ],
      image: "https://images.unsplash.com/photo-1553484771-371a605b060b?auto=format&fit=crop&w=800&h=600"
    },
    {
      title: "Content Creator",
      subtitle: "Craft Tutorials That Stand Out",
      features: [
        "Record screen captures, slides, and commentary for dynamic tutorials",
        "Use annotations and transitions to keep viewers engaged",
        "Export tutorials quickly for platforms like YouTube, Instagram, or TikTok"
      ],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&h=600"
    },
    {
      title: "Teacher",
      subtitle: "Simplify Learning for Your Students",
      features: [
        "Record engaging lectures with real-time annotations",
        "Share pre-recorded lessons for remote or asynchronous learning",
        "Provide downloadable content for easy student revision"
      ],
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&h=600"
    },
    {
      title: "Student",
      subtitle: "Deliver Presentations with Confidence",
      features: [
        "Record and refine class projects or assignments with live video and slides",
        "Highlight key points with annotations to make your presentations stand out",
        "Share recordings with peers or teachers for valuable feedback"
      ],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&h=600"
    },
    {
      title: "Educator",
      subtitle: "Build Reusable Course Content",
      features: [
        "Record polished, professional lectures combining slides, video, and annotations",
        "Create reusable lessons for flipped classrooms or online courses",
        "Reduce reliance on live teaching with effective pre-recorded content"
      ],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&h=600"
    }
  ];

  const platforms = [
    {
      icon: Chrome,
      title: "Chrome Extension",
      description: "Quick and easy browser-based presentation recording",
      cta: "Add to Chrome"
    },
    {
      icon: Monitor,
      title: "Windows Desktop",
      description: "Full-featured desktop application for presentations",
      cta: "Download for Windows"
    },
    {
      icon: Smartphone,
      title: "Mac Desktop",
      description: "Native macOS application for presentation recording",
      cta: "Download for Mac"
    }
  ];

  const presentationFaqs = [
    {
      question: "Can I record PowerPoint presentations with Flonnect?",
      answer: "Yes, you can easily record PowerPoint, Google Slides, or any presentation software along with your webcam and voice narration for professional results."
    },
    {
      question: "How do annotations work during presentation recording?",
      answer: "Our real-time annotation tools let you draw, highlight, and add callouts directly on your slides while recording, making your presentations more engaging and clear."
    },
    {
      question: "Can I share my recorded presentations on social media?",
      answer: "Absolutely! You can export your presentations to various formats and share directly on YouTube, TikTok, Instagram, or via email and other social platforms."
    },
    {
      question: "Is it suitable for creating educational content?",
      answer: "Yes, Flonnect is perfect for teachers, educators, and students to create engaging lectures, tutorials, and course content with professional quality."
    },
    {
      question: "Can I collaborate with my team on presentations?",
      answer: "Yes, you can create workspaces, invite team members, and collaborate on presentation content with secure sharing and access controls."
    }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
            <div className="text-center max-w-5xl mx-auto">
              <Badge className="mb-4 sm:mb-6 bg-blue-100 text-blue-700 hover:bg-blue-200 text-sm sm:text-lg px-3 sm:px-4 py-1 sm:py-2">
                🎥 Professional Presentation Recording
              </Badge>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Create, Record, and Share
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 block">
                  Stunning Presentations with Ease
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
                Say goodbye to tedious presentation creation. Flonnect Presentation Recorder lets you craft polished, engaging, and professional presentations for any audience.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8 px-4">
                <Button size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <Chrome className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                  Add to Chrome
                </Button>
                <Button variant="outline" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6">
                  <Play className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                  Start Free Trial
                </Button>
              </div>
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-lg inline-block mx-4">
                <p className="text-base sm:text-lg font-semibold text-gray-900">
                  Quality Demo Videos lead to <span className="text-blue-600">69%</span> of consumers buying your products
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Options */}
        <section className="py-12 sm:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Choose Your Presentation Recording Platform
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                Get started with our browser extension or download our powerful desktop apps
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {platforms.map((platform, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group text-center">
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <platform.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl sm:text-2xl">{platform.title}</CardTitle>
                    <CardDescription className="text-base">{platform.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full" variant={index === 0 ? "default" : "outline"}>
                      <Download className="w-4 h-4 mr-2" />
                      {platform.cta}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-12 sm:py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Perfect for Every Presentation Need
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {useCases.map((useCase, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                  <CardHeader className="text-center pb-2">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <useCase.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg sm:text-xl">{useCase.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-sm sm:text-base leading-relaxed mb-4">
                      {useCase.description}
                    </CardDescription>
                    <Button variant="link" className="p-0 h-auto text-blue-600 hover:text-blue-700">
                      {useCase.link}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 sm:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Everything You Need for Professional Presentations
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                Powerful features that make presentation creation simple, engaging, and effective
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                  <CardHeader className="text-center pb-2">
                    <div className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-lg sm:text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-sm sm:text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Chrome className="w-5 h-5 mr-2" />
                Get Started Now
              </Button>
            </div>
          </div>
        </section>

        {/* Presentation Management Section */}
        <section className="py-12 sm:py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-5xl mx-auto text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Manage Your Presentations with Ease
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-12">
                Track and improve your presentations with Flonnect. Use intuitive tools to create, edit, and share presentations that resonate with your audience.
              </p>
              <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 mb-12">
                <img 
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=1200&h=600" 
                  alt="Presentation Management Dashboard" 
                  className="w-full h-64 sm:h-80 object-cover rounded-lg"
                />
              </div>
            </div>
            
            <div className="text-center mb-12 sm:mb-16">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Streamline Your Presentation Workflow
              </h3>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Flonnect Presentation Recorder is specifically designed to meet the needs of professionals, educators, and students.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
              {workflowFeatures.map((feature, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <feature.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <CardTitle className="text-lg sm:text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm sm:text-base">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center">
              <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
                <Users className="w-5 h-5 mr-2" />
                Start Team Collaboration
              </Button>
            </div>
          </div>
        </section>

        {/* Personas Section */}
        <section className="py-12 sm:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Built for Every Type of Presenter
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                Whether you're teaching, creating content, or presenting professionally, we have you covered
              </p>
            </div>
            
            <div className="space-y-16">
              {personas.map((persona, index) => (
                <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="flex-1">
                    <img 
                      src={persona.image} 
                      alt={persona.title}
                      className="w-full h-64 sm:h-80 object-cover rounded-lg shadow-lg"
                    />
                  </div>
                  <div className="flex-1 text-center lg:text-left">
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                      {persona.title}
                    </h3>
                    <p className="text-lg sm:text-xl text-blue-600 mb-6">
                      {persona.subtitle}
                    </p>
                    <div className="space-y-4 mb-8">
                      {persona.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <p className="text-gray-700">{feature}</p>
                        </div>
                      ))}
                    </div>
                    <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      <Chrome className="w-4 h-4 mr-2" />
                      Add to Chrome
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Everything you need to know about Flonnect Presentation Recorder
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-4">
              {presentationFaqs.map((faq, index) => (
                <Card key={index} className="border-0 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-left text-lg">
                      {faq.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-12 sm:py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Teams Love Flonnect. Still on the Fence? Let Us Prove It.
            </h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 max-w-4xl mx-auto leading-relaxed">
              Flonnect simplifies the way you create, record, and share presentations. Whether you're delivering webinars, creating tutorials, or teaching students, Flonnect empowers you to deliver impactful presentations that engage and convert your audience. Start your journey today with a free trial.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6">
              <Button size="lg" variant="secondary" className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6">
                <Chrome className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                Add to Chrome
              </Button>
              <Button size="lg" variant="outline" className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 bg-transparent border-white text-white hover:bg-white hover:text-blue-600">
                <Play className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                Start Free Trial
              </Button>
            </div>
            <p className="text-xs sm:text-sm opacity-75">
              No credit card required • Free forever plan • Professional quality presentations
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default PresentationRecorderLandingPage;
