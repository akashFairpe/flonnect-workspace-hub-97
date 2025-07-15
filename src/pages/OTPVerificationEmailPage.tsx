import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Mail, Shield, Copy, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

export default function OTPVerificationEmailPage() {
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
      TemplateName: "flonnect-otp-verification",
      Subject: "Your Verification Code - Flonnect",
      HtmlPart: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Your Verification Code - Flonnect</title>
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
                            <p style="font-size:18px;margin-bottom:24px;color:#111827;">Hi {{UserFirstName}},</p>
                            <p style="font-size:16px;margin-bottom:24px;color:#374151;line-height:1.6;">We received a request to verify your email address for your Flonnect account. Please use the verification code below to complete the process.</p>
                            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:32px 0;">
                                <tr>
                                    <td align="center">
                                        <table cellpadding="0" cellspacing="0" border="0" style="background-color:#f8fafc;border:2px dashed #e5e7eb;border-radius:8px;padding:24px;">
                                            <tr>
                                                <td align="center">
                                                    <p style="font-size:14px;color:#6b7280;margin:0 0 8px 0;text-transform:uppercase;letter-spacing:1px;">Verification Code</p>
                                                    <p style="font-size:32px;font-weight:bold;color:#111827;margin:0;letter-spacing:8px;font-family:monospace;">{{OTPCode}}</p>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                            <p style="font-size:16px;margin-bottom:16px;color:#374151;">This code will expire in <b>10 minutes</b> for security purposes.</p>
                            <p style="font-size:16px;margin-bottom:24px;color:#374151;">If you didn't request this verification, please ignore this email or contact our support team if you have concerns.</p>
                            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#fef3c7;padding:16px;border-radius:8px;margin:24px 0;">
                                <tr>
                                    <td>
                                        <p style="font-size:14px;color:#92400e;margin:0;text-align:center;"><b>🔒 Security tip:</b> Never share this code with anyone. Flonnect will never ask for your verification code.</p>
                                    </td>
                                </tr>
                            </table>
                            <table cellpadding="0" cellspacing="0" border="0" style="margin-top:32px;padding-top:24px;border-top:1px solid #e5e7eb;">
                                <tr>
                                    <td>
                                        <p style="font-size:16px;color:#374151;">Best regards,<br>The Flonnect Team</p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td style="background-color:#f8fafc;padding:24px 32px;font-size:12px;color:#6b7280;text-align:center;line-height:1.5;">
                            <p style="margin-bottom:8px;">© 2024 Flonnect. All rights reserved.</p>
                            <p style="margin-bottom:8px;">This is an automated security email.</p>
                            <p style="margin:0;">
                                <a href="#" style="color:#2563eb;text-decoration:underline;">Contact Support</a> | 
                                <a href="#" style="color:#2563eb;text-decoration:underline;margin-left:4px;">Privacy Policy</a>
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>`,
      TextPart: `Hi {{UserFirstName}},

We received a request to verify your email address for your Flonnect account. Please use the verification code below to complete the process.

Verification Code: {{OTPCode}}

This code will expire in 10 minutes for security purposes.

If you didn't request this verification, please ignore this email or contact our support team if you have concerns.

🔒 Security tip: Never share this code with anyone. Flonnect will never ask for your verification code.

Best regards,
The Flonnect Team

© 2024 Flonnect. All rights reserved.
Contact Support: [Link] | Privacy Policy: [Link]`
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
                  <Badge variant="outline">Security</Badge>
                  <h1 className="text-2xl font-bold text-gray-900">OTP Verification Code</h1>
                </div>
                <p className="text-gray-600 mt-1">Trigger: Email verification requested | Delay: Immediately</p>
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
                    <div className="text-center border-b-2 border-gray-200 p-8">
                      <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold text-2xl">F</span>
                      </div>
                      <h1 className="text-3xl font-bold text-gray-900">Flonnect</h1>
                    </div>

                    <div id="email-body-content" className="p-8 space-y-6">
                      <p className="text-lg text-gray-900">Hi {'{{UserFirstName}}'},</p>
                      
                      <p className="text-gray-700 leading-relaxed">
                        We received a request to verify your email address for your Flonnect account. Please use the verification code below to complete the process.
                      </p>

                      {/* OTP Code Display */}
                      <div className="text-center py-8">
                        <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-6 max-w-sm mx-auto">
                          <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Verification Code</p>
                          <p className="text-3xl font-bold text-gray-900 tracking-widest font-mono">{'{{OTPCode}}'}</p>
                        </div>
                      </div>

                      <p className="text-gray-700">
                        This code will expire in <strong>10 minutes</strong> for security purposes.
                      </p>

                      <p className="text-gray-700">
                        If you didn't request this verification, please ignore this email or contact our support team if you have concerns.
                      </p>

                      <div className="bg-yellow-50 p-4 rounded-lg text-center">
                        <p className="text-yellow-800 text-sm">
                          <strong>🔒 Security tip:</strong> Never share this code with anyone. Flonnect will never ask for your verification code.
                        </p>
                      </div>

                      <div className="pt-6 border-t border-gray-200">
                        <p className="text-gray-700">Best regards,<br />The Flonnect Team</p>
                      </div>
                    </div>

                    {/* Email Footer */}
                    <div className="bg-gray-50 px-8 py-6 text-xs text-gray-500 text-center leading-relaxed">
                      <p className="mb-2">© 2024 Flonnect. All rights reserved.</p>
                      <p className="mb-2">This is an automated security email.</p>
                      <p>
                        <span className="text-blue-600 underline cursor-pointer">Contact Support</span> | 
                        <span className="text-blue-600 underline cursor-pointer ml-1">Privacy Policy</span>
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
                  <p className="text-sm text-gray-800">Email verification requested</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Send Delay</p>
                  <p className="text-sm text-gray-800">Immediately</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Expiration</p>
                  <p className="text-sm text-gray-800">10 minutes</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Variables</p>
                  <div className="text-sm text-gray-800 space-y-1">
                    <p>{'{{UserFirstName}}'}</p>
                    <p>{'{{UserEmail}}'}</p>
                    <p>{'{{OTPCode}}'}</p>
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
                  <p className="text-sm text-gray-800 font-mono">flonnect-otp-verification</p>
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

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Security Features
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-gray-600">
                <p>✓ 10-minute expiration</p>
                <p>✓ Single-use verification</p>
                <p>✓ Rate limiting protection</p>
                <p>✓ Secure code generation</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}