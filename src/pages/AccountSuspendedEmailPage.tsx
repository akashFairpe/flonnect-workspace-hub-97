import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Mail, Copy, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

export default function AccountSuspendedEmailPage() {
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
      TemplateName: "flonnect-account-suspended",
      Subject: "Account Suspended - Immediate Payment Required",
      HtmlPart: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Account Suspended</title>
</head>
<body style="margin:0;padding:0;font-family:Arial,sans-serif;background-color:#f8fafc;">
    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f8fafc;">
        <tr>
            <td align="center" style="padding:20px 0;">
                <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:12px;box-shadow:0 4px 6px rgba(0,0,0,0.1);">
                    <tr>
                        <td align="center" style="padding:32px 32px 24px 32px;border-bottom:2px solid #fee2e2;background-color:#fee2e2;">
                            <table cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <td align="center">
                                        <table cellpadding="0" cellspacing="0" border="0">
                                            <tr>
                                                <td style="width:64px;height:64px;background-color:#7f1d1d;border-radius:12px;text-align:center;line-height:64px;">
                                                    <span style="color:#fff;font-weight:bold;font-size:24px;">🛡️</span>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center">
                                        <h1 style="margin:16px 0 0 0;font-size:28px;font-weight:bold;color:#450a0a;">Account Suspended</h1>
                                        <p style="margin:8px 0 0 0;color:#7f1d1d;font-size:16px;">Immediate Payment Required</p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding:32px;">
                            <p style="font-size:18px;margin-bottom:24px;color:#111827;">Hi {{CustomerName}},</p>
                            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#fee2e2;border:1px solid #fecaca;border-radius:8px;padding:16px;margin:24px 0;">
                                <tr>
                                    <td>
                                        <p style="font-size:16px;font-weight:600;color:#450a0a;margin:0 0 12px 0;">🛡️ Account Suspended</p>
                                        <p style="font-size:14px;font-weight:600;margin:4px 0;color:#450a0a;">Your account has been suspended due to non-payment of invoice #{{InvoiceNumber}}.</p>
                                    </td>
                                </tr>
                            </table>
                            <p style="font-size:16px;margin-bottom:24px;color:#374151;line-height:1.6;">We've suspended your account because payment of <b>${{InvoiceAmount}}</b> for {{ServiceName}} remains outstanding despite multiple reminders.</p>
                            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#fef2f2;border:1px solid #fecaca;border-radius:8px;padding:16px;margin:24px 0;">
                                <tr>
                                    <td>
                                        <h4 style="font-weight:600;color:#450a0a;margin:0 0 12px 0;">Account Status:</h4>
                                        <ul style="color:#7f1d1d;font-size:14px;margin:0;padding-left:20px;">
                                            <li style="margin-bottom:4px;">All services are currently suspended</li>
                                            <li style="margin-bottom:4px;">Access to your dashboard is restricted</li>
                                            <li style="margin-bottom:4px;">Data retention: 30 days from suspension date</li>
                                            <li style="margin-bottom:4px;">Immediate payment required for reactivation</li>
                                        </ul>
                                    </td>
                                </tr>
                            </table>
                            <p style="font-size:16px;margin-bottom:24px;color:#374151;"><b>To reactivate your account:</b> Complete the outstanding payment immediately. Your account will be restored within 1 hour of successful payment.</p>
                            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#fef3c7;border:1px solid #fcd34d;border-radius:8px;padding:12px;margin:24px 0;">
                                <tr>
                                    <td>
                                        <p style="font-size:14px;font-weight:600;color:#d97706;margin:0;">⚠️ Account data will be permanently deleted after 30 days of suspension.</p>
                                    </td>
                                </tr>
                            </table>
                            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:40px 0;">
                                <tr>
                                    <td align="center">
                                        <table cellpadding="0" cellspacing="0" border="0">
                                            <tr>
                                                <td style="padding:0 8px 12px;">
                                                    <a href="#" style="display:inline-block;background-color:#7f1d1d;color:#fff;padding:16px 24px;border-radius:8px;text-decoration:none;font-weight:600;font-size:16px;min-width:180px;text-align:center;">💳 Pay Now to Reactivate</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="padding:0 8px 12px;">
                                                    <a href="#" style="display:inline-block;background-color:transparent;color:#7f1d1d;border:1px solid #7f1d1d;padding:16px 24px;border-radius:8px;text-decoration:none;font-weight:600;font-size:16px;min-width:180px;text-align:center;">📞 Contact Support</a>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                            <table cellpadding="0" cellspacing="0" border="0" style="margin-top:32px;padding-top:24px;border-top:1px solid #e5e7eb;">
                                <tr>
                                    <td>
                                        <p style="font-size:12px;color:#6b7280;margin:0;">For immediate assistance with payment or account reactivation, contact our support team.</p>
                                        <p style="font-size:12px;color:#6b7280;margin:4px 0 0 0;">This is an automated message from Flonnect.</p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td style="background-color:#f8fafc;padding:24px 32px;font-size:12px;color:#6b7280;text-align:center;line-height:1.5;">
                            <p style="margin-bottom:8px;">© 2024 Flonnect. All rights reserved.</p>
                            <p style="margin-bottom:8px;">You're receiving this billing notification from Flonnect.</p>
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
      TextPart: `Hi {{CustomerName}},

Account Suspended
Your account has been suspended due to non-payment of invoice #{{InvoiceNumber}}.

We've suspended your account because payment of ${{InvoiceAmount}} for {{ServiceName}} remains outstanding despite multiple reminders.

Account Status:
• All services are currently suspended
• Access to your dashboard is restricted
• Data retention: 30 days from suspension date
• Immediate payment required for reactivation

To reactivate your account: Complete the outstanding payment immediately. Your account will be restored within 1 hour of successful payment.

⚠️ Account data will be permanently deleted after 30 days of suspension.

Pay Now to Reactivate: [Link]
Contact Support: [Link]

For immediate assistance with payment or account reactivation, contact our support team.

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
                  <Badge variant="outline">Payment</Badge>
                  <h1 className="text-2xl font-bold text-gray-900">Account Suspended</h1>
                </div>
                <p className="text-gray-600 mt-1">Trigger: Account suspended for non-payment | Delay: After payment deadline</p>
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
                    <div className="text-center border-b-2 border-red-200 bg-red-100 p-8">
                      <div className="w-16 h-16 bg-red-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <span className="text-white text-2xl">🛡️</span>
                      </div>
                      <h1 className="text-3xl font-bold text-red-900">Account Suspended</h1>
                      <p className="text-red-700 mt-2">Immediate Payment Required</p>
                    </div>

                    <div id="email-body-content" className="p-8 space-y-6">
                      <p className="text-lg text-gray-900">Hi {"{{CustomerName}}"},</p>
                      
                      <div className="bg-red-100 border border-red-300 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-semibold text-red-900">🛡️ Account Suspended</span>
                        </div>
                        <p className="text-red-800 text-sm font-medium">
                          Your account has been suspended due to non-payment of invoice #{"{{InvoiceNumber}}"}.
                        </p>
                      </div>

                      <p className="text-gray-700 leading-relaxed">
                        We've suspended your account because payment of <strong>${"{{InvoiceAmount}}"}</strong> 
                        for {"{{ServiceName}}"} remains outstanding despite multiple reminders.
                      </p>

                      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <h4 className="font-semibold text-red-900 mb-2">Account Status:</h4>
                        <ul className="text-red-800 text-sm space-y-1">
                          <li>• All services are currently suspended</li>
                          <li>• Access to your dashboard is restricted</li>
                          <li>• Data retention: 30 days from suspension date</li>
                          <li>• Immediate payment required for reactivation</li>
                        </ul>
                      </div>

                      <p className="text-gray-700">
                        <strong>To reactivate your account:</strong> Complete the outstanding payment immediately. 
                        Your account will be restored within 1 hour of successful payment.
                      </p>

                      <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-3">
                        <p className="text-yellow-800 text-sm font-medium">
                          ⚠️ Account data will be permanently deleted after 30 days of suspension.
                        </p>
                      </div>

                      {/* CTA Buttons */}
                      <div className="text-center py-8">
                        <div className="flex flex-col gap-3 justify-center">
                          <div className="bg-red-900 text-white py-4 px-6 rounded-lg font-semibold text-center">
                            💳 Pay Now to Reactivate
                          </div>
                          <div className="border border-red-900 text-red-900 py-4 px-6 rounded-lg font-semibold text-center">
                            📞 Contact Support
                          </div>
                        </div>
                      </div>

                      <div className="pt-6 border-t border-gray-200 text-xs text-gray-500">
                        <p>For immediate assistance with payment or account reactivation, contact our support team.</p>
                        <p className="mt-1">This is an automated message from Flonnect.</p>
                      </div>
                    </div>

                    {/* Email Footer */}
                    <div className="bg-gray-50 px-8 py-6 text-xs text-gray-500 text-center leading-relaxed">
                      <p className="mb-2">© 2024 Flonnect. All rights reserved.</p>
                      <p className="mb-2">You're receiving this billing notification from Flonnect.</p>
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
                  <p className="text-sm text-gray-800">Account suspended for non-payment</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Send Delay</p>
                  <p className="text-sm text-gray-800">After payment deadline</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Primary CTA</p>
                  <p className="text-sm text-gray-800">Pay Now to Reactivate / Contact Support</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Variables</p>
                  <div className="text-sm text-gray-800 space-y-1">
                    <p>{"{{CustomerName}}"}</p>
                    <p>{"{{ServiceName}}"}</p>
                    <p>{"{{InvoiceNumber}}"}</p>
                    <p>{"{{InvoiceAmount}}"}</p>
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
                  <p className="text-sm text-gray-800 font-mono">flonnect-account-suspended</p>
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