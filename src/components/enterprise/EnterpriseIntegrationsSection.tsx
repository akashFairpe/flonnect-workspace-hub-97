
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Zap,
  MessageSquare,
  Database,
  Mail,
  FileText,
  Calendar,
  Github,
  Slack
} from 'lucide-react';

const EnterpriseIntegrationsSection = () => {
  const integrations = [
    {
      category: "Communication",
      tools: [
        { name: "Slack", icon: Slack, description: "Share recordings and AI summaries directly to channels" },
        { name: "Microsoft Teams", icon: MessageSquare, description: "Integrate with Teams meetings and conversations" },
        { name: "Discord", icon: MessageSquare, description: "Share content with Discord communities" },
        { name: "Email", icon: Mail, description: "Auto-send meeting minutes and recordings via email" }
      ]
    },
    {
      category: "Project Management",
      tools: [
        { name: "Jira", icon: FileText, description: "Create tickets with video bug reports automatically" },
        { name: "Asana", icon: FileText, description: "Attach recordings to tasks and projects" },
        { name: "Notion", icon: Database, description: "Embed videos and sync meeting notes" },
        { name: "Monday.com", icon: FileText, description: "Link recordings to project boards" }
      ]
    },
    {
      category: "Development",
      tools: [
        { name: "GitHub", icon: Github, description: "Attach demo videos to pull requests and issues" },
        { name: "GitLab", icon: Github, description: "Document features with embedded recordings" },
        { name: "Confluence", icon: Database, description: "Create rich documentation with video guides" },
        { name: "Zendesk", icon: MessageSquare, description: "Enhance support tickets with visual context" }
      ]
    },
    {
      category: "Productivity",
      tools: [
        { name: "Google Workspace", icon: Calendar, description: "Sync with Calendar, Drive, and Gmail" },
        { name: "Office 365", icon: Calendar, description: "Integrate with Outlook and OneDrive" },
        { name: "Dropbox", icon: Database, description: "Store and share recordings in Dropbox" },
        { name: "Zapier", icon: Zap, description: "Connect to 3000+ apps via automation" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-blue-100 text-blue-700 border-blue-200">
            <Zap className="w-4 h-4 mr-2" />
            Seamless Integrations
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Connect with Your Existing Workflow
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Flonnect integrates seamlessly with the tools your team already uses, enhancing productivity without disrupting existing workflows
          </p>
        </div>

        <div className="space-y-12">
          {integrations.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                {category.category} Tools
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.tools.map((tool, toolIndex) => (
                  <Card key={toolIndex} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group bg-gradient-to-br from-white to-gray-50">
                    <CardHeader className="text-center pb-4">
                      <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <tool.icon className="w-7 h-7 text-white" />
                      </div>
                      <CardTitle className="text-lg">{tool.name}</CardTitle>
                      <CardDescription className="text-sm leading-relaxed">
                        {tool.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* API Access */}
        <div className="mt-16 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-12">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
              <Zap className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Custom Integrations with API Access
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Need a custom integration? Our comprehensive REST API and webhooks allow you to build exactly what your team needs.
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/80 p-6 rounded-xl shadow-md">
                <div className="font-semibold text-gray-900 mb-2">REST API</div>
                <div className="text-gray-600 text-sm">Full programmatic access to all Flonnect features</div>
              </div>
              <div className="bg-white/80 p-6 rounded-xl shadow-md">
                <div className="font-semibold text-gray-900 mb-2">Webhooks</div>
                <div className="text-gray-600 text-sm">Real-time notifications for all recording events</div>
              </div>
              <div className="bg-white/80 p-6 rounded-xl shadow-md">
                <div className="font-semibold text-gray-900 mb-2">Developer Support</div>
                <div className="text-gray-600 text-sm">Dedicated technical support for custom implementations</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseIntegrationsSection;
