import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Mail, Clock, Users, Calendar, Settings, MessageSquare, Zap, BarChart, MessageCircle, CheckSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const emailTemplates = [
  {
    id: 'welcome',
    step: 1,
    title: 'Welcome & Next Steps',
    trigger: 'Admin logs in first time',
    delay: 'Immediately',
    subject: 'Welcome to Flonnect! Let\'s get you set up 🚀',
    cta: 'Connect Calendar / Invite Your Team',
    icon: Mail,
    color: 'bg-blue-500'
  },
  {
    id: 'calendar-reminder',
    step: 2,
    title: 'Calendar Integration Reminder',
    trigger: 'No calendar connected',
    delay: '24h after Step 1',
    subject: 'Never Miss a Word—Auto-Record Your Meetings',
    cta: 'Connect Your Calendar',
    icon: Calendar,
    color: 'bg-green-500'
  },
  {
    id: 'first-project',
    step: 3,
    title: 'First Project Created',
    trigger: 'Admin creates first project',
    delay: 'Immediately after Step 2',
    subject: 'Awesome—Your First Project Is Live! 🎉',
    cta: 'Go to Project Dashboard',
    icon: Settings,
    color: 'bg-purple-500'
  },
  {
    id: 'invite-team',
    step: 4,
    title: 'Invite Your Team',
    trigger: 'No team invites sent',
    delay: '24h after Step 3',
    subject: 'Bring Your Team Onboard—Invite Members Today',
    cta: 'Invite Teammates',
    icon: Users,
    color: 'bg-orange-500'
  },
  {
    id: 'workspace-setup',
    step: 5,
    title: 'Workspace & Module Setup',
    trigger: 'Project exists but no workspace/module named',
    delay: '48h after Step 3',
    subject: 'Organize Your Project—Name Your Workspace & Module',
    cta: 'Set Workspace & Module',
    icon: Settings,
    color: 'bg-indigo-500'
  },
  {
    id: 'skip-reengagement',
    step: 6,
    title: 'Skip-Flow Re-Engagement',
    trigger: 'User clicks any "Skip" link',
    delay: 'Immediately on skip',
    subject: 'Need a Hand Getting Started?',
    cta: 'Chat with Support / Book a Demo',
    icon: MessageSquare,
    color: 'bg-red-500'
  },
  {
    id: 'extension-spotlight',
    step: 7,
    title: 'Extension & Integrations Spotlight',
    trigger: '7 days after Step 1',
    delay: '7 days after Step 1',
    subject: 'Capture & Annotate Ads in One Click—Install Our Extension',
    cta: 'Install Extension',
    icon: Zap,
    color: 'bg-yellow-500'
  },
  {
    id: 'best-practices',
    step: 8,
    title: 'Best Practices & Success Stories',
    trigger: '14 days after Step 1',
    delay: '14 days after Step 1',
    subject: 'See How Top Teams Use Flonnect to Scale Creatives 📈',
    cta: 'Read Case Studies',
    icon: BarChart,
    color: 'bg-teal-500'
  },
  {
    id: 'feedback-checkin',
    step: 9,
    title: 'Check-In & Feedback',
    trigger: '21 days after Step 1',
    delay: '21 days after Step 1',
    subject: 'How\'s It Going with Flonnect? We\'d Love Your Feedback',
    cta: 'Share Feedback',
    icon: MessageCircle,
    color: 'bg-pink-500'
  },
  {
    id: 'team-invitation',
    step: 'Team',
    title: 'Team Invitation',
    trigger: 'Admin invites team member',
    delay: 'Immediately',
    subject: 'You\'ve Been Invited to Join {{CompanyName}} on Flonnect!',
    cta: 'Login to Flonnect',
    icon: Users,
    color: 'bg-cyan-500'
  },
  {
    id: 'added-to-project',
    step: 'Project',
    title: 'Added to Project',
    trigger: 'User added to project',
    delay: 'Immediately',
    subject: 'You\'ve Been Added to Project "{{ProjectName}}"',
    cta: 'Go to Project',
    icon: Settings,
    color: 'bg-lime-500'
  },
  {
    id: 'task-assignment',
    step: 'Task',
    title: 'Task Assignment',
    trigger: 'Task assigned to user',
    delay: 'Immediately',
    subject: 'New Task Assigned to You: "{{TaskTitle}}"',
    cta: 'View Task in Flonnect',
    icon: CheckSquare,
    color: 'bg-amber-500'
  },
  {
    id: 'task-activity-update',
    step: 'Update',
    title: 'Task Activity Update',
    trigger: 'Task activity occurs',
    delay: 'Immediately',
    subject: 'Update on Task "[{{TaskTitle}}]" in {{ProjectName}}',
    cta: 'View the Task & Comments',
    icon: MessageSquare,
    color: 'bg-rose-500'
  },
  {
    id: 'task-completed',
    step: 'Done',
    title: 'Task Completed',
    trigger: 'Task marked as completed',
    delay: 'Immediately',
    subject: 'Task Completed: "{{TaskTitle}}"',
    cta: 'View Task',
    icon: CheckSquare,
    color: 'bg-emerald-500'
  },
  {
    id: 'invoice-generated',
    step: 'Payment',
    title: 'Invoice Generated',
    trigger: 'Invoice is generated',
    delay: 'Immediately',
    subject: 'Your Invoice is Ready - Payment Due in 2 Days',
    cta: 'Manage Payment / Login to Dashboard',
    icon: MessageSquare,
    color: 'bg-blue-600'
  },
  {
    id: 'invoice-past-due',
    step: 'Payment',
    title: 'Invoice Past Due',
    trigger: 'Invoice past due after 2 days',
    delay: '2 days after invoice generated',
    subject: 'Payment Overdue - Please Pay Now',
    cta: 'Manage Payment / Login to Dashboard',
    icon: MessageSquare,
    color: 'bg-orange-600'
  },
  {
    id: 'invoice-reminder',
    step: 'Payment',
    title: 'Invoice Reminder',
    trigger: 'Invoice reminder after 5 days',
    delay: '5 days after invoice generated',
    subject: 'Final Reminder - Payment Required',
    cta: 'Manage Payment / Login to Dashboard',
    icon: MessageSquare,
    color: 'bg-red-600'
  },
  {
    id: 'pay-to-continue',
    step: 'Payment',
    title: 'Pay to Continue',
    trigger: 'Pay to continue after 7 days',
    delay: '7 days after invoice generated',
    subject: 'Service Interruption Notice - Pay to Continue',
    cta: 'Manage Payment / Login to Dashboard',
    icon: MessageSquare,
    color: 'bg-red-700'
  },
  {
    id: 'account-suspended',
    step: 'Payment',
    title: 'Account Suspended',
    trigger: 'Account suspended for non-payment',
    delay: 'After payment deadline',
    subject: 'Account Suspended - Immediate Payment Required',
    cta: 'Manage Payment / Login to Dashboard',
    icon: MessageSquare,
    color: 'bg-red-900'
  }
];

export default function EmailSetupPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Email Campaign Setup</h1>
              <p className="text-gray-600 mt-2">Onboarding email cadence templates for AWS integration</p>
            </div>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              {emailTemplates.length} Email Templates
            </Badge>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {emailTemplates.map((template) => (
            <Card key={template.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className={`w-12 h-12 rounded-lg ${template.color} flex items-center justify-center text-white`}>
                    <template.icon className="w-6 h-6" />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    Step {template.step}
                  </Badge>
                </div>
                <CardTitle className="text-lg font-semibold text-gray-900 mt-3">
                  {template.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-600 font-medium">Trigger:</p>
                    <p className="text-sm text-gray-800">{template.trigger}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-medium">Delay:</p>
                    <p className="text-sm text-gray-800">{template.delay}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-medium">Subject:</p>
                    <p className="text-sm text-gray-800 line-clamp-2">{template.subject}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-medium">Primary CTA:</p>
                    <p className="text-sm text-gray-800">{template.cta}</p>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t">
                  <Link to={`/email-setup/${template.id}`}>
                    <Button className="w-full">
                      View Template
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
