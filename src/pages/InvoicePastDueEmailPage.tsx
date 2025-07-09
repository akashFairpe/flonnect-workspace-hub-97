import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, CreditCard, LogIn, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function InvoicePastDueEmailPage() {
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
              <h1 className="text-2xl font-bold text-gray-900">Invoice Past Due Email</h1>
              <p className="text-gray-600">Overdue payment notification after 2 days</p>
            </div>
            <Badge variant="secondary" className="ml-auto">Payment</Badge>
          </div>
        </div>
      </div>

      {/* Email Preview */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="max-w-2xl mx-auto">
          <CardHeader className="text-center border-b bg-orange-50">
            <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-xl text-orange-800">Payment Overdue</CardTitle>
            <p className="text-orange-600">Immediate Action Required</p>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <p className="text-gray-700">Hi {"{"}{"{"} CustomerName {"}"}{"}"},</p>
              
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-4 h-4 text-orange-600" />
                  <span className="font-semibold text-orange-800">Payment Past Due</span>
                </div>
                <p className="text-orange-700 text-sm">
                  Your payment for invoice #{"{"}{"{"} InvoiceNumber {"}"}{"}"}  is now overdue.
                </p>
              </div>
              
              <p className="text-gray-700">
                We haven't received your payment of <strong>${"{"}{"{"} InvoiceAmount {"}"}{"}"}  </strong> for {"{"}{"{"} ServiceName {"}"}{"}"}  
                which was due on {"{"}{"{"} DueDate {"}"}{"}"}  .
              </p>
              
              <p className="text-gray-700">
                Please complete your payment immediately to avoid service interruption. 
                If you've already paid, please allow time for processing.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button className="flex-1 bg-orange-600 hover:bg-orange-700">
                  <CreditCard className="w-4 h-4 mr-2" />
                  Pay Now
                </Button>
                <Button variant="outline" className="flex-1">
                  <LogIn className="w-4 h-4 mr-2" />
                  Login to Dashboard
                </Button>
              </div>
              
              <div className="text-xs text-gray-500 pt-4 border-t">
                <p>If you have any questions or need assistance, please contact our support team immediately.</p>
                <p>This is an automated message from Flonnect.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}