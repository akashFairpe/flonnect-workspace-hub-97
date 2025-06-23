
import React from 'react';
import { FeaturePageTemplate } from '@/components/FeaturePageTemplate';
import { GitPullRequest, Code, Video, Eye, Users, Zap } from 'lucide-react';

const features = [
  {
    title: 'Direct PR Integration',
    description: 'Embed or link videos directly within your Bitbucket and GitHub Pull Request descriptions or comments',
    icon: GitPullRequest
  },
  {
    title: 'Code Context',
    description: 'Record videos demonstrating code functionality, bug fixes, or new features in action',
    icon: Code
  },
  {
    title: 'Visual Explanations',
    description: 'Provide clear visual explanations of complex code changes or proposed solutions',
    icon: Video
  },
  {
    title: 'Streamlined Review',
    description: 'Allow reviewers to quickly understand the impact of changes without running code locally',
    icon: Eye
  },
  {
    title: 'Enhanced Collaboration',
    description: 'Improve team communication with visual context for code reviews',
    icon: Users
  },
  {
    title: 'Seamless Playback',
    description: 'Videos are hosted on Flonnect with optimized playback for easy viewing',
    icon: Zap
  }
];

const benefits = [
  'Significantly improves the clarity and efficiency of code review processes',
  'Reduces misinterpretations by providing visual context for code changes',
  'Accelerates the merging of Pull Requests by addressing concerns visually',
  'Fosters better collaboration and understanding among development teams',
  'Goes beyond static code to truly showcase the behavior of your software',
  'Enhanced code review efficiency',
  'Clear visual demonstrations of features',
  'Professional development workflows'
];

const faqs = [
  {
    question: 'How do I add a video to a Pull Request using Flonnect?',
    answer: 'After recording your video with Flonnect, you\'ll get a shareable link. Simply paste this link into your Pull Request description or comments in Bitbucket or GitHub. Flonnect will often embed a preview automatically.'
  },
  {
    question: 'Can I record videos of my local development environment for PRs?',
    answer: 'Yes, Flonnect\'s desktop application is perfect for recording screen activity on your local development environment to showcase changes.'
  },
  {
    question: 'Will the video links expire over time?',
    answer: 'Videos hosted on Flonnect generally do not expire as long as your account is active and within storage limits.'
  },
  {
    question: 'Is it possible to use this feature for explaining new feature implementations to reviewers?',
    answer: 'Absolutely! It\'s an excellent way to visually demonstrate how a new feature works, its user flow, and its impact, speeding up the review process.'
  },
  {
    question: 'Can I attach multiple videos to a single Pull Request?',
    answer: 'Yes, you can attach multiple video links to a single Pull Request description or in separate comments to provide comprehensive context for various aspects of your changes.'
  }
];

export default function BitbucketGitHubPRPage() {
  return (
    <FeaturePageTemplate
      title="Add Video in Bitbucket/GitHub Pull Request"
      description="Enhance your code reviews and development discussions by directly adding videos to your Bitbucket and GitHub Pull Requests."
      heroIcon={GitPullRequest}
      features={features}
      benefits={benefits}
      faqs={faqs}
      ctaText="Start PR Video Integration"
      seoKeywords="GitHub pull request, Bitbucket PR, code review, development workflow, video in PR, code demonstration, team collaboration"
      metaDescription="Add videos to GitHub and Bitbucket Pull Requests for enhanced code reviews. Provide visual context and demonstrations for better development collaboration."
    />
  );
}
