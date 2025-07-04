
import { Button } from '@/components/ui/button';
import { Users, ArrowRight } from 'lucide-react';

const FinalCTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-blue-100 to-purple-100"></div>
      <div className="absolute inset-0 bg-white/40"></div>
      <div className="relative container mx-auto px-6 text-center text-gray-900">
        <h2 className="text-3xl sm:text-5xl font-bold mb-6">
          Transform How Your Team Collaborates
        </h2>
        <p className="text-xl mb-8 text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Join thousands of users making video creation and management simpler and smarter.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8 py-6 bg-indigo-600 hover:bg-indigo-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300">
            <Users className="w-5 h-5 mr-2" />
            Sign Up for Free
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-indigo-300 text-indigo-600 hover:bg-indigo-50">
            View Pricing
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
        <p className="text-sm mt-6 text-gray-600">
          No credit card required • 14-day free trial • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default FinalCTASection;
