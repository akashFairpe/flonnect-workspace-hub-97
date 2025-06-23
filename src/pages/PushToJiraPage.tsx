
import React from 'react';
import { FeaturePageTemplate } from '@/components/FeaturePageTemplate';
import { Link, Database, FileText, Paperclip, Settings, Zap } from 'lucide-react';

const features = [
  {
    title: 'Direct Jira Integration',
    description: 'Connect Flonnect directly to your Jira Cloud or Server instances',
    icon: Link
  },
  {
    title: 'Automated Issue Creation',
    description: 'Create new Jira issues directly from your recorded content',
    icon: Database
  },
  {
    title: 'Populate Fields',
    description: 'Automatically populate Jira fields (Summary, Description, Type, Priority) with context',
    icon: FileText
  },
  {
    title: 'Attach Media',
    description: 'Videos and screenshots are automatically attached to the Jira issue',
    icon: Paperclip
  },
  {
    title: 'Link Existing Issues',
    description: 'Option to attach media to existing Jira tickets',
    icon: Settings
  },
  {
    title: 'Streamlined Workflow',
    description: 'One-click push from recording to Jira issue',
    icon: Zap
  }
];

const benefits = [
  'Streamlines the bug reporting and issue creation workflow for development teams',
  'Ensures all necessary visual and contextual information is immediately available in Jira',
  'Reduces manual data entry and minimizes the chance of errors',
  'Accelerates the development cycle by providing clear, actionable Jira tickets',
  'Enhances collaboration by centralizing all bug-related information in one place',
  'Automated workflow integration',
  'Comprehensive issue documentation',
  'Seamless development team collaboration'
];

const faqs = [
  {
    question: 'Is Flonnect compatible with both Jira Cloud and Jira Server/Data Center?',
    answer: 'Yes, Flonnect offers robust integration with both Jira Cloud and self-hosted Jira Server/Data Center instances.'
  },
  {
    question: 'Can I pre-configure default Jira project or issue types for bug reports?',
    answer: 'Yes, you can often set up default project and issue type configurations in Flonnect for faster and more consistent Jira issue creation.'
  },
  {
    question: 'Will the attached videos and screenshots be viewable directly within Jira?',
    answer: 'Videos and screenshots are attached as standard Jira attachments and are viewable directly within the Jira issue or by clicking on the link to open in Flonnect.'
  },
  {
    question: 'Does Flonnect support custom fields in Jira when pushing issues?',
    answer: 'Flonnect strives to support common Jira fields and often allows mapping to custom fields. Please check our integration documentation for specifics.'
  },
  {
    question: 'Can I push multiple videos/screenshots to a single Jira issue?',
    answer: 'Yes, you can attach multiple recorded videos or annotated screenshots to a single Jira issue, providing comprehensive context.'
  }
];

export default function PushToJiraPage() {
  return (
    <FeaturePageTemplate
      title="Push to Jira"
      description="Seamlessly push your video recordings, screenshots, and detailed bug reports directly into your Jira projects."
      heroIcon={Link}
      features={features}
      benefits={benefits}
      faqs={faqs}
      ctaText="Start Jira Integration"
      seoKeywords="Jira integration, bug reporting, issue tracking, development workflow, project management, team collaboration"
      metaDescription="Direct Jira integration for pushing video recordings and screenshots to issue tickets. Streamline bug reporting and development workflows with automated issue creation."
    />
  );
}
