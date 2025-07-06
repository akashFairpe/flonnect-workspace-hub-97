
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Building,
  Sparkles,
  Users,
  Shield,
  ArrowRight,
  Calendar,
  MessageSquare
} from 'lucide-react';

const EnterpriseHeroSection = () => {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28" role="banner">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-blue-100 to-purple-100"></div>
      <div className="absolute inset-0 bg-white/40"></div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center">
          <Badge className="mb-6 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 hover:bg-indigo-200 border-indigo-200 text-sm px-4 py-2">
            <Building className="w-4 h-4 mr-2" />
            Enterprise Solutions
          </Badge>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight text-gray-900">
            Flonnect for Enterprise
            <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mt-2">
              One AI-Powered Platform for Video, Guides & Collaboration
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-gray-700 max-w-5xl mx-auto leading-relaxed">
            All your team's recording, documentation, and sharing tools — unified under one roof. 
            From step-by-step guides and demos to meetings, bug reporting, and smart AI automation.
          </p>

          <Badge className="mb-8 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 border-purple-200 text-sm px-4 py-2">
            <Sparkles className="w-4 h-4 mr-2" />
            ✨ Includes Flonnect AI: Automate meeting minutes, transcriptions, text-to-video, text-to-image, bug logs, and more.
          </Badge>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <Calendar className="w-5 h-5 mr-2" />
              Book Demo
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-indigo-200 text-indigo-700 hover:bg-indigo-50 px-8 py-4 text-lg">
              <MessageSquare className="w-5 h-5 mr-2" />
              Contact Sales
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto shadow-lg border border-white/40">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Everything Your Team Needs to Record, Document & Share — Smarter, Faster, Together.
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Flonnect for Enterprise combines screen recording, step recorders, meeting capture, bug reporting, 
              and smart AI tools into one secure workspace. Empower your teams to work faster, share clearer, 
              and collaborate better — all with your custom domain & SSO.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-500" />
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-blue-500" />
                <span>Team Collaboration</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-500" />
                <span>AI-Powered</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseHeroSection;
