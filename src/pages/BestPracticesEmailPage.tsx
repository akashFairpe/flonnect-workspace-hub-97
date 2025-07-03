
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Mail, BarChart, Copy, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

export default function BestPracticesEmailPage() {
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
      TemplateName: "flonnect-best-practices",
      Subject: "See How Top Teams Use Flonnect to Scale Creatives 📈",
      HtmlPart: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>See How Top Teams Use Flonnect to Scale Creatives 📈</title>
</head>
<body style="margin:0;padding:0;font-family:Arial,sans-serif;background-color:#f8fafc;">
    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f8fafc;">
        <tr>
            <td align="center" style="padding:20px 0;">
                <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:12px;box-shadow:0 4px 6px rgba(0,0,0,0.1);">
                    <tr>
                        <td align="center" style="padding:32px 32px 24px 32px;border-bottom:2px solid #e5e7eb;">
                            <table cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <td align="center">
                                        <table cellpadding="0" cellspacing="0" border="0">
                                            <tr>
                                                <td style="width:64px;height:64px;background-color:#2563eb;border-radius:12px;text-align:center;line-height:64px;">
                                                    <span style="color:#fff;font-weight:bold;font-size:24px;">F</span>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center">
                                        <h1 style="margin:16px 0 0 0;font-size:28px;font-weight:bold;color:#111827;">Flonnect</h1>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding:32px;">
                            <p style="font-size:18px;margin-bottom:24px;color:#111827;">Hi {{AdminFirstName}},</p>
                            <p style="font-size:16px;margin-bottom:24px;color:#374151;line-height:1.6;">Curious how other teams are crushing it with Flonnect? We've compiled some inspiring success stories and proven strategies from our top-performing users.</p>
                            <p style="font-size:18px;font-weight:600;margin-bottom:16px;color:#111827;">Real results from real teams:</p>
                            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#e0f2fe;padding:16px;border-radius:8px;margin:24px 0;">
                                <tr>
                                    <td>
                                        <table cellpadding="0" cellspacing="0" border="0" style="margin:0;padding-left:16px;">
                                            <tr>
                                                <td style="padding-bottom:8px;font-size:16px;color:#374151;"><b>"Reduced creative review time by 60%"</b> - Marketing Agency</td>
                                            </tr>
                                            <tr>
                                                <td style="padding-bottom:8px;font-size:16px;color:#374151;"><b>"Caught 85% more bugs before launch"</b> - SaaS Startup</td>
                                            </tr>
                                            <tr>
                                                <td style="font-size:16px;color:#374151;"><b>"Doubled team collaboration efficiency"</b> - E-commerce Brand</td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                            <p style="font-size:18px;font-weight:600;margin-bottom:16px;color:#111827;">Top strategies to steal:</p>
                            <table cellpadding="0" cellspacing="0" border="0" style="margin:0;padding-left:20px;margin-bottom:24px;">
                                <tr>
                                    <td style="padding-bottom:8px;font-size:16px;color:#374151;">Weekly creative audits using screen recordings</td>
                                </tr>
                                <tr>
                                    <td style="padding-bottom:8px;font-size:16px;color:#374151;">Async feedback loops with annotated screenshots</td>
                                </tr>
                                <tr>
                                    <td style="font-size:16px;color:#374151;">Centralized project hubs for all team communications</td>
                                </tr>
                            </table>
                            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:32px 0;">
                                <tr>
                                    <td align="center">
                                        <a href="#" style="display:inline-block;background-color:#16a34a;color:#fff;padding:16px 32px;border-radius:8px;text-decoration:none;font-weight:600;font-size:16px;">📊 Read Case Studies</a>
                                    </td>
                                </tr>
                            </table>
                            <p style="font-size:16px;margin-bottom:24px;color:#374151;">Ready to scale your own creative process? These strategies are game-changers.</p>
                            <table cellpadding="0" cellspacing="0" border="0" style="margin-top:32px;padding-top:24px;border-top:1px solid #e5e7eb;">
                                <tr>
                                    <td>
                                        <p style="font-size:16px;color:#374151;">Keep scaling,<br>The Flonnect Team</p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td style="background-color:#f8fafc;padding:24px 32px;font-size:12px;color:#6b7280;text-align:center;line-height:1.5;">
                            <p style="margin-bottom:8px;">© 2024 Flonnect. All rights reserved.</p>
                            <p style="margin-bottom:8px;">You're receiving this because you signed up for Flonnect.</p>
                            <p style="margin:0;">
                                <a href="#" style="color:#2563eb;text-decoration:underline;">Unsubscribe</a> | 
                                <a href="#" style="color:#2563eb;text-decoration:underline;margin-left:4px;">Update Preferences</a>
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>`,
      TextPart: `Hi {{AdminFirstName}},

Curious how other teams are crushing it with Flonnect? We've compiled some inspiring success stories and proven strategies from our top-performing users.

Real results from real teams:
• "Reduced creative review time by 60%" - Marketing Agency
• "Caught 85% more bugs before launch" - SaaS Startup
• "Doubled team collaboration efficiency" - E-commerce Brand

Top strategies to steal:
• Weekly creative audits using screen recordings
• Async feedback loops with annotated screenshots
• Centralized project hubs for all team communications

Read Case Studies: [Link]

Ready to scale your own creative process? These strategies are game-changers.

Keep scaling,
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
                  <Badge variant="outline">Step 8</Badge>
                  <h1 className="text-2xl font-bold text-gray-900">Best Practices & Success Stories</h1>
                </div>
                <p className="text-gray-600 mt-1">Trigger: 14 days after Step 1 | Delay: 14 days after Step 1</p>
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
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="bg-white rounded-xl shadow-lg max-w-2xl mx-auto overflow-hidden" style={{ fontFamily: 'Arial, sans-serif' }}>
                    {/* Email Content */}
                    <div className="text-center border-b-2 border-gray-200 p-8">
                      <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold text-2xl">F</span>
                      </div>
                      <h1 className="text-3xl font-bold text-gray-900">Flonnect</h1>
                    </div>

                    <div id="email-content" className="p-8 space-y-6">
                      <p className="text-lg text-gray-900">Hi {'{{AdminFirstName}}'},</p>
                      
                      <p className="text-gray-700 leading-relaxed">
                        Curious how other teams are crushing it with Flonnect? We've compiled some inspiring success stories and proven strategies from our top-performing users.
                      </p>

                      <div>
                        <p className="text-lg font-semibold text-gray-900 mb-4">Real results from real teams:</p>
                        <div className="bg-cyan-50 p-4 rounded-lg">
                          <ul className="space-y-2 text-gray-800">
                            <li><strong>"Reduced creative review time by 60%"</strong> - Marketing Agency</li>
                            <li><strong>"Caught 85% more bugs before launch"</strong> - SaaS Startup</li>
                            <li><strong>"Doubled team collaboration efficiency"</strong> - E-commerce Brand</li>
                          </ul>
                        </div>
                      </div>

                      <div>
                        <p className="text-lg font-semibold text-gray-900 mb-4">Top strategies to steal:</p>
                        <ul className="space-y-2 text-gray-700 pl-4">
                          <li>• Weekly creative audits using screen recordings</li>
                          <li>• Async feedback loops with annotated screenshots</li>
                          <li>• Centralized project hubs for all team communications</li>
                        </ul>
                      </div>

                      {/* CTA Button */}
                      <div className="text-center py-6">
                        <div className="bg-green-600 text-white inline-block py-4 px-8 rounded-lg font-semibold text-lg">
                          📊 Read Case Studies
                        </div>
                      </div>

                      <p className="text-gray-700">
                        Ready to scale your own creative process? These strategies are game-changers.
                      </p>

                      <div className="pt-6 border-t border-gray-200">
                        <p className="text-gray-700">Keep scaling,<br />The Flonnect Team</p>
                      </div>
                    </div>

                    {/* Email Footer */}
                    <div className="bg-gray-50 px-8 py-6 text-xs text-gray-500 text-center leading-relaxed">
                      <p className="mb-2">© 2024 Flonnect. All rights reserved.</p>
                      <p className="mb-2">You're receiving this because you signed up for Flonnect.</p>
                      <p>
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
                  <p className="text-sm text-gray-800">14 days after Step 1</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Send Delay</p>
                  <p className="text-sm text-gray-800">14 days after Step 1</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Primary CTA</p>
                  <p className="text-sm text-gray-800">Read Case Studies</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Variables</p>
                  <div className="text-sm text-gray-800 space-y-1">
                    <p>{'{{AdminFirstName}}'}</p>
                    <p>{'{{AdminEmail}}'}</p>
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
                  <p className="text-sm text-gray-800 font-mono">flonnect-best-practices</p>
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
