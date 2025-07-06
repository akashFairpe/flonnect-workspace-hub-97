
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  MousePointer,
  Video,
  Bug,
  Camera,
  Brain,
  Shield,
  CheckCircle,
  Sparkles,
  Users,
  Settings
} from 'lucide-react';

const EnterpriseModulesSection = () => {
  const modules = [
    {
      icon: MousePointer,
      title: "Step Recorder & Demo Recording",
      description: "Create comprehensive workflows and customer demos with intelligent automation.",
      features: [
        "Capture detailed workflows step-by-step",
        "Create demos for customers, onboarding, or training",
        "Auto-generate guides in video, HTML, or PDF",
        "Smart AI summaries & annotations"
      ],
      color: "from-blue-500 to-indigo-600",
      aiPowered: true
    },
    {
      icon: Users,
      title: "Meeting Recorder",
      description: "Transform meetings into actionable insights with AI-powered transcription and summaries.",
      features: [
        "Record meetings with real-time transcription",
        "Auto-generate meeting minutes & action items",
        "Share transcripts instantly to Slack, Notion & email",
        "Smart speaker identification and sentiment analysis"
      ],
      color: "from-emerald-500 to-teal-600",
      aiPowered: true
    },
    {
      icon: Bug,
      title: "Bug Reporting",
      description: "Streamline bug tracking with visual context and automatic technical details.",
      features: [
        "Record bugs as videos or screenshots",
        "Mark timestamps, capture network logs automatically",
        "Integrate with Jira, ClickUp & other PM tools",
        "AI-powered bug categorization and priority scoring"
      ],
      color: "from-red-500 to-pink-600",
      aiPowered: true
    },
    {
      icon: Camera,
      title: "Video Recording & Editing",
      description: "Professional video creation with AI-enhanced editing capabilities.",
      features: [
        "Record your screen, camera, or both",
        "AI-powered editing, smart voiceovers",
        "Share instantly to YouTube, websites, or team spaces",
        "Automatic scene detection and highlight generation"
      ],
      color: "from-purple-500 to-violet-600",
      aiPowered: true
    },
    {
      icon: Brain,
      title: "AI Superpowers Everywhere",
      description: "Leverage cutting-edge AI across all your workflows for maximum productivity.",
      features: [
        "Text-to-Video, Text-to-Image for quick creative work",
        "Speech-to-Text for transcripts & subtitles",
        "Smart summarisation for faster reviews",
        "Content generation and auto-formatting"
      ],
      color: "from-orange-500 to-red-600",
      aiPowered: true
    },
    {
      icon: Shield,
      title: "Secure Team Workspace",
      description: "Enterprise-grade security with comprehensive team management and compliance.",
      features: [
        "Minimum 5-user plan with role-based permissions",
        "Host on your custom domain, apply your branding",
        "SSO, secure sharing, and compliance-ready",
        "Advanced analytics and usage reporting"
      ],
      color: "from-gray-600 to-slate-700",
      aiPowered: false
    }
  ];

  const benefits = [
    "One tool for all recording needs — no juggling apps",
    "Save hours weekly — automate tedious tasks with AI", 
    "Branded & secure — custom domain, SSO, team roles",
    "Scales as you grow — easily add seats & manage workspaces"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-indigo-100 text-indigo-700 border-indigo-200">
            <Settings className="w-4 h-4 mr-2" />
            All-in-One Enterprise Modules
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Six Powerful Modules, One Unified Platform
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything your enterprise team needs to create, collaborate, and communicate effectively
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {modules.map((module, index) => (
            <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group bg-gradient-to-br from-white to-gray-50">
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 bg-gradient-to-r ${module.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                  <module.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex items-center justify-center gap-2 mb-3">
                  <CardTitle className="text-xl">{module.title}</CardTitle>
                  {module.aiPowered && <Sparkles className="w-4 h-4 text-purple-500" />}
                </div>
                <CardDescription className="text-base leading-relaxed mb-6">
                  {module.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {module.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Teams Love Section */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Why Teams Love Flonnect for Enterprise
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 bg-white/80 p-6 rounded-xl shadow-md">
                <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
                <span className="text-gray-700 font-medium text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseModulesSection;
