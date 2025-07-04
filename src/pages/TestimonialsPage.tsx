
import React from 'react';
import { Header } from '@/components/Header';
import { TestimonialsHero } from '@/components/testimonials/TestimonialsHero';
import { TestimonialsTestimonials } from '@/components/testimonials/TestimonialsTestimonials';
import { TestimonialsFeatures } from '@/components/testimonials/TestimonialsFeatures';
import { TestimonialsWorkspace } from '@/components/testimonials/TestimonialsWorkspace';
import { TestimonialsSharing } from '@/components/testimonials/TestimonialsSharing';
import { TestimonialsCTA } from '@/components/testimonials/TestimonialsCTA';

export default function TestimonialsPage() {
  React.useEffect(() => {
    document.title = 'Customer Testimonials - Flonnect | Record & Share Authentic Customer Stories';
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Easily record and share customer testimonials that build trust using Flonnect\'s webcam and screen recording features. Capture authentic customer stories with professional quality.');
    } else {
      const newMetaDesc = document.createElement('meta');
      newMetaDesc.name = 'description';
      newMetaDesc.content = 'Easily record and share customer testimonials that build trust using Flonnect\'s webcam and screen recording features. Capture authentic customer stories with professional quality.';
      document.head.appendChild(newMetaDesc);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'customer testimonials, video testimonials, testimonial recording, customer stories, webcam recording, screen recording, video marketing, customer feedback, testimonial videos');
    } else {
      const newMetaKeywords = document.createElement('meta');
      newMetaKeywords.name = 'keywords';
      newMetaKeywords.content = 'customer testimonials, video testimonials, testimonial recording, customer stories, webcam recording, screen recording, video marketing, customer feedback, testimonial videos';
      document.head.appendChild(newMetaKeywords);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <TestimonialsHero />
        <TestimonialsTestimonials />
        <TestimonialsFeatures />
        <TestimonialsWorkspace />
        <TestimonialsSharing />
        <TestimonialsCTA />
      </main>
    </div>
  );
}
