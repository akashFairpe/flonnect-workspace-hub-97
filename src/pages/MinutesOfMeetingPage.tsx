
import React from 'react';
import { FeaturePageTemplate } from '@/components/FeaturePageTemplate';
import { FileText, Clock, Users, Download, Edit, Search } from 'lucide-react';

const features = [
  {
    title: 'AI-Powered Summarization',
    description: 'Automatically distills key discussion points, decisions, and action items from your recordings',
    icon: FileText
  },
  {
    title: 'Customizable Templates',
    description: 'Generate MoM using pre-defined or custom templates to match your organizational needs',
    icon: Edit
  },
  {
    title: 'Timestamped Notes',
    description: 'Link specific notes and decisions directly to the relevant moments in the recording',
    icon: Clock
  },
  {
    title: 'Collaborative Editing',
    description: 'Easily edit and refine the Minutes of Meeting with your team before finalization',
    icon: Users
  },
  {
    title: 'Exportable Formats',
    description: 'Export MoM in various formats like PDF, Word, or plain text for easy distribution',
    icon: Download
  },
  {
    title: 'Searchable Archive',
    description: 'Build a searchable repository of all your meeting outcomes and decisions',
    icon: Search
  }
];

const benefits = [
  'Significantly reduces the manual effort and time spent on preparing meeting minutes',
  'Enhances accuracy by generating MoM directly from recorded discussions',
  'Ensures clear accountability by linking action items to specific individuals and timestamps',
  'Streamlines the post-meeting workflow, allowing faster dissemination of information',
  'Provides a centralized, searchable repository for all your meeting outcomes',
  'Improves meeting follow-up and action item tracking',
  'Maintains consistent formatting across all organizational meetings',
  'Reduces human error in capturing important decisions'
];

const faqs = [
  {
    question: 'How accurate is the AI summarization for Minutes of Meeting?',
    answer: 'Our AI-powered summarization is highly accurate, designed to capture the core essence, decisions, and action items from your meeting transcripts.'
  },
  {
    question: 'Can I customize the MoM templates to fit my company\'s format?',
    answer: 'Yes, Flonnect offers customizable templates, allowing you to tailor the MoM structure and content to your specific organizational requirements.'
  },
  {
    question: 'How can I share the generated Minutes of Meeting with attendees?',
    answer: 'You can easily export the MoM in various formats (PDF, Word, text) and share it via email, messaging apps, or by providing a direct link to the Flonnect document.'
  },
  {
    question: 'Do the Minutes of Meeting link back to the original recording?',
    answer: 'Yes, all timestamped notes and summaries in the MoM are directly linked to the corresponding moments in the original meeting recording for easy verification and context.'
  },
  {
    question: 'Can multiple team members collaborate on refining the Minutes of Meeting?',
    answer: 'Yes, Flonnect supports collaborative editing, allowing multiple team members to review and refine the generated Minutes of Meeting before finalization.'
  }
];

export default function MinutesOfMeetingPage() {
  return (
    <FeaturePageTemplate
      title="Minutes of Meeting"
      description="Automate the creation of accurate and comprehensive Minutes of Meeting, saving time and ensuring clarity."
      heroIcon={FileText}
      features={features}
      benefits={benefits}
      faqs={faqs}
      ctaText="Generate Meeting Minutes"
      seoKeywords="meeting minutes, MoM generation, meeting documentation, AI summarization, meeting notes, action items tracking"
      metaDescription="Automated Minutes of Meeting generation with AI-powered summarization, customizable templates, and collaborative editing. Transform recordings into actionable meeting minutes."
    />
  );
}
