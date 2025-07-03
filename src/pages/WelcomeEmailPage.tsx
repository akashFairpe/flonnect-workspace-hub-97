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
        body { 
            font-family: Arial, sans-serif; 
            line-height: 1.6; 
            color: #333; 
            margin: 0; 
            padding: 0; 
            background-color: #f8fafc; 
        }
        .email-wrapper {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            box-sizing: border-box;
        }
        .email-container { 
            background-color: #ffffff; 
            border-radius: 12px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            margin: 0 auto;
        }
        .email-content {
            padding: 32px;
        }
        .header { 
            text-align: center;
            border-bottom: 2px solid #e5e7eb; 
            padding-bottom: 24px; 
            margin-bottom: 32px; 
        }
        .logo { 
            width: 64px; 
            height: 64px; 
            background-color: #2563eb; 
            border-radius: 12px; 
            display: inline-flex; 
            align-items: center; 
            justify-content: center; 
            margin-bottom: 16px; 
        }
        .logo span { 
            color: white; 
            font-weight: bold; 
            font-size: 24px; 
        }
        .company-title { 
            margin: 0; 
            font-size: 28px; 
            font-weight: bold; 
            color: #111827; 
            margin-bottom: 8px;
        }
        .company-subtitle { 
            margin: 0; 
            color: #6b7280; 
            font-size: 16px; 
        }
        .greeting { 
            font-size: 18px; 
            margin-bottom: 24px; 
            color: #111827;
        }
        .main-text { 
            font-size: 16px; 
            margin-bottom: 24px; 
            color: #374151; 
            line-height: 1.6;
        }
        .next-steps-title { 
            font-size: 18px; 
            font-weight: 600; 
            margin-bottom: 16px; 
            color: #111827;
        }
        .steps-list { 
            margin-bottom: 32px; 
            padding-left: 0;
            list-style: none;
        }
        .steps-list li { 
            margin-bottom: 12px; 
            padding-left: 24px;
            position: relative;
            font-size: 16px;
            color: #374151;
        }
        .steps-list li:before {
            content: "✓";
            position: absolute;
            left: 0;
            color: #10b981;
            font-weight: bold;
        }
        .cta-container { 
            text-align: center; 
            margin: 40px 0; 
        }
        .cta-buttons { 
            display: inline-block; 
        }
        .cta-button { 
            background: #2563eb; 
            color: white; 
            padding: 16px 24px; 
            border-radius: 8px; 
            text-decoration: none; 
            font-weight: 600; 
            display: inline-block; 
            text-align: center; 
            margin: 0 8px 12px 8px;
            min-width: 180px;
            font-size: 16px;
        }
        .cta-button.green { 
            background: #16a34a; 
        }
        .help-text { 
            font-size: 16px; 
            margin-bottom: 24px; 
            color: #374151; 
        }
        .help-text a { 
            color: #2563eb; 
            text-decoration: underline; 
        }
        .signature { 
            margin-top: 32px; 
            padding-top: 24px; 
            border-top: 1px solid #e5e7eb; 
            font-size: 16px; 
            color: #374151;
        }
        .footer { 
            background-color: #f8fafc;
            padding: 24px 32px; 
            font-size: 12px; 
            color: #6b7280; 
            text-align: center; 
            line-height: 1.5;
        }
        .footer p { 
            margin-bottom: 8px; 
        }
        .footer a { 
            color: #2563eb; 
            text-decoration: underline; 
        }
        
        @media screen and (max-width: 640px) {
            .email-wrapper { 
                padding: 16px !important; 
            }
            .email-content { 
                padding: 24px !important; 
            }
            .logo { 
                width: 56px !important; 
                height: 56px !important; 
            }
            .logo span { 
                font-size: 20px !important; 
            }
            .company-title { 
                font-size: 24px !important; 
            }
            .company-subtitle { 
                font-size: 14px !important; 
            }
            .greeting { 
                font-size: 16px !important; 
            }
            .main-text { 
                font-size: 15px !important; 
            }
            .next-steps-title { 
                font-size: 16px !important; 
            }
            .steps-list li { 
                font-size: 15px !important; 
            }
            .cta-buttons { 
                display: block !important; 
            }
            .cta-button { 
                display: block !important; 
                width: 100% !important; 
                margin: 0 0 12px 0 !important; 
                min-width: auto !important; 
                box-sizing: border-box !important;
            }
            .help-text { 
                font-size: 15px !important; 
            }
            .signature { 
                font-size: 15px !important; 
            }
            .footer { 
                padding: 20px 24px !important; 
            }
        }
    </style>
</head>
<body>
    <div class="email-wrapper">
        <div class="email-container">
            <div class="email-content">
                <div class="header">
                    <div class="logo">
                        <span>F</span>
                    </div>
                    <h1 class="company-title">Flonnect</h1>
                    <p class="company-subtitle">Screen Recording & Collaboration</p>
                </div>
                
                <p class="greeting">Hi {{AdminFirstName}},</p>
                
                <p class="main-text">Welcome aboard! We're excited to have {{CompanyName}} on Flonnect. You're just a couple clicks away from seamless meeting recordings, team collaboration, and project insights.</p>
                
                <p class="next-steps-title">Next steps:</p>
                <ul class="steps-list">
                    <li><strong>Connect Your Calendar</strong>—Auto-record meetings &amp; capture insights.</li>
                    <li><strong>Invite Your Team</strong>—So everyone can collaborate in one place.</li>
                </ul>
                
                <div class="cta-container">
                    <div class="cta-buttons">
                        <a href="#" class="cta-button">🔗 Connect Calendar</a>
                        <a href="#" class="cta-button green">🔗 Invite Your Team</a>
                    </div>
                </div>
                
                <p class="help-text">Need help? Just reply or visit our <a href="#">Getting Started Guide</a>.</p>
                
                <div class="signature">
                    <p>Cheers,<br>The Flonnect Team</p>
                </div>
            </div>
            
            <div class="footer">
                <p>© 2024 Flonnect. All rights reserved.</p>
                <p>You're receiving this because you signed up for Flonnect.</p>
                <p>
                    <a href="#">Unsubscribe</a> | 
                    <a href="#" style="margin-left: 4px;">Update Preferences</a>
                </p>
            </div>
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
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="bg-white rounded-xl shadow-lg max-w-2xl mx-auto overflow-hidden" style={{ fontFamily: 'Arial, sans-serif' }}>
                    {/* Email Content */}
                    <div className="p-8">
                      <div className="text-center border-b-2 border-gray-200 pb-6 mb-8">
                        <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <span className="text-white font-bold text-2xl">F</span>
                        </div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">Flonnect</h1>
                        <p className="text-gray-600">Screen Recording & Collaboration</p>
                      </div>

                      <div id="email-body-content" className="space-y-6">
                        <p className="text-lg text-gray-900">Hi {'{{AdminFirstName}}'},</p>
                        
                        <p className="text-gray-700 leading-relaxed">
                          Welcome aboard! We're excited to have {'{{CompanyName}}'} on Flonnect. You're just a couple clicks away from seamless meeting recordings, team collaboration, and project insights.
                        </p>

                        <div>
                          <p className="text-lg font-semibold text-gray-900 mb-4">Next steps:</p>
                          <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                              <span className="text-green-500 font-bold">✓</span>
                              <span className="text-gray-700"><strong>Connect Your Calendar</strong>—Auto-record meetings & capture insights.</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="text-green-500 font-bold">✓</span>
                              <span className="text-gray-700"><strong>Invite Your Team</strong>—So everyone can collaborate in one place.</span>
                            </li>
                          </ul>
                        </div>

                        {/* CTA Buttons */}
                        <div className="text-center py-8">
                          <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <div className="bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold text-center min-w-[180px]">
                              🔗 Connect Calendar
                            </div>
                            <div className="bg-green-600 text-white py-4 px-6 rounded-lg font-semibold text-center min-w-[180px]">
                              🔗 Invite Your Team
                            </div>
                          </div>
                        </div>

                        <p className="text-gray-700">
                          Need help? Just reply or visit our <span className="text-blue-600 underline">Getting Started Guide</span>.
                        </p>

                        <div className="pt-6 border-t border-gray-200">
                          <p className="text-gray-700">Cheers,<br />The Flonnect Team</p>
                        </div>
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
