
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Download, Calculator, BookOpen, DollarSign, FileText, TrendingUp, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const TaxConsultantsAccountants = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const useCases = [
    {
      title: "Recording Tax Filing Tutorials & Step-by-Step Guides",
      description: "Tax consultants can record tax preparation videos, walking clients through the filing process. Helps individuals and businesses understand deductions, credits, and compliance requirements. Can include screen recordings of tax software, form explanations, and submission tips. Useful for first-time filers, self-employed individuals, and small businesses.",
      example: "A tax consultant records a video tutorial on 'How to File Your Taxes Online Using TurboTax', explaining key forms and deductions.",
      icon: Calculator,
      gradient: "from-green-500 to-emerald-600",
      image: "photo-1488590528505-98d2b5aba04b"
    },
    {
      title: "Creating Personalized Tax Planning & Wealth Management Advice",
      description: "Accountants can record customized financial planning videos for clients. Helps in explaining tax-saving strategies, retirement planning, and investment tax implications. Can include estate planning, business tax structures, and financial risk management. Useful for high-net-worth individuals, freelancers, and corporate clients.",
      example: "A CPA records a video guide for a client on 'How to Maximize Tax Savings as a Small Business Owner', breaking down deductions and expenses.",
      icon: DollarSign,
      gradient: "from-blue-500 to-cyan-600",
      image: "photo-1461749280684-dccba630e2f6"
    },
    {
      title: "Hosting & Recording Webinars on Tax Law Updates & Financial Regulations",
      description: "Tax professionals can record webinars covering tax law changes, IRS updates, and financial policies. Helps businesses and individuals stay compliant and informed about new tax codes. Can include Q&A sessions, case studies, and expert guest discussions. Useful for accounting firms, business owners, and tax education platforms.",
      example: "A tax consultant records a webinar on '2024 Tax Law Changes Every Business Owner Needs to Know', explaining new IRS regulations.",
      icon: BookOpen,
      gradient: "from-purple-500 to-violet-600",
      image: "photo-1498050108023-c5249f4df085"
    },
    {
      title: "Recording Financial & Business Accounting Tutorials",
      description: "Accountants can record bookkeeping and financial reporting guides for clients. Helps businesses understand cash flow, profit/loss statements, and accounting best practices. Can include software walkthroughs for QuickBooks, Xero, or Excel financial tracking. Useful for small businesses, entrepreneurs, and non-profits.",
      example: "A bookkeeper records a tutorial on 'How to Reconcile Accounts in QuickBooks', demonstrating best practices for tracking business finances.",
      icon: FileText,
      gradient: "from-orange-500 to-red-600",
      image: "photo-1531297484001-80022131f5a1"
    },
    {
      title: "Creating Online Tax & Accounting Courses for Passive Income",
      description: "Tax professionals can record structured tax and accounting courses for sale or subscription-based learning. Helps in educating individuals and businesses on tax efficiency, accounting, and compliance. Can include interactive case studies, downloadable templates, and step-by-step guides. Useful for building a passive income stream through online platforms like Udemy, Teachable, or private memberships.",
      example: "A tax consultant creates an online course on 'Mastering Tax Deductions for Freelancers', helping self-employed professionals save money legally.",
      icon: TrendingUp,
      gradient: "from-teal-500 to-green-600",
      image: "photo-1487058792275-0ad4aaf24ca7"
    }
  ];

  const faqs = [
    {
      question: "Can I record client consultations for tax planning purposes?",
      answer: "Yes, with proper client consent and confidentiality agreements. Our platform includes secure recording features that ensure compliance with professional accounting standards and client privacy regulations."
    },
    {
      question: "How do I create effective tax tutorial videos for clients?",
      answer: "Use clear screen recordings with step-by-step narration, include practical examples, and break complex concepts into digestible segments. Our tools help you create professional tutorials that clients can easily follow."
    },
    {
      question: "What's the best way to stay updated on tax law changes?",
      answer: "Record regular webinars and update sessions as tax laws change. Our platform helps you create a library of current tax guidance that you can easily update and share with clients throughout the year."
    },
    {
      question: "How can I monetize my tax and accounting expertise?",
      answer: "Create structured online courses, offer subscription-based tax planning content, and provide premium consultation recordings. Our platform supports various monetization models for accounting professionals."
    },
    {
      question: "Can I integrate recordings with accounting software?",
      answer: "Absolutely! Our screen recording features work seamlessly with QuickBooks, Xero, TaxAct, and other popular accounting software to create comprehensive tutorials and client walkthroughs."
    },
    {
      question: "How do I ensure client confidentiality in recorded sessions?",
      answer: "We provide end-to-end encryption, secure storage, and privacy controls that meet professional accounting standards. You can also create anonymized examples for educational content while protecting client information."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Screen Recorder for Tax Consultants & Accountants
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Enhance your accounting practice and client relationships. Create comprehensive tax tutorials, financial planning guides, and educational content that builds trust and grows your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
              <Play className="w-5 h-5 mr-2" />
              Start Recording Tax Content
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Download className="w-5 h-5 mr-2" />
              View Accounting Tools
            </Button>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              5 Essential Tax & Accounting Recording Applications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From tax tutorials to financial planning, discover how accounting professionals are building successful practices and educating clients effectively
            </p>
          </div>

          <div className="space-y-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-0">
                <div className={`h-2 bg-gradient-to-r ${useCase.gradient}`}></div>
                <CardHeader className="pb-4">
                  <div className="flex flex-col lg:flex-row items-start gap-6">
                    <div className="lg:w-1/3">
                      <img 
                        src={`https://images.unsplash.com/${useCase.image}?auto=format&fit=crop&w=400&h=250`}
                        alt={`Tax and accounting professional workspace for ${useCase.title.toLowerCase()}`}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                    <div className="lg:w-2/3">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${useCase.gradient} text-white flex-shrink-0`}>
                          <useCase.icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl md:text-2xl text-gray-900 mb-2">
                            <h3>{index + 1}. {useCase.title}</h3>
                          </CardTitle>
                          <CardDescription className="text-base text-gray-600 leading-relaxed">
                            {useCase.description}
                          </CardDescription>
                        </div>
                      </div>
                      <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-300">
                        <p className="text-sm font-semibold text-green-700 mb-2">Professional Example:</p>
                        <p className="text-green-600 italic">
                          {useCase.example}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything tax consultants and accountants need to know about professional recording and client education
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader 
                  className="cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-gray-900 text-left">
                      <h3>{faq.question}</h3>
                    </CardTitle>
                    {openFaq === index ? (
                      <Minus className="w-5 h-5 text-gray-500" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-500" />
                    )}
                  </div>
                </CardHeader>
                {openFaq === index && (
                  <CardContent className="pt-0">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Elevate Your Accounting Practice
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join accounting professionals who are building successful practices through client education, tax planning expertise, and professional recording solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Play className="w-5 h-5 mr-2" />
              Start Your Success Story
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-primary">
              View Accounting Success Stories
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxConsultantsAccountants;
