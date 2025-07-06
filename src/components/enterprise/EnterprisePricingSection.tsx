
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  CheckCircle,
  Crown,
  Building,
  Star,
  ArrowRight,
  Calendar,
  MessageSquare
} from 'lucide-react';

const EnterprisePricingSection = () => {
  const plans = [
    {
      name: "Enterprise Starter",
      price: "$15",
      period: "per user/month",
      description: "Perfect for growing teams getting started with enterprise features",
      minUsers: "5-25 users",
      popular: false,
      features: [
        "All core recording features",
        "Basic AI features (transcription, summaries)",
        "Team collaboration tools",
        "Custom branding",
        "Email support",
        "Standard integrations",
        "Basic analytics",
        "SSO (SAML)"
      ]
    },
    {
      name: "Enterprise Pro",
      price: "$25",
      period: "per user/month", 
      description: "Advanced features for established teams requiring comprehensive solutions",
      minUsers: "10-100 users",
      popular: true,
      features: [
        "Everything in Enterprise Starter",
        "Advanced AI features (text-to-video, text-to-image)",
        "Custom domain hosting",
        "Advanced analytics & reporting",
        "Priority support",
        "API access & webhooks",
        "Advanced security features",
        "Custom integrations",
        "Dedicated account manager"
      ]
    },
    {
      name: "Enterprise Scale",
      price: "Custom",
      period: "pricing",
      description: "Tailored solutions for large organizations with specific requirements",
      minUsers: "100+ users",
      popular: false,
      features: [
        "Everything in Enterprise Pro",
        "Unlimited AI usage",
        "On-premise deployment options",
        "Custom security configurations",
        "24/7 dedicated support",
        "Professional services",
        "Custom SLAs",
        "Advanced compliance features",
        "White-glove onboarding"
      ]
    }
  ];

  const addOns = [
    {
      name: "Advanced AI Package",
      price: "$5/user/month",
      description: "Unlock unlimited AI features including text-to-video, text-to-image, and advanced processing"
    },
    {
      name: "Premium Storage",
      price: "$2/user/month", 
      description: "Additional cloud storage beyond standard allocation (50GB per user)"
    },
    {
      name: "Professional Services",
      price: "Custom",
      description: "Dedicated implementation, training, and ongoing support services"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-green-100 text-green-700 border-green-200">
            <Building className="w-4 h-4 mr-2" />
            Enterprise Pricing
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Flexible Plans That Scale With Your Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your organization. All plans include core features with flexible add-ons for specific needs.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card key={index} className={`border-0 shadow-xl hover:shadow-2xl transition-all duration-300 relative ${plan.popular ? 'bg-gradient-to-br from-indigo-50 to-purple-50 scale-105' : 'bg-white'}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-6">
                <div className={`w-16 h-16 ${plan.popular ? 'bg-gradient-to-r from-indigo-600 to-purple-600' : 'bg-gradient-to-r from-gray-600 to-slate-700'} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl`}>
                  {plan.popular ? <Crown className="w-8 h-8 text-white" /> : <Building className="w-8 h-8 text-white" />}
                </div>
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-gray-600 ml-1">/{plan.period}</span>}
                </div>
                <div className="text-sm font-medium text-indigo-600 mb-4">{plan.minUsers}</div>
                <CardDescription className="text-base leading-relaxed">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="space-y-3">
                  <Button 
                    size="lg" 
                    className={`w-full ${plan.popular ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700' : 'bg-gray-900 hover:bg-gray-800'} text-white shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    {plan.price === "Custom" ? "Contact Sales" : "Start Free Trial"}
                  </Button>
                  <Button variant="outline" size="lg" className="w-full">
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Talk to Sales
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Add-ons */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Optional Add-ons
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-md border border-gray-100">
                <div className="font-semibold text-gray-900 mb-2">{addon.name}</div>
                <div className="text-2xl font-bold text-indigo-600 mb-3">{addon.price}</div>
                <div className="text-gray-600 text-sm leading-relaxed">{addon.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Enterprise Features */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            All Enterprise Plans Include
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              "99.9% Uptime SLA",
              "Enterprise Security",
              "24/7 Support Available", 
              "Custom Onboarding"
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-2 bg-white/80 p-4 rounded-lg shadow-md">
                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterprisePricingSection;
