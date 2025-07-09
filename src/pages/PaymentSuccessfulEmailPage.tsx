import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckSquare, ArrowLeft, Copy, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PaymentSuccessfulEmailPage() {
  const [copied, setCopied] = useState(false);

  const emailTemplate = {
    TemplateName: "PaymentSuccessful",
    SubjectPart: "Payment Received - Thank You!",
    HtmlPart: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Payment Successful</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333333; margin: 0; padding: 0; background-color: #f4f4f4; }
        .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; }
        .header-table { width: 100%; border-bottom: 2px solid #4CAF50; }
        .logo { font-size: 24px; font-weight: bold; color: #4CAF50; text-align: center; padding: 20px 0 10px 0; }
        .header-title { color: #4CAF50; margin: 10px 0 20px 0; text-align: center; font-size: 24px; }
        .content-table { width: 100%; padding: 0 20px; }
        .cta-button { background-color: #4CAF50; color: #ffffff; padding: 12px 30px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block; }
        .footer-table { width: 100%; font-size: 12px; color: #666666; text-align: center; border-top: 1px solid #eeeeee; padding-top: 20px; margin-top: 30px; }
        .payment-details { background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0; }
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
                                    <td class="header-title">Payment Received!</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <table cellpadding="0" cellspacing="0" border="0" class="content-table" style="padding: 20px;">
                                <tr>
                                    <td style="padding-bottom: 15px;">
                                        <p>Hi {{CompanyName}},</p>
                                        <p>Great news! We've successfully received your payment. Your account is now fully active and all services have been restored.</p>
                                        
                                        <table cellpadding="0" cellspacing="0" border="0" class="payment-details" style="width: 100%; background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
                                            <tr>
                                                <td>
                                                    <h3 style="color: #4CAF50; margin-top: 0;">Payment Details:</h3>
                                                    <p><b>Amount:</b> {{InvoiceAmount}}</p>
                                                    <p><b>Invoice ID:</b> {{InvoiceId}}</p>
                                                    <p><b>Payment Date:</b> {{PaymentDate}}</p>
                                                    <p><b>Payment Method:</b> {{PaymentMethod}}</p>
                                                </td>
                                            </tr>
                                        </table>
                                        
                                        <p>You can now continue using all Flonnect features without any interruptions. Access your dashboard to:</p>
                                        
                                        <p>
                                            &bull; View your updated account status<br>
                                            &bull; Download your receipt<br>
                                            &bull; Manage your projects and recordings<br>
                                            &bull; Access all premium features
                                        </p>
                                        
                                        <table cellpadding="0" cellspacing="0" border="0" style="margin: 20px 0;">
                                            <tr>
                                                <td align="center">
                                                    <a href="{{DashboardUrl}}" class="cta-button" style="background-color: #4CAF50; color: #ffffff; padding: 12px 30px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block;">Login to Dashboard</a>
                                                </td>
                                            </tr>
                                        </table>
                                        
                                        <p>Thank you for being a valued Flonnect customer. If you have any questions about your payment or need assistance, please don't hesitate to contact our support team.</p>
                                        
                                        <p>Best regards,<br>
                                        The Flonnect Team</p>
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
                                        <p>If you have any questions, contact us at <a href="mailto:support@flonnect.com">support@flonnect.com</a></p>
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
    TextPart: `Payment Received - Thank You!

Hi {{CompanyName}},

Great news! We've successfully received your payment. Your account is now fully active and all services have been restored.

Payment Details:
- Amount: {{InvoiceAmount}}
- Invoice ID: {{InvoiceId}}
- Payment Date: {{PaymentDate}}
- Payment Method: {{PaymentMethod}}

You can now continue using all Flonnect features without any interruptions. Access your dashboard to view your updated account status, download your receipt, manage your projects and recordings, and access all premium features.

&bull; View your updated account status
&bull; Download your receipt  
&bull; Manage your projects and recordings
&bull; Access all premium features

Login to Dashboard: {{DashboardUrl}}

Thank you for being a valued Flonnect customer. If you have any questions about your payment or need assistance, please don't hesitate to contact our support team.

Best regards,
The Flonnect Team

© 2024 Flonnect. All rights reserved.
If you have any questions, contact us at support@flonnect.com`
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
                <div className="w-12 h-12 rounded-lg bg-green-600 flex items-center justify-center text-white">
                  <CheckSquare className="w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">Payment Successful</h1>
                  <p className="text-gray-600 mt-1">Confirmation email template</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Badge variant="secondary">Payment</Badge>
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
                <p className="text-gray-700">Payment completed successfully</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Timing</h3>
                <p className="text-gray-700">Immediately after payment confirmation</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Subject Line</h3>
                <p className="text-gray-700">{emailTemplate.SubjectPart}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Primary CTA</h3>
                <p className="text-gray-700">Login to Dashboard</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Template Variables</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• CompanyName</li>
                  <li>• InvoiceAmount</li>
                  <li>• InvoiceId</li>
                  <li>• PaymentDate</li>
                  <li>• PaymentMethod</li>
                  <li>• DashboardUrl</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}