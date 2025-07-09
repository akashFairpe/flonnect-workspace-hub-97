import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, CreditCard, LogIn, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function InvoiceReminderEmailPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4">
            <Link to="/email-setup">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Email Setup
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Invoice Reminder Email</h1>
              <p className="text-gray-600">Final reminder after 5 days</p>
            </div>
            <Badge variant="secondary" className="ml-auto">Payment</Badge>
          </div>
        </div>
      </div>

      {/* Email Preview */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="max-w-2xl mx-auto">
          <CardHeader className="text-center border-b bg-red-50">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertCircle className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-xl text-red-800">Final Reminder</CardTitle>
            <p className="text-red-600">Payment Required</p>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <p className="text-gray-700">Hi {"{"}{"{"} CustomerName {"}"}{"}"},</p>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle className="w-4 h-4 text-red-600" />
                  <span className="font-semibold text-red-800">Final Notice</span>
                </div>
                <p className="text-red-700 text-sm">
                  This is your final reminder for invoice #{"{"}{"{"} InvoiceNumber {"}"}{"}"}  .
                </p>
              </div>
              
              <p className="text-gray-700">
                Your payment of <strong>${"{"}{"{"} InvoiceAmount {"}"}{"}"}  </strong> for {"{"}{"{"} ServiceName {"}"}{"}"}  
                remains unpaid and is now 5 days overdue.
              </p>
              
              <p className="text-gray-700">
                <strong>Action Required:</strong> Please pay immediately to avoid service suspension. 
                Failure to pay within 2 days may result in account suspension.
              </p>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                <p className="text-yellow-800 text-sm font-medium">
                  ⚠️ Your service may be suspended if payment is not received within 48 hours.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button className="flex-1 bg-red-600 hover:bg-red-700">
                  <CreditCard className="w-4 h-4 mr-2" />
                  Pay Immediately
                </Button>
                <Button variant="outline" className="flex-1">
                  <LogIn className="w-4 h-4 mr-2" />
                  Login to Dashboard
                </Button>
              </div>
              
              <div className="text-xs text-gray-500 pt-4 border-t">
                <p>If you're experiencing payment issues, please contact our support team urgently.</p>
                <p>This is an automated message from Flonnect.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}