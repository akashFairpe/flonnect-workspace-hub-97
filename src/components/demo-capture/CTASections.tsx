
import React from 'react';
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Play, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Download 
} from 'lucide-react';

export function ProductTourCTA() {
  return (
    <section className="text-center mb-16 sm:mb-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
          Ready to Transform Your Onboarding?
        </h2>
        <p className="text-base sm:text-lg text-gray-600 mb-8">
          See how Flonnect can revolutionize your user experience
        </p>
        <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all">
          Take A Product Tour
          <Play className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section>
      <Card className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 shadow-2xl">
        <CardContent className="p-8 sm:p-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-green-300" />
            <Star className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-300" />
            <Star className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-300" />
            <Star className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-300" />
            <Star className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-300" />
            <Star className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-300" />
          </div>
          <CardTitle className="text-2xl sm:text-3xl md:text-4xl text-white mb-6 leading-tight">
            Teams Love Flonnect. Still on the Fence? Let Us Prove It.
          </CardTitle>
          <CardDescription className="text-purple-100 text-base sm:text-lg max-w-4xl mx-auto mb-8 leading-relaxed">
            Flonnect simplifies the way you create, manage, and share demo videos for your products. Whether you're showcasing a feature, onboarding new clients, or driving sales, Flonnect empowers you to deliver impactful experiences that convert viewers into loyal customers. Start your journey today with a free trial and explore how Flonnect can elevate your business.
          </CardDescription>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all w-full sm:w-auto">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg w-full sm:w-auto">
              <Download className="w-5 h-5 mr-2" />
              Download Now
            </Button>
          </div>
          <div className="mt-8 text-sm text-purple-200">
            No credit card required • Free forever plan available
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
