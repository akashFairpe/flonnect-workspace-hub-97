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
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reset Your Password</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f4f4f4; }
        .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
        .header { text-align: center; border-bottom: 2px solid #2563eb; padding-bottom: 20px; margin-bottom: 20px; }
        .logo { font-size: 24px; font-weight: bold; color: #2563eb; }
        .content { margin-bottom: 30px; }
        .cta-button { display: inline-block; background-color: #2563eb; color: #ffffff; padding: 12px 30px; text-decoration: none; border-radius: 5px; font-weight: bold; margin: 20px 0; }
        .footer { font-size: 12px; color: #666; text-align: center; border-top: 1px solid #eee; padding-top: 20px; margin-top: 30px; }
        .security-info { background-color: #f0f9ff; padding: 15px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #2563eb; }
        .expiry-notice { background-color: #fef3c7; padding: 10px; border-radius: 5px; margin: 15px 0; border-left: 4px solid #f59e0b; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">Flonnect</div>
            <h1 style="color: #2563eb; margin: 10px 0;">Reset Your Password</h1>
        </div>
        
        <div class="content">
            <p>Hi {{\`UserName\`}},</p>
            
            <p>We received a request to reset the password for your Flonnect account associated with {{\`UserEmail\`}}.</p>
            
            <p>If you made this request, click the button below to reset your password:</p>
            
            <div style="text-align: center;">
                <a href="{{\`ResetPasswordUrl\`}}" class="cta-button">Reset Password</a>
            </div>
            
            <div class="expiry-notice">
                <p style="margin: 0;"><strong>⏰ Important:</strong> This reset link will expire in <strong>1 hour</strong> for security reasons.</p>
            </div>
            
            <div class="security-info">
                <h3 style="color: #2563eb; margin-top: 0;">Security Notice</h3>
                <p style="margin-bottom: 0;">If you didn't request this password reset, please ignore this email. Your password will remain unchanged, and no action is required on your part.</p>
            </div>
            
            <p>For your security, we recommend:</p>
            <ul>
                <li>Using a strong, unique password</li>
                <li>Enabling two-factor authentication if available</li>
                <li>Not sharing your login credentials with anyone</li>
            </ul>
            
            <p>If you're having trouble clicking the button above, copy and paste the following link into your browser:</p>
            <p style="word-break: break-all; color: #2563eb;">{{\`ResetPasswordUrl\`}}</p>
            
            <p>If you continue to have issues or didn't request this reset, please contact our support team immediately.</p>
            
            <p>Best regards,<br>
            The Flonnect Security Team</p>
        </div>
        
        <div class="footer">
            <p>© 2024 Flonnect. All rights reserved.</p>
            <p>If you have any questions, contact us at <a href="mailto:security@flonnect.com">security@flonnect.com</a></p>
            <p>This is an automated security email. Please do not reply to this message.</p>
        </div>
    </div>
</body>
</html>`,
    TextPart: `Reset Your Password - Flonnect

Hi {{\`UserName\`}},

We received a request to reset the password for your Flonnect account associated with {{\`UserEmail\`}}.

If you made this request, click the link below to reset your password:
{{\`ResetPasswordUrl\`}}

⏰ Important: This reset link will expire in 1 hour for security reasons.

Security Notice:
If you didn't request this password reset, please ignore this email. Your password will remain unchanged, and no action is required on your part.

For your security, we recommend:
- Using a strong, unique password
- Enabling two-factor authentication if available
- Not sharing your login credentials with anyone

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