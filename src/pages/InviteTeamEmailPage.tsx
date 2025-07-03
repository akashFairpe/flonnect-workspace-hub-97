
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Mail, Users, Copy, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

export default function InviteTeamEmailPage() {
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

  const generateAWSSESTemplate = () => {
    const sesTemplate = {
      TemplateName: "flonnect-invite-team",
      Subject: "Bring Your Team Onboard—Invite Members Today",
      HtmlPart: `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bring Your Team Onboard—Invite Members Today</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
    <div style="border-bottom: 1px solid #eee; padding-bottom: 20px; margin-bottom: 30px;">
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
            <div style="width: 48px; height: 48px; background-color: #2563eb; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                <span style="color: white; font-weight: bold; font-size: 18px;">F</span>
            </div>
            <div>
                <h2 style="margin: 0; font-size: 20px; font-weight: bold; color: #111;">Flonnect</h2>
                <p style="margin: 0; color: #666; font-size: 14px;">Screen Recording & Collaboration</p>
            </div>
        </div>
    </div>
    
    <p>Hi {{AdminFirstName}},</p>
    
    <p>Great job launching "{{ProjectName}}"! Now let's loop in your colleagues so they can start contributing.</p>
    
    <p><strong>Why invite your team?</strong></p>
    <ul>
        <li>Assign tasks &amp; share recordings in one click</li>
        <li>Get faster feedback with real-time comments</li>
        <li>Track everyone's contributions in one dashboard</li>
    </ul>
    
    <div style="text-align: center; margin: 32px 0;">
        <a href="#" style="background: #16a34a; color: white; padding: 16px 32px; border-radius: 8px; text-decoration: none; font-weight: 600; display: inline-block;">🔗 Invite Teammates Now</a>
    </div>
    
    <p>Need help? Reply here or see our Team Management Guide.</p>
    
    <p>Cheers,<br>The Flonnect Team</p>
    
    <div style="margin-top: 32px; padding-top: 16px; border-top: 1px solid #eee; font-size: 12px; color: #999; text-align: center;">
        <p>© 2024 Flonnect. All rights reserved.</p>
        <p>You're receiving this because you signed up for Flonnect.</p>
        <p style="margin-top: 8px;">
            <a href="#" style="color: #2563eb; text-decoration: underline;">Unsubscribe</a> | 
            <a href="#" style="color: #2563eb; text-decoration: underline; margin-left: 4px;">Update Preferences</a>
        </p>
    </div>
</body>
</html>`,
      TextPart: `Hi {{AdminFirstName}},

Great job launching "{{ProjectName}}"! Now let's loop in your colleagues so they can start contributing.

Why invite your team?
• Assign tasks & share recordings in one click
• Get faster feedback with real-time comments
• Track everyone's contributions in one dashboard

Invite Teammates Now: [Link]

Need help? Reply here or see our Team Management Guide.

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
                  <Badge variant="outline">Step 4</Badge>
                  <h1 className="text-2xl font-bold text-gray-900">Invite Your Team</h1>
                </div>
                <p className="text-gray-600 mt-1">Trigger: No team invites sent | Delay: 24h after Step 3</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" onClick={copyToClipboard}>
                <Copy className="w-4 h-4 mr-2" />
                Copy Content
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
                      <p><strong>Subject:</strong> Bring Your Team Onboard—Invite Members Today</p>
                      <p><strong>To:</strong> {'{{AdminFirstName}}'} &lt;{'{{AdminEmail}}'}&gt;</p>
                    </div>
                  </div>

                  {/* Email Content */}
                  <div id="email-content" className="space-y-4">
                    <p className="text-gray-800">Hi {'{{AdminFirstName}}'},</p>
                    
                    <p className="text-gray-800">
                      Great job launching "{'{{ProjectName}}'}"! Now let's loop in your colleagues so they can start contributing.
                    </p>

                    <div className="my-6">
                      <p className="text-gray-800 font-semibold mb-3">Why invite your team?</p>
                      <ul className="space-y-2 text-gray-800">
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600">•</span>
                          <span>Assign tasks & share recordings in one click</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600">•</span>
                          <span>Get faster feedback with real-time comments</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600">•</span>
                          <span>Track everyone's contributions in one dashboard</span>
                        </li>
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <div className="text-center my-8">
                      <div className="bg-green-600 text-white inline-block py-4 px-8 rounded-lg font-semibold text-lg">
                        🔗 Invite Teammates Now
                      </div>
                    </div>

                    <p className="text-gray-800">
                      Need help? Reply here or see our <span className="text-blue-600 underline">Team Management Guide</span>.
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
                  <p className="text-sm text-gray-800">No team invites sent</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Send Delay</p>
                  <p className="text-sm text-gray-800">24h after Step 3</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Primary CTA</p>
                  <p className="text-sm text-gray-800">Invite Teammates</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Variables</p>
                  <div className="text-sm text-gray-800 space-y-1">
                    <p>{'{{AdminFirstName}}'}</p>
                    <p>{'{{AdminEmail}}'}</p>
                    <p>{'{{ProjectName}}'}</p>
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
                  <p className="text-sm text-gray-800 font-mono">flonnect-invite-team</p>
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
