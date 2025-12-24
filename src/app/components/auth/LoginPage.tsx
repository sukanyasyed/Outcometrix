import { useState } from 'react';
import { ArrowLeft, GraduationCap, User, UserCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import type { UserRole } from '../../App';

interface LoginPageProps {
  onLogin: (role: UserRole) => void;
  onBack: () => void;
}

export function LoginPage({ onLogin, onBack }: LoginPageProps) {
  const [selectedRole, setSelectedRole] = useState<UserRole>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedRole) {
      onLogin(selectedRole);
    }
  };

  if (!selectedRole) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
        <div className="w-full max-w-4xl">
          <Button
            variant="ghost"
            onClick={onBack}
            className="mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>

          <div className="text-center mb-12">
            <h1 className="mb-4">Select Your Role</h1>
            <p className="text-gray-600">Choose how you want to access Outcometrix</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card
              className="cursor-pointer hover:shadow-lg transition-shadow border-2 hover:border-blue-500"
              onClick={() => setSelectedRole('teacher')}
            >
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-10 h-10 text-white" />
                </div>
                <CardTitle>Teacher / Admin</CardTitle>
                <CardDescription>
                  Create question banks, audit papers, manage outcomes, and generate reports
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Generate AI-powered questions</li>
                  <li>• Audit existing papers</li>
                  <li>• Manage CO/PO mappings</li>
                  <li>• Access detailed analytics</li>
                  <li>• Export accreditation reports</li>
                </ul>
              </CardContent>
            </Card>

            <Card
              className="cursor-pointer hover:shadow-lg transition-shadow border-2 hover:border-purple-500"
              onClick={() => setSelectedRole('student')}
            >
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UserCircle className="w-10 h-10 text-white" />
                </div>
                <CardTitle>Student</CardTitle>
                <CardDescription>
                  View skill distribution and practice with sample questions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• View skill progress</li>
                  <li>• Practice sample questions</li>
                  <li>• Understand learning levels</li>
                  <li>• Get personalized feedback</li>
                  <li>• Track improvements</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <Button
            variant="ghost"
            onClick={() => setSelectedRole(null)}
            className="mb-4 w-fit"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Change Role
          </Button>
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
              {selectedRole === 'teacher' ? (
                <GraduationCap className="w-8 h-8 text-white" />
              ) : (
                <User className="w-8 h-8 text-white" />
              )}
            </div>
          </div>
          <CardTitle className="text-center">
            {selectedRole === 'teacher' ? 'Teacher Login' : 'Student Login'}
          </CardTitle>
          <CardDescription className="text-center">
            Enter your credentials to continue
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder={selectedRole === 'teacher' ? 'teacher@university.edu' : 'student@university.edu'}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
