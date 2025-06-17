
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { useCaseCategories } from '@/components/UseCaseNavigation';

const UseCaseCategory = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();

  const category = useCaseCategories.find(cat => cat.id === categoryId);

  if (!category) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Category Not Found</h1>
          <Button onClick={() => navigate('/')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  const CategoryIcon = category.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6 py-16">
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          
          <div className="flex items-center gap-4 mb-4">
            <div className={`p-4 rounded-xl bg-gradient-to-r ${category.color} text-white`}>
              <CategoryIcon className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                {category.title}
              </h1>
              <p className="text-xl text-gray-600">
                {category.description}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.useCases.map((useCase, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-all duration-200 group cursor-pointer"
              onClick={() => navigate(useCase.path)}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {useCase.title}
                    </CardTitle>
                    <CardDescription className="mt-2">
                      Specialized screen recording solution for {useCase.title.toLowerCase()}
                    </CardDescription>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors flex-shrink-0 ml-2" />
                </div>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Choose the perfect screen recording solution for your {category.title.toLowerCase()} needs
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
            Start Recording Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UseCaseCategory;
