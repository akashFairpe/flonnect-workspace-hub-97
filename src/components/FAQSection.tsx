
import { useState } from 'react';
import FAQItem from './FAQItem';

const FAQSection = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "How easy is it to start recording with your software?",
      answer: "Our screen recorder is designed for educators with no technical background. Simply click 'Start Recording' and begin teaching. The interface is intuitive and requires no setup or training."
    },
    {
      question: "Can I record both my screen and webcam simultaneously?",
      answer: "Yes! You can record your screen, webcam, and audio all at the same time. This is perfect for creating engaging lessons where students can see both your presentation and your face."
    },
    {
      question: "What video formats are supported for export?",
      answer: "We support all major video formats including MP4, AVI, MOV, and WebM. You can also export directly to popular platforms like YouTube, Google Drive, and learning management systems."
    },
    {
      question: "Is there a limit on recording length?",
      answer: "No, there are no time limits on your recordings. Record entire class sessions, long tutorials, or multi-part lesson series without any restrictions."
    },
    {
      question: "Can I edit my recordings after capturing them?",
      answer: "Absolutely! Our built-in editor allows you to trim videos, add annotations, insert captions, and enhance audio quality. You can also add intro/outro segments and branding elements."
    },
    {
      question: "How do I share recordings with my students?",
      answer: "Share recordings instantly via direct links, embed codes, or upload directly to your preferred platform like Google Classroom, Canvas, or Blackboard. Students can access recordings on any device."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-gray-600">
          Everything you need to know about our screen recording software for teachers
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openFaq === index}
            onToggle={() => toggleFaq(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
