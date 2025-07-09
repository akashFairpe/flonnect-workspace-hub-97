import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, CreditCard, LogIn, ShieldX } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AccountSuspendedEmailPage() {
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
              <h1 className="text-2xl font-bold text-gray-900">Account Suspended Email</h1>
              <p className="text-gray-600">Account suspension notification</p>
            </div>
            <Badge variant="secondary" className="ml-auto">Payment</Badge>
          </div>
        </div>
      </div>

      {/* Email Preview */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="max-w-2xl mx-auto">
          <CardHeader className="text-center border-b bg-red-100">
            <div className="w-16 h-16 bg-red-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShieldX className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-xl text-red-900">Account Suspended</CardTitle>
            <p className="text-red-700">Immediate Payment Required</p>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <p className="text-gray-700">Hi {"{"}{"{"} CustomerName {"}"}{"}"},</p>
              
              <div className="bg-red-100 border border-red-300 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldX className="w-4 h-4 text-red-700" />
                  <span className="font-semibold text-red-900">Account Suspended</span>
                </div>
                <p className="text-red-800 text-sm font-medium">
                  Your account has been suspended due to non-payment of invoice #{"{"}{"{"} InvoiceNumber {"}"}{"}"}  .
                </p>
              </div>
              
              <p className="text-gray-700">
                We've suspended your account because payment of <strong>${"{"}{"{"} InvoiceAmount {"}"}{"}"}  </strong> 
                for {"{"}{"{"} ServiceName {"}"}{"}"}   remains outstanding despite multiple reminders.
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
              
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button className="flex-1 bg-red-900 hover:bg-red-950">
                  <CreditCard className="w-4 h-4 mr-2" />
                  Pay Now to Reactivate
                </Button>
                <Button variant="outline" className="flex-1">
                  <LogIn className="w-4 h-4 mr-2" />
                  Contact Support
                </Button>
              </div>
              
              <div className="text-xs text-gray-500 pt-4 border-t">
                <p>For immediate assistance with payment or account reactivation, contact our support team.</p>
                <p>This is an automated message from Flonnect.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}