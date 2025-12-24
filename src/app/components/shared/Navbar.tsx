import { GraduationCap, LogOut, User } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import type { UserRole, Page } from '../../App';

interface NavbarProps {
  userRole: UserRole;
  onLogout: () => void;
  onNavigate: (page: Page) => void;
  currentPage: Page;
}

export function Navbar({ userRole, onLogout, onNavigate, currentPage }: NavbarProps) {
  const menuItems: { label: string; page: Page; teacherOnly?: boolean }[] = [
    { label: 'Dashboard', page: 'dashboard' },
    { label: 'Generate Questions', page: 'generator', teacherOnly: true },
    { label: 'Audit Paper', page: 'auditor', teacherOnly: true },
    { label: 'Outcomes', page: 'outcomes', teacherOnly: true },
    { label: 'Reports', page: 'reports', teacherOnly: true },
  ];

  const visibleItems = menuItems.filter(
    item => !item.teacherOnly || userRole === 'teacher'
  );

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-8">
            <button
              onClick={() => onNavigate('dashboard')}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="font-semibold text-gray-900">Outcometrix</span>
            </button>

            <div className="hidden md:flex items-center gap-1">
              {visibleItems.map((item) => (
                <Button
                  key={item.page}
                  variant={currentPage === item.page ? 'default' : 'ghost'}
                  onClick={() => onNavigate(item.page)}
                  className="text-sm"
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Badge variant="outline" className="gap-1.5">
              <User className="w-3 h-3" />
              {userRole === 'teacher' ? 'Teacher' : 'Student'}
            </Badge>
            <Button
              variant="outline"
              size="sm"
              onClick={onLogout}
              className="gap-2"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
