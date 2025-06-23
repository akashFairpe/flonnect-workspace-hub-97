
import React from 'react';
import { FeaturePageTemplate } from '@/components/FeaturePageTemplate';
import { FileText, Users, Search, Clock, Download, Globe } from 'lucide-react';

const features = [
  {
    title: 'High Accuracy Transcription',
    description: 'Get highly accurate text transcripts of your audio and video recordings',
    icon: FileText
  },
  {
    title: 'Speaker Differentiation',
    description: 'Automatically identifies and labels different speakers in your transcripts',
    icon: Users
  },
  {
    title: 'Searchable Content',
    description: 'Easily search through transcripts to find specific keywords, phrases, or topics',
    icon: Search
  },
  {
    title: 'Timestamped Text',
    description: 'Each line of text is timestamped, linking it directly to the corresponding moment in the recording',
    icon: Clock
  },
  {
    title: 'Multiple Export Formats',
    description: 'Export transcripts in various formats like TXT, SRT, VTT, or JSON',
    icon: Download
  },
  {
    title: 'Multi-Language Support',
    description: 'Support for transcription in multiple languages and dialects',
    icon: Globe
  }
];

const benefits = [
  'Transforms spoken content into accessible, readable, and searchable data',
  'Saves countless hours of manual transcribing for meetings, interviews, and presentations',
  'Improves accessibility for individuals with hearing impairments or those who prefer reading',
  'Facilitates content repurposing, allowing easy extraction of quotes or key information',
  'Enhances SEO for video content by providing textual content that search engines can crawl',
  'Enables quick review of long recordings through text search',
  'Supports compliance and documentation requirements',
  'Creates valuable archives of spoken content'
];

const faqs = [
  {
    question: 'What languages does Flonnect\'s transcription support?',
    answer: 'Flonnect\'s transcription service supports a wide range of languages. Please refer to our documentation or contact support for the full list of supported languages.'
  },
  {
    question: 'How accurate are the transcriptions, especially with multiple speakers or accents?',
    answer: 'Flonnect utilizes advanced AI for high accuracy, including speaker differentiation. While accuracy can vary slightly with strong accents or very noisy environments, it generally provides excellent results.'
  },
  {
    question: 'Can I edit the transcribed text if there are errors?',
    answer: 'Yes, you can easily edit and correct any inaccuracies within the transcribed text directly within the Flonnect platform.'
  },
  {
    question: 'How long does it take to get a transcript after recording?',
    answer: 'Transcription time varies depending on the length of the recording, but Flonnect aims for rapid processing, often delivering transcripts within minutes for shorter recordings.'
  },
  {
    question: 'Is transcription included with all Flonnect plans?',
    answer: 'Transcription is available on specific Flonnect plans. Please check our pricing page or plan details for more information on feature availability.'
  }
];

export default function TranscriptionPage() {
  return (
    <FeaturePageTemplate
      title="Transcription"
      description="Convert spoken words from any recording into accurate, searchable text with Flonnect's powerful transcription service."
      heroIcon={FileText}
      features={features}
      benefits={benefits}
      faqs={faqs}
      ctaText="Start Transcribing"
      seoKeywords="transcription service, audio to text, video transcription, speech to text, meeting transcription, AI transcription"
      metaDescription="Professional transcription service with speaker identification, timestamped text, and multi-language support. Convert audio and video to searchable text."
    />
  );
}
