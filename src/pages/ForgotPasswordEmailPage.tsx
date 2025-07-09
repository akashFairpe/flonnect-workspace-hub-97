import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MessageSquare, ArrowLeft, Copy, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ForgotPasswordEmailPage() {
  const [copied, setCopied] = useState(false);

  const emailTemplate = {
    TemplateName: "ForgotPassword",
    SubjectPart: "Reset Your Password - Flonnect",
    HtmlPart: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reset Your Password</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333333; margin: 0; padding: 0; background-color: #f4f4f4; }
        .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; }
        .header-table { width: 100%; border-bottom: 2px solid #2563eb; }
        .logo { font-size: 24px; font-weight: bold; color: #2563eb; text-align: center; padding: 20px 0 10px 0; }
        .header-title { color: #2563eb; margin: 10px 0 20px 0; text-align: center; font-size: 24px; }
        .content-table { width: 100%; padding: 0 20px; }
        .cta-button { background-color: #2563eb; color: #ffffff; padding: 12px 30px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block; }
        .footer-table { width: 100%; font-size: 12px; color: #666666; text-align: center; border-top: 1px solid #eeeeee; padding-top: 20px; margin-top: 30px; }
        .security-info { background-color: #f0f9ff; padding: 15px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #2563eb; }
        .expiry-notice { background-color: #fef3c7; padding: 10px; border-radius: 5px; margin: 15px 0; border-left: 4px solid #f59e0b; }
    </style>
</head>
<body>
    <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #f4f4f4; padding: 20px 0;">
        <tr>
            <td align="center">
                <table cellpadding="0" cellspacing="0" border="0" class="container" style="max-width: 600px; background-color: #ffffff; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
                    <tr>
                        <td>
                            <table cellpadding="0" cellspacing="0" border="0" class="header-table">
                                <tr>
                                    <td class="logo">Flonnect</td>
                                </tr>
                                <tr>
                                    <td class="header-title">Reset Your Password</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <table cellpadding="0" cellspacing="0" border="0" class="content-table" style="padding: 20px;">
                                <tr>
                                    <td style="padding-bottom: 15px;">
                                        <p>Hi {{UserName}},</p>
                                        
                                        <p>We received a request to reset the password for your Flonnect account associated with {{UserEmail}}.</p>
                                        
                                        <p>If you made this request, click the button below to reset your password:</p>
                                        
                                        <table cellpadding="0" cellspacing="0" border="0" style="margin: 20px 0;">
                                            <tr>
                                                <td align="center">
                                                    <a href="{{ResetPasswordUrl}}" class="cta-button" style="background-color: #2563eb; color: #ffffff; padding: 12px 30px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block;">Reset Password</a>
                                                </td>
                                            </tr>
                                        </table>
                                        
                                        <table cellpadding="0" cellspacing="0" border="0" class="expiry-notice" style="width: 100%; background-color: #fef3c7; padding: 10px; border-radius: 5px; margin: 15px 0; border-left: 4px solid #f59e0b;">
                                            <tr>
                                                <td>
                                                    <p style="margin: 0;"><b>⏰ Important:</b> This reset link will expire in <b>1 hour</b> for security reasons.</p>
                                                </td>
                                            </tr>
                                        </table>
                                        
                                        <table cellpadding="0" cellspacing="0" border="0" class="security-info" style="width: 100%; background-color: #f0f9ff; padding: 15px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #2563eb;">
                                            <tr>
                                                <td>
                                                    <h3 style="color: #2563eb; margin-top: 0;">Security Notice</h3>
                                                    <p style="margin-bottom: 0;">If you didn't request this password reset, please ignore this email. Your password will remain unchanged, and no action is required on your part.</p>
                                                </td>
                                            </tr>
                                        </table>
                                        
                                        <p>For your security, we recommend:</p>
                                        
                                        <p>
                                            &bull; Using a strong, unique password<br>
                                            &bull; Enabling two-factor authentication if available<br>
                                            &bull; Not sharing your login credentials with anyone
                                        </p>
                                        
                                        <p>If you're having trouble clicking the button above, copy and paste the following link into your browser:</p>
                                        <p style="word-break: break-all; color: #2563eb;">{{ResetPasswordUrl}}</p>
                                        
                                        <p>If you continue to have issues or didn't request this reset, please contact our support team immediately.</p>
                                        
                                        <p>Best regards,<br>
                                        The Flonnect Security Team</p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <table cellpadding="0" cellspacing="0" border="0" class="footer-table" style="width: 100%; padding: 20px;">
                                <tr>
                                    <td align="center">
                                        <p>&copy; 2024 Flonnect. All rights reserved.</p>
                                        <p>If you have any questions, contact us at <a href="mailto:security@flonnect.com">security@flonnect.com</a></p>
                                        <p>This is an automated security email. Please do not reply to this message.</p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>`,
    TextPart: `Reset Your Password - Flonnect

Hi {{UserName}},

We received a request to reset the password for your Flonnect account associated with {{UserEmail}}.

If you made this request, click the link below to reset your password:
{{ResetPasswordUrl}}

⏰ Important: This reset link will expire in 1 hour for security reasons.

Security Notice:
If you didn't request this password reset, please ignore this email. Your password will remain unchanged, and no action is required on your part.

For your security, we recommend:
&bull; Using a strong, unique password
&bull; Enabling two-factor authentication if available  
&bull; Not sharing your login credentials with anyone

If you continue to have issues or didn't request this reset, please contact our support team immediately at security@flonnect.com.

Best regards,
The Flonnect Security Team

© 2024 Flonnect. All rights reserved.
This is an automated security email. Please do not reply to this message.`
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(JSON.stringify(emailTemplate, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/email-setup">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Setup
                </Button>
              </Link>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center text-white">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">Forgot Password</h1>
                  <p className="text-gray-600 mt-1">Password reset email template</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Badge variant="secondary">Security</Badge>
              <Button onClick={copyToClipboard} className="flex items-center space-x-2">
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copied!' : 'Copy AWS SES Template JSON'}</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Email Preview */}
          <Card>
            <CardHeader>
              <CardTitle>Email Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <div 
                className="border rounded-lg p-4 bg-white max-h-96 overflow-y-auto"
                dangerouslySetInnerHTML={{ __html: emailTemplate.HtmlPart }}
              />
            </CardContent>
          </Card>

          {/* Template Details */}
          <Card>
            <CardHeader>
              <CardTitle>Template Configuration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Trigger</h3>
                <p className="text-gray-700">Password reset requested</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Timing</h3>
                <p className="text-gray-700">Immediately after reset request</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Subject Line</h3>
                <p className="text-gray-700">{emailTemplate.SubjectPart}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Primary CTA</h3>
                <p className="text-gray-700">Reset Password</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Template Variables</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• UserName</li>
                  <li>• UserEmail</li>
                  <li>• ResetPasswordUrl</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Security Features</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 1-hour expiration</li>
                  <li>• Clear security warnings</li>
                  <li>• Contact information for issues</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}