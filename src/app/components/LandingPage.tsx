import { Target, FileCheck, BarChart3, Brain, CheckCircle2, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import type { Page } from '../App';

interface LandingPageProps {
  onNavigate: (page: Page) => void;
}

export function LandingPage({ onNavigate }: LandingPageProps) {
  const features = [
    {
      icon: Target,
      title: 'Outcome-Aligned Generation',
      description: 'Generate questions perfectly aligned with Course Outcomes (CO) and Program Outcomes (PO) for accreditation excellence.',
    },
    {
      icon: Brain,
      title: 'Bloom\'s Taxonomy Control',
      description: 'Precisely control cognitive levels from Remember to Create, ensuring balanced assessment across all thinking skills.',
    },
    {
      icon: FileCheck,
      title: 'Explainable Audit Reports',
      description: 'Get transparent AI-powered analysis of existing question papers with actionable improvement suggestions.',
    },
  ];

  const benefits = [
    'NBA/NAAC accreditation support',
    'Reduce question paper creation time by 80%',
    'Ensure balanced cognitive load distribution',
    'Track outcome coverage over time',
    'Evidence-based assessment reports',
    'AI transparency and faculty override',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-8 h-8 mr-2" />
          </div>
          <h1 className="text-center mb-6">
            AI-Powered Question Bank Generator & Auditor
          </h1>
          <p className="text-xl text-center text-white/90 max-w-3xl mx-auto mb-10">
            Create outcome-aligned question papers in minutes. Audit existing papers for accreditation compliance. Built for educators who value transparency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
              onClick={() => onNavigate('login')}
            >
              Generate Question Bank
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              onClick={() => onNavigate('login')}
            >
              Audit Existing Paper
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Key Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Outcometrix combines advanced AI with pedagogical best practices to revolutionize assessment creation.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Why Outcometrix?</h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
              <Button
                size="lg"
                className="mt-8"
                onClick={() => onNavigate('login')}
              >
                Get Started
              </Button>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-gray-200">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Real-time Analytics</div>
                    <div className="text-sm text-gray-600">Track CO coverage and Bloom distribution</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Target className="w-8 h-8 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Outcome Mapping</div>
                    <div className="text-sm text-gray-600">CO-PO mapping for accreditation</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center">
                    <FileCheck className="w-8 h-8 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Audit Reports</div>
                    <div className="text-sm text-gray-600">Identify gaps and improve quality</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4">Ready to Transform Your Assessment Process?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join educators who are saving time and improving quality with AI-powered assessment tools.
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100"
            onClick={() => onNavigate('login')}
          >
            Start Free Trial
          </Button>
        </div>
      </section>
    </div>
  );
}
