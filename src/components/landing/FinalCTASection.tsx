
import { Button } from '@/components/ui/button';
import { Users, ArrowRight } from 'lucide-react';

const FinalCTASection = () => {
  return (
    <section className="py-16 sm:py-20 relative overflow-hidden" role="region" aria-label="Final Call to Action">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-blue-100 to-purple-100"></div>
      <div className="absolute inset-0 bg-white/40"></div>
      <div className="relative container mx-auto px-4 sm:px-6 text-center text-gray-900">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
          Transform How Your Team Collaborates
        </h2>
        <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-gray-700 max-w-3xl mx-auto leading-relaxed px-4">
          Join thousands of users making video creation and management simpler and smarter.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-2xl mx-auto">
          <Button size="lg" className="text-sm sm:text-lg px-6 sm:px-8 py-4 sm:py-6 bg-indigo-600 hover:bg-indigo-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300">
            <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            Sign Up for Free
          </Button>
          <Button size="lg" variant="outline" className="text-sm sm:text-lg px-6 sm:px-8 py-4 sm:py-6 border-indigo-300 text-indigo-600 hover:bg-indigo-50">
            View Pricing
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
          </Button>
        </div>
        <p className="text-xs sm:text-sm mt-4 sm:mt-6 text-gray-600 leading-relaxed">
          No credit card required • 14-day free trial • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default FinalCTASection;
