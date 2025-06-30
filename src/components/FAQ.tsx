
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqs = [
    {
      question: "How do I install the Flonnect Screen Recorder extension?",
      answer: "Simply click the 'Add to Chrome' button above, and the extension will be installed in your browser. You can then access it from your Chrome toolbar to start recording immediately."
    },
    {
      question: "Can I record my entire screen or just specific applications?",
      answer: "Yes, you can choose to record your entire screen, a specific browser tab, or a particular application window. Our extension gives you full control over what you want to capture."
    },
    {
      question: "Is there a desktop app available for Mac and Windows?",
      answer: "Yes, we offer desktop applications for both Mac and Windows that provide additional features and better performance for intensive recording sessions."
    },
    {
      question: "How does the AI voiceover feature work?",
      answer: "Our AI-powered voiceover allows you to add professional narration to your demo videos. Simply upload a script or speak naturally, and our AI will generate clear, engaging voiceover audio."
    },
    {
      question: "Can I track how viewers engage with my demo videos?",
      answer: "Absolutely! With Google Analytics integration, you can track viewer engagement, identify drop-off points, and optimize your demos for better conversion rates."
    },
    {
      question: "What formats can I export my recordings to?",
      answer: "You can export your recordings as MP4 videos, share them as interactive demos, generate PDFs, or embed them directly on your website. You can also upload directly to YouTube."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, we offer a free trial so you can explore all features before committing. No credit card required to get started."
    },
    {
      question: "Can teams collaborate on demo videos?",
      answer: "Yes, you can create workspaces, invite team members, add video comments, and manage access permissions for secure collaboration."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about Flonnect Screen Recorder
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="border-0 shadow-sm">
              <CardHeader 
                className="cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => toggleItem(index)}
              >
                <CardTitle className="flex items-center justify-between text-left text-lg">
                  {faq.question}
                  {openItems.includes(index) ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </CardTitle>
              </CardHeader>
              {openItems.includes(index) && (
                <CardContent className="pt-0">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
