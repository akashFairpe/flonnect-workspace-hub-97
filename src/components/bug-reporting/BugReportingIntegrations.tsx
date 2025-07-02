
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Settings, CheckCircle, Play } from 'lucide-react';

export function BugReportingIntegrations() {
  return (
    <section className="mb-16 sm:mb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-6">
            <Settings className="w-5 h-5 text-blue-600" />
            <span className="text-blue-800 font-medium text-sm">Seamless Integrations</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Seamless Integrations – Work Smarter, Not Harder
          </h2>
          
          <div className="space-y-4 mb-6">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
              <span className="text-gray-700">Sync directly with Jira and ClickUp to track bugs in one place.</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
              <span className="text-gray-700">Streamline bug reporting without disrupting your existing processes.</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
              <span className="text-gray-700">Keep your team aligned and productive.</span>
            </div>
          </div>
          
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">
            <Play className="w-4 h-4 mr-2" />
            Take A Product Tour
          </Button>
        </div>
        
        <Card className="bg-gradient-to-br from-gray-50 to-blue-50 border-0 shadow-xl">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Integration Hub</h3>
              <p className="text-gray-600 mb-6">Connect with your favorite tools</p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-blue-600 font-semibold">Jira</div>
                  <div className="text-sm text-gray-600">Issue Tracking</div>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-purple-600 font-semibold">ClickUp</div>
                  <div className="text-sm text-gray-600">Project Management</div>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-gray-700 font-semibold">GitHub</div>
                  <div className="text-sm text-gray-600">Code Repository</div>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-orange-600 font-semibold">Slack</div>
                  <div className="text-sm text-gray-600">Team Communication</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
