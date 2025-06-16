
import { Button } from '@/components/ui/button';
import { Play, Download } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="text-center mb-16">
      <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
        Professional Screen Recorder for Educators
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
        Create engaging video lessons, provide personalized feedback, and build your online teaching presence with our educator-focused screen recording software.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
          <Play className="w-5 h-5 mr-2" />
          Start Recording Now - Free Trial
        </Button>
        <Button variant="outline" size="lg" className="text-lg px-8 py-6">
          <Download className="w-5 h-5 mr-2" />
          Download Free Version
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
