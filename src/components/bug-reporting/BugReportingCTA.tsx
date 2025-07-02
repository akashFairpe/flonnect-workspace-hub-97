
import React from 'react';
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  CheckCircle, 
  Star,
  Chrome,
  Download
} from 'lucide-react';

export function BugReportingCTA() {
  return (
    <section>
      <Card className="bg-gradient-to-r from-red-600 to-pink-600 text-white border-0 shadow-2xl">
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
          <CardDescription className="text-red-100 text-base sm:text-lg max-w-4xl mx-auto mb-8 leading-relaxed">
            Flonnect simplifies the way you create, manage, and share bug reports for your products. Whether you're capturing screenshots, recording video bugs, or integrating with your development workflow, Flonnect empowers you to deliver precise bug reports that accelerate resolution times. Start your journey today with a free trial and explore how Flonnect can elevate your QA process.
          </CardDescription>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button size="lg" variant="secondary" className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all w-full sm:w-auto">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg w-full sm:w-auto">
              <Chrome className="w-5 h-5 mr-2" />
              Add to Chrome
            </Button>
          </div>
          
          {/* Download Links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
              <a href="#chrome-webstore-final">
                <Chrome className="w-4 h-4 mr-2" />
                Chrome Extension
              </a>
            </Button>
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
              <a href="#desktop-mac-final">
                <Download className="w-4 h-4 mr-2" />
                Mac App
              </a>
            </Button>
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
              <a href="#desktop-windows-final">
                <Download className="w-4 h-4 mr-2" />
                Windows App
              </a>
            </Button>
          </div>
          
          <div className="mt-8 text-sm text-red-200">
            No credit card required • Free forever plan available
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
