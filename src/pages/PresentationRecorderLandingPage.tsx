
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Play, Download, Users, Share2, MessageCircle, BarChart3, Video, Mic, Edit, Chrome, Monitor, Smartphone, CheckCircle, Presentation, FileText, Eye, Star, Zap, Clock, Camera, Maximize, Settings, Upload, Award, TrendingUp, Target, Layers, BookOpen, Headphones, MousePointer, Paintbrush, Globe, Shield, PieChart, Calendar, Bookmark, Filter, Palette, Move, Square, Circle, Type, CheckSquare, Pen, Pencil, Grid, Layout, Wand2, Sparkles, Timer, Gauge, MousePointer2, Hand, ArrowUp, Folder, CameraIcon, Lightbulb, Brain, Rocket, Database } from 'lucide-react';
import { Header } from '@/components/Header';

const PresentationRecorderLandingPage = () => {
  const performanceStats = [
    { number: "10M+", label: "Presentations Recorded" },
    { number: "500K+", label: "Active Users" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "150+", label: "Countries Supported" }
  ];

  const features = [
    {
      icon: Video,
      title: "Canvas-Based Recording",
      description: "Advanced canvas recording technology for smooth, high-quality presentation capture with real-time rendering.",
      color: "bg-blue-500"
    },
    {
      icon: Presentation,
      title: "Live Video & Slides Recording",
      description: "Seamlessly combine live video, slides, and annotations to create webinars that captivate your audience.",
      color: "bg-green-500"
    },
    {
      icon: Edit,
      title: "Real-Time Annotations",
      description: "Use smooth transitions and professional annotations to simplify complex topics and retain viewer attention.",
      color: "bg-purple-500"
    },
    {
      icon: Mic,
      title: "Professional Audio Quality",
      description: "Record crystal-clear narration and commentary with noise cancellation for your presentations and tutorials.",
      color: "bg-orange-500"
    },
    {
      icon: Share2,
      title: "Multi-Platform Sharing",
      description: "Export to YouTube, LinkedIn, or share recordings via email and social media with one-click distribution.",
      color: "bg-pink-500"
    },
    {
      icon: Camera,
      title: "Smart Camera Positioning",
      description: "Choose from default camera positions or customize your setup for the perfect presentation angle.",
      color: "bg-cyan-500"
    }
  ];

  const recordingModes = [
    {
      icon: Presentation,
      title: "Presentation Mode",
      description: "Upload your slides and record with synchronized video and audio",
      features: ["Slide synchronization", "Auto-advance options", "Speaker notes support"]
    },
    {
      icon: Canvas,
      title: "Canvas Recording",
      description: "Advanced canvas-based recording for interactive presentations",
      features: ["Real-time rendering", "Interactive elements", "Smooth animations"]
    },
    {
      icon: Camera,
      title: "Video + Slides",
      description: "Combine webcam feed with presentation slides",
      features: ["Picture-in-picture", "Custom layouts", "Professional framing"]
    },
    {
      icon: Grid,
      title: "Multi-Layout Recording",
      description: "Choose from various layouts for your presentation recording",
      features: ["Split screen", "Full screen", "Custom positioning"]
    }
  ];

  const annotationTools = [
    {
      icon: Pen,
      title: "Digital Pen",
      description: "Smooth pen tool for natural writing and drawing on slides"
    },
    {
      icon: Pencil,
      title: "Pencil Tool",
      description: "Sketch and highlight with precision pencil annotations"
    },
    {
      icon: Type,
      title: "Text Annotations",
      description: "Add professional text overlays and callouts"
    },
    {
      icon: CheckCircle,
      title: "Checkmarks & Ticks",
      description: "Highlight completed items with checkmarks and ticks"
    },
    {
      icon: Square,
      title: "Shapes & Arrows",
      description: "Draw attention with geometric shapes and directional arrows"
    },
    {
      icon: Palette,
      title: "Color Picker",
      description: "Choose from unlimited colors for your annotations"
    }
  ];

  const cameraFeatures = [
    {
      icon: Move,
      title: "Movable Camera",
      description: "Dynamically reposition your camera during recording for engaging presentations"
    },
    {
      icon: Maximize,
      title: "Zoom Controls",
      description: "Smooth zoom in/out functionality for detailed explanations"
    },
    {
      icon: Settings,
      title: "Camera Settings",
      description: "Adjust brightness, contrast, and other camera parameters"
    },
    {
      icon: Layout,
      title: "Default Positions",
      description: "Choose from pre-configured camera positions for quick setup"
    }
  ];

  const dashboardWorkflow = [
    {
      step: "1",
      title: "Upload Presentation",
      description: "Visit app.flonnect.com/dashboard/presentation and upload your slides",
      icon: Upload
    },
    {
      step: "2",
      title: "Choose Camera Position",
      description: "Select from default camera positions or customize your setup",
      icon: CameraIcon
    },
    {
      step: "3",
      title: "Start Recording",
      description: "Click record and deliver your presentation with professional quality",
      icon: Play
    },
    {
      step: "4",
      title: "Share & Export",
      description: "Instantly share your recorded presentation or export to your preferred platform",
      icon: Share2
    }
  ];

  const advancedFeatures = [
    {
      icon: Presentation,
      title: "Interactive Slides",
      description: "Create engaging slide presentations with clickable elements and smooth transitions",
      color: "bg-indigo-500"
    },
    {
      icon: MousePointer,
      title: "Smart Cursor Tracking",
      description: "Highlight cursor movements and clicks for better viewer engagement and clarity",
      color: "bg-pink-500"
    },
    {
      icon: Paintbrush,
      title: "Advanced Drawing Tools",
      description: "Annotate slides in real-time with professional drawing tools and text overlays",
      color: "bg-teal-500"
    },
    {
      icon: Calendar,
      title: "Scheduled Recording",
      description: "Set up automatic recording for recurring presentations and webinars",
      color: "bg-red-500"
    },
    {
      icon: Globe,
      title: "Multi-Language Support",
      description: "Create presentations in multiple languages with AI-powered translation support",
      color: "bg-yellow-500"
    },
    {
      icon: Filter,
      title: "Green Screen Effect",
      description: "Replace backgrounds and create professional studio-quality presentations",
      color: "bg-cyan-500"
    },
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Get intelligent suggestions for improving your presentation delivery",
      color: "bg-purple-500"
    },
    {
      icon: Rocket,
      title: "Quick Export",
      description: "Export to multiple formats and platforms with one-click sharing",
      color: "bg-orange-500"
    }
  ];

  const useCases = [
    {
      icon: Users,
      title: "Professional Webinars",
      description: "Create engaging webinars that combine live video, slides, and real-time annotations to captivate your audience and drive results.",
      link: "Learn More →"
    },
    {
      icon: Play,
      title: "Educational Tutorials",
      description: "Develop comprehensive tutorials with smooth transitions and interactive annotations to simplify complex topics.",
      link: "Learn More →"
    },
    {
      icon: FileText,
      title: "Sales Presentations",
      description: "Record compelling sales presentations that you can reuse and share with prospects for consistent messaging.",
      link: "Learn More →"
    },
    {
      icon: Award,
      title: "Training Materials",
      description: "Create professional training content that can be delivered consistently across your organization.",
      link: "Learn More →"
    },
    {
      icon: BookOpen,
      title: "Course Content",
      description: "Develop engaging online course materials with interactive elements and professional delivery.",
      link: "Learn More →"
    },
    {
      icon: TrendingUp,
      title: "Product Demos",
      description: "Showcase your products with dynamic presentations that highlight key features and benefits.",
      link: "Learn More →"
    }
  ];

  const workflowFeatures = [
    {
      icon: Users,
      title: "Team Workspaces",
      description: "Create collaborative workspaces and invite team members for seamless presentation collaboration"
    },
    {
      icon: MessageCircle,
      title: "Smart Annotations",
      description: "Add intelligent comments and highlights directly to recordings for quick feedback and improvements"
    },
    {
      icon: Eye,
      title: "Secure Sharing",
      description: "Control access permissions and share your presentations securely with password protection"
    },
    {
      icon: Database,
      title: "Cloud Storage",
      description: "Automatic cloud backup ensures your presentations are always safe and accessible"
    }
  ];

  const platforms = [
    {
      icon: Chrome,
      title: "Chrome Extension",
      description: "Quick and easy browser-based presentation recording with instant access",
      cta: "Add to Chrome"
    },
    {
      icon: Monitor,
      title: "Windows Desktop",
      description: "Full-featured desktop application for comprehensive presentation recording",
      cta: "Download for Windows"
    },
    {
      icon: Smartphone,
      title: "Mac Desktop",
      description: "Native macOS application optimized for presentation recording and editing",
      cta: "Download for Mac"
    }
  ];

  const presentationTypes = [
    {
      icon: Award,
      title: "Sales Presentations",
      description: "Close more deals with compelling, interactive sales presentations that engage prospects",
      benefits: ["Personalized demos", "Real-time engagement tracking", "Performance analytics", "Lead generation"]
    },
    {
      icon: BookOpen,
      title: "Educational Content",
      description: "Create engaging educational materials for students and professionals with interactive learning",
      benefits: ["Interactive learning paths", "Self-paced content delivery", "Progress tracking", "Assessment tools"]
    },
    {
      icon: TrendingUp,
      title: "Marketing Webinars",
      description: "Generate leads and build authority with professional webinars that convert viewers",
      benefits: ["Lead capture integration", "Brand building tools", "Audience growth metrics", "Conversion tracking"]
    },
    {
      icon: Target,
      title: "Training Sessions",
      description: "Deliver consistent training experiences across your organization with standardized content",
      benefits: ["Standardized content delivery", "Scalable training programs", "Completion tracking", "Performance metrics"]
    },
    {
      icon: Lightbulb,
      title: "Product Demonstrations",
      description: "Showcase your products effectively with dynamic, interactive demonstration videos",
      benefits: ["Feature highlighting", "Interactive elements", "Customer engagement", "Sales enablement"]
    },
    {
      icon: Users,
      title: "Team Presentations",
      description: "Enable seamless team collaboration for internal presentations and meetings",
      benefits: ["Collaborative editing", "Version control", "Team workspaces", "Shared resources"]
    }
  ];

  const personas = [
    {
      title: "Webinar Creator",
      subtitle: "Create Webinars That Convert",
      features: [
        "Combine live video, slides, and annotations for professional-quality webinars that drive engagement",
        "Use canvas-based recording for smooth, high-quality presentation capture",
        "Add dynamic callouts and interactive elements to emphasize key points effortlessly",
        "Share your polished webinars with ease via email, social platforms, or direct links"
      ],
      image: "https://images.unsplash.com/photo-1553484771-371a605b060b?auto=format&fit=crop&w=800&h=600"
    },
    {
      title: "Content Creator",
      subtitle: "Craft Tutorials That Stand Out",
      features: [
        "Record screen captures, slides, and commentary with canvas technology for dynamic tutorials",
        "Use professional annotation tools including pen, pencil, text, and shapes for clear explanations",
        "Leverage movable camera positioning for engaging, dynamic content creation",
        "Export tutorials quickly for platforms like YouTube, Instagram, TikTok, or LinkedIn"
      ],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&h=600"
    },
    {
      title: "Educator",
      subtitle: "Transform Learning Experiences",
      features: [
        "Upload presentations to the dashboard and choose optimal camera positions for lectures",
        "Record engaging educational content with real-time annotations and interactive elements",
        "Create reusable lessons for remote, hybrid, or asynchronous learning environments",
        "Provide downloadable content for easy student access and revision"
      ],
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&h=600"
    },
    {
      title: "Student",
      subtitle: "Deliver Presentations with Confidence",
      features: [
        "Record and refine class projects with live video, slides, and professional annotations",
        "Use default camera positions for quick setup or customize for your presentation style",
        "Highlight key points with advanced annotation tools to make presentations memorable",
        "Share recordings with peers or teachers for valuable feedback and collaboration"
      ],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&h=600"
    },
    {
      title: "Sales Professional",
      subtitle: "Close More Deals with Video",
      features: [
        "Create compelling sales presentations with canvas-based recording for smooth delivery",
        "Use movable camera and annotation tools to highlight product features effectively",
        "Record personalized demos that can be shared with multiple prospects",
        "Track engagement and performance metrics to optimize your sales approach"
      ],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&h=600"
    },
    {
      title: "Corporate Trainer",
      subtitle: "Scale Training Programs Effectively",
      features: [
        "Upload training materials to the dashboard and record with consistent camera positioning",
        "Create standardized training content that can be delivered across multiple teams",
        "Use interactive annotations and visual elements to enhance learning retention",
        "Build a library of reusable training content for ongoing professional development"
      ],
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&h=600"
    }
  ];

  const integrations = [
    { name: "YouTube", logo: "📺", description: "Direct upload to YouTube" },
    { name: "Gmail", logo: "📧", description: "Email integration for sharing" },
    { name: "GitHub", logo: "🐙", description: "Developer workflow integration" },
    { name: "Bitbucket", logo: "🪣", description: "Code repository integration" },
    { name: "HubSpot", logo: "🚀", description: "CRM integration (Coming Soon)" },
    { name: "Google Drive", logo: "💾", description: "Cloud storage integration" },
    { name: "Slack", logo: "💬", description: "Team communication" },
    { name: "Notion", logo: "📝", description: "Documentation platform" },
    { name: "LinkedIn", logo: "💼", description: "Professional sharing" },
    { name: "Zoom", logo: "📹", description: "Video conferencing" },
    { name: "Teams", logo: "👥", description: "Microsoft Teams support" },
    { name: "Vimeo", logo: "🎬", description: "Professional video hosting" }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "University Professor",
      content: "Flonnect's canvas-based recording has revolutionized my online lectures. The annotation tools are incredibly intuitive, and my students are more engaged than ever.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=150&h=150"
    },
    {
      name: "Michael Rodriguez",
      role: "Sales Director at TechFlow",
      content: "The movable camera feature and default positioning options have made our product demos incredibly professional. We've seen a 75% increase in demo-to-close rates.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150"
    },
    {
      name: "Emily Johnson",
      role: "L&D Manager at GlobalCorp",
      content: "Creating consistent training materials across our global team is now effortless. The dashboard workflow is intuitive and the quality is exceptional.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150"
    },
    {
      name: "David Park",
      role: "Content Creator",
      content: "The annotation tools - especially the pen and text features - have taken my educational content to the next level. My audience retention has improved significantly.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150"
    }
  ];

  const presentationFaqs = [
    {
      question: "How does canvas-based recording work in Flonnect?",
      answer: "Canvas-based recording uses advanced rendering technology to capture smooth, high-quality presentations with real-time elements. This ensures your recordings are crisp and professional, even with complex animations and interactive content."
    },
    {
      question: "Can I upload my PowerPoint presentations directly to the dashboard?",
      answer: "Yes! Simply visit app.flonnect.com/dashboard/presentation, upload your PowerPoint, Google Slides, or PDF presentation, choose your camera position, and start recording immediately."
    },
    {
      question: "What annotation tools are available during recording?",
      answer: "Flonnect offers comprehensive annotation tools including digital pen, pencil, text overlays, checkmarks, shapes, arrows, and a full color picker. All tools work in real-time during your presentation recording."
    },
    {
      question: "How does the movable camera feature work?",
      answer: "The movable camera allows you to dynamically reposition your webcam during recording. You can choose from default positions for quick setup or customize the positioning for your specific presentation needs."
    },
    {
      question: "Can I share my recorded presentations on social media?",
      answer: "Absolutely! You can export your presentations to various formats and share directly on YouTube, LinkedIn, Instagram, TikTok, or via email and other social platforms with one-click distribution."
    },
    {
      question: "Is it suitable for creating educational content and online courses?",
      answer: "Yes, Flonnect is perfect for educators, trainers, and course creators. The platform offers specialized tools for educational content including interactive elements, progress tracking, and multi-format export options."
    },
    {
      question: "What camera positions are available by default?",
      answer: "Flonnect offers several pre-configured camera positions including corner placement, side-by-side with slides, full-screen presenter mode, and picture-in-picture options. You can also create custom positions."
    },
    {
      question: "Can I collaborate with my team on presentations?",
      answer: "Yes, you can create team workspaces, invite members, and collaborate on presentation content with secure sharing, version control, and access permissions."
    },
    {
      question: "What file formats can I upload for presentations?",
      answer: "We support all major presentation formats including PowerPoint (PPTX), Google Slides, Keynote, PDF presentations, and various image formats for maximum compatibility."
    },
    {
      question: "How do I get started with the dashboard?",
      answer: "Simply visit app.flonnect.com/dashboard/presentation, create your account, upload your presentation file, select your preferred camera position from the defaults, and click record. It's that simple!"
    },
    {
      question: "Are there integrations with other platforms?",
      answer: "Yes, we integrate with YouTube, Gmail, GitHub, Bitbucket, Google Drive, Slack, Notion, LinkedIn, Zoom, Teams, and Vimeo. HubSpot integration is coming soon!"
    },
    {
      question: "Can I schedule automatic recordings?",
      answer: "Yes, you can schedule presentations to be recorded automatically, perfect for recurring webinars, training sessions, and regular content creation workflows."
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
                🎥 Canvas-Based Presentation Recording
              </Badge>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Create, Record, and Share
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 block">
                  Professional Presentations with AI
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-4">
                Transform your presentations into engaging video content with Flonnect's canvas-based recording technology. Upload your slides, choose your camera position, and create professional presentations that captivate your audience.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8 px-4">
                <Button size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <Upload className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                  Start Recording Now
                </Button>
                <Button variant="outline" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6">
                  <Play className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                  Watch Demo
                </Button>
              </div>
              
              {/* Performance Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                {performanceStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-blue-600">{stat.number}</div>
                    <div className="text-sm sm:text-base text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard Workflow */}
        <section className="py-12 sm:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Simple 4-Step Process
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Visit app.flonnect.com/dashboard/presentation and start recording professional presentations in minutes
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {dashboardWorkflow.map((step, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group text-center relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    {step.step}
                  </div>
                  <CardHeader className="pb-4 pt-8">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{step.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Chrome className="w-5 h-5 mr-2" />
                Try Dashboard Now
              </Button>
            </div>
          </div>
        </section>

        {/* Recording Modes */}
        <section className="py-12 sm:py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Multiple Recording Modes
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the perfect recording mode for your presentation needs
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {recordingModes.map((mode, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                  <CardHeader className="text-center pb-2">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <mode.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-lg">{mode.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed mb-4">
                      {mode.description}
                    </CardDescription>
                    <div className="space-y-2">
                      {mode.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-xs text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Platform Options */}
        <section className="py-12 sm:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Choose Your Platform
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

        {/* Core Features Section */}
        <section className="py-12 sm:py-20 bg-gradient-to-br from-purple-50 to-blue-50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Powerful Presentation Recording Features
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to create professional presentations with canvas-based recording technology
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group bg-white">
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
          </div>
        </section>

        {/* Annotation Tools */}
        <section className="py-12 sm:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Professional Annotation Tools
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Enhance your presentations with comprehensive annotation tools including text, shapes, pens, and more
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {annotationTools.map((tool, index) => (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="text-center pb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <tool.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">{tool.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-sm leading-relaxed">
                      {tool.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Camera Features */}
        <section className="py-12 sm:py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Advanced Camera Controls
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Professional camera features including movable positioning and default setups for quick recording
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {cameraFeatures.map((feature, index) => (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
                  <CardHeader className="text-center pb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <feature.icon className="w-6 h-6 text-green-600" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-sm leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-12 sm:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Perfect for Every Presentation Need
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                From webinars to training sessions, create presentations that engage and convert your audience
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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

        {/* Advanced Features */}
        <section className="py-12 sm:py-20 bg-gradient-to-br from-purple-50 to-blue-50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Advanced Presentation Features
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Professional-grade tools designed specifically for creating exceptional presentations
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {advancedFeatures.map((feature, index) => (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
                  <CardHeader className="text-center pb-4">
                    <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-sm leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Presentation Types Section */}
        <section className="py-12 sm:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Perfect for Every Presentation Type
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                From sales pitches to educational content, create presentations that deliver results
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
              {presentationTypes.map((type, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                        <type.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{type.title}</CardTitle>
                      </div>
                    </div>
                    <CardDescription className="text-base leading-relaxed mb-4">
                      {type.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {type.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-600">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Presentation Management Section */}
        <section className="py-12 sm:py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-5xl mx-auto text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Streamlined Presentation Workflow
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-12">
                From upload to sharing, Flonnect simplifies every step of your presentation creation process with intelligent automation and professional tools.
              </p>
              <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 mb-12">
                <img 
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=1200&h=600" 
                  alt="Presentation Dashboard Interface" 
                  className="w-full h-64 sm:h-80 object-cover rounded-lg"
                />
              </div>
            </div>
            
            <div className="text-center mb-12 sm:mb-16">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Collaborative Presentation Features
              </h3>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Work with your team to create, review, and share presentations seamlessly
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
              {workflowFeatures.map((feature, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow bg-white">
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

        {/* Testimonials Section */}
        <section className="py-12 sm:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Trusted by Professionals Worldwide
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                See how professionals are using Flonnect to create engaging presentations that drive results
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                        <CardDescription className="text-sm">{testimonial.role}</CardDescription>
                      </div>
                    </div>
                    <div className="flex gap-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm leading-relaxed">"{testimonial.content}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-12 sm:py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Seamless Platform Integrations
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                Connect with your favorite tools and platforms for streamlined presentation workflow
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
              {integrations.map((integration, index) => (
                <Card key={index} className="text-center hover:shadow-md transition-shadow duration-300 bg-white relative">
                  <CardContent className="p-6">
                    <div className="text-3xl mb-2">{integration.logo}</div>
                    <h3 className="font-semibold text-sm mb-1">{integration.name}</h3>
                    <p className="text-xs text-gray-500">{integration.description}</p>
                    {integration.name === "HubSpot" && (
                      <Badge className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs">
                        Soon
                      </Badge>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Personas Section */}
        <section className="py-12 sm:py-20 bg-gradient-to-br from-blue-50 to-purple-50">
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
                      <Upload className="w-4 h-4 mr-2" />
                      Start Recording
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
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
              Ready to Transform Your Presentations?
            </h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 max-w-4xl mx-auto leading-relaxed">
              Join thousands of professionals who use Flonnect to create engaging, professional presentations. With canvas-based recording, movable cameras, and comprehensive annotation tools, your presentations will never be the same. Start your journey today!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6">
              <Button size="lg" variant="secondary" className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6">
                <Upload className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                Start Recording Now
              </Button>
              <Button size="lg" variant="outline" className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 bg-transparent border-white text-white hover:bg-white hover:text-blue-600">
                <Play className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                Watch Demo
              </Button>
            </div>
            <p className="text-xs sm:text-sm opacity-75">
              No credit card required • Canvas-based recording • Professional quality presentations
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default PresentationRecorderLandingPage;
