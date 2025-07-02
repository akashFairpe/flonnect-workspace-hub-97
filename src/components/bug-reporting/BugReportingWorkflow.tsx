
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Users } from 'lucide-react';

export function BugReportingWorkflow() {
  return (
    <section className="mb-16 sm:mb-20">
      <Card className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 shadow-2xl">
        <CardContent className="p-8 sm:p-12">
          <div className="text-center mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 mb-6">
              <Users className="w-5 h-5 text-white" />
              <span className="text-white font-medium text-sm">Bug Reporting Workflow</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Streamline Your Bug Reporting Workflow
            </h2>
            <p className="text-purple-100 max-w-4xl mx-auto text-base sm:text-lg leading-relaxed">
              Flonnect Bug Reporting is designed to simplify issue tracking for QA teams, developers, and product managers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="flex items-start gap-4 bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-1" />
              <span className="text-sm sm:text-base text-white leading-relaxed">
                Capture precise screenshots or video recordings of bugs.
              </span>
            </div>
            <div className="flex items-start gap-4 bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-1" />
              <span className="text-sm sm:text-base text-white leading-relaxed">
                Highlight exact moments in videos to pinpoint issues.
              </span>
            </div>
            <div className="flex items-start gap-4 bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-1" />
              <span className="text-sm sm:text-base text-white leading-relaxed">
                Record network requests and API calls for context-rich bug reports.
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
