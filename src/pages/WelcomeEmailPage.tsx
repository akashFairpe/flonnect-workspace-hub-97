
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Mail, Calendar, Users, Copy, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

export default function WelcomeEmailPage() {
  const { toast } = useToast();

  const copyToClipboard = () => {
    const emailContent = document.getElementById('email-content')?.innerText;
    if (emailContent) {
      navigator.clipboard.writeText(emailContent);
      toast({
        title: "Copied to clipboard",
        description: "Email content has been copied to your clipboard.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/email-setup">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Templates
                </Button>
              </Link>
              <div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">Step 1</Badge>
                  <h1 className="text-2xl font-bold text-gray-900">Welcome & Next Steps</h1>
                </div>
                <p className="text-gray-600 mt-1">Trigger: Admin logs in first time | Delay: Immediately</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" onClick={copyToClipboard}>
                <Copy className="w-4 h-4 mr-2" />
                Copy Content
              </Button>
              <Button>
                <Send className="w-4 h-4 mr-2" />
                Deploy to AWS
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Email Preview */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Email Preview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-white border rounded-lg p-6 max-w-2xl mx-auto" style={{ fontFamily: 'Arial, sans-serif' }}>
                  {/* Email Header */}
                  <div className="border-b pb-4 mb-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-lg">F</span>
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-gray-900">Flonnect</h2>
                        <p className="text-gray-600 text-sm">Screen Recording & Collaboration</p>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600">
                      <p><strong>Subject:</strong> Welcome to Flonnect! Let's get you set up 🚀</p>
                      <p><strong>To:</strong> {{AdminFirstName}} &lt;{{AdminEmail}}&gt;</p>
                    </div>
                  </div>

                  {/* Email Content */}
                  <div id="email-content" className="space-y-4">
                    <p className="text-gray-800">Hi {{AdminFirstName}},</p>
                    
                    <p className="text-gray-800">
                      Welcome aboard! We're excited to have {{CompanyName}} on Flonnect. You're just a couple clicks away from seamless meeting recordings, team collaboration, and project insights.
                    </p>

                    <div className="my-6">
                      <p className="text-gray-800 font-semibold mb-3">Next steps:</p>
                      <ul className="space-y-2 text-gray-800">
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600">•</span>
                          <span><strong>Connect Your Calendar</strong>—Auto-record meetings & capture insights.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600">•</span>
                          <span><strong>Invite Your Team</strong>—So everyone can collaborate in one place.</span>
                        </li>
                      </ul>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 my-8">
                      <div className="bg-blue-600 text-white text-center py-3 px-6 rounded-lg font-semibold">
                        🔗 Connect Calendar
                      </div>
                      <div className="bg-green-600 text-white text-center py-3 px-6 rounded-lg font-semibold">
                        🔗 Invite Your Team
                      </div>
                    </div>

                    <p className="text-gray-800">
                      Need help? Just reply or visit our <span className="text-blue-600 underline">Getting Started Guide</span>.
                    </p>

                    <div className="mt-6 pt-4 border-t">
                      <p className="text-gray-800">Cheers,<br />The Flonnect Team</p>
                    </div>
                  </div>

                  {/* Email Footer */}
                  <div className="mt-8 pt-4 border-t text-xs text-gray-500 text-center">
                    <p>© 2024 Flonnect. All rights reserved.</p>
                    <p>You're receiving this because you signed up for Flonnect.</p>
                    <p className="mt-2">
                      <span className="text-blue-600 underline cursor-pointer">Unsubscribe</span> | 
                      <span className="text-blue-600 underline cursor-pointer ml-1">Update Preferences</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Email Details */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Email Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-gray-600">Trigger Event</p>
                  <p className="text-sm text-gray-800">Admin logs in first time</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Send Delay</p>
                  <p className="text-sm text-gray-800">Immediately</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Primary CTA</p>
                  <p className="text-sm text-gray-800">Connect Calendar / Invite Your Team</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Variables</p>
                  <div className="text-sm text-gray-800 space-y-1">
                    <p>{{AdminFirstName}}</p>
                    <p>{{AdminEmail}}</p>
                    <p>{{CompanyName}}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>AWS Configuration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-gray-600">Template ID</p>
                  <p className="text-sm text-gray-800 font-mono">flonnect-welcome-email</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">SES Template</p>
                  <p className="text-sm text-gray-800">Ready for deployment</p>
                </div>
                <Button className="w-full" variant="outline">
                  Generate AWS SES Template
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
