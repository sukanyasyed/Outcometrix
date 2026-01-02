import { Target, FileCheck, BarChart3, Brain, CheckCircle2, Sparkles, GitBranch, Database, Cpu, BrainCircuit, Eye, Zap } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import type { Page } from '../App';
import { motion } from 'motion/react';

interface LandingPageProps {
  onNavigate: (page: Page) => void;
}

export function LandingPage({ onNavigate }: LandingPageProps) {
  const features = [
    {
      icon: Target,
      title: 'Outcome-Aligned Generation',
      description: 'Generate questions perfectly aligned with Course Outcomes (CO) and Program Outcomes (PO) for accreditation excellence.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Brain,
      title: 'Bloom\'s Taxonomy Control',
      description: 'Precisely control cognitive levels from Remember to Create, ensuring balanced assessment across all thinking skills.',
      gradient: 'from-violet-500 to-purple-500',
    },
    {
      icon: FileCheck,
      title: 'Explainable Audit Reports',
      description: 'Get transparent AI-powered analysis of existing question papers with actionable improvement suggestions.',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      icon: Eye,
      title: 'WHY Mode Explainability',
      description: 'Understand every AI decision with our transparent WHY View toggle - see the reasoning behind recommendations.',
      gradient: 'from-indigo-500 to-blue-500',
    },
    {
      icon: Zap,
      title: 'Question DNA Analysis',
      description: 'Visual DNA strips show concept intensity, CO mapping, Bloom levels, and cognitive load at a glance.',
      gradient: 'from-amber-500 to-orange-500',
    },
    {
      icon: BarChart3,
      title: 'Topic-Aware Intelligence',
      description: 'Adaptive UI and visualizations that change based on academic subject - from Data Structures to Machine Learning.',
      gradient: 'from-green-500 to-emerald-500',
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
  
  const topicExamples = [
    { icon: GitBranch, name: 'Data Structures', color: '#3B82F6' },
    { icon: Cpu, name: 'Operating Systems', color: '#8B5CF6' },
    { icon: Database, name: 'Database Systems', color: '#10B981' },
    { icon: BrainCircuit, name: 'Machine Learning', color: '#EC4899' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-violet-600 to-pink-600 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30">
                <Sparkles className="w-5 h-5" />
                <span className="text-sm font-medium">AI-Powered • Explainable • Topic-Aware</span>
              </div>
            </div>
            <h1 className="text-center mb-6">
              Outcometrix
            </h1>
            <p className="text-2xl text-center text-white/95 max-w-3xl mx-auto mb-4">
              Next-Generation Question Bank Generator & Auditor
            </p>
            <p className="text-lg text-center text-white/80 max-w-3xl mx-auto mb-10">
              Create outcome-aligned question papers in minutes. Audit existing papers for accreditation compliance. Built for educators who value transparency and intelligence.
            </p>
            
            {/* Topic Examples */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
              <span className="text-sm text-white/70">Supports:</span>
              {topicExamples.map((topic, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <Badge 
                    variant="outline" 
                    className="gap-1.5 bg-white/10 border-white/30 text-white backdrop-blur-sm"
                  >
                    <topic.icon className="w-3.5 h-3.5" />
                    {topic.name}
                  </Badge>
                </motion.div>
              ))}
              <Badge variant="outline" className="gap-1.5 bg-white/10 border-white/30 text-white backdrop-blur-sm">
                +5 more
              </Badge>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-indigo-600 hover:bg-gray-100 shadow-2xl hover:shadow-white/20 transition-all"
                onClick={() => onNavigate('login')}
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Generate Question Bank
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/20 backdrop-blur-sm"
                onClick={() => onNavigate('login')}
              >
                <FileCheck className="w-5 h-5 mr-2" />
                Audit Existing Paper
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-white to-indigo-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge className="mb-4 bg-indigo-100 text-indigo-700 border-indigo-200">
              Intelligence Features
            </Badge>
            <h2 className="mb-4 bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Built for the Future of Education
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Outcometrix combines advanced AI with pedagogical best practices and explainable intelligence to revolutionize assessment creation.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                  <CardHeader>
                    <div 
                      className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg`}
                    >
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                    <CardDescription className="text-sm">{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4 bg-violet-100 text-violet-700 border-violet-200">
                Why Choose Us
              </Badge>
              <h2 className="mb-6 bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                Transform Your Assessment Process
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">{benefit}</p>
                  </motion.div>
                ))}
              </div>
              <Button
                size="lg"
                className="mt-8 bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg hover:shadow-xl transition-all"
                onClick={() => onNavigate('login')}
              >
                Get Started
              </Button>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-indigo-50 to-violet-50 rounded-2xl p-8 shadow-xl border-2 border-indigo-100"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Real-time Analytics</div>
                    <div className="text-sm text-gray-600">Track CO coverage and Bloom distribution</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Outcome Mapping</div>
                    <div className="text-sm text-gray-600">CO-PO mapping for accreditation</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center shadow-lg">
                    <FileCheck className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Audit Reports</div>
                    <div className="text-sm text-gray-600">Identify gaps and improve quality</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 via-violet-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4">Ready to Transform Your Assessment Process?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join educators who are saving time and improving quality with AI-powered, explainable assessment tools.
            </p>
            <Button
              size="lg"
              className="bg-white text-indigo-600 hover:bg-gray-100 shadow-2xl hover:shadow-white/20 transition-all"
              onClick={() => onNavigate('login')}
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Start Your Journey
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}