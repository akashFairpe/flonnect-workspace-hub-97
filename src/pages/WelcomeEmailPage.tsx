
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
    const emailContent = document.getElementById('email-body-content')?.innerText;
    if (emailContent) {
      navigator.clipboard.writeText(emailContent);
      toast({
        title: "Copied to clipboard",
        description: "Email body content has been copied to your clipboard.",
      });
    }
  };

  const generateAWSSESTemplate = () => {
    const sesTemplate = {
      TemplateName: "flonnect-welcome-email",
      Subject: "Welcome to Flonnect! Let's get you set up 🚀",
      HtmlPart: `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Flonnect! Let's get you set up 🚀</title>
    <style>
        @media screen and (max-width: 600px) {
            .container { width: 100% !important; padding: 10px !important; }
            .header-flex { flex-direction: column !important; text-align: center !important; }
            .logo { margin-bottom: 16px !important; }
            .cta-buttons { flex-direction: column !important; }
            .cta-button { width: 100% !important; margin-bottom: 12px !important; }
        }
    </style>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f9fafb;">
    <div class="container" style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff;">
        <div style="border-bottom: 1px solid #eee; padding-bottom: 20px; margin-bottom: 30px;">
            <div class="header-flex" style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                <div class="logo" style="width: 48px; height: 48px; background-color: #2563eb; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                    <span style="color: white; font-weight: bold; font-size: 18px;">F</span>
                </div>
                <div>
                    <h2 style="margin: 0; font-size: 20px; font-weight: bold; color: #111;">Flonnect</h2>
                    <p style="margin: 0; color: #666; font-size: 14px;">Screen Recording & Collaboration</p>
                </div>
            </div>
        </div>
        
        <p style="margin-bottom: 16px;">Hi {{AdminFirstName}},</p>
        
        <p style="margin-bottom: 16px;">Welcome aboard! We're excited to have {{CompanyName}} on Flonnect. You're just a couple clicks away from seamless meeting recordings, team collaboration, and project insights.</p>
        
        <p style="margin-bottom: 8px; font-weight: 600;">Next steps:</p>
        <ul style="margin-bottom: 24px; padding-left: 20px;">
            <li style="margin-bottom: 8px;"><strong>Connect Your Calendar</strong>—Auto-record meetings &amp; capture insights.</li>
            <li style="margin-bottom: 8px;"><strong>Invite Your Team</strong>—So everyone can collaborate in one place.</li>
        </ul>
        
        <div class="cta-buttons" style="display: flex; gap: 12px; margin: 32px 0; justify-content: center;">
            <a href="#" class="cta-button" style="background: #2563eb; color: white; padding: 16px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; display: inline-block; text-align: center; min-width: 160px;">🔗 Connect Calendar</a>
            <a href="#" class="cta-button" style="background: #16a34a; color: white; padding: 16px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; display: inline-block; text-align: center; min-width: 160px;">🔗 Invite Your Team</a>
        </div>
        
        <p style="margin-bottom: 16px;">Need help? Just reply or visit our <a href="#" style="color: #2563eb; text-decoration: underline;">Getting Started Guide</a>.</p>
        
        <p style="margin-bottom: 32px;">Cheers,<br>The Flonnect Team</p>
        
        <div style="margin-top: 32px; padding-top: 16px; border-top: 1px solid #eee; font-size: 12px; color: #999; text-align: center;">
            <p style="margin-bottom: 8px;">© 2024 Flonnect. All rights reserved.</p>
            <p style="margin-bottom: 8px;">You're receiving this because you signed up for Flonnect.</p>
            <p style="margin: 0;">
                <a href="#" style="color: #2563eb; text-decoration: underline;">Unsubscribe</a> | 
                <a href="#" style="color: #2563eb; text-decoration: underline; margin-left: 4px;">Update Preferences</a>
            </p>
        </div>
    </div>
</body>
</html>`,
      TextPart: `Hi {{AdminFirstName}},

Welcome aboard! We're excited to have {{CompanyName}} on Flonnect. You're just a couple clicks away from seamless meeting recordings, team collaboration, and project insights.

Next steps:
• Connect Your Calendar—Auto-record meetings & capture insights.
• Invite Your Team—So everyone can collaborate in one place.

Connect Calendar: [Link]
Invite Your Team: [Link]

Need help? Just reply or visit our Getting Started Guide.

Cheers,
The Flonnect Team

© 2024 Flonnect. All rights reserved.
Unsubscribe: [Link] | Update Preferences: [Link]`
    };

    navigator.clipboard.writeText(JSON.stringify(sesTemplate, null, 2));
    toast({
      title: "AWS SES Template Copied",
      description: "The AWS SES template JSON has been copied to your clipboard.",
    });
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
                Copy Body Content
              </Button>
              <Button onClick={generateAWSSESTemplate}>
                <Send className="w-4 h-4 mr-2" />
                Copy AWS SES Template
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
                      <p><strong>To:</strong> {'{{AdminFirstName}}'} &lt;{'{{AdminEmail}}'}&gt;</p>
                    </div>
                  </div>

                  {/* Email Content */}
                  <div id="email-body-content" className="space-y-4">
                    <p className="text-gray-800">Hi {'{{AdminFirstName}}'},</p>
                    
                    <p className="text-gray-800">
                      Welcome aboard! We're excited to have {'{{CompanyName}}'} on Flonnect. You're just a couple clicks away from seamless meeting recordings, team collaboration, and project insights.
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
                    <div className="flex flex-col sm:flex-row gap-3 my-8 justify-center">
                      <div className="bg-blue-600 text-white text-center py-4 px-6 rounded-lg font-semibold">
                        🔗 Connect Calendar
                      </div>
                      <div className="bg-green-600 text-white text-center py-4 px-6 rounded-lg font-semibold">
                        🔗 Invite Your Team
                      </div>
                    </div>

                    <p className="text-gray-800">
                      Need help? Just reply or visit our <span className="text-blue-600 underline">Getting Started Guide</span>.
                    </p>

                    <div className="mt-6 pt-4 border-t">
                      <p className="text-gray-800">Cheers,<br />The Flonnect Team</p>
                    </div>

                    <div className="mt-8 pt-4 border-t text-xs text-gray-500 text-center">
                      <p>© 2024 Flonnect. All rights reserved.</p>
                      <p>You're receiving this because you signed up for Flonnect.</p>
                      <p className="mt-2">
                        <span className="text-blue-600 underline cursor-pointer">Unsubscribe</span> | 
                        <span className="text-blue-600 underline cursor-pointer ml-1">Update Preferences</span>
                      </p>
                    </div>
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
                    <p>{'{{AdminFirstName}}'}</p>
                    <p>{'{{AdminEmail}}'}</p>
                    <p>{'{{CompanyName}}'}</p>
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
                <Button className="w-full" variant="outline" onClick={generateAWSSESTemplate}>
                  Copy AWS SES Template JSON
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
