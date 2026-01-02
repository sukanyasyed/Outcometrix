import { GraduationCap, Shield, Mail, Github, Sparkles } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-indigo-900 to-gray-900 text-gray-300 py-12 mt-auto border-t border-indigo-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 via-violet-500 to-pink-500 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="font-semibold text-white text-lg">Outcometrix</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              AI-powered question bank generator and auditor built for educators who value transparency, intelligence, and accreditation excellence.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Platform
            </h3>
            <div className="space-y-2">
              <a href="#about" className="block text-sm hover:text-indigo-400 transition-colors">
                About Outcometrix
              </a>
              <a href="#features" className="block text-sm hover:text-indigo-400 transition-colors">
                Features
              </a>
              <a href="#ethics" className="block text-sm hover:text-indigo-400 transition-colors">
                AI Ethics & Transparency
              </a>
              <a href="#topics" className="block text-sm hover:text-indigo-400 transition-colors">
                Supported Topics
              </a>
            </div>
          </div>
          
          {/* Contact & Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Support
            </h3>
            <div className="space-y-2">
              <a href="#contact" className="flex items-center gap-2 text-sm hover:text-indigo-400 transition-colors">
                <Mail className="w-3.5 h-3.5" />
                Contact Us
              </a>
              <a href="#github" className="flex items-center gap-2 text-sm hover:text-indigo-400 transition-colors">
                <Github className="w-3.5 h-3.5" />
                View on GitHub
              </a>
              <a href="#privacy" className="block text-sm hover:text-indigo-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="block text-sm hover:text-indigo-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-400">
            <p className="flex items-center gap-2">
              <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
              Demo Version • Hackathon-Ready Prototype • Not for Production Use
            </p>
          </div>
          <div className="text-sm text-gray-400">
            © 2025 Outcometrix. Built for Educational Excellence.
          </div>
        </div>
      </div>
    </footer>
  );
}