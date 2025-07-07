
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I get customers to record testimonials?",
    answer: "Start by reaching out to your happiest customers who have achieved clear results. Offer incentives like discounts or exclusive access. Make the process as easy as possible by providing a simple recording link and clear instructions on what to discuss."
  },
  {
    question: "What should customers include in their testimonials?",
    answer: "Guide customers to share their specific problem, why they chose your solution, the results they achieved, and how it made them feel. Concrete numbers and before/after comparisons make testimonials more compelling and credible."
  },
  {
    question: "How long should video testimonials be?",
    answer: "Keep testimonials between 30 seconds to 2 minutes. Shorter testimonials (30-60 seconds) work great for social media and ads, while longer ones (1-2 minutes) are perfect for landing pages and detailed case studies."
  },
  {
    question: "Can I edit the testimonial videos?",
    answer: "Yes! Flonnect includes editing tools to trim videos, add captions, incorporate your branding, and enhance audio quality. You can create polished testimonials while maintaining authenticity."
  },
  {
    question: "Where should I use video testimonials?",
    answer: "Use testimonials on your homepage, product pages, checkout process, email campaigns, social media, and sales presentations. They're particularly effective on landing pages where you want to build trust quickly."
  },
  {
    question: "How do I ensure video quality is professional?",
    answer: "Flonnect automatically optimizes video quality. Advise customers to record in good lighting, use a quiet space, and look directly at the camera. Our platform handles technical aspects like stabilization and audio enhancement."
  },
  {
    question: "Can I use testimonials for advertising?",
    answer: "Yes, but always get written permission first. Include a consent form when requesting testimonials. Video testimonials are highly effective in social media ads, Google ads, and remarketing campaigns."
  },
  {
    question: "How often should I collect new testimonials?",
    answer: "Aim to collect testimonials regularly - monthly or quarterly. Fresh testimonials keep your content current and show ongoing customer satisfaction. Different testimonials also address various customer concerns and use cases."
  }
];

export function TestimonialsFAQ() {
  return (
    <section className="mb-16 sm:mb-20">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Everything you need to know about creating powerful video testimonials
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
