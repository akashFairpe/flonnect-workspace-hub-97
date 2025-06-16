
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

const CTASection = () => {
  return (
    <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
      <h3 className="text-3xl md:text-4xl font-bold mb-4">
        Ready to Transform Your Teaching?
      </h3>
      <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
        Join over 50,000 educators who are already creating amazing content with our screen recorder
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
          <Play className="w-5 h-5 mr-2" />
          Start Free 14-Day Trial
        </Button>
        <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-blue-600">
          View Pricing Plans
        </Button>
      </div>
    </div>
  );
};

export default CTASection;
