
import { Shield, Globe, Zap } from 'lucide-react';

const IntegrationsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-6">
            Seamless Integrations & Security
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Flonnect integrates securely with Google Calendar, Microsoft Outlook, Salesforce, Slack, and many more, 
            complying fully with industry-standard security and privacy guidelines.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6">
            <div className="flex items-center gap-3 bg-gradient-to-r from-emerald-50 to-teal-50 px-6 py-4 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <Shield className="w-6 h-6 text-emerald-600" />
              <span className="text-gray-700 font-semibold">Enterprise Security</span>
            </div>
            <div className="flex items-center gap-3 bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-4 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <Globe className="w-6 h-6 text-blue-600" />
              <span className="text-gray-700 font-semibold">Global Compliance</span>
            </div>
            <div className="flex items-center gap-3 bg-gradient-to-r from-yellow-50 to-orange-50 px-6 py-4 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <Zap className="w-6 h-6 text-yellow-600" />
              <span className="text-gray-700 font-semibold">API Integrations</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
