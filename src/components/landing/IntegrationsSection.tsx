
import { Shield, Globe, Zap } from 'lucide-react';

const IntegrationsSection = () => {
  return (
    <section className="py-16 sm:py-20 bg-white" role="region" aria-label="Integrations and Security">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Seamless Integrations & Security
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed px-4">
            Flonnect integrates securely with Google Calendar, Microsoft Outlook, Salesforce, Slack, and many more, 
            complying fully with industry-standard security and privacy guidelines.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-emerald-50 to-teal-50 px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 w-full sm:w-auto">
              <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />
              <span className="text-gray-700 font-semibold text-sm sm:text-base">Enterprise Security</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-blue-50 to-indigo-50 px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 w-full sm:w-auto">
              <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
              <span className="text-gray-700 font-semibold text-sm sm:text-base">Global Compliance</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-yellow-50 to-orange-50 px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 w-full sm:w-auto">
              <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600" />
              <span className="text-gray-700 font-semibold text-sm sm:text-base">API Integrations</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
