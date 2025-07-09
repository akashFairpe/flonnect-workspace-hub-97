import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, CreditCard, LogIn, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function InvoiceGeneratedEmailPage() {
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
              <h1 className="text-2xl font-bold text-gray-900">Invoice Generated Email</h1>
              <p className="text-gray-600">Payment due in 2 days notification</p>
            </div>
            <Badge variant="secondary" className="ml-auto">Payment</Badge>
          </div>
        </div>
      </div>

      {/* Email Preview */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="max-w-2xl mx-auto">
          <CardHeader className="text-center border-b bg-blue-50">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CreditCard className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-xl">Your Invoice is Ready</CardTitle>
            <p className="text-gray-600">Payment Due in 2 Days</p>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <p className="text-gray-700">Hi {"{"}{"{"} CustomerName {"}"}{"}"}, </p>
              
              <p className="text-gray-700">
                Your invoice for {"{"}{"{"} ServiceName {"}"}{"}"}  is now ready and available for payment.
              </p>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4 text-blue-600" />
                  <span className="font-semibold text-blue-800">Payment Details</span>
                </div>
                <div className="space-y-1 text-sm">
                  <p><span className="font-medium">Invoice #:</span> {"{"}{"{"} InvoiceNumber {"}"}{"}"}  </p>
                  <p><span className="font-medium">Amount:</span> ${"{"}{"{"} InvoiceAmount {"}"}{"}"}  </p>
                  <p><span className="font-medium">Due Date:</span> {"{"}{"{"} DueDate {"}"}{"}"}  </p>
                </div>
              </div>
              
              <p className="text-gray-700">
                Please complete your payment within 2 days to avoid any service interruption.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                  <CreditCard className="w-4 h-4 mr-2" />
                  Manage Payment
                </Button>
                <Button variant="outline" className="flex-1">
                  <LogIn className="w-4 h-4 mr-2" />
                  Login to Dashboard
                </Button>
              </div>
              
              <div className="text-xs text-gray-500 pt-4 border-t">
                <p>If you have any questions, please contact our support team.</p>
                <p>This is an automated message from Flonnect.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}